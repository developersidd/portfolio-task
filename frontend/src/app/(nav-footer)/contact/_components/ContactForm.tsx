"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto font-rubik 

      

      "
    >
      {/* Name Field */}
      <div className="relative z-0 w-full mb-14 group">
        <input
          type="text"
          id="name"
          className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b border-medium-gray appearance-none text-white  focus:border-primary-orange focus:outline-none focus:ring-0"
          {...register("name")}
        />
        <label
          htmlFor="name"
          className="absolute text-2xl text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 -left-2 font-medium uppercase"
        >
          Name
        </label>
        {errors.name && (
          <p className="mt-2 text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>

      {/* Subject Field */}
      <div className="relative z-0 w-full mb-14 group">
        <input
          type="text"
          id="subject"
          className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b border-medium-gray appearance-none text-white  focus:border-primary-orange focus:outline-none focus:ring-0"
          {...register("subject")}
        />
        <label
          htmlFor="subject"
          className="absolute text-2xl text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 -left-3 font-medium uppercase"
        >
          Subject
        </label>
        {errors.subject && (
          <p className="mt-2 text-red-500 text-sm">{errors.subject.message}</p>
        )}
      </div>

      {/* Message Field */}
      <div className="relative z-0 w-full mb-10 group">
        <input
          id="message"
          className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b border-medium-gray appearance-none text-white  focus:border-primary-orange focus:outline-none focus:ring-0"
          {...register("message")}
        />
        <label
          htmlFor="message"
          className="absolute text-2xl text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 -left-3 font-medium uppercase"
        >
          Message
        </label>
        {errors.message && (
          <p className="mt-2 text-red-500 text-sm">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="text-[17px] text-white hover:bg-primary-orange focus:ring-4 focus:outline-none focus:ring-primary-orange font-medium rounded-full uppercase w-full sm:w-auto px-8 py-1.5 leading-[28.44px] text-center bg-primary-orange"
      >
        send
      </button>
    </form>
  );
};

export default ContactForm;
