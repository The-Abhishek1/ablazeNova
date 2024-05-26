import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const PNG_FILE_URL = "http://localhost:3000/FinalDigittalMarketing.pdf";

//Main Function for link to all Services
export default function About2() {
  const router = useRouter();

  const downloadFile = (url: any) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <div className="flex w-full mmd:items-center flex-col gap-8 bg-red pt-2 p-6 ">
      <div className="flex mmd:w-[180%]  msmm:w-[140%] flex-col p-5 rounded-md  bg-slate-100 gap-3">
        <h1 className="text-[20px] text-blue-600 font-bold mlg:text-[20px]">
          All Services
        </h1>
        <div className="flex flex-col gap-4">
          <div
            onClick={() => {
              router.push("webdevelopment");
            }}
            className="flex  bg-slate-200 cursor-pointer  p-2 px-5 rounded-md flex-row items-center justify-between gap-4 mxl:text-[13px] hover:text-blue-600"
          >
            <h3>Web Development</h3>
            <FaArrowRightLong />
          </div>
          <div
            onClick={() => {
              router.push("digitalmarketing");
            }}
            className="flex bg-slate-200 cursor-pointer  p-2 px-5 rounded-md flex-row items-center justify-between gap-4 mxl:text-[13px] hover:text-blue-600"
          >
            <h3>Digital Marketing</h3>
            <FaArrowRightLong />
          </div>
          <div
            onClick={() => {
              router.push("softwareservices");
            }}
            className="flex bg-slate-200 cursor-pointer  p-2 px-5 rounded-md flex-row items-center justify-between gap-4 mxl:text-[13px] hover:text-blue-600"
          >
            <h3>Software Services</h3>
            <FaArrowRightLong />
          </div>
          <div
            onClick={() => {
              router.push("businessanalysis");
            }}
            className="flex bg-slate-200 cursor-pointer  p-2 px-5 rounded-md flex-row items-center justify-between gap-4 mxl:text-[13px] hover:text-blue-600"
          >
            <h3>Business Analysis</h3>
            <FaArrowRightLong />
          </div>
          <div
            onClick={() => {
              router.push("uiuxdesign");
            }}
            className="flex bg-slate-200 cursor-pointer  p-2 px-5 rounded-md flex-row items-center justify-between gap-4 mxl:text-[13px] hover:text-blue-600"
          >
            <h3>UI/UX Design</h3>
            <FaArrowRightLong />
          </div>
          <div
            onClick={() => {
              router.push("appdevelopment");
            }}
            className="flex bg-slate-200 cursor-pointer  p-2 px-5 rounded-md flex-row items-center justify-between gap-4 mxl:text-[13px] hover:text-blue-600"
          >
            <h3>App Development</h3>
            <FaArrowRightLong />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-[20px] font-bold text-blue-600">
          Download Brochure
        </h1>
        <div className="flex flex-col gap-3">
          <button
            onClick={() => {
              downloadFile(PNG_FILE_URL);
            }}
            className="bg-blue-600 p-3 text-white rounded-md hover:bg-white hover:text-blue-600 font-bold"
          >
            Download PDF
          </button>
          <button className="bg-white p-3 text-blue-600 rounded-md hover:text-white hover:bg-blue-600 font-bold">
            Download Doc
          </button>
        </div>
      </div>
    </div>
  );
}
