import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/shadcn/ui/card";

import { Clock } from "iconsax-react";
import { HelpCircleIcon } from "lucide-react";
import { Subject } from "../../../../../types/Subject/Subject";
import KisekiButton from "../../../components/kiseki/button";
import { IconSize } from "../../../components/layout/NavigationBar";
import { Badge } from "../../../components/shadcn/ui/badge";

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
      <Card className="w-[280px] h-[230px] flex flex-col">
        <CardHeader className="items-start p-0 ">
          <div className="h-[130px] w-full bg-slate-600 rounded-lg" />
          <CardTitle className="py-3 pl-[16px]">{subjectTitle}</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-between px-[16px]">
          <Badge variant="outline" className=" h-[32px]">
            <HelpCircleIcon size={IconSize.small} />
            {numberOfQuestions
              ? `${numberOfQuestions} questions`
              : "Surprise xD"}
          </Badge>
          <Badge variant="outline" className=" h-[32px] align-middle flex">
            <Clock size={IconSize.small} />
            <p>{timeLimit ? `${timeLimit}:00` : "No time limit"} </p>
          </Badge>
          <KisekiButton
            onClick={async () => {
              setSelectedSubject(subjectTitle);
            }}
            type="submit"
            disabled={!!selectedSubject}
            isLoading={selectedSubject == subjectTitle}
            className="w-[60px] h-[30px]"
          >
            Start
          </KisekiButton>
        </CardContent>
      </Card>
    </>
  );
}
