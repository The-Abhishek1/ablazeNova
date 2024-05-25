"use client";

import React, { useEffect, useState } from "react";
import { BsMotherboard } from "react-icons/bs";
import { FaMinus } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";

//Main Function
export default function FAQ() {
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
          <h1 className="text-center">Talk To About Any</h1>
          <h1 className="text-center text-blue-600 font-normal">Question?</h1>
        </div>
      </div>
      <div className="flex flex-col  items-center w-full gap-3">
        <div className="flex flex-col gap-3 items-center bg-indigo-50 w-[80%] rounded-md">
          <div
            style={{ backgroundColor: "black", color: "white" }}
            className="flex flex-row font-bold gap-2 p-3 justify-between items-center w-full "
          >
            <h1 className="text-[15px] mmd:text-[13px]">
              What sets ablazeNova apart from other digital agencies?
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
              We blend creativity with technology to deliver personalized
              digital solutions. Our team listens to your needs, collaborates
              closely with you, and uses the latest tech to create stunning
              websites, apps, and marketing strategies. At ablazeNova, your
              success is our top priority, and we go the extra mile to make sure
              you stand out.
            </div>
          ) : null}
        </div>
        <div className="flex flex-col gap-3 items-center bg-indigo-50 w-[80%] rounded-md">
          <div
            style={{ backgroundColor: "black", color: "white" }}
            className="flex flex-row font-bold gap-2 p-3 justify-between items-center w-full "
          >
            <h1 className="text-[15px] mmd:text-[13px]">
              How does ablazeNova keep my project secure and scalable?
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
              Security and growth are built into everything we do. We use
              trusted tools like Firebase for secure data and scalable
              solutions. Our team follows best practices to protect your
              information and ensure your website or app can grow with your
              business. You can trust us to keep your digital presence safe and
              strong.
            </div>
          ) : null}
        </div>
        <div className="flex flex-col gap-3 items-center bg-indigo-50 w-[80%] rounded-md">
          <div
            style={{ backgroundColor: "black", color: "white" }}
            className="flex flex-row font-bold gap-2 p-3 justify-between items-center w-full "
          >
            <h1 className="text-[15px] mmd:text-[13px]">
              Will ablazeNova support my business after the project is done?
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
              Absolutely! We're here for the long haul. Our support doesn't stop
              when the project ends. We offer ongoing website management,
              updates, and digital marketing to keep your business thriving
              online. Think of us as your digital partner, always ready to help
              you succeed.
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
