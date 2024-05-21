"use client";
import React, { useEffect } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { BsMotherboard } from "react-icons/bs";
import { FaLongArrowAltRight } from "react-icons/fa";

//Main Function
export default function Package() {
  return (
    <div className="flex bg-slate-100 flex-col items-center gap-7 py-10 px-5">
      <div className="flex flex-col items-center gap-3">
        <div className="flex flex-row items-center gap-3 text-indigo-600">
          <BsMotherboard size={30} />
          <h3 className="uppercase text-[18px] msm:text-[15px]">Our Pricing</h3>
        </div>
        <div className="flex flex-row gap-2 font-bold text-[20px] msm:text-[20px]">
          <h1 className="text-center">Popular Pricing </h1>
          <h1 className="text-center inline text-blue-600 font-normal">
            Package
          </h1>
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-around gap-10">
        <div className="flex flex-col gap-3 w-[280px] bg-slate-200 rounded-lg group">
          <div className="flex flex-col gap-3 h-[180px] bg-indigo-950 transition-all ease-in-out delay-200 duration-700 group-hover:bg-blue-500 text-white p-5 rounded-lg">
            <div className="flex flex-col gap-3">
              <h1 className="font-bold text-[20px] mxl:text-[16px]">
                Silver Package
              </h1>
              <p className="text-[15px] mxl:text-[13px]">
                Small Businesses and Startups
              </p>
            </div>
            <div className="flex flez-row items-center gap-1">
              <h1 className="font-bold text-[27px] mxl:text-[22px]">$199.00</h1>
              <h4 className="text-[14px] mxl:text-[11px]">/Per Month</h4>
            </div>
          </div>
          <div className="gap-3 flex flex-col pb-5">
            <div className="flex flex-col gap-3 p-5">
              <div className="flex flex-row items-center  gap-3">
                <FaCircleCheck color="blue" />
                <p className="text-[14px] mxl:text-[11px]">
                  Responsive Website Design
                </p>
              </div>
              <div className="flex flex-row items-center  gap-3">
                <FaCircleCheck color="blue" />
                <p className="text-[14px] mxl:text-[11px]">SEO Optimization</p>
              </div>
              <div className="flex flex-row items-center  gap-3">
                <FaCircleCheck color="blue" />
                <p className="text-[14px] mxl:text-[11px]">Standard Hosting</p>
              </div>
              <div className="flex flex-row items-center  gap-3">
                <FaCircleCheck color="gray" />
                <p className="text-[14px] mxl:text-[11px]">Analytics Report</p>
              </div>
              <div className="flex flex-row items-center  gap-3">
                <FaCircleCheck color="gray" />
                <p className="text-[14px] mxl:text-[11px]">Priority Support</p>
              </div>
            </div>
            <div className="p-2 self-center transition-all ease-in-out delay-200 duration-700 cursor-pointer shadow-lg shadow-indigo-950 rounded-md flex flex-row items-center justify-center gap-2 bg-blue-500 text-white w-[180px] hover:bg-indigo-950">
              <button
                onClick={() => {
                  console.log("Clicked on Purchased Now");
                }}
                className="uppercase font-bold text-[13px] mxl:text-[13px]"
              >
                Purchase Now
              </button>
              <FaLongArrowAltRight />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 w-[280px] bg-slate-200 rounded-lg group">
          <div className="flex flex-col gap-3  h-[180px] bg-indigo-950 transition-all ease-in-out delay-200 duration-700 group-hover:bg-blue-500 text-white p-5 rounded-lg">
            <div className="flex flex-col gap-3">
              <h1 className="font-bold text-[20px] mxl:text-[16px]">
                Gold Package
              </h1>
              <p className="text-[15px] mxl:text-[13px]">
                Growing Businesses and Medium-Sized Enterprises
              </p>
            </div>
            <div className="flex flez-row items-center gap-1">
              <h1 className="font-bold text-[27px] mxl:text-[22px]">$299.00</h1>
              <h4 className="text-[14px] mxl:text-[11px]">/Per Month</h4>
            </div>
          </div>
          <div className="gap-3 flex flex-col pb-5">
            <div className="flex flex-col gap-3 p-5">
              <div className="flex flex-row items-center  gap-3">
                <FaCircleCheck color="blue" />
                <p className="text-[14px] mxl:text-[11px]">
                  Responsive Website Design
                </p>
              </div>
              <div className="flex flex-row items-center  gap-3">
                <FaCircleCheck color="blue" />
                <p className="text-[14px] mxl:text-[11px]">SEO Optimization</p>
              </div>
              <div className="flex flex-row items-center  gap-3">
                <FaCircleCheck color="blue" />
                <p className="text-[14px] mxl:text-[11px]">Standard Hosting</p>
              </div>
              <div className="flex flex-row items-center  gap-3">
                <FaCircleCheck color="blue" />
                <p className="text-[14px] mxl:text-[11px]">Analytics Report</p>
              </div>
              <div className="flex flex-row items-center  gap-3">
                <FaCircleCheck color="gray" />
                <p className="text-[14px] mxl:text-[11px]">Priority Support</p>
              </div>
            </div>
            <div className="p-2 self-center transition-all ease-in-out delay-200 duration-700 cursor-pointer shadow-lg shadow-indigo-950 rounded-md flex flex-row items-center justify-center gap-2 bg-blue-500 text-white w-[180px] hover:bg-indigo-950">
              <button
                onClick={() => {
                  console.log("Button Clicked");
                }}
                className="uppercase font-bold text-[13px] mxl:text-[13px]"
              >
                Purchase Now
              </button>
              <FaLongArrowAltRight />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 w-[280px] bg-slate-200 rounded-lg group">
          <div className="flex flex-col gap-3  h-[180px] bg-indigo-950 transition-all ease-in-out delay-200 duration-700 group-hover:bg-blue-500 text-white p-5 rounded-lg">
            <div className="flex flex-col gap-3">
              <h1 className="font-bold text-[20px] mxl:text-[16px]">
                Platinum Package
              </h1>
              <p className="text-[15px] mxl:text-[13px]">
                Large Enterprises and High-Traffic Websites
              </p>
            </div>
            <div className="flex flez-row items-center gap-1">
              <h1 className="font-bold text-[27px] mxl:text-[22px]">$599.00</h1>
              <h4 className="text-[14px] mxl:text-[11px]">/Per Month</h4>
            </div>
          </div>
          <div className="gap-3 flex flex-col pb-5">
            <div className="flex flex-col gap-3 p-5">
              <div className="flex flex-row items-center  gap-3">
                <FaCircleCheck color="blue" />
                <p className="text-[14px] mxl:text-[11px]">
                  Responsive Website Design
                </p>
              </div>
              <div className="flex flex-row items-center  gap-3">
                <FaCircleCheck color="blue" />
                <p className="text-[14px] mxl:text-[11px]">SEO Optimization</p>
              </div>
              <div className="flex flex-row items-center  gap-3">
                <FaCircleCheck color="blue" />
                <p className="text-[14px] mxl:text-[11px]">Standard Hosting</p>
              </div>
              <div className="flex flex-row items-center  gap-3">
                <FaCircleCheck color="blue" />
                <p className="text-[14px] mxl:text-[11px]">Analytics Report</p>
              </div>
              <div className="flex flex-row items-center  gap-3">
                <FaCircleCheck color="blue" />
                <p className="text-[14px] mxl:text-[11px]">Priority Support</p>
              </div>
            </div>
            <div className="p-2 self-center transition-all ease-in-out delay-200 duration-700 cursor-pointer shadow-lg shadow-indigo-950 rounded-md flex flex-row items-center justify-center gap-2 bg-blue-500 text-white w-[180px] hover:bg-indigo-950">
              <button
                onClick={() => {
                  console.log("Button Clicked");
                }}
                className="uppercase font-bold text-[13px] mxl:text-[13px]"
              >
                Purchase Now
              </button>
              <FaLongArrowAltRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
