import { useNavigate } from "react-router-dom";
import { PageLocation } from "../../../../types/PageLocation";
import KisekiButton from "../../components/kiseki/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/shadcn/ui/dialog";
import { useQuizState } from "../../states/Quiz.state";
import { markQuiz } from "./markQuiz/markQuiz";

export function SubmitQuizButton({ className }: { className: string }) {
  const navigate = useNavigate();
  const [usersAnswers, questions] = useQuizState((state) => [
    state.userAnswers,
    state.questions,
  ]);

  const submitQuiz = () => {
    console.log("Submitting quiz");
    const [markedQuiz, error] = markQuiz(usersAnswers, questions);
    if (error) {
      console.error("Failed to mark quiz:", error.message);
      return;
    }

    navigate(PageLocation.QuizSummary, {
      state: { result: markedQuiz },
      replace: true,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <KisekiButton className={className}>Submit</KisekiButton>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Submitting Quiz</DialogTitle>
          <DialogDescription>
            Have you done checking your answers?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="gap-2">
          <DialogClose asChild>
            <KisekiButton type="button" variant="secondary">
              Cancel
            </KisekiButton>
          </DialogClose>
          <KisekiButton onClick={submitQuiz}>Continue</KisekiButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
