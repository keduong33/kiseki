import { useNavigate } from "react-router-dom";
import { PageLocation } from "../../../../../types/PageLocation";
import Button from "../../../components/kiseki/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../../../components/shadcn/ui/dialog";

function StartQuizDialog({
  showStartQuiz,
  setShowStartQuiz,
}: {
  showStartQuiz: boolean;
  setShowStartQuiz: (open: boolean) => void;
}) {
  const navigate = useNavigate();
  return (
    <Dialog open={showStartQuiz} onOpenChange={setShowStartQuiz}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Diagnostic Test</DialogTitle>
          <DialogDescription>
            Are you ready to take on the challenge?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="gap-2">
          <Button onClick={() => navigate(PageLocation.Quiz)}>Let's go</Button>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cancel
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default StartQuizDialog;
