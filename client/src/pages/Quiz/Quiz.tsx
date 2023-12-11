import { ChevronLeft, ChevronRight, Timer } from "lucide-react";
import { useState } from "react";
import type { QuizQuestion } from "../../../types/Quiz/Question";
import type { QuizMetaData } from "../../../types/Quiz/Quiz";
import { MathsTopic } from "../../../types/Subject/Math";
import { Subject } from "../../../types/Subject/Subject";
import Page from "../../components/page/Page";
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
import { millisToMinutesAndSeconds } from "./useCountdown";

const quizMetaDataStyles = "flex flex-col gap-1 md:flex-row text-center";

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [questionsList] = useQuizState((state) => [state.questionsList]);

  const mockQuizMetaData: QuizMetaData = {
    subject: Subject["Maths"],
    topic: MathsTopic["Algebra"],
    numberOfQuestions: questionsList.length,
  };

  const changeQuestion = (newQuestionIndex: string) => {
    setCurrentQuestionIndex(Number(newQuestionIndex));
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0)
      setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questionsList.length - 1)
      setCurrentQuestionIndex(currentQuestionIndex + 1);
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
            {1} of {mockQuizMetaData.numberOfQuestions}
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
          <SelectContent>
            {questionsList.map((question, index) => (
              <SelectItem value={index.toString()} key={index}>
                Question {index + 1}
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

  const Question = ({ currentQuestion }: { currentQuestion: QuizQuestion }) => {
    return (
      <Card className="w-full p-4 text-justify  md:min-h-[450px]">
        <div>{currentQuestion.content}</div>
      </Card>
    );
  };

  const AnswerOptions = ({ options }: { options: string[] }) => {
    return (
      <div className="flex flex-col justify-between w-full gap-3">
        {options.map((option, index) => {
          return (
            <Card
              className="flex content-center h-full gap-4 p-3"
              key={`Option ${index}`}
            >
              <p className="my-auto">{String.fromCharCode(65 + index)}</p>
              <p className="my-auto">{option}</p>
            </Card>
          );
        })}
      </div>
    );
  };

  const currentQuestion = questionsList[currentQuestionIndex];
  const currentOptions = currentQuestion?.options;

  return (
    <Page pageTitle="Quiz">
      {currentQuestion && currentOptions && (
        <div className="flex flex-col gap-4">
          <QuizHeader />
          <div className="flex flex-col gap-3 md:flex-row">
            <Question currentQuestion={currentQuestion} />
            <AnswerOptions options={currentOptions} />
          </div>

          <div className="flex justify-between w-full gap-3 md:justify-center">
            <Button variant="outline" size="icon" onClick={prevQuestion}>
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <SubmitQuizButton
              disabled={currentQuestionIndex !== questionsList.length - 1}
            />

            <Button variant="outline" size="icon" onClick={nextQuestion}>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </Page>
  );
}

export default Quiz;
