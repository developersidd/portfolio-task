"use client";

import useAxios from "@/hooks/useAxios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const DeleteProject = ({ projectId }: { projectId: string }) => {
  const { apiClient } = useAxios();
  const router = useRouter();
  const handleDeleteProject = async () => {
    try {
      await apiClient.delete(`/projects/${projectId}`);
      router.refresh();
      toast.success("Project deleted successfully");
    } catch (e: any) {
      console.error("Failed to delete project", e);
    }
  };
  return (
    <button
      onClick={handleDeleteProject}
      className="font-medium text-red-600  hover:underline"
    >
      Delete
    </button>
  );
};

export default DeleteProject;
