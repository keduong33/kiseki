import { useState } from "react";
import { useBlocker } from "react-router-dom";
import { PageLocation } from "../../../../types/PageLocation";
import { useQuizState } from "../../states/Quiz.state";
import LeaveMidQuizDialog from "./LeaveMidQuizDialog";
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
  const [showLeaveQuizDialog, setShowLeaveQuizDialog] = useState(false);

  const blocker = useBlocker(({ currentLocation, nextLocation }) => {
    if (nextLocation.pathname === PageLocation.QuizSummary) return false;

    if (nextLocation.pathname === PageLocation.DiagnosticQuiz) {
      setShowLeaveQuizDialog(true);
      return true;
    }
  });

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
      <LeaveMidQuizDialog
        show={showLeaveQuizDialog}
        setShow={setShowLeaveQuizDialog}
        blocker={blocker}
      />
    </>
  );
}

export default Quiz;
