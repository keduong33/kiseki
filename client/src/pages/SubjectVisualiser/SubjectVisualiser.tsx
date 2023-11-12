import { MathsTopic } from "../../../types/Subject/Math";
import {
  Subject,
  getSubTopicsBasedOnTopic,
  getTopicsBasedOnSubject,
} from "../../../types/Subject/Subject";
import Page from "../../components/page/Page";
import ReactFlowRoadMap from "./ReactFlowRoadMap";

function SubjectVisualiser() {
  const topics = getTopicsBasedOnSubject(Subject.Maths);

  const topic = MathsTopic.Algebra;
  const subtopics = getSubTopicsBasedOnTopic(topic);
  const subjectTitle = Subject.Maths;

  return (
    <Page pageTitle="Subject Visualiser" hideNavBar>
      <div>Progress Circle</div>
      <div className="flex w-full h-full ">
        <div className="flex flex-col w-full h-full gap-4 text-center">
          <div className="grid grid-cols-5">
            <h2 className="col-span-3 col-start-2">{subjectTitle}</h2>
            <div className="col-span-1">Selector</div>
          </div>

          {/* If possible, in the future switch reactflow with svg */}
          <ReactFlowRoadMap topic={topic} subtopics={subtopics} />
        </div>
      </div>
    </Page>
  );
}

export default SubjectVisualiser;
