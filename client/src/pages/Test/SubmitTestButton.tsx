import { useNavigate } from "react-router-dom";
import { PageLocation } from "../../components/page/PageLocation";
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

export function SubmitTestButton({ disabled }: { disabled: boolean }) {
  const navigate = useNavigate();

  const submitTest = () => {
    console.log("Submitting test");
    navigate(PageLocation.TestSummary);
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
          <Button onClick={submitTest}>Continue</Button>
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
