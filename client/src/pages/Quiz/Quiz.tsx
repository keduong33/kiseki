import htmlParser from "html-react-parser";
import { ChevronLeft, ChevronRight, Timer } from "lucide-react";
import type { FullInfoQuestion } from "../../../types/Quiz/Question";
import type { QuizMetaData } from "../../../types/Quiz/Quiz";
import { MathsTopic } from "../../../types/Subject/Math";
import { Subject } from "../../../types/Subject/Subject";
import { Button } from "../../components/shadcn/ui/button";
import { Card } from "../../components/shadcn/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/shadcn/ui/select";
import { useQuizState } from "../../states/Quiz.state";
import { SubmitQuizButton } from "./SubmitQuizButton";
import { convertNumberToChar } from "./commonQuizFunctions";
import { millisToMinutesAndSeconds } from "./useCountdown";

const quizMetaDataStyles = "flex flex-col gap-1 md:flex-row text-center";
export const convertArrayIndexToQuestionIndex = (index: number) => index + 1;

function Quiz() {
  const [
    questions,
    userAnswers,
    setUserAnswers,
    currentQuestionIndex,
    setCurrentQuestionIndex,
  ] = useQuizState((state) => [
    state.questions,
    state.userAnswers,
    state.setUserAnswers,
    state.currentQuestionIndex,
    state.setCurrentQuestionIndex,
  ]);

  const mockQuizMetaData: QuizMetaData = {
    subject: Subject["Maths"],
    topic: MathsTopic["Algebra"],
    numberOfQuestions: questions.length,
  };

  const changeQuestion = (newQuestionIndex: string) => {
    setCurrentQuestionIndex(Number(newQuestionIndex));
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0)
      setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1)
      setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const saveAnswer = (studentAnswer: string | null) => {
    /*TODO: Add these features (multiple answers & shuffled questions):
      - save shuffled questions
      - save question with multiple answers
    */
    const updatedUserAnswers = userAnswers.slice();
    updatedUserAnswers[currentQuestionIndex] = studentAnswer;
    setUserAnswers(updatedUserAnswers);
  };

  const QuizHeader = () => (
    <div className="flex flex-col justify-between gap-6 md:flex-row">
      <div className="flex items-center justify-between w-full">
        <div className={quizMetaDataStyles}>
          <span>Subject</span>
          <span>{mockQuizMetaData.subject}</span>
        </div>
        <div className={quizMetaDataStyles}>
          <span>Topic</span>
          <span>{mockQuizMetaData.topic}</span>
        </div>
        <div className={quizMetaDataStyles}>
          <span>Questions</span>
          <span>
            {convertArrayIndexToQuestionIndex(currentQuestionIndex)} of{" "}
            {mockQuizMetaData.numberOfQuestions}
          </span>
        </div>
        <div className="hidden md:flex">
          <Timer /> {millisToMinutesAndSeconds(0)}
        </div>
      </div>
      <div className="flex w-full gap-1">
        <Select
          onValueChange={changeQuestion}
          value={currentQuestionIndex.toString()}
        >
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="overflow-y-auto h-[200px]">
            {questions.map((question, index) => (
              <SelectItem value={index.toString()} key={index}>
                Question {convertArrayIndexToQuestionIndex(index)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="flex my-auto md:hidden">
          <Timer /> {millisToMinutesAndSeconds(0)}
        </div>
      </div>
    </div>
  );

  const Question = ({
    currentQuestion,
  }: {
    currentQuestion: FullInfoQuestion;
  }) => {
    return (
      <Card className="w-full p-4 text-justify md:min-h-[450px]">
        <div>{htmlParser(currentQuestion.content)}</div>
      </Card>
    );
  };

  const AnswerOptions = ({
    options,
    optionImageUrls,
  }: {
    options: (string | null)[];
    optionImageUrls: (string | null)[];
  }) => {
    return (
      <div className="flex flex-col justify-between w-full gap-3">
        {options.map((option, index) => {
          const imageUrl = optionImageUrls[index];

          const isPicked =
            (userAnswers[currentQuestionIndex] == option && option !== null) ||
            (userAnswers[currentQuestionIndex] == optionImageUrls[index] &&
              imageUrl !== null);

          return (
            <Card
              className={`flex content-center h-full gap-4 p-3 ${
                isPicked && "bg-gray-600"
              } ${!!imageUrl && "flex-col items-center"}`}
              key={`Option ${index}`}
              onClick={() => saveAnswer(option ?? imageUrl)}
            >
              <p className="my-auto">{convertNumberToChar(index)}</p>
              <div className="my-auto">{htmlParser(option ?? "")}</div>
              <img
                src={imageUrl ?? ""}
                className={`${
                  !!imageUrl && "my-auto mx-auto w-[300px] h-[400px]"
                }`}
              />
            </Card>
          );
        })}
      </div>
    );
  };

  const currentQuestion = questions[currentQuestionIndex];
  const hasImage = !currentQuestion?.optionImageUrls.includes(null);

  return (
    <>
      {currentQuestion && (
        <div className="flex flex-col gap-4">
          <QuizHeader />
          <div className={`flex flex-row gap-3 ${hasImage && "flex-col"}`}>
            <Question currentQuestion={currentQuestion} />
            <AnswerOptions
              options={currentQuestion.options}
              optionImageUrls={currentQuestion.optionImageUrls}
            />
          </div>

          <div className="flex justify-between w-full gap-3 md:justify-center">
            <Button variant="outline" size="icon" onClick={prevQuestion}>
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <SubmitQuizButton
              disabled={currentQuestionIndex !== questions.length - 1}
            />

            <Button variant="outline" size="icon" onClick={nextQuestion}>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export default Quiz;
