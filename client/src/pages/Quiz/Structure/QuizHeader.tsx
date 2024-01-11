const quizMetaDataStyles = "flex flex-col gap-1 md:flex-row text-center";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/shadcn/ui/select";
import { useQuizState } from "../../../states/Quiz.state";
import { convertArrayIndexToQuestionIndex } from "../Quiz";

const QuizHeader = () => {
  const [
    questions,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    quizMetaData,
  ] = useQuizState((state) => [
    state.questions,
    state.currentQuestionIndex,
    state.setCurrentQuestionIndex,
    state.quizMetaData,
  ]);

  const changeQuestion = (newQuestionIndex: string) => {
    setCurrentQuestionIndex(Number(newQuestionIndex));
  };

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
      <div className="flex w-full gap-1">
        <Select
          onValueChange={changeQuestion}
          value={currentQuestionIndex.toString()}
        >
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="overflow-y-auto h-[200px]">
            {questions.map((question, index) => (
              <SelectItem value={index.toString()} key={index}>
                Question {convertArrayIndexToQuestionIndex(index)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default QuizHeader;
