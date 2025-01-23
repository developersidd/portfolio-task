/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { apiClient } from "@/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters long",
  }),
});

type FormData = z.infer<typeof formSchema>;

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });
  const router = useRouter();
  const onSubmit = async (data: FormData) => {
    const { email, password } = data;
    try {
      const data = await apiClient.post("/users/login", {
        email,
        password,
      });
      const user = data.data;
      toast.success(
        `Welcome back - ${user?.role?.toUpperCase()}: ${user?.username}!`
      );
      localStorage.setItem("loggedIn", "true");
      router.push("/dashboard/");
    } catch (e: any) {
      toast.error("There was an error occurred!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[90%] sm:w-[60%] md:w-[50%] xl:w-[30%] py-20 mx-auto font-rubik 
      "
    >
      {/* Name Field */}
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
      <div className="relative z-0 w-full mb-12 group">
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

      {/* Submit Button */}
      <button
        type="submit"
        className="text-[17px] text-white hover:bg-primary-orange focus:ring-4 focus:outline-none focus:ring-primary-orange font-medium rounded-full uppercase w-full sm:w-auto px-8 py-1.5 leading-[28.44px] text-center bg-primary-orange"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
