import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useLocation } from "react-router-dom";
import type { MarkedQuiz } from "../../../types/Quiz/Quiz";
import type { AnalysedResult } from "../../../types/Quiz/Result";
import { backendEndpoint } from "../../../types/endpoints";
import KisekiButton from "../../components/kiseki/button";
import analyseQuiz from "./analyseQuiz/analyseQuiz";

function QuizSummary() {
  const { state } = useLocation();

  const saveResult = useMutation({
    mutationFn: async (result: AnalysedResult) =>
      await axios.post(`${backendEndpoint.saveStudentResult}`, result),
    onSuccess(data, variables, context) {
      console.log(data.data);
    },
  });

  if (!state) {
    return <>We could not find your recent quiz</>;
  }

  const { result } = state;
  const markedQuiz = result as MarkedQuiz;

  const [analysedResult, analysisError] = analyseQuiz(markedQuiz);

  if (analysisError) {
    console.error("Failed to analyse result:", analysisError.message);
    return <>We could analyse your recent quiz</>;
  }

  if (saveResult.isError) {
    const error = saveResult.error;
    return <>{error.message}</>;
  }

  return (
    <>
      <KisekiButton
        onClick={() => {
          saveResult.mutate(analysedResult);
        }}
        disabled={JSON.stringify(analysedResult) === "{}"}
      >
        Save your results
      </KisekiButton>
    </>
  );
}

export default QuizSummary;
