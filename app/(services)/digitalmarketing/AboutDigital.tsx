import Image from "next/image";
import React from "react";
import photo from "@/publictech3.jpg";
import { FaCircleCheck } from "react-icons/fa6";

//Main Function
export default function AboutDigital() {
  return (
    <div className="flex flex-col gap-5 pt-2 p-6 mlg:items-center">
      <div className="flex flex-col gap-8">
        <h1 className="text-[27px] text-blue-600 font-bold mlg:text-[20px]">
          Digital Marketing
        </h1>
        <div className="mlg:max-w-[400px] flex flex-col gap-6 text-[13px]">
          <p>
            Effective marketing is crucial to engaging your target audience. At
            ablazeNova, we offer digital marketing services designed to boost
            your online presence and drive results. Our experts use cutting-edge
            strategies to create campaigns that resonate with your audience and
            meet your business goals.
          </p>
          <p>
            From SEO and content marketing to social media and PPC advertising,
            we tailor our services to fit your needs. Whether you're increasing
            brand awareness, generating leads, or driving sales, our solutions
            deliver measurable success.
          </p>
        </div>
      </div>
      <div className="flex flex-row mlg:items-center gap-7 mlg:flex-col-reverse">
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
              <p className="text-[13px] mxl:text-[13px]">SEO Optimization</p>
            </div>
            <div className="flex flex-row items-center  gap-3">
              <FaCircleCheck color="blue" size={16} />
              <p className="text-[13px] mxl:text-[13px]">Content Marketing</p>
            </div>
            <div className="flex flex-row items-center  gap-3">
              <FaCircleCheck color="blue" size={16} />
              <p className="text-[13px] mxl:text-[13px]">
                Social Media Management
              </p>
            </div>
            <div className="flex flex-row items-center  gap-3">
              <FaCircleCheck color="blue" size={16} />
              <p className="text-[13px] mxl:text-[13px]">PPC Advertising</p>
            </div>
            <div className="flex flex-row items-center  gap-3">
              <FaCircleCheck color="blue" size={16} />
              <p className="text-[13px] mxl:text-[13px]">
                Analytics & Reporting
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-[13px] mlg:max-w-[400px] mlg:text-center">
        Ready to transform your digital strategy? Let ablazeNova help you reach
        your marketing goals and grow your business. Contact us today to get
        started!
      </div>
    </div>
  );
}
