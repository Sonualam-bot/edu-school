import React from "react";

function Input({ label, htmlFor, type, id, name, placeholder, register }) {
  return (
    <>
      <label
        htmlFor={htmlFor}
        className="leading-[8px] text-left block mb-[13px] mt-[20px] text-white text-[14px] font-[200] "
      >
        {label}
      </label>
      <input
        style={{
          color: "black",
        }}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        ref={register}
        className="block border-box w-full rounded-[4px] border border-[#FFFFFF] px-[15px] py-[10px] text-[14px]"
      />
    </>
  );
}

export default Input;
