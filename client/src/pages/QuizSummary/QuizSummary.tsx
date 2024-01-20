import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import HTMLReactParser from "html-react-parser";
import { AwardIcon, HourglassIcon } from "lucide-react";
import { useLocation } from "react-router-dom";
import type { MarkedQuiz } from "../../../../types/Quiz/Quiz";
import type { AnalysedResult } from "../../../../types/Quiz/Result";
import { backendEndpoint } from "../../../../types/endpoints";
import KisekiButton from "../../components/kiseki/button";
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

function QuizSummary() {
  const { state } = useLocation();

  const [quizMetaData, userAnswers] = useQuizState((state) => [
    state.quizMetaData,
    state.userAnswers,
  ]);

  const saveResult = useMutation({
    mutationFn: async (result: AnalysedResult) =>
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

        <KisekiButton
          onClick={() => {
            saveResult.mutate(analysedResult);
          }}
          disabled={JSON.stringify(analysedResult) === "{}"}
        >
          Save your results
        </KisekiButton>
      </div>

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
            <p className="pt-2">Incoming</p>
          </CardContent>
        </Card>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>No</TableHead>
            <TableHead>Question</TableHead>
            <TableHead>Your Answer</TableHead>
            <TableHead>Correct Answer</TableHead>
            <TableHead>Feedback</TableHead>
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
              <TableRow
                key={`Question ${index}`}
                className={`${markedQuestion.markedCorrect && `bg-green-950`}`}
              >
                <TableCell className="font-medium align-top">
                  {convertArrayIndexToQuestionIndex(index)}
                </TableCell>
                <TableCell className="2xl:max-w-[600px] max-w-[400px] px-2">
                  {HTMLReactParser(markedQuestion.question)}
                </TableCell>
                <TableCell className="w-[300px]">
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
                <TableCell className="w-[300px]">
                  {correctAnswerIndexes.map((index) => {
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
                            !!imageCorrectAnswer && "my-auto mx-auto w-[200px]"
                          }`}
                        />
                      );
                    else return;
                  })}
                </TableCell>
                <TableCell>
                  {HTMLReactParser(markedQuestion.feedback ?? "")}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}

export default QuizSummary;
