import type { User } from "@auth0/auth0-react";

export interface UserProfile extends User {
  school?: string;
}
