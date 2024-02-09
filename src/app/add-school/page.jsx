import Input from "@/components/Input";
import React from "react";

function AddSchool() {
  return (
    <section className="w-full  flex items-start justify-center ">
      <form className="flex flex-col items-start justify-center gap-4 bg-slate-600 p-2 w-[60%] m-5">
        <Input
          label="Enter School Name"
          htmlFor="name"
          type="text"
          id="name"
          name="name"
          placeholder="Enter Name"
        />
        <Input
          label="Enter School Address"
          htmlFor="address"
          type="text"
          id="address"
          name="address"
          placeholder="Enter Address"
        />
        <Input
          label="Enter School City"
          htmlFor="city"
          type="text"
          id="city"
          name="city"
          placeholder="Enter City"
        />
        <Input
          label="Enter School State"
          htmlFor="state"
          type="text"
          id="state"
          name="state"
          placeholder="Enter State"
        />
        <Input
          label="Enter School Contact Number"
          htmlFor="contact"
          type="text"
          id="contact"
          name="contact"
          placeholder="Enter Contact Number"
        />
        <Input
          label="Enter School Image"
          htmlFor="image"
          type="text"
          id="image"
          name="image"
          placeholder="Enter Image"
        />
        <Input
          label="Enter School Email"
          htmlFor="email"
          type="text"
          id="email"
          name="email"
          placeholder="Enter Email"
        />

        <button
          className="text-white text-center w-full bg-black uppercase border-none mt-10 p-5 text-[16px] font-[100] tracking-[10px] "
          type="submit"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default AddSchool;
