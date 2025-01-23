import { IUser } from "@/hooks/useUserContext";

const SET_USER = "SET_USER";
const LOGGED_OUT = "LOGGED_OUT";
const PROFILE_UPDATED = "PROFILE_UPDATED";
const TOKEN_REFRESHED = "TOKEN_REFRESHED";

// Define a union type for all possible actions
export type UserAction =
  | {
      type: typeof SET_USER;
      payload: IUser;
    }
  | { type: typeof LOGGED_OUT }
  | {
      type: typeof TOKEN_REFRESHED;
      payload: {
        accessToken: string;
        refreshToken: string;
      };
    };

export { LOGGED_OUT, PROFILE_UPDATED, SET_USER, TOKEN_REFRESHED };
