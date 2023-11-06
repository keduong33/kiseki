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

import { useNavigate } from "react-router-dom";
import type { Subject } from "../../../../types/Subject/Subject";
import { PageLocation } from "../../../components/page/PageLocation";

const Row = ({ children }: { children: React.ReactNode }) => {
  return <div className="grid grid-cols-[30px_100px_1fr]">{children}</div>;
};

export default function DiagnosticTestCard({ subject }: { subject: Subject }) {
  const navigate = useNavigate();

  const generateTest = (subject: Subject) => {
    console.log(subject);
    navigate(PageLocation.Test);
  };

  return (
    <Card className="w-[300px] sm:w-[320px] md:w-[350px] 2xl:w-[400px] h-[500px]  flex flex-col">
      <CardHeader className="pb-[6px] items-center">
        <div className="h-[250px] w-full bg-slate-600"></div>
        <CardTitle>{subject} Test</CardTitle>
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
            <p className="max-h-[20px] truncate">Orientation {subject} test</p>
          </Row>
        </div>
      </CardContent>
      <CardFooter
        className="justify-center"
        onClick={() => generateTest(subject)}
      >
        <Button type="submit">Enter</Button>
      </CardFooter>
    </Card>
  );
}
