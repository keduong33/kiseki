import htmlParser from "html-react-parser";
import { Card } from "../../../components/shadcn/ui/card";
import { useQuizState } from "../../../states/Quiz.state";
import { convertNumberToChar } from "../commonQuizFunctions";

const AnswerOptions = ({
  options,
  optionImageUrls,
}: {
  options?: (string | undefined)[];
  optionImageUrls: (string | undefined)[];
}) => {
  const [userAnswers, setUserAnswers, currentQuestionIndex] = useQuizState(
    (state) => [
      state.userAnswers,
      state.setUserAnswers,
      state.currentQuestionIndex,
    ]
  );

  const saveAnswer = (studentAnswer?: string) => {
    /*TODO: Add these features (multiple answers & shuffled questions):
        - save shuffled questions
        - save question with multiple answers
      */
    const updatedUserAnswers = userAnswers.slice();
    updatedUserAnswers[currentQuestionIndex] = studentAnswer;
    setUserAnswers(updatedUserAnswers);
  };

  return (
    <div className="flex flex-wrap justify-center w-[925px] gap-2 ">
      {options?.map((option, index) => {
        const imageUrl = optionImageUrls[index];

        const isPicked =
          (option && userAnswers[currentQuestionIndex] == option) ||
          (imageUrl && userAnswers[currentQuestionIndex] == imageUrl);

        return (
          <Card
            className={`flex gap-4 p-3 w-[300px] xl:w-[400px] min-h-[50px] ${
              isPicked ? "bg-gradient-to-bl from-indigo-900 to-violet-700" : ""
            } `}
            key={`Option ${index}`}
            onClick={() => saveAnswer(option ?? imageUrl)}
          >
            <p className="my-auto">{convertNumberToChar(index)}</p>
            {option && <div>{htmlParser(option ?? "")}</div>}
            {imageUrl && (
              <img src={imageUrl ?? ""} className={`max-w-[250px] h-[250px]`} />
            )}
          </Card>
        );
      })}
    </div>
  );
};

export default AnswerOptions;
