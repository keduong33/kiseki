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
import { useMarkedQuizState } from "../../states/MarkedQuiz.state";
import { useQuizState } from "../../states/Quiz.state";
import { markQuiz } from "./markQuiz/markQuiz";

export function SubmitQuizButton({ className }: { className: string }) {
  const navigate = useNavigate();
  const [usersAnswers, questions, startTimeStamp, endTimeStamp] = useQuizState(
    (state) => [
      state.userAnswers,
      state.questions,
      state.startTimeStamp,
      state.endTimeStamp,
    ]
  );

  const submitQuiz = () => {
    const submitTime = new Date();
    console.log(`Submitting quiz @ ${submitTime}`);

    const [markedQuiz, error] = markQuiz(
      usersAnswers,
      questions,
      startTimeStamp!,
      endTimeStamp ?? submitTime
    );
    if (error) {
      console.error("Failed to mark quiz:", error.message);
      return;
    }

    useMarkedQuizState.setState({
      questions: markedQuiz.questions,
      startTimeStamp: markedQuiz.startTimeStamp,
      endTimeStamp: markedQuiz.endTimeStamp,
    });

    navigate(PageLocation.QuizSummary, {
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
