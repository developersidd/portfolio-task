import {
  LOGGED_OUT,
  SET_USER,
  TOKEN_REFRESHED,
  UserAction,
} from "@/actions/user.acton";
import { IUser } from "@/context/user.context";

export const initialState = {};

const userReducer = (state: IUser, action: UserAction): IUser | null => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        ...action.payload,
      };
    case LOGGED_OUT:
      return null;
    case TOKEN_REFRESHED:
      return {
        ...state,
        tokens: { ...action.payload },
      };
    default:
      throw new Error(`Unhandled action type`);
  }
};

export default userReducer;
