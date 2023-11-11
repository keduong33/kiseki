import { MathsTopic } from "../../../types/Subject/Math";
import {
  Subject,
  getSubTopicsBasedOnTopic,
  getTopicsBasedOnSubject,
} from "../../../types/Subject/Subject";
import Page from "../../components/page/Page";
import RoadMap from "./RoadMap";

function SubjectVisualiser() {
  const topics = getTopicsBasedOnSubject(Subject.Maths);

  const topic = MathsTopic.Algebra;
  const subtopics = getSubTopicsBasedOnTopic(topic);
  const subjectTitle = Subject.Maths;

  return (
    <Page pageTitle="Subject Visualiser">
      <div>Progress Circle</div>
      <div className="flex w-full h-full ">
        <div className="flex flex-col w-full h-full gap-4 text-center">
          <h2>{subjectTitle}</h2>
          <RoadMap topic={topic} subtopics={subtopics} />
        </div>
      </div>
    </Page>
  );
}

export default SubjectVisualiser;
