import { useLocation } from "react-router-dom";
import type { MarkedQuiz } from "../../../types/Quiz/Quiz";
import type { Subject } from "../../../types/Subject/Subject";
import analyseQuiz, {
  type AnalysedSubtopics,
  type AnalysedTopics,
} from "./analyseQuiz/analyseQuiz";

export type AnalysedResult = {
  topics?: {
    numberOfCorrectAnswers: AnalysedTopics;
    numberOfQuestions: AnalysedTopics;
  };
  subtopics?: {
    numberOfCorrectAnswers: AnalysedSubtopics;
    numberOfQuestions: AnalysedSubtopics;
  };
  subject?: Subject;
  overall: { numberOfCorrectAnswers: number; numberOfQuestions: number };
};

function QuizSummary() {
  const { state } = useLocation();
  const { result } = state;
  const markedQuiz = result as MarkedQuiz;

  const [analysedResult, error] = analyseQuiz(markedQuiz);

  if (error) {
    console.error("Failed to analyse result:", error.message);
    return;
  }

  console.log(analysedResult.overall);
  console.log(analysedResult.topics);
  console.log(analysedResult.subtopics);

  return <></>;
}

export default QuizSummary;
