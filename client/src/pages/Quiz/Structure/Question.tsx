import htmlParser from "html-react-parser";
import type { FullInfoQuestion } from "../../../../../types/Quiz/Question";
import { Card } from "../../../components/shadcn/ui/card";

const Question = ({
  currentQuestion,
}: {
  currentQuestion: FullInfoQuestion;
}) => {
  return (
    <Card className="min-w-[600px] xl:max-w-[700px] max-w-[600px] p-4 text-justify md:min-h-[200px]">
      <div>{htmlParser(currentQuestion.content)}</div>
    </Card>
  );
};

export default Question;
