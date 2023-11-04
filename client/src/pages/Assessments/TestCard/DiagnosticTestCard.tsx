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

import type { Subject } from "../../../../types/Subject/Subject";

const Row = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid lg:grid-cols-[30px_100px_200px] grid-cols-[30px_100px_175px]">
      {children}
    </div>
  );
};

const generateTest = (subject: Subject) => {
  console.log(subject);
};

export default function DiagnosticTestCard({ subject }: { subject: Subject }) {
  return (
    <Card className="w-[350px] lg:w-[400px]  h-[550px] flex flex-col">
      <CardHeader className="pb-[6px] items-center">
        <div className="h-[286px] w-full bg-slate-600"></div>
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
            <p className="overflow-x-hidden">Orientation {subject} test</p>
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
