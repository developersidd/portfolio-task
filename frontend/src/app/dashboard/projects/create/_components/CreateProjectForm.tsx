/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import useAxios from "@/hooks/useAxios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
const MAX_FILE_SIZE = 5000000; // 5MB

const ACCEPTED_IMAGE_TYPES = ["image/png", "image/jpeg", "image/jpg"];

const formSchema = z.object({
  title: z.string().min(10, {
    message: "Title must be at least 10 characters long",
  }),
  tags: z.string().min(10, {
    message: "Title must be at least 10 characters long",
  }),
  description: z.string().min(10, {
    message: "Title must be at least 10 characters long",
  }),
  thumbnail: z
    .any()
    .optional()
    .refine(
      (file) =>
        file?.length == 1
          ? ACCEPTED_IMAGE_TYPES.includes(file?.[0]?.type)
            ? true
            : false
          : true,
      "Invalid file. choose either JPEG or PNG image"
    )
    .refine(
      (file) =>
        file?.length == 1
          ? file[0]?.size <= MAX_FILE_SIZE
            ? true
            : false
          : true,
      "Max file size allowed is 8MB."
    ),
  imageOne: z.any().refine((file) => file, "imageOne is required"),
  imageTwo: z.any().refine((file) => file, "imageTwo is required"),
  story: z.string().min(10, {
    message: "Title must be at least 10 characters long",
  }),
  theme: z.string().min(3, {
    message: "Title must be at least 3 characters long",
  }),
});

type FormData = z.infer<typeof formSchema>;

const CreateProjectForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });
  const { apiClient } = useAxios();
  const router = useRouter();
  const onSubmit = async (data: FormData) => {
    return console.log("data:", data);
    try {
      await apiClient.post(`/projects/create`, data);
      router.refresh();
      toast.success("Project Created successfully");
    } catch (e: any) {
      toast.error("Failed to Create project");
      console.error("Failed to Create project", e);
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

      {/* Email Field */}
      <div className="relative z-0 w-full mb-16 group">
        <input
          type="text"
          id="tags"
          className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b border-medium-gray appearance-none text-white  focus:border-primary-orange focus:outline-none focus:ring-0"
          {...register("tags")}
        />
        <label
          htmlFor="tags"
          className="absolute text-2xl text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 -left-2 font-medium uppercase"
        >
          Tags
        </label>
        {errors.tags && (
          <p className="mt-2 text-red-500 text-sm">{errors.tags.message}</p>
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
      <div className="relative z-0 w-full mb-10 group">
        <input
          //required
          {...register("thumbnail")}
          type="file"
          id="avatar"
          className="block py-2.5 px-0 w-full text-sm  bg-transparent   appearance-none text-white  focus:border-primary-orange focus:outline-none focus:ring-0"
        />
        <label
          htmlFor="avatar"
          className="absolute text-2xl text-white duration-300 transform -translate-y-7 scale-75 top-0 -z-10 -left-2 font-medium uppercase"
        >
          Avatar
        </label>
        {errors.thumbnail && (
          <p className="mt-2 text-red-500 text-sm">
            {errors.thumbnail.message}
          </p>
        )}
      </div>
      {/* Submit Button */}
      <button
        type="submit"
        className="text-[17px] text-white hover:bg-primary-orange focus:ring-4 focus:outline-none focus:ring-primary-orange font-medium rounded-full uppercase w-full sm:w-auto px-8 py-1.5 leading-[28.44px] text-center bg-primary-orange"
      >
        Create
      </button>
    </form>
  );
};

export default CreateProjectForm;
