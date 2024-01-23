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
import { useQuizState } from "../../../states/Quiz.state";

function StartQuizDialog({
  showStartQuiz,
  setShowStartQuiz,
}: {
  showStartQuiz: boolean;
  setShowStartQuiz: (open: boolean) => void;
}) {
  const navigate = useNavigate();
  const setStartTimeStamp = useQuizState((quiz) => quiz.setStartTimeStamp);

  const startQuiz = () => {
    setStartTimeStamp(new Date());
    navigate(PageLocation.Quiz);
  };
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
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cancel
            </Button>
          </DialogClose>
          <Button onClick={startQuiz}>Let's go</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default StartQuizDialog;
