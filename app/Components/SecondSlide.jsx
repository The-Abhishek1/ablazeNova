"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { BsMotherboard } from "react-icons/bs";
import { FaLongArrowAltRight } from "react-icons/fa";
import { ImCheckboxChecked } from "react-icons/im";
import photo1 from "@/publicdesign.png";
import photo2 from "@/publicapi.png";
import photo3 from "@/publicweb-maintenance.png";
import { useRouter } from "next/navigation";

//Main Function
export default function SecondSlide() {
  const router = useRouter();
  return (
    <div className="flex  bg-slate-200 flex-row items-center justify-around p-4 py-8 msm:pb-0 msm:flex-col-reverse gap-4">
      <div className="relative">
        <Image
          alt="First"
          src={photo1}
          className="aspect-square[2/1] max-h-[450px] mlg:max-h-[250px] mlg:max-w-[250px] msmm:max-h-[200px] msmm:max-w[150px] mxl:w-[400px]
          transition ease-in-out delay-200 cursor-progress hover:-translate-y-1 hover:scale-95 duration-500"
        />
      </div>
      <div className="flex flex-col sm:w-[500px] msm:px-3 gap-5">
        <div className="flex flex-row items-center justify-center gap-3  text-blue-600">
          <BsMotherboard size={30} />
          <h3 className="text-[18px] mlg:text-[15px]">
            About WebTech IT Solutions
          </h3>
        </div>
        <div className="text-[20px] mlg:text-[16px] font-bold text-center">
          Preparing for your business provide best
          <p className="inline text-blue-600"> IT Solution</p>
        </div>
        <div>
          <p className="text-center text-[14px] mlg:text-[13px]">
            At WebTech IT Solutions, we don't just offer IT solutions; we craft
            digital journeys tailored to your business's success.
          </p>
        </div>
        <div className="flex flex-col justify-between gap-5 mxl:self-center">
          <div className="flex flex-row items-center gap-2">
            <ImCheckboxChecked size={20} color="blue" />
            <p className="text-[14px] mlg:text-[12px]">Innovative Solutions</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <ImCheckboxChecked size={20} color="blue" />
            <p className="text-[14px] mlg:text-[12px]">
              Website & Mobile application design & Development
            </p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <ImCheckboxChecked size={20} color="blue" />
            <p className="text-[14px] mlg:text-[12px]">
              Professional User Experience & Interface researching
            </p>
          </div>
          <div className="p-2 cursor-pointer rounded-md flex flex-row shadow-lg shadow-blue-400 items-center self-center justify-center gap-2 bg-blue-500 text-white w-[180px]">
            <button
              onClick={() => {
                router.push("/aboutus");
              }}
              className="uppercase font-bold text-[13px]"
            >
              Discover More
            </button>
            <FaLongArrowAltRight />
          </div>
        </div>
      </div>
    </div>
  );
}
