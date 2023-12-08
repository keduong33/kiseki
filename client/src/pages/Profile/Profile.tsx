import { UserButton, useUser } from "@clerk/clerk-react";
import Page from "../../components/page/Page";
import { PageLocation } from "../../components/page/PageLocation";
import type { UserProfileMetadata } from "./UserProfile";

const Profile = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  const userMetaData = user?.publicMetadata as UserProfileMetadata;

  return (
    <Page pageTitle="Profile">
      {isLoaded && isSignedIn && (
        <div>
          Hello, {user?.fullName}. You are from {userMetaData.school}
          <UserButton afterSignOutUrl={PageLocation.Dashboard} />
        </div>
      )}
    </Page>
  );
};
export default Profile;
