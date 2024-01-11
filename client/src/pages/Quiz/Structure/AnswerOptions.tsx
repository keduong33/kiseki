import htmlParser from "html-react-parser";
import { Card } from "../../../components/shadcn/ui/card";
import { useQuizState } from "../../../states/Quiz.state";
import { convertNumberToChar } from "../commonQuizFunctions";

const AnswerOptions = ({
  options,
  optionImageUrls,
}: {
  options: (string | null)[];
  optionImageUrls: (string | null)[];
}) => {
  const [userAnswers, setUserAnswers, currentQuestionIndex] = useQuizState(
    (state) => [
      state.userAnswers,
      state.setUserAnswers,
      state.currentQuestionIndex,
    ]
  );

  const saveAnswer = (studentAnswer: string | null) => {
    /*TODO: Add these features (multiple answers & shuffled questions):
        - save shuffled questions
        - save question with multiple answers
      */
    const updatedUserAnswers = userAnswers.slice();
    updatedUserAnswers[currentQuestionIndex] = studentAnswer;
    setUserAnswers(updatedUserAnswers);
  };

  return (
    <div className="flex flex-col justify-between w-full gap-3">
      {options.map((option, index) => {
        const imageUrl = optionImageUrls[index];

        const isPicked =
          (userAnswers[currentQuestionIndex] == option && option !== null) ||
          (userAnswers[currentQuestionIndex] == optionImageUrls[index] &&
            imageUrl !== null);

        return (
          <Card
            className={`flex content-center h-full gap-4 p-3 ${
              isPicked && "bg-gray-600"
            } ${!!imageUrl && "flex-col items-center"}`}
            key={`Option ${index}`}
            onClick={() => saveAnswer(option ?? imageUrl)}
          >
            <p className="my-auto">{convertNumberToChar(index)}</p>
            <div className="my-auto">{htmlParser(option ?? "")}</div>
            <img
              src={imageUrl ?? ""}
              className={`${
                !!imageUrl && "my-auto mx-auto w-[300px] h-[400px]"
              }`}
            />
          </Card>
        );
      })}
    </div>
  );
};

export default AnswerOptions;
