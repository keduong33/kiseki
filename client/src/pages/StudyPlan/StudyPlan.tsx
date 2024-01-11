import dayjs from "dayjs";
import { MathsTopic } from "../../../../types/Subject/Math";
import {
  Subject,
  type SubTopic,
  type Topic,
} from "../../../../types/Subject/Subject";
import { PageHeader } from "../../components/kiseki/PageHeader";
import StudyCard from "./StudyCard";

const dateFormat = "DD MMM YYYY";
const today = dayjs();

export type ToStudyTopic = {
  subject: Subject;
  topic: Topic;
  subtopic?: SubTopic;
};

const mockToStudyTopics: ToStudyTopic[] = [];

function StudyPlan() {
  const maxStudyDays = 7;
  const maxTopicPerDay = 2;

  const studyDays: Array<dayjs.Dayjs> = Array.from(
    { length: maxStudyDays },
    (_value, daysAfter) => today.add(daysAfter, "day")
  );

  const toStudyTopics: ToStudyTopic[] = mockToStudyTopics;

  return (
    <>
      <PageHeader className="pb-4">Study Plan</PageHeader>
      <div>
        {studyDays.map((day) => {
          const isToday = day.date() === today.date();
          return (
            <div key={day.format(dateFormat)} className="w-fit">
              <h3>
                <span>
                  {isToday && "Today "}
                  {!isToday && `${day.format("dddd")} `}
                </span>
                {day.format(dateFormat)}
              </h3>
              <StudyCard subject={Subject.Maths} topic={MathsTopic.Algebra} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default StudyPlan;
