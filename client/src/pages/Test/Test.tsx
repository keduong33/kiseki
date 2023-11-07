import { Timer } from "lucide-react";
import { MathsTopic } from "../../../types/Subject/Math";
import { Subject } from "../../../types/Subject/Subject";
import type { TestQuestion } from "../../../types/Test/Question";
import type { TestMetaData } from "../../../types/Test/Test";
import Page from "../../components/page/Page";
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
  options: ["Yay", "Nay", "Yay Nay", "Nay Yay"],
  timer: 0,
  questionImage: undefined,
};

const mockTestMetaData: TestMetaData = {
  subject: Subject["Maths"],
  topic: MathsTopic["Algebra"],
  numberOfQuestions: 15,
};

const mockArrayOfQuestions: TestQuestion[] = [mockQuestion, mockQuestion];

function Test() {
  const TestHeader = () => (
    <div className="flex flex-col justify-between gap-6 sm:flex-row">
      <div className="flex items-center justify-between w-full">
        <div>
          <span>Subject</span> {mockTestMetaData.subject}
        </div>
        <div>
          <span>Topic</span> {mockTestMetaData.topic}
        </div>
        <div>
          <span>Questions</span> {1} of {mockTestMetaData.numberOfQuestions}
        </div>
        <div className="flex">
          <Timer /> {millisToMinutesAndSeconds(0)}
        </div>
      </div>
      <Select onValueChange={() => {}}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Some Question" />
        </SelectTrigger>
        <SelectContent>
          {mockArrayOfQuestions.map((question, index) => (
            <SelectItem value={index.toString()}>
              Question {index + 1}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );

  return (
    <Page pageTitle="Test">
      <TestHeader />
    </Page>
  );
}

export default Test;
