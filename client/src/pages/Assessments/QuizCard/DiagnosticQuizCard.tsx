import { ListChecksIcon, NewspaperIcon, TimerIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/shadcn/ui/card";

import { Subject } from "../../../../types/Subject/Subject";
import KisekiButton from "../../../components/kiseki/button";

const Row = ({ children }: { children: React.ReactNode }) => {
  return <div className="grid grid-cols-[30px_100px_1fr]">{children}</div>;
};

type DiagnosticQuizCardProps = {
  subjectTitle: Subject;
  numberOfQuestions?: number;
  timeLimit?: number;
  description?: string;

  selectedSubject?: Subject;
  setSelectedSubject: (subject: Subject) => void;
};

export default function DiagnosticQuizCard({
  subjectTitle,
  numberOfQuestions,
  timeLimit,
  selectedSubject,
  setSelectedSubject,
}: DiagnosticQuizCardProps) {
  return (
    <>
      <Card className="w-[300px] sm:w-[320px] md:w-[330px] 2xl:w-[400px] h-[500px]  flex flex-col">
        <CardHeader className="pb-[6px] items-center">
          <div className="h-[250px] w-full bg-slate-600"></div>
          <CardTitle>{subjectTitle}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>Details</CardDescription>
          <div>
            <Row>
              <TimerIcon />
              <p>Time:</p>
              <p>{timeLimit} minutes</p>
            </Row>
            <Row>
              <ListChecksIcon />
              <p>Questions:</p>
              <p>{numberOfQuestions}</p>
            </Row>
            <Row>
              <NewspaperIcon />
              <p>Description:</p>
              <p className="max-h-[20px] truncate">
                Orientation {subjectTitle}
              </p>
            </Row>
          </div>
        </CardContent>
        <CardFooter
          className="justify-center"
          onClick={async () => {
            setSelectedSubject(subjectTitle);
          }}
        >
          <KisekiButton
            type="submit"
            disabled={!!selectedSubject}
            isLoading={selectedSubject == subjectTitle}
          >
            Select
          </KisekiButton>
        </CardFooter>
      </Card>
    </>
  );
}
