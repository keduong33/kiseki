import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/shadcn/ui/card";

import { Clock } from "iconsax-react";
import { HelpCircleIcon } from "lucide-react";
import type { Subject } from "../../../../../types/Subject/Subject";
import KisekiButton from "../../../components/kiseki/button";
import { IconSize } from "../../../components/layout/NavigationBar";

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
          <div className="h-[130px] w-full  rounded-lg bg-gradient-to-br from-indigo-300 to-purple-300" />
          <CardTitle className="py-3 pl-[16px]">{subjectTitle}</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-between px-[16px]">
          <div className="flex gap-2">
            <div className="h-[40px] w-[70px] bg-[#2a2e4e] flex items-center rounded-lg justify-center">
              <HelpCircleIcon size={"12px"} />
              <p className="text-[14px]">
                {numberOfQuestions ? `${numberOfQuestions}Q` : "Surprise xD"}
              </p>
            </div>
            <div className="h-[40px] w-[70px] bg-[#2a2e4e] flex items-center rounded-lg  justify-center">
              <Clock size={IconSize.small} />
              <p className="text-[14px]">
                {timeLimit ? `${timeLimit}:00` : "No time limit"}
              </p>
            </div>
          </div>
          <KisekiButton
            onClick={async () => {
              setSelectedSubject(subjectTitle);
            }}
            type="submit"
            disabled={!!selectedSubject}
            isLoading={selectedSubject == subjectTitle}
            className="w-[78px] h-[40px]"
          >
            Start
          </KisekiButton>
        </CardContent>
      </Card>
    </>
  );
}
