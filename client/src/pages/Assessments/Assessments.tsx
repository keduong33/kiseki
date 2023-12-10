import { DiagnosticSubject } from "../../../types/Subject/Subject";
import Page from "../../components/page/Page";
import DiagnosticQuizCard from "./QuizCard/DiagnosticQuizCard";

function Assessments() {
  return (
    <Page pageTitle="Diagnostic Quizzes">
      <div className="grid grid-cols-1 gap-4 pt-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 place-items-center">
        <DiagnosticQuizCard subject={DiagnosticSubject["Mathematics"]} />
        <DiagnosticQuizCard
          subject={DiagnosticSubject["Numerical Reasoning"]}
        />
        <DiagnosticQuizCard
          subject={DiagnosticSubject["Reading Comprehension"]}
        />
        <DiagnosticQuizCard subject={DiagnosticSubject["Science Reasoning"]} />
        <DiagnosticQuizCard subject={DiagnosticSubject["Verbal Reasoning"]} />
      </div>
    </Page>
  );
}

export default Assessments;
