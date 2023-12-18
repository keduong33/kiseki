import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import Button from "../../components/kiseki/button";
import { DialogFooter, DialogHeader } from "../../components/shadcn/ui/dialog";

type LeaveMidQuizWarningProps = {
  show?: boolean;
};

function LeaveMidQuizWarning({ show }: LeaveMidQuizWarningProps) {
  return (
    <Dialog open>
      <DialogTrigger asChild></DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>A quiz is in progress</DialogTitle>
          <DialogDescription>
            You sure you wanna leave the quiz?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="gap-2">
          <Button>Leave</Button>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Resume
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default LeaveMidQuizWarning;
