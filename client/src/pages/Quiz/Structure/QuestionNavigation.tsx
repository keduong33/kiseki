import { default as KisekiButton } from "../../../components/kiseki/button";
import {
  Card,
  CardContent,
  CardHeader,
} from "../../../components/shadcn/ui/card";
import { useQuizState } from "../../../states/Quiz.state";
import { SubmitQuizButton } from "../SubmitQuizButton";
import { convertArrayIndexToQuestionIndex } from "../commonQuizFunctions";

function QuestionNavigation() {
  const [
    questions,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    userAnswers,
  ] = useQuizState((state) => [
    state.questions,
    state.currentQuestionIndex,
    state.setCurrentQuestionIndex,
    state.userAnswers,
  ]);

  const isLastQuestion = currentQuestionIndex === questions.length - 1;

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

  const ButtonStyles = "w-[100px] font-semibold";

  return (
    <div className="flex flex-col gap-2">
      <Card className="w-[240px] h-fit">
        <CardHeader className="font-semibold">Questions</CardHeader>
        <CardContent className="grid grid-cols-5 gap-2 xl:grid-cols-6">
          {questions.map((_q, index) => (
            <p
              className={`rounded-md w-[30px] h-[30px] flex items-center align-middle justify-center cursor-pointer font-semibold  ${
                index === currentQuestionIndex
                  ? "bg-primary "
                  : userAnswers[index]
                  ? "bg-[#787FBC] "
                  : "bg-background"
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
          className={ButtonStyles}
          variant={"secondary"}
        >
          Back
        </KisekiButton>

        {isLastQuestion ? (
          <SubmitQuizButton className={ButtonStyles} />
        ) : (
          <KisekiButton onClick={nextQuestion} className={ButtonStyles}>
            Next
          </KisekiButton>
        )}
      </div>
    </div>
  );
}

export default QuestionNavigation;
