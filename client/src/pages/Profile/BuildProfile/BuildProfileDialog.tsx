import type { UserResource } from "@clerk/types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../../components/shadcn/ui/dialog";
import { ProfileForm } from "./ProfileForm";

function BuildProfileDialog({ user }: { user: UserResource }) {
  return (
    <Dialog open>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Getting to know you</DialogTitle>
          <DialogDescription>
            Please tell us a bit about yourself. Click save when you're done.
          </DialogDescription>
        </DialogHeader>

        <ProfileForm user={user} />
      </DialogContent>
    </Dialog>
  );
}

export default BuildProfileDialog;
