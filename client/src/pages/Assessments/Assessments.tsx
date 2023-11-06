import { Subject } from "../../../types/Subject/Subject";
import Page from "../../components/page/Page";
import DiagnosticTestCard from "./TestCard/DiagnosticTestCard";

function Assessments() {
  return (
    <Page pageTitle="Diagnostic Tests">
      <div className="grid grid-cols-1 gap-4 pt-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 place-items-center">
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
