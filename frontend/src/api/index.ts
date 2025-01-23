/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { getAccessToken, refreshAccessToken } from "./auth.api";

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Function to make an API request and handle 401 errors and token refresh
export async function fetchWithAuth(url: string, options: any) {
  try {
    const accessToken = await getAccessToken(); // Get access token from cookies/session
    if (!accessToken) {
      throw new Error("Session expired");
    }
    const response = await apiClient({
      ...options,
      url,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.status === 401 && !options._retry) {
      options._retry = true;
      // If we receive a 401, try refreshing the token
      try {
        const { data } = (await refreshAccessToken()) || {};
        //console.log("data:", data);
        const newAccessToken = data?.accessToken;
        // Retry the original request with the new token
        await apiClient({
          ...options,
          url,
          headers: {
            ...options.headers,
            Authorization: `Bearer ${newAccessToken}`,
          },
        });
      } catch (refreshError: any) {
        console.log("refreshError:", refreshError);
        throw new Error(
         
          "Session expired or there was error refreshing token. Please log in again."
        );
      }
    }
    throw error; 
  }
}
