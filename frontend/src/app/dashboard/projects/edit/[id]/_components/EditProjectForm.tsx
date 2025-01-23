/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import useAxios from "@/hooks/useAxios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  title: z.string().min(10, {
    message: "Title must be at least 10 characters long",
  }),
  description: z.string().min(10, {
    message: "Title must be at least 10 characters long",
  }),
  story: z.string().min(10, {
    message: "Title must be at least 10 characters long",
  }),
  theme: z.string().min(3, {
    message: "Title must be at least 3 characters long",
  }),
});

type FormData = z.infer<typeof formSchema>;

const EditProjectForm = ({ id, data }: { id: string; data: any }) => {
  const { title, description, story, theme } = data || {};
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });
  const { apiClient } = useAxios();
  const router = useRouter();
  useEffect(() => {
    setValue("title", title);
    setValue("theme", theme);
    setValue("description", description);
    setValue("story", story);
  }, [title, description, story, theme, setValue]);

  const onSubmit = async (data: FormData) => {
    console.log("data:", data);
    try {
      await apiClient.patch(`/projects/${id}`, data);
      router.refresh();
      toast.success("Project edited successfully");
    } catch (e: any) {
      toast.error("Failed to Edit project");
      console.error("Failed to Edit project", e);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[90%] sm:w-[60%] md:w-[50%] xl:w-[30%] py-20 mx-auto font-rubik 
      "
    >
      {/*  create a field for title */}
      <div className="relative z-0 w-full mb-16 group">
        <input
          type="text"
          id="title"
          className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b border-medium-gray appearance-none text-white  focus:border-primary-orange focus:outline-none focus:ring-0"
          {...register("title")}
        />
        <label
          htmlFor="title"
          className="absolute text-2xl text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 -left-4 font-medium uppercase"
        >
          Title
        </label>
        {errors.title && (
          <p className="mt-2 text-red-500 text-sm">{errors.title.message}</p>
        )}
      </div>

      {/*  theme field */}
      <div className="relative z-0 w-full mb-16 group">
        <input
          type="text"
          id="theme"
          className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b border-medium-gray appearance-none text-white  focus:border-primary-orange focus:outline-none focus:ring-0"
          {...register("theme")}
        />
        <label
          htmlFor="theme"
          className="absolute text-2xl text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 -left-4 font-medium uppercase"
        >
          Theme
        </label>
        {errors.theme && (
          <p className="mt-2 text-red-500 text-sm">{errors.theme.message}</p>
        )}
      </div>
      {/*  description */}
      <div className="relative z-0 w-full mb-16 group">
        <input
          type="text"
          id="description"
          className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b border-medium-gray appearance-none text-white  focus:border-primary-orange focus:outline-none focus:ring-0"
          {...register("description")}
        />
        <label
          htmlFor="description"
          className="absolute text-2xl text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 -left-4 font-medium uppercase"
        >
          Description
        </label>
        {errors.description && (
          <p className="mt-2 text-red-500 text-sm">
            {errors.description.message}
          </p>
        )}
      </div>

      {/*  story */}
      <div className="relative z-0 w-full mb-16 group">
        <input
          type="text"
          id="story"
          className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b border-medium-gray appearance-none text-white  focus:border-primary-orange focus:outline-none focus:ring-0"
          {...register("story")}
        />
        <label
          htmlFor="story"
          className="absolute text-2xl text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 -left-4 font-medium uppercase"
        >
          Story
        </label>
        {errors.story && (
          <p className="mt-2 text-red-500 text-sm">{errors.story.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="text-[17px] text-white hover:bg-primary-orange focus:ring-4 focus:outline-none focus:ring-primary-orange font-medium rounded-full uppercase w-full sm:w-auto px-8 py-1.5 leading-[28.44px] text-center bg-primary-orange"
      >
        Edit
      </button>
    </form>
  );
};

export default EditProjectForm;
