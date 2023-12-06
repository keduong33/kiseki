import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";

function ProtectedPage({ children }: { children: JSX.Element }) {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}

export default ProtectedPage;
