import type { User } from "@auth0/auth0-react";

export interface UserProfile extends User {
  user_metadata?: UserProfileMetadata;
}

export type UserProfileMetadata = {
  dateOfBirth?: string;
  school?: string;
};
