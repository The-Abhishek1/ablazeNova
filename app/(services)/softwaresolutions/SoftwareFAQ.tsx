"use client";

import React, { useEffect, useState } from "react";
import { BsMotherboard } from "react-icons/bs";
import { FaMinus } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";

//Main Function
export default function SoftwareFAQ() {
  const [firstshow, setfFirstShow] = useState(true);
  const [secondtshow, setfSecondShow] = useState(false);
  const [thirdhow, setThirdShow] = useState(false);

  return (
    <div className="p-6 bg-slate-200 flex flex-col items-center gap-5">
      <div className="flex flex-col items-center">
        <div className="flex flex-row items-center gap-3 text-indigo-600 ">
          <BsMotherboard size={30} />
          <h3 className="uppercase text-[18px] mxl:text-[15px]">
            frequently ask question
          </h3>
        </div>
        <div className="flex flex-col gap-1 font-bold text-[30px] mxl:text-[20px]">
          <h1 className="text-center">Questions About</h1>
          <h1 className="text-center text-blue-600 font-normal">Service</h1>
        </div>
      </div>
      <div className="flex flex-col  items-center w-full gap-3">
        <div className="flex flex-col gap-3 items-center bg-indigo-50 w-[80%] rounded-md">
          <div
            style={{ backgroundColor: "black", color: "white" }}
            className="flex flex-row font-bold gap-2 p-3 justify-between items-center w-full "
          >
            <h1 className="text-[15px] mmd:text-[13px]">
              What types of custom software solutions do you provide?
            </h1>
            {firstshow ? (
              <FaMinus
                size={22}
                onClick={() => {
                  setfFirstShow(false);
                }}
                className="cursor-pointer"
              />
            ) : (
              <IoMdAdd
                size={22}
                onClick={() => {
                  setfFirstShow(true);
                }}
                className="cursor-pointer"
              />
            )}
          </div>
          {firstshow ? (
            <div className="text-[14px]  p-3 mmd:text-[12px] ">
              We offer a wide range of custom software solutions, including
              enterprise software, SaaS applications, mobile apps, and
              specialized business tools tailored to your needs.
            </div>
          ) : null}
        </div>
        <div className="flex flex-col gap-3 items-center bg-indigo-50 w-[80%] rounded-md">
          <div
            style={{ backgroundColor: "black", color: "white" }}
            className="flex flex-row font-bold gap-2 p-3 justify-between items-center w-full "
          >
            <h1 className="text-[15px] mmd:text-[13px]">
              How do you ensure the security of the software you develop?
            </h1>
            {secondtshow ? (
              <FaMinus
                size={22}
                onClick={() => {
                  setfSecondShow(false);
                }}
                className="cursor-pointer"
              />
            ) : (
              <IoMdAdd
                size={22}
                onClick={() => {
                  setfSecondShow(true);
                }}
                className="cursor-pointer"
              />
            )}
          </div>
          {secondtshow ? (
            <div className="text-[14px]  p-3 mmd:text-[12px]">
              We prioritize security by implementing best practices such as
              secure coding, regular security audits, encryption, and compliance
              with industry standards to protect your data and systems.
            </div>
          ) : null}
        </div>
        <div className="flex flex-col gap-3 items-center bg-indigo-50 w-[80%] rounded-md">
          <div
            style={{ backgroundColor: "black", color: "white" }}
            className="flex flex-row font-bold gap-2 p-3 justify-between items-center w-full "
          >
            <h1 className="text-[15px] mmd:text-[13px]">
              Can you integrate new software with our existing systems?
            </h1>
            {thirdhow ? (
              <FaMinus
                size={22}
                onClick={() => {
                  setThirdShow(false);
                }}
                className="cursor-pointer"
              />
            ) : (
              <IoMdAdd
                size={22}
                onClick={() => {
                  setThirdShow(true);
                }}
                className="cursor-pointer"
              />
            )}
          </div>
          {thirdhow ? (
            <div className="text-[14px]  p-3 mmd:text-[12px]">
              Yes, we specialize in seamless integration, ensuring that the new
              software works efficiently with your existing systems to enhance
              functionality and streamline operations.
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
