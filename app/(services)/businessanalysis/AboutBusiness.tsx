import Image from "next/image";
import React from "react";
import photo from "@/publictech3.jpg";
import { FaCircleCheck } from "react-icons/fa6";

//Main Function
export default function AboutBusiness() {
  return (
    <div className="flex flex-col gap-5 pt-2 p-6 mlg:items-center">
      <div className="flex flex-col gap-8">
        <h1 className="text-[27px] text-blue-600 font-bold mlg:text-[20px]">
          Business Analysis
        </h1>
        <div className="mlg:max-w-[400px] flex flex-col gap-6 text-[13px]">
          <p>
            Informed decisions drive business success. At ablazeNova, we offer
            comprehensive business analysis to help you optimize operations and
            grow. Our experts use data-driven insights for strategic planning.
          </p>
          <p>
            From market research to process optimization, we provide tailored,
            actionable insights. Our business analysis services help you improve
            efficiency and expand your market reach.
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
              <p className="text-[13px] mxl:text-[13px]">Market Research</p>
            </div>
            <div className="flex flex-row items-center  gap-3">
              <FaCircleCheck color="blue" size={16} />
              <p className="text-[13px] mxl:text-[13px]">Data Analysis</p>
            </div>
            <div className="flex flex-row items-center  gap-3">
              <FaCircleCheck color="blue" size={16} />
              <p className="text-[13px] mxl:text-[13px]">
                Process Optimization
              </p>
            </div>
            <div className="flex flex-row items-center  gap-3">
              <FaCircleCheck color="blue" size={16} />
              <p className="text-[13px] mxl:text-[13px]">Performance Metrics</p>
            </div>
            <div className="flex flex-row items-center  gap-3">
              <FaCircleCheck color="blue" size={16} />
              <p className="text-[13px] mxl:text-[13px]">Strategic Planning</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-[13px] mlg:max-w-[400px] mlg:text-center">
        Ready to unlock the full potential of your business? Let ablazeNova
        provide the insights and strategies you need. Contact us today to get
        started!
      </div>
    </div>
  );
}
