import { UserAction } from "@/actions/user.acton";
import { createContext } from "react";

type Avatar = {
  url: string;
  public_id: string;
};

export interface IUser {
  username: string;
  email: string;
  avatar: Avatar;
  password: string;
  role: string;
  tokens: {
    accessToken?: string;
    refreshToken?: string;
  };
  _id: string;
}

// Context and Provider
const UserContext = createContext<{
  state: IUser;
  dispatch: React.Dispatch<UserAction>;
} | null>(null);

export default UserContext;
