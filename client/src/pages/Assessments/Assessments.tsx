import { Subject } from "../../../types/Subject/Subject";
import Page from "../../components/page/Page";
import DiagnosticQuizCard from "./QuizCard/DiagnosticQuizCard";

function Assessments() {
  return (
    <Page pageTitle="Diagnostic Quizzes">
      <div className="grid grid-cols-1 gap-4 pt-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 place-items-center">
        <DiagnosticQuizCard subject={Subject["Maths"]} />
        <DiagnosticQuizCard subject={Subject["Numerical Reasoning"]} />
        <DiagnosticQuizCard subject={Subject["Maths"]} />
        <DiagnosticQuizCard subject={Subject["English"]} />
        <DiagnosticQuizCard subject={Subject["Numerical Reasoning"]} />
      </div>
    </Page>
  );
}

export default Assessments;
