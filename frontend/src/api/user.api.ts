/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { fetchWithAuth } from ".";
import { getAccessToken } from "./auth.api";

const retrieveCurrentUser = async () => {
  try {
    const accessToken = getAccessToken();
    if (!accessToken) {
      return {
        error: "No access token found",
      };
    }
    const res = await fetchWithAuth("/users/current-user", {
      method: "GET",
    });
    return {
      data: res.data,
    };
  } catch (e: any) {
    return {
      error: e.message,
    };
  }
};

export { retrieveCurrentUser };
