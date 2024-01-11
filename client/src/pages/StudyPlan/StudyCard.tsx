import { TickCircle } from "iconsax-react";
import KisekiButton from "../../components/kiseki/button";
import { IconSize } from "../../components/layout/NavigationBar";
import { Card } from "../../components/shadcn/ui/card";
import type { ToStudyTopic } from "./StudyPlan";

function StudyCard({ subject, topic, subtopic }: ToStudyTopic) {
  const toStudy = subtopic ?? topic;
  return (
    <Card className="w-[400px]">
      <div className="p-[30px] flex">
        <div className="w-full">
          <h3>{subject}</h3>
          <p className="text-sm text-[#8089C6]">{toStudy}</p>
        </div>
        <div className="flex items-center gap-3 place-self-center w-fit">
          <TickCircle size={IconSize.medium} />
          <KisekiButton className="w-[70px] h-[30px]">Start</KisekiButton>
        </div>
      </div>
    </Card>
  );
}

export default StudyCard;
