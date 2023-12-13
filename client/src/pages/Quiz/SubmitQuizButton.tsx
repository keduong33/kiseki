import { useNavigate } from "react-router-dom";
import { Button } from "../../components/shadcn/ui/button";
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

export function SubmitQuizButton({ disabled }: { disabled: boolean }) {
  const navigate = useNavigate();
  const [usersAnswers, questions] = useQuizState((state) => [
    state.userAnswers,
    state.questions,
  ]);

  const submitQuiz = () => {
    console.log("Submitting quiz");
    const [quizResult, error] = markQuiz(usersAnswers, questions);
    if (error) {
      console.error("Failed to mark quiz:", error.message);
      return;
    }
    console.log(quizResult);

    // navigate(PageLocation.QuizSummary, {state:{result:quizResult}});
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button disabled={disabled}>Submit</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Submitting Answers</DialogTitle>
          <DialogDescription>
            Have you done checking your answers?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="gap-2">
          <Button onClick={submitQuiz}>Continue</Button>
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
