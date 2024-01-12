import { default as KisekiButton } from "../../../components/kiseki/button";
import {
  Card,
  CardContent,
  CardHeader,
} from "../../../components/shadcn/ui/card";
import { useQuizState } from "../../../states/Quiz.state";
import { convertArrayIndexToQuestionIndex } from "../commonQuizFunctions";

function QuestionNavigation() {
  const [questions, currentQuestionIndex, setCurrentQuestionIndex] =
    useQuizState((state) => [
      state.questions,
      state.currentQuestionIndex,
      state.setCurrentQuestionIndex,
    ]);

  const changeQuestion = (newQuestionIndex: number) => {
    setCurrentQuestionIndex(newQuestionIndex);
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0)
      setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1)
      setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return (
    <div className="flex flex-col gap-2">
      <Card className="w-[240px] h-fit">
        <CardHeader className="font-semibold">Questions</CardHeader>
        <CardContent className="grid grid-cols-5 gap-2 xl:grid-cols-6">
          {questions.map((_q, index) => (
            <p
              className={`border-2 rounded-md w-[30px] h-[30px] flex items-center align-middle justify-center cursor-pointer font-semibold ${
                index === currentQuestionIndex
                  ? "bg-gradient-to-r from-[#2E48F5] via-[#765CFA] to-[#CE73FF]"
                  : ""
              }`}
              onClick={() => changeQuestion(index)}
              key={`Question ${index}`}
            >
              {convertArrayIndexToQuestionIndex(index)}
            </p>
          ))}
        </CardContent>
      </Card>
      <div className="flex justify-between w-full gap-3 md:justify-center">
        <KisekiButton
          onClick={prevQuestion}
          className="w-[100px] font-semibold"
          variant={"secondary"}
        >
          Back
        </KisekiButton>

        <KisekiButton
          onClick={nextQuestion}
          className="w-[100px] font-semibold"
        >
          {currentQuestionIndex === questions.length - 1 ? "Submit" : "Next"}
        </KisekiButton>
      </div>
    </div>
  );
}

export default QuestionNavigation;
