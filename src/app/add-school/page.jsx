"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function AddSchool() {
  const form = useForm();
  const { register, handleSubmit, formState, reset } = form;
  const { errors, isSubmitSuccessful } = formState;
  const [formInput, setFormInput] = useState([]);

  const onSubmit = (data) => {
    setFormInput(data);
  };

  console.log({ formInput });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <section className="w-full  flex items-start justify-center ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-start justify-center gap-4 bg-slate-900 p-6 w-[60%] m-5 rounded-lg "
        noValidate
      >
        <label
          htmlFor="name"
          className="leading-[8px] text-left block mb-[13px] mt-[20px] text-white text-[14px] font-[200] "
        >
          Enter School Name
        </label>
        <input
          style={{
            color: "black",
          }}
          type="text"
          id="name"
          {...register("name", {
            required: {
              value: true,
              message: "School name is required",
            },
          })}
          placeholder="Enter Name"
          className="block border-box w-full rounded-[4px] border border-[#FFFFFF] px-[15px] py-[10px] text-[14px]"
        />
        <p className="text-red-600 text-[14px] text-left ">
          {errors.name?.message}
        </p>

        <label
          htmlFor="address"
          className="leading-[8px] text-left block mb-[13px] mt-[20px] text-white text-[14px] font-[200] "
        >
          Enter School Address
        </label>
        <input
          style={{
            color: "black",
          }}
          type="text"
          id="address"
          {...register("address", {
            required: {
              value: true,
              message: "School address is required",
            },
          })}
          placeholder="Enter Address"
          className="block border-box w-full rounded-[4px] border border-[#FFFFFF] px-[15px] py-[10px] text-[14px]"
        />
        <p className="text-red-600 text-[14px] text-left ">
          {errors.address?.message}
        </p>

        <label
          htmlFor="city"
          className="leading-[8px] text-left block mb-[13px] mt-[20px] text-white text-[14px] font-[200] "
        >
          Enter School City
        </label>
        <input
          style={{
            color: "black",
          }}
          type="text"
          id="city"
          {...register("city", {
            required: {
              value: true,
              message: "School city is required",
            },
          })}
          placeholder="Enter City"
          className="block border-box w-full rounded-[4px] border border-[#FFFFFF] px-[15px] py-[10px] text-[14px]"
        />
        <p className="text-red-600 text-[14px] text-left ">
          {errors.city?.message}
        </p>

        <label
          htmlFor="state"
          className="leading-[8px] text-left block mb-[13px] mt-[20px] text-white text-[14px] font-[200] "
        >
          Enter School State
        </label>
        <input
          style={{
            color: "black",
          }}
          type="text"
          id="state"
          {...register("state", {
            required: {
              value: true,
              message: "School state is required",
            },
          })}
          placeholder="Enter State"
          className="block border-box w-full rounded-[4px] border border-[#FFFFFF] px-[15px] py-[10px] text-[14px]"
        />
        <p className="text-red-600 text-[14px] text-left ">
          {errors.state?.message}
        </p>

        <label
          htmlFor="contact"
          className="leading-[8px] text-left block mb-[13px] mt-[20px] text-white text-[14px] font-[200] "
        >
          Enter School Contact Number
        </label>
        <input
          style={{
            color: "black",
          }}
          type="number"
          id="contact"
          {...register("contact", {
            required: {
              value: true,
              message: "School Contact is required",
            },
          })}
          placeholder="Enter Contact Number"
          className="block border-box w-full rounded-[4px] border border-[#FFFFFF] px-[15px] py-[10px] text-[14px]"
        />
        <p className="text-red-600 text-[14px] text-left ">
          {errors.contact?.message}
        </p>

        <label
          htmlFor="image"
          className="leading-[8px] text-left block mb-[13px] mt-[20px] text-white text-[14px] font-[200] "
        >
          Enter School Image
        </label>
        <input
          style={{
            color: "black",
          }}
          type="text"
          id="image"
          {...register("image", {
            required: {
              value: true,
              message: "School image is required",
            },
          })}
          placeholder="Enter Image"
          className="block border-box w-full rounded-[4px] border border-[#FFFFFF] px-[15px] py-[10px] text-[14px]"
        />
        <p className="text-red-600 text-[14px] text-left ">
          {errors.image?.message}
        </p>

        <label
          htmlFor="email"
          className="leading-[8px] text-left block mb-[13px] mt-[20px] text-white text-[14px] font-[200] "
        >
          Enter School Email
        </label>
        <input
          style={{
            color: "black",
          }}
          type="text"
          id="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "Invalid email format",
            },
          })}
          placeholder="Enter Email"
          className="block border-box w-full rounded-[4px] border border-[#FFFFFF] px-[15px] py-[10px] text-[14px]"
        />
        <p className="text-red-600 text-[14px] text-left ">
          {errors.email?.message}
        </p>

        <button
          className="text-white text-center w-full bg-black uppercase border-none mt-1 p-5 text-[16px] font-[100] tracking-[10px] "
          type="submit"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
