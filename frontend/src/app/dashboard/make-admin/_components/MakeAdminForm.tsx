"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const MAX_FILE_SIZE = 5000000; // 5MB
function checkFileType(file: File | null) {
  if (file?.name) {
    const fileType = file?.name?.split(".")?.pop() as string;
    const allowedTypes = ["png", "jpg", "jpeg"];
    if (allowedTypes.includes(fileType)) return true;
  }
  return false;
}

const formSchema = z.object({
  username: z.string().min(3, {
    message: "Username must be at least 3 characters long",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  avatar: z.any().refine((file) => file, "File is required"),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters long",
  }),
});

type FormData = z.infer<typeof formSchema>;

const MakeAdminForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    setValue,
    setError,

    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });
  const [isValid, setIsValid] = React.useState(false);
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    
    if (!file) {
      setError("avatar", {
        type: "manual",
        message: "File is required",
      });
      return setIsValid(false);
    }
    // Perform file validations
    else if (file.size > MAX_FILE_SIZE) {
      setError("avatar", {
        type: "manual",
        message: "Max size is 5MB.",
      });
      return setIsValid(false);
    } else if (!checkFileType(file)) {
      setError("avatar", {
        type: "manual",
        message: "Only .png, .jpg, .jpeg formats are supported.",
      });
      return setIsValid(false);
    } else {
      setError("avatar", {});
      setIsValid(true);
    }

    setValue("avatar", file);
  };

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[90%] sm:w-[60%] md:w-[50%] xl:w-[30%] py-20 mx-auto font-rubik 
      "
    >
      {/*  create a field for username */}
      <div className="relative z-0 w-full mb-16 group">
        <input
          type="text"
          id="username"
          className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b border-medium-gray appearance-none text-white  focus:border-primary-orange focus:outline-none focus:ring-0"
          {...register("username")}
        />
        <label
          htmlFor="username"
          className="absolute text-2xl text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 -left-4 font-medium uppercase"
        >
          Username
        </label>
        {errors.username && (
          <p className="mt-2 text-red-500 text-sm">{errors.username.message}</p>
        )}
      </div>

      {/* Email Field */}
      <div className="relative z-0 w-full mb-16 group">
        <input
          type="email"
          id="email"
          className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b border-medium-gray appearance-none text-white  focus:border-primary-orange focus:outline-none focus:ring-0"
          {...register("email")}
        />
        <label
          htmlFor="email"
          className="absolute text-2xl text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 -left-2 font-medium uppercase"
        >
          Email
        </label>
        {errors.email && (
          <p className="mt-2 text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      {/* Password Field */}
      <div className="relative z-0 w-full mb-16 group">
        <input
          type="password"
          id="password"
          className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b border-medium-gray appearance-none text-white  focus:border-primary-orange focus:outline-none focus:ring-0"
          {...register("password")}
        />
        <label
          htmlFor="password"
          className="absolute text-2xl text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 -left-4 font-medium uppercase"
        >
          Password
        </label>
        {errors.password && (
          <p className="mt-2 text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>

      {/*  create a field for avatar */}
      <div className="relative z-0 w-full mb-10 group">
        <input
          //required
          onChange={handleAvatarChange}
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
        {errors.avatar && (
          <p className="mt-2 text-red-500 text-sm">
            {errors.avatar.message?.toString()}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        disabled={!isValid}
        type="submit"
        className="text-[17px] text-white hover:bg-primary-orange focus:ring-4 focus:outline-none focus:ring-primary-orange font-medium rounded-full uppercase w-full sm:w-auto px-8 py-1.5 leading-[28.44px] text-center bg-primary-orange"
      >
        Register
      </button>
    </form>
  );
};

export default MakeAdminForm;
