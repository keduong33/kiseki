import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../../components/shadcn/ui/button";
import { useQuizState } from "../../states/Quiz.state";
import AnswerOptions from "./Structure/AnswerOptions";
import Question from "./Structure/Question";
import QuizHeader from "./Structure/QuizHeader";
import { SubmitQuizButton } from "./SubmitQuizButton";

export const convertArrayIndexToQuestionIndex = (index: number) => index + 1;

function Quiz() {
  const [questions, currentQuestionIndex, setCurrentQuestionIndex] =
    useQuizState((state) => [
      state.questions,
      state.currentQuestionIndex,
      state.setCurrentQuestionIndex,
    ]);

  const prevQuestion = () => {
    if (currentQuestionIndex > 0)
      setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1)
      setCurrentQuestionIndex(currentQuestionIndex + 1);
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
