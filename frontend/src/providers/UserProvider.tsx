"use client";
import UserContext from "@/context/user.context";
import userReducer, { initialState } from "@/reducers/user.reducer";
import { useReducer } from "react";

const UserProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  return (
    <UserContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
