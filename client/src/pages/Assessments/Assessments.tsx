import { Subject } from "../../../types/Subject/Subject";
import Page from "../../components/page/Page";
import DiagnosticTestCard from "./TestCard/DiagnosticTestCard";

function Assessments() {
  return (
    <Page pageTitle="Diagnostic Tests">
      <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
        <DiagnosticTestCard subject={Subject["Maths"]} />
        <DiagnosticTestCard subject={Subject["Numerical Reasoning"]} />
        <DiagnosticTestCard subject={Subject["Maths"]} />
        <DiagnosticTestCard subject={Subject["English"]} />
        <DiagnosticTestCard subject={Subject["Numerical Reasoning"]} />
      </div>
    </Page>
  );
}

export default Assessments;
