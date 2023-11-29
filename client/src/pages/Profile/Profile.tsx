import { useAuth0 } from "@auth0/auth0-react";
import Page from "../../components/page/Page";
import { Button } from "../../components/shadcn/ui/button";
import type { UserProfile } from "./UserProfile";

const Profile = () => {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
    useAuth0<UserProfile>();

  return (
    <Page pageTitle="Profile">
      {isAuthenticated && (
        <div>
          <img src={user?.picture} />
          <h2>Hello {user?.name},</h2>
          <div>
            <p>Here are your details:</p>
            <p>Email: {user?.email}</p>
            <p>D.O.B: {user?.birthdate}</p>
            <p>School: {user?.school}</p>
          </div>

          <Button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log Out
          </Button>
        </div>
      )}

      {!isAuthenticated && (
        <div>
          <p>Please login</p>
          <Button onClick={() => loginWithRedirect()}>Log in</Button>
        </div>
      )}
    </Page>
  );
};
export default Profile;
