"use client";

import React, { useEffect, useState } from "react";
import { BsMotherboard } from "react-icons/bs";
import { FaMinus } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";

//Main Function
export default function UIUXFAQ() {
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
              What is UI/UX design and why is it important?
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
              UI/UX design focuses on creating intuitive interfaces and engaging
              user experiences for digital products. It's crucial for attracting
              and retaining users, improving usability, and achieving business
              goals.
            </div>
          ) : null}
        </div>
        <div className="flex flex-col gap-3 items-center bg-indigo-50 w-[80%] rounded-md">
          <div
            style={{ backgroundColor: "black", color: "white" }}
            className="flex flex-row font-bold gap-2 p-3 justify-between items-center w-full "
          >
            <h1 className="text-[15px] mmd:text-[13px]">
              How do you ensure a user-friendly design for our project?
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
              We follow a user-centered design approach, conducting research,
              creating personas, wireframing, prototyping, and testing to ensure
              that the final design meets user needs, preferences, and
              expectations.
            </div>
          ) : null}
        </div>
        <div className="flex flex-col gap-3 items-center bg-indigo-50 w-[80%] rounded-md">
          <div
            style={{ backgroundColor: "black", color: "white" }}
            className="flex flex-row font-bold gap-2 p-3 justify-between items-center w-full "
          >
            <h1 className="text-[15px] mmd:text-[13px]">
              Can you redesign an existing website or application for better
              usability?
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
              Absolutely! We specialize in redesigning websites and applications
              to improve usability, enhance visual appeal, and optimize user
              flows based on feedback, analytics, and industry best practices.
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
