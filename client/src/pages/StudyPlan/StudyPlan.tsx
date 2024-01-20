import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import dayjs from "dayjs";
import { backendEndpoint } from "../../../../types/endpoints";
import type { AnalysedResult } from "../../../../types/Quiz/Result";
import {
  type Skill,
  type Subject,
  type SubTopic,
  type Topic,
} from "../../../../types/Subject/Subject";
import { PageHeader } from "../../components/kiseki/PageHeader";
import StudyCard from "./StudyCard";

const dateFormat = "DD MMM YYYY";
const today = dayjs();

export type ToStudyTopic = {
  subject: Subject;
  topic?: Topic;
  subtopic?: SubTopic;
  skill?: Skill;
};

const mockToStudyTopics: ToStudyTopic[] = [];

function StudyPlan() {
  const maxStudyDays = 7;
  const maxTopicPerDay = 2;

  const query = useQuery({
    queryKey: ["results"],
    queryFn: async () => {
      const response = await axios.get(`${backendEndpoint.getStudentResult}`);
      return response.data as AnalysedResult;
    },
  });

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
              <StudyCard subject={"Maths"} topic={"Algebra"} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default StudyPlan;
