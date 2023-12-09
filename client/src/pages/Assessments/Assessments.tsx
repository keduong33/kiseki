import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Subject } from "../../../types/Subject/Subject";
import Page from "../../components/page/Page";
import { Button } from "../../components/shadcn/ui/button";
import DiagnosticQuizCard from "./QuizCard/DiagnosticQuizCard";

function Assessments() {
  const query = useQuery({
    queryKey: ["assessmentCards"],
    queryFn: async () => await axios.get(`/assessments/all`),
    retry: false,
    enabled: false,
  });

  console.log(query.data);

  return (
    <Page pageTitle="Diagnostic Quizzes">
      <div className="grid grid-cols-1 gap-4 pt-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 place-items-center">
        <DiagnosticQuizCard subject={Subject["Maths"]} />
        <DiagnosticQuizCard subject={Subject["Numerical Reasoning"]} />
        <DiagnosticQuizCard subject={Subject["Maths"]} />
        <DiagnosticQuizCard subject={Subject["English"]} />
        <DiagnosticQuizCard subject={Subject["Numerical Reasoning"]} />
        <Button onClick={() => query.refetch()}>Fetch</Button>
      </div>
    </Page>
  );
}

export default Assessments;
