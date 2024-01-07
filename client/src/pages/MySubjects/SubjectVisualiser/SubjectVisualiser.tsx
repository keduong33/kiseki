import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Subject,
  getSubTopicsBasedOnTopic,
  getTopicsBasedOnSubject,
  type Topic,
} from "../../../../../types/Subject/Subject";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/shadcn/ui/select";
import ReactFlowRoadMap from "./ReactFlowRoadMap";

function SubjectVisualiser() {
  const { subject } = useParams();

  const convertedSubject =
    subject && subject[0]?.toUpperCase().concat(subject.slice(1));

  const topics = getTopicsBasedOnSubject(convertedSubject as Subject);

  const [currentTopic, setCurrentTopic] = useState<Topic>(
    topics && Object.values(topics)[0]
  );

  const subtopics = getSubTopicsBasedOnTopic(currentTopic);
  const subjectTitle = convertedSubject;

  const changeTopic = (topic: Topic) => {
    setCurrentTopic(topic);
  };

  return (
    <>
      {topics && (
        <>
          <div>Progress Circle</div>
          <div className="flex w-full h-full ">
            <div className="flex flex-col w-full h-full gap-4 text-center">
              <div className="grid grid-cols-3">
                <h2 className="col-span-1 col-start-2">{subjectTitle}</h2>
                <div className="col-span-1">
                  <Select onValueChange={changeTopic} value={currentTopic}>
                    <SelectTrigger className="w-full ">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {topics.map((topic, index) => (
                        <SelectItem value={topic.toString()} key={index}>
                          {topic}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* If possible, in the future switch reactflow with svg */}
              <ReactFlowRoadMap topic={currentTopic} subtopics={subtopics} />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default SubjectVisualiser;
