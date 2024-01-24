import { TickCircle } from "iconsax-react";
import KisekiButton from "../../components/kiseki/button";
import { IconSize } from "../../components/layout/NavigationBar";
import { Card } from "../../components/shadcn/ui/card";
import type { ToStudy } from "./StudyPlan";

function StudyCard({ topic, subtopic, skill }: ToStudy) {
  return (
    <Card className="w-[400px]">
      <div className="p-[30px] flex">
        <div className="w-full">
          <div className="flex gap-1">
            <h3>{topic}</h3>-<h4>{subtopic}</h4>
          </div>
          <p className="text-sm text-[#8089C6]">{skill}</p>
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
