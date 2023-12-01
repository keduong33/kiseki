import { useAuth0 } from "@auth0/auth0-react";
import axios, { AxiosError, type AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { config } from "../../common/config";
import Page from "../../components/page/Page";
import { Button } from "../../components/shadcn/ui/button";
import type { UserProfile } from "./UserProfile";

const Profile = () => {
  const {
    user,
    isAuthenticated,
    isLoading,
    loginWithRedirect,
    logout,
    getAccessTokenSilently,
  } = useAuth0();

  const [userProfile, setUserProfile] = useState<UserProfile>({});

  useEffect(() => {
    const getUserMetadata = async () => {
      const { auth0 } = config;
      const domain = auth0.domain;

      try {
        const accessToken = await getAccessTokenSilently();

        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user?.sub}`;

        const metadataResponse: AxiosResponse<UserProfile> = await axios.get(
          userDetailsByIdUrl,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        const userProfile = metadataResponse.data;

        setUserProfile(userProfile);
      } catch (e) {
        const error = e as AxiosError;
        console.error(error.code, error.message);
      }
    };

    if (user?.sub) getUserMetadata();
  }, [getAccessTokenSilently, user?.sub]);

  return (
    <Page pageTitle="Profile">
      {isLoading && <>Loading...</>}
      {isAuthenticated && (
        <div>
          <img src={userProfile?.picture} />
          <h2>Hello {userProfile?.name},</h2>
          <div>
            <p>Here are your details:</p>
            <p>Email: {userProfile?.email}</p>
            <p>School: {userProfile?.user_metadata?.school}</p>
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
