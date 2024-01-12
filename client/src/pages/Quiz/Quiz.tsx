import { useQuizState } from "../../states/Quiz.state";
import AnswerOptions from "./Structure/AnswerOptions";
import Question from "./Structure/Question";
import QuestionNavigation from "./Structure/QuestionNavigation";
import QuizHeader from "./Structure/QuizHeader";

function Quiz() {
  const [questions, currentQuestionIndex] = useQuizState((state) => [
    state.questions,
    state.currentQuestionIndex,
  ]);

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <>
      {currentQuestion && (
        <div className="flex flex-col gap-4">
          <QuizHeader />
          <div className={`flex flex-col gap-3 items-center`}>
            <div className="flex justify-center w-full gap-8">
              <QuestionNavigation />
              <Question currentQuestion={currentQuestion} />
            </div>

            <AnswerOptions
              options={currentQuestion.options}
              optionImageUrls={currentQuestion.optionImageUrls}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Quiz;
