"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";
import google from "@/publicgoogle.jpg";
export default function Rightside() {
  const navigation = useRouter();
  return (
    <div className="flex w-[300px] rounded-md flex-col bg-slate-200 p-5 h-[450px] mmd:h-[500px]">
      <h2 className="text-[20px] font-bold text-center">SignUp</h2>
      <button
        onClick={() => {
          navigation.push("signin");
        }}
        className="bg-blue-600 md:hidden text-white p-2 text-[13px] font-bold
        w-[100%] rounded-2xl mt-5"
      >
        {" "}
        Already have an account? signin.
      </button>
      <div className="flex flex-col gap-3 mt-10">
        <input
          className="outline-none bg-slate-100 p-2 rounded-lg text-[13px]"
          type="text"
          name="name"
          id=""
          placeholder="Name"
        />
        <input
          className="outline-none bg-slate-100 p-2 rounded-lg text-[13px]"
          type="email"
          name="email"
          id=""
          placeholder="Email"
        />
        <input
          className="outline-none bg-slate-100 p-2 rounded-lg text-[13px]"
          type="password"
          name="password"
          id=""
          placeholder="Password"
        />
        <input
          className="outline-none bg-slate-100 p-2 rounded-lg text-[13px]"
          type="password"
          name="cpassword"
          id=""
          placeholder="Confirm Password"
        />
      </div>
      <div className="flex flex-col gap-3 mt-3">
        <button
          onClick={() => {
            navigation.push("home");
          }}
          className="bg-blue-500 text-[13px] p-2 rounded-2xl text-white font-bold mt-5"
        >
          Signup
        </button>
        <p className="text-center font-bold ">OR</p>
        <div className="flex p-2 rounded-2xl flex-row bg-slate-100 items-center justify-center">
          <Image src={google} height={20} />
          <p className="text-[13px] font-bold">Sign up with google</p>
        </div>
      </div>
    </div>
  );
}
