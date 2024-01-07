import { UserButton, useUser } from "@clerk/clerk-react";
import { PageLocation } from "../../../../types/PageLocation";
import type { ClerkUserProfileMetadata } from "../../../../types/User/UserProfile";

const Profile = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  const userMetaData = user?.publicMetadata as ClerkUserProfileMetadata;

  return (
    <>
      {isLoaded && isSignedIn && (
        <div>
          Hello, {user?.fullName}. You are from {userMetaData.school}
          <UserButton afterSignOutUrl={PageLocation.Dashboard} />
        </div>
      )}
    </>
  );
};
export default Profile;
