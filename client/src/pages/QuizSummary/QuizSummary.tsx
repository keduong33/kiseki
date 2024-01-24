import { SignInButton, useUser } from "@clerk/clerk-react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";
import HTMLReactParser from "html-react-parser";
import { TickCircle } from "iconsax-react";
import { AwardIcon, HourglassIcon, XCircle } from "lucide-react";
import { useLocation } from "react-router-dom";
import type { MarkedQuiz } from "../../../../types/Quiz/Quiz";
import { backendEndpoint } from "../../../../types/endpoints";
import KisekiButton from "../../components/kiseki/button";
import { IconSize } from "../../components/layout/NavigationBar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/shadcn/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/shadcn/ui/table";
import { useQuizState } from "../../states/Quiz.state";
import {
  convertArrayIndexToQuestionIndex,
  convertCharToNumber,
} from "../Quiz/commonQuizFunctions";
import analyseQuiz from "./analyseQuiz/analyseQuiz";

dayjs.extend(updateLocale);
dayjs.extend(relativeTime);

dayjs.updateLocale("en", {
  relativeTime: {
    future: "%s",
    past: "%s",
    s: "%d seconds",
    m: "1 minute",
    mm: "%d minutes",
    h: "1 hour",
    hh: "%d hours",
    d: "a day",
    dd: "%d days",
    M: "a month",
    MM: "%d months",
    y: "a year",
    yy: "%d years",
  },
});

function QuizSummary() {
  const { state } = useLocation();

  const { isSignedIn, isLoaded } = useUser();

  const [quizMetaData, userAnswers] = useQuizState((state) => [
    state.quizMetaData,
    state.userAnswers,
  ]);

  const saveResult = useMutation({
    mutationFn: async (result: MarkedQuiz) =>
      await axios.post(`${backendEndpoint.saveStudentResult}`, result),
    onSuccess(data) {
      console.log(data.data);
    },
  });

  if (!state) {
    return <>We could not find your recent quiz</>;
  }

  const { result } = state;
  const markedQuiz = result as MarkedQuiz;
  const timeTaken = dayjs(markedQuiz.endTimeStamp).from(
    dayjs(markedQuiz.startTimeStamp)
  );

  const [analysedResult, analysisError] = analyseQuiz(markedQuiz);

  if (analysisError) {
    console.error("Failed to analyse result:", analysisError.message);
    return <>We could analyse your recent quiz</>;
  }

  if (saveResult.isError) {
    const error = saveResult.error;
    return <>{error.message}</>;
  }

  return (
    <>
      <h1>Summary</h1>

      <div className="flex gap-3">
        <p>Subject:</p>
        <p>{quizMetaData?.subject}</p>
      </div>

      <div className="flex flex-col items-center gap-3">
        <div className="flex flex-row gap-4 pt-2">
          <Card className="w-[300px] text-center">
            <CardHeader>
              <CardTitle>Results</CardTitle>
            </CardHeader>
            <CardContent>
              <AwardIcon className="m-auto" />
              <p className="pt-2">
                {analysedResult.totalNumberOfCorrectAnswers}/
                {analysedResult.totalNumberOfQuestions}
              </p>
            </CardContent>
          </Card>

          <Card className="w-[300px] text-center">
            <CardHeader>
              <CardTitle>Time Taken</CardTitle>
            </CardHeader>
            <CardContent>
              <HourglassIcon className="m-auto" />
              <p className="pt-2">{timeTaken}</p>
            </CardContent>
          </Card>
        </div>
        {isSignedIn && (
          <KisekiButton
            onClick={() => {
              saveResult.mutate(markedQuiz);
            }}
            disabled={JSON.stringify(analysedResult) === "{}"}
            className="w-[200px]"
            isLoading={saveResult.isPending}
          >
            Save results
          </KisekiButton>
        )}
        {!isSignedIn && (
          <SignInButton redirectUrl={window.location.pathname}>
            <KisekiButton className="w-[200px]">
              Sign in to save results
            </KisekiButton>
          </SignInButton>
        )}
        {!isLoaded && (
          <KisekiButton isLoading={true} className="w-[200px]"></KisekiButton>
        )}
      </div>

      <div className="flex flex-col pt-10">
        <h2>Review</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[80px]">No</TableHead>
              <TableHead className="w-[200px]">Question</TableHead>
              <TableHead className="w-[150px]">Your Answer</TableHead>
              <TableHead className="w-[150px]">Correct Answer</TableHead>
              <TableHead className="w-[300px]">Feedback</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {markedQuiz.questions.map((markedQuestion, index) => {
              const correctAnswerIndexes = markedQuestion.correctOptions.map(
                (answer) => convertCharToNumber(answer)
              );

              {
                /* TODO: Support multiple answers in the future */
              }
              const answer = userAnswers[index];
              return (
                <TableRow key={`Question ${index}`}>
                  <TableCell className="flex justify-between gap-2">
                    <p>{convertArrayIndexToQuestionIndex(index)}</p>

                    {markedQuestion.markedCorrect ? (
                      <TickCircle
                        size={IconSize.medium}
                        color="#6DD25D
"
                      />
                    ) : (
                      <XCircle size={IconSize.medium} color="red" />
                    )}
                  </TableCell>
                  <TableCell>
                    {HTMLReactParser(markedQuestion.question)}
                  </TableCell>
                  <TableCell>
                    {answer?.includes("img") ? (
                      <span key={"Correct Answer " + index}>
                        {HTMLReactParser(answer)}
                      </span>
                    ) : answer?.includes("http") ? (
                      <img
                        key={"Answer " + index}
                        src={answer}
                        className={`${!!answer && "my-auto mx-auto w-[200px]"}`}
                      />
                    ) : answer ? (
                      <span key={"Correct Answer " + index}>
                        {HTMLReactParser(answer)}
                      </span>
                    ) : (
                      <>N/A</>
                    )}
                  </TableCell>
                  <TableCell>
                    {correctAnswerIndexes?.map((index) => {
                      const textCorrectAnswer = markedQuestion.options[index];
                      const imageCorrectAnswer =
                        markedQuestion.optionImageUrls[index];
                      if (textCorrectAnswer)
                        return (
                          <span key={"Correct Answer " + index}>
                            {HTMLReactParser(textCorrectAnswer)}
                          </span>
                        );
                      else if (imageCorrectAnswer)
                        return (
                          <img
                            src={imageCorrectAnswer}
                            key={"Correct Answer " + index}
                            className={`${
                              !!imageCorrectAnswer &&
                              "my-auto mx-auto w-[200px]"
                            }`}
                          />
                        );
                      else return;
                    })}
                  </TableCell>
                  <TableCell className="overflow-x-auto max-w-[400px]">
                    {HTMLReactParser(markedQuestion.feedback ?? "")}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </>
  );
}

export default QuizSummary;
