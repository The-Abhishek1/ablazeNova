import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import promote from "@/publicdigital_marketing.avif";
import design from "@/publicuiux_2.jpg";
import website from "@/publicApp-Development-1.png";
import business from "@/publicbusiness-analysis2.jpg";
import services from "@/publicsoftwareservices1.jpg";
import app from "@/publicweb-development.jpg";
import Image from "next/image";
import Link from "next/link";

//Main Function
export default function Services() {
  const Services = [
    {
      image: app,
      serviceName: "Web Development",
      path: "services/webdevelopment",
      description:
        "Creating responsive, user-friendly websites that are optimized for performance and scalability.",
    },
    {
      image: business,
      path: "services/businessanalysis",
      serviceName: "Business Analysis",
      description:
        "Providing insights and analytics to help businesses make informed decisions and drive growth.",
    },
    {
      image: services,
      path: "services/softwareservices",
      serviceName: "Software Services",
      description:
        " Developing custom software solutions to meet specific business needs, including enterprise software, SaaS applications, and more.",
    },
    {
      image: design,
      path: "services/uiuxdesign",
      serviceName: "UI/UX Design",
      description:
        " Designing aesthetically pleasing and functional interfaces that provide an exceptional user experience.",
    },
    {
      image: promote,
      path: "services/digitalmarketing",
      serviceName: "Digital Marketing",
      description:
        "Implementing data-driven marketing strategies to enhance online visibility and engagement.",
    },
    {
      image: website,
      path: "services/appdevelopment",
      serviceName: "App Development",
      description:
        " Building powerful and intuitive mobile applications for both iOS and Android platforms.",
    },
  ];

  return (
    <div className="flex bg-slate-200 flex-row flex-wrap lg:mx-20 items-center justify-center gap-14 p-4 py-14 ">
      {Services.map((service, index) => (
        <Link key={index} href={service.path}>
          <div className="flex transition delay-150 duration-300 ease-linear flex-col gap-2 relative items-center justify-center  p-4 bg-white group  hover:bg-indigo-600 rounded-md hover:text-white w-[250px]">
            <Image alt="" src={service.image} className="w-[70%] h-[150px]" />
            <div className="flex flex-col items-center gap-2  w-full">
              <div className="mt-[-50px]">
                <Image
                  alt=""
                  src={service.image}
                  className="w-[70px]  rounded-full bg-white p-3"
                />
              </div>
              <div className="flex flex-col items-center gap-2 p-2">
                <div className="flex flex-col items-center gap-2">
                  <h1 className="text-[15px] font-bold uppercase">
                    {service.serviceName}
                  </h1>
                  <p className=" text-center text-[13px]">
                    {service.description}
                  </p>
                </div>
                <div className="flex flex-row items-center transition delay-150 duration-500 ease-linear group-hover:text-white group-hover:underline text-indigo-600 gap-2 py-1">
                  <p className="msmm:text-[13px] group-hover:text-white">
                    Read More
                  </p>
                  <FaArrowRightLong />
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
