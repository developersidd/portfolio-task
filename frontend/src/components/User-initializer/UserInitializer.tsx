"use client";
import { SET_USER } from "@/actions/user.acton";
import useAxios from "@/hooks/useAxios";
import useUserContext from "@/hooks/useUserContext";
import { useEffect } from "react";

const UserInitializer = () => {
  const userContext = useUserContext();
  const { apiClient } = useAxios();
  useEffect(() => {
    const fetchUser = async () => {
      console.log("fetchUser");
      try {
        const res = await apiClient.get("/users/current-user");
        userContext?.dispatch({ type: SET_USER, payload: res.data?.data });
        //hasFetchedUser.current = true;
      } catch (error: unknown) {
        console.log("error init:", error);
      }
    };
    if (Boolean(localStorage.getItem("loggedIn"))) {
      fetchUser();
    }
  }, [apiClient, userContext?.dispatch]);
  return null;
};
export default UserInitializer;
