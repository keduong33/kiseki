import { useAuth, useUser } from "@clerk/clerk-react";
import Page from "../../components/page/Page";
import type { UserProfileMetadata } from "./UserProfile";

const Profile = () => {
  const { isLoaded, userId, sessionId } = useAuth();
  const { user } = useUser();

  const userMetaData = user?.publicMetadata as UserProfileMetadata;
  return (
    <Page pageTitle="Profile">
      {isLoaded && userId && (
        <div>
          Hello, {userId}:{user?.fullName} your current active session is{" "}
          {sessionId}. You are from {userMetaData.school}
        </div>
      )}
    </Page>
  );
};
export default Profile;
