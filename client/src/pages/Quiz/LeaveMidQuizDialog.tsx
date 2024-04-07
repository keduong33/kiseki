import type { Blocker } from "react-router-dom";
import KisekiButton from "../../components/kiseki/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../../components/shadcn/ui/dialog";

type LeaveMidQuizDialogProps = {
  show?: boolean;
  setShow?: (show: boolean) => void;
  blocker: Blocker;
};

function LeaveMidQuizDialog({
  show,
  blocker,
  setShow,
}: LeaveMidQuizDialogProps) {
  const leaveQuiz = () => {
    blocker.proceed && blocker.proceed();
  };

  const resumeQuiz = () => {
    blocker.reset && blocker.reset();
  };

  return (
    <Dialog open={show} onOpenChange={setShow}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>A quiz is in progress</DialogTitle>
          <DialogDescription>
            You sure you wanna leave the quiz?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="gap-2">
          <KisekiButton onClick={leaveQuiz} variant="secondary" type="button">
            Leave
          </KisekiButton>
          <DialogClose asChild>
            <KisekiButton type="button" onClick={resumeQuiz}>
              Resume
            </KisekiButton>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default LeaveMidQuizDialog;
