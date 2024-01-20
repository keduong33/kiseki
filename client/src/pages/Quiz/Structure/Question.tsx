import htmlParser from "html-react-parser";
import type { FullInfoQuestion } from "../../../../../types/Quiz/Question";
import { Card } from "../../../components/shadcn/ui/card";

const Question = ({
  currentQuestion,
}: {
  currentQuestion: FullInfoQuestion;
}) => {
  return (
    <Card className="min-w-[600px] max-w-[700px] p-4 text-justify md:min-h-[200px] flex-1">
      <div>{htmlParser(currentQuestion.question)}</div>
    </Card>
  );
};

export default Question;
