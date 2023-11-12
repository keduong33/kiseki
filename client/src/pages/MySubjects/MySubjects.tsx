import { Subject } from "../../../types/Subject/Subject";
import Page from "../../components/page/Page";
import SubjectVisualiser from "./SubjectVisualiser/SubjectVisualiser";

function MySubjects() {
  return (
    <Page pageTitle="My Subjects" hideNavBar>
      <SubjectVisualiser subject={Subject.Maths} />
    </Page>
  );
}

export default MySubjects;
