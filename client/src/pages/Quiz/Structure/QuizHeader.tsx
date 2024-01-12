const quizMetaDataStyles = "flex flex-col gap-1 md:flex-row text-center";
import { useQuizState } from "../../../states/Quiz.state";
import { convertArrayIndexToQuestionIndex } from "../commonQuizFunctions";

const QuizHeader = () => {
  const [currentQuestionIndex, quizMetaData] = useQuizState((state) => [
    state.currentQuestionIndex,
    state.quizMetaData,
  ]);

  return (
    <div className="flex flex-col justify-between gap-6 md:flex-row">
      <div className="flex items-center justify-between w-full">
        <div className={quizMetaDataStyles}>
          <span>Subject</span>
          <span>{quizMetaData?.subject}</span>
        </div>
        <div className={quizMetaDataStyles}>
          <span>Questions</span>
          <span>
            {convertArrayIndexToQuestionIndex(currentQuestionIndex)} of{" "}
            {quizMetaData?.numberOfQuestions}
          </span>
        </div>
        {/* <div className="items-center hidden md:flex">
          <Timer1 size={IconSize.medium} /> {millisToMinutesAndSeconds(0)}
        </div> */}
      </div>
    </div>
  );
};

export default QuizHeader;
