/* eslint-disable @typescript-eslint/no-explicit-any */
//"use server";
import { apiClient, fetchWithAuth } from ".";
import { getAccessToken } from "./auth.api";

// get a project by id
const retrieveProject = async (id: string) => {
  try {
    const res = await apiClient.get(`/projects/${id}`);
    return {
      data: res.data?.data,
    };
  } catch (e: any) {
    return {
      error: e.message,
    };
  }
};

// get all projects
const retrieveProjects = async () => {
  try {
    const res = await apiClient.get("/projects");
    return {
      data: res.data?.data,
    };
  } catch (e: any) {
    console.log("e:", e);
    return {
      error: e.message,
    };
  }
};

// create a project
const createProject = async (data: any) => {
  try {
    const accessToken = await getAccessToken();
    if (!accessToken) {
      return {
        error: "No access token found",
      };
    }
    const res = await fetchWithAuth("/projects/create", {
      method: "POST",
      data,
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

// update a project
const updateProject = async (id: string, data: any) => {
  try {
    const accessToken = await getAccessToken();
    if (!accessToken) {
      return {
        error: "No access token found",
      };
    }
    const res = await fetchWithAuth(`/projects/${id}`, {
      method: "PATCH",
      data,
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

// delete a project
const deleteProject = async (id: string) => {
  try {
    const accessToken = await getAccessToken();
    if (!accessToken) {
      return {
        error: "No access token found",
      };
    }
    const res = await fetchWithAuth(`/projects/${id}`, {
      method: "DELETE",
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

export {
  createProject,
  deleteProject,
  retrieveProject,
  retrieveProjects,
  updateProject,
};
