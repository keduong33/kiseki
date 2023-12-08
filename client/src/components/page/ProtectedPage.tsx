import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";
import { PageLocation } from "./PageLocation";

function ProtectedPage({ children }: { children: JSX.Element }) {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn afterSignUpUrl={PageLocation.Dashboard} />
      </SignedOut>
    </>
  );
}

export default ProtectedPage;
