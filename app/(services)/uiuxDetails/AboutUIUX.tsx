import Image from "next/image";
import React from "react";
import photo from "@/publictech3.jpg";
import { FaCircleCheck } from "react-icons/fa6";

//Main Function for About UIUX
export default function AboutUIUX() {
  return (
    <div className="flex flex-col gap-5 pt-2 p-6 mlg:items-center">
      <div className="flex flex-col gap-8">
        <h1 className="text-[27px] text-blue-600 font-bold mlg:text-[20px]">
          UI/UX Design
        </h1>
        <div className="mlg:max-w-[400px] flex flex-col gap-6 text-[13px]">
          <p>
            Great design is crucial for engaging user experiences. At
            ablazeNova, we craft intuitive and visually appealing interfaces
            that captivate users. Our UI/UX experts focus on creating designs
            that are both beautiful and functional
          </p>
          <p>
            From wireframes to final design, we ensure every element enhances
            usability and delight. Our UI/UX design services help you create
            memorable digital experiences that keep users coming back.
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-7 mlg:items-center mlg:flex-col-reverse">
        <Image src={photo} alt="" className="w-[250px]" />

        <div className="flex flex-col gap-3">
          <div>
            <h1 className="text-center text-blue-600 font-bold mlg:text-[16px] text-[18px]">
              We Serve The Best Work
            </h1>
          </div>
          <div className="flex flex-col  gap-2">
            <div className="flex flex-row items-center  gap-3">
              <FaCircleCheck color="blue" size={16} />
              <p className="text-[13px] mxl:text-[13px]">User Research</p>
            </div>
            <div className="flex flex-row items-center  gap-3">
              <FaCircleCheck color="blue" size={16} />
              <p className="text-[13px] mxl:text-[13px]">
                Wireframing & Prototyping
              </p>
            </div>
            <div className="flex flex-row items-center  gap-3">
              <FaCircleCheck color="blue" size={16} />
              <p className="text-[13px] mxl:text-[13px]">Visual Design</p>
            </div>
            <div className="flex flex-row items-center  gap-3">
              <FaCircleCheck color="blue" size={16} />
              <p className="text-[13px] mxl:text-[13px]">Usability Testing</p>
            </div>
            <div className="flex flex-row items-center  gap-3">
              <FaCircleCheck color="blue" size={16} />
              <p className="text-[13px] mxl:text-[13px]">
                Continuous Improvement
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-[13px] mlg:max-w-[400px] mlg:text-center">
        Ready to elevate your digital experience? Let ablazeNova create
        user-centric designs that captivate and convert. Contact us today to get
        started!
      </div>
    </div>
  );
}
