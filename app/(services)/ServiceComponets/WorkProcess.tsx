import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import analysis from "@/publicanalysis.jpg";
import execute from "@/publicflexible.jpg";
import select from "@/publicselect.jpg";
import result from "@/publicresult.jpg";
import Image from "next/image";
import { BsMotherboard } from "react-icons/bs";

//Main Function
export default function WorkProcess() {
  const Services = [
    {
      id: "01",
      image: select,
      workName: "Select a Project",
      description:
        "Embark on your digital journey by handpicking the perfect project that aligns with your vision and goals.",
    },
    {
      id: "02",
      image: analysis,
      workName: "Project analysis",
      description:
        "Dive deep into the intricacies of your project as our experts conduct thorough analysis to uncover hidden potentials and challenges.",
    },
    {
      id: "03",
      image: execute,
      workName: "Plan Execute",
      description:
        "Watch your ideas come to life as we meticulously craft a strategic roadmap and flawlessly execute each phase with precision.",
    },
    {
      id: "04",
      image: result,
      workName: "Deliver result",
      description:
        "Experience the thrill of success as we deliver exceptional results that exceed your expectations and propel your business forward.",
    },
  ];
  return (
    <div className="flex cursor-pointer flex-col gap-5 bg-slate-200 lg:p-10 mlg:p-3 mlg:py-4 rounded-md">
      <div
        data-aos="fade-up"
        className="flex lg:flex-row gap-4 flex-col px-10 items-center justify-center"
      >
        <div className="flex flex-col gap-2 items-center">
          <div className="flex text-blue-600 mlg:justify-center flex-row items-center gap-2">
            <BsMotherboard size={30} />
            <h3 className="text-[18px] text-center uppercase mlg:text-[14px]">
              Work Process
            </h3>
          </div>
          <h1 className="text-[20px] font-bold mlg:text-[20px] text-center">
            How To Work It!
          </h1>
        </div>
      </div>
      <div className="flex bg-slate-200 flex-row flex-wrap lg:mx-20 items-center justify-center gap-10 p-4 py-14 ">
        {Services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 relative items-center justify-center  p-4 bg-white group w-[250px] rounded-md"
          >
            <div className="text-[30px]  flex p-1 justify-center items-center w-[70px] h-[70px] absolute top-[-15px] left-[-15px] bg-blue-600 text-white rounded-full">
              {service.id}
              <div className="w-[80%] absolute animate-ping rounded-full h-[80%] bg-indigo-600"></div>
            </div>
            <Image alt="" src={service.image} className="w-[80px]" />
            <div className="flex h-[150px] flex-col rounded-md items-center p-2 gap-2 transition delay-150 duration-500 ease-linear group-hover:bg-indigo-600 group-hover:text-white w-full">
              <div className="flex flex-col items-center gap-2">
                <div className="flex flex-col items-center gap-2">
                  <h1 className="text-[18px] font-bold mlg:text-[15px]">
                    {service.workName}
                  </h1>
                  <p className="text-[13px] text-center mlg:text-[13px]">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
