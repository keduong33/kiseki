import { ListChecksIcon, NewspaperIcon, TimerIcon } from "lucide-react";
import { Button } from "../../../components/shadcn/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/shadcn/ui/card";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import type {
  DiagnosticSubject,
  Subject,
} from "../../../../types/Subject/Subject";

const Row = ({ children }: { children: React.ReactNode }) => {
  return <div className="grid grid-cols-[30px_100px_1fr]">{children}</div>;
};

export default function DiagnosticQuizCard({
  subject,
}: {
  subject: Subject | DiagnosticSubject;
}) {
  const navigate = useNavigate();

  const query = useQuery({
    queryKey: ["quiz", subject],
    queryFn: async () => await axios.get(`/get-diagnostic-quiz/${subject}`),
    retry: false,
    enabled: false,
  });

  if (query.isSuccess) {
    const questions = query.data.data;

    console.log(questions[0]);
    // navigate(PageLocation.Quiz);
  }
  return (
    <Card className="w-[300px] sm:w-[320px] md:w-[330px] 2xl:w-[400px] h-[500px]  flex flex-col">
      <CardHeader className="pb-[6px] items-center">
        <div className="h-[250px] w-full bg-slate-600"></div>
        <CardTitle>{subject}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>Details</CardDescription>
        <div>
          <Row>
            <TimerIcon />
            <p>Time:</p>
            <p>15 minutes</p>
          </Row>
          <Row>
            <ListChecksIcon />
            <p>Questions:</p>
            <p>30</p>
          </Row>
          <Row>
            <NewspaperIcon />
            <p>Description:</p>
            <p className="max-h-[20px] truncate">Orientation {subject}</p>
          </Row>
        </div>
      </CardContent>
      <CardFooter className="justify-center" onClick={() => query.refetch()}>
        <Button type="submit">Enter</Button>
      </CardFooter>
    </Card>
  );
}
