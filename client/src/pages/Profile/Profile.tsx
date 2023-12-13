import { UserButton, useUser } from "@clerk/clerk-react";
import { PageLocation } from "../../../types/PageLocation";
import type { UserProfileMetadata } from "./UserProfile";

const Profile = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  const userMetaData = user?.publicMetadata as UserProfileMetadata;

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
