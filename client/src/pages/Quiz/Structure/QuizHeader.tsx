const quizMetaDataStyles = "flex flex-col gap-3 md:flex-row text-center";
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
        <p className={quizMetaDataStyles}>
          {quizMetaData?.mode}
          {"  "} &gt; {"  "}
          {quizMetaData?.subject}{" "}
          {quizMetaData?.topics && `${quizMetaData.topics} >`}
        </p>
        <h3 className={quizMetaDataStyles}>
          <span>Questions</span>
          <span>
            {convertArrayIndexToQuestionIndex(currentQuestionIndex)} of{" "}
            {quizMetaData?.numberOfQuestions}
          </span>
        </h3>
        {/* <div className="items-center hidden md:flex">
          <Timer1 size={IconSize.medium} /> {millisToMinutesAndSeconds(0)}
        </div> */}
      </div>
    </div>
  );
};

export default QuizHeader;
