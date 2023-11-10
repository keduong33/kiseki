import { Timer } from "lucide-react";
import { MathsTopic } from "../../../types/Subject/Math";
import { Subject } from "../../../types/Subject/Subject";
import type { TestQuestion } from "../../../types/Test/Question";
import type { TestMetaData } from "../../../types/Test/Test";
import Page from "../../components/page/Page";
import { Card } from "../../components/shadcn/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/shadcn/ui/select";
import { millisToMinutesAndSeconds } from "./useCountdown";

const mockQuestion: TestQuestion = {
  question:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  options: [
    "Yay",
    "Nay",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    "Nay Yay",
  ],
  timer: 0,
  questionImage: undefined,
};

const mockTestMetaData: TestMetaData = {
  subject: Subject["Maths"],
  topic: MathsTopic["Algebra"],
  numberOfQuestions: 15,
};

const testMetaDataStyles = "flex flex-col gap-1 sm:flex-row text-center";

const mockArrayOfQuestions: TestQuestion[] = [mockQuestion, mockQuestion];

function Test() {
  const TestHeader = () => (
    <div className="flex flex-col justify-between gap-6 sm:flex-row">
      <div className="flex items-center justify-between w-full">
        <div className={testMetaDataStyles}>
          <span>Subject</span>
          <span>{mockTestMetaData.subject}</span>
        </div>
        <div className={testMetaDataStyles}>
          <span>Topic</span>
          <span>{mockTestMetaData.topic}</span>
        </div>
        <div className={testMetaDataStyles}>
          <span>Questions</span>
          <span>
            {1} of {mockTestMetaData.numberOfQuestions}
          </span>
        </div>
        <div className="hidden sm:flex">
          <Timer /> {millisToMinutesAndSeconds(0)}
        </div>
      </div>
      <div className="flex w-full gap-1">
        <Select onValueChange={() => {}}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Some Question" />
          </SelectTrigger>
          <SelectContent>
            {mockArrayOfQuestions.map((question, index) => (
              <SelectItem value={index.toString()} key={index}>
                Question {index + 1}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="flex my-auto sm:hidden">
          <Timer /> {millisToMinutesAndSeconds(0)}
        </div>
      </div>
    </div>
  );

  const Question = () => (
    <Card className="w-full p-4 text-justify  sm:min-h-[450px]">
      {mockQuestion.question}
    </Card>
  );

  const AnswerOptions = ({ options }: { options: string[] }) => (
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

  return (
    <Page pageTitle="Test">
      <div>
        <TestHeader />
        <div className="flex flex-col gap-3 pt-4 sm:flex-row">
          <Question />
          <AnswerOptions options={mockQuestion.options} />
        </div>
      </div>
    </Page>
  );
}

export default Test;
