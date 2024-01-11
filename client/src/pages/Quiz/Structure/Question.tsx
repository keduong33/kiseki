import htmlParser from "html-react-parser";
import type { FullInfoQuestion } from "../../../../../types/Quiz/Question";
import { Card } from "../../../components/shadcn/ui/card";

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

export default Question;
