import { useUser } from "@clerk/clerk-react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import dayjs from "dayjs";
import type { AnalysedSkill } from "../../../../types/Quiz/Result";
import {
  type Skill,
  type Subject,
  type Subtopic,
  type Topic,
} from "../../../../types/Subject/Subject";
import { backendEndpoint } from "../../../../types/endpoints";
import { PageHeader } from "../../components/kiseki/PageHeader";
import { useMarkedQuizState } from "../../states/MarkedQuiz.state";
import analyseQuiz from "../QuizSummary/analyseQuiz/analyseQuiz";
import { generateStudyPlan } from "./GenerateStudyPlan";
import StudyCard from "./StudyCard";

const dateFormat = "DD MMM YYYY";
const today = dayjs();

const getStudyPlan = (results: AnalysedSkill[] | undefined) => {
  if (results) return generateStudyPlan(results);
  const cachedMarkedQuestions = useMarkedQuizState.getState().questions;
  const [analysedResult] = analyseQuiz(cachedMarkedQuestions);
  if (analysedResult && analysedResult.skills)
    return generateStudyPlan(analysedResult.skills);
  return undefined;
};

export type ToStudy = {
  subject: Subject;
  topic: Topic;
  subtopic: Subtopic;
  skill: Skill;
};

function StudyPlan() {
  const maxTopicPerDay = 2;

  const { isSignedIn } = useUser();

  const {
    data: results,
    isError,
    isPending,
    isFetching,
  } = useQuery({
    queryKey: ["results"],
    queryFn: async () => {
      const response = await axios.get(`${backendEndpoint.getStudentResult}`);
      return response.data as AnalysedSkill[];
    },
    retry: false,
    enabled: !!isSignedIn,
  });

  const toStudys: ToStudy[] | undefined = getStudyPlan(results);

  return (
    <>
      <PageHeader className="pb-4">Study Plan</PageHeader>
      <div className="flex justify-between">
        <div>
          {isError && (
            <>Failed to get your results. Please reload the page :)</>
          )}

          {!toStudys && !isPending && <p>There is nothing for you to study!</p>}

          {isPending && isFetching && <p>Loading your results...</p>}

          {toStudys && (
            <div key={today.format(dateFormat)} className="w-fit">
              <div className="flex flex-col gap-4">
                {toStudys.slice(0, maxTopicPerDay).map((toStudy, index) => {
                  return (
                    <StudyCard
                      key={`toStudy-${index}`}
                      subject={toStudy.subject}
                      topic={toStudy.topic}
                      subtopic={toStudy.subtopic}
                      skill={toStudy.skill}
                    />
                  );
                })}
              </div>
            </div>
          )}
        </div>

        <iframe
          width="300"
          height="700"
          src="https://miro.com/app/live-embed/uXjVN6ekm9k=/?autoplay=true&moveToWidget=3458764575549328974&embedMode=view_only_without_ui"
          className="bg-white"
          allowFullScreen
        />
      </div>
      {/* {!isSignedIn && <SignInDialog />} */}
    </>
  );
}

export default StudyPlan;
