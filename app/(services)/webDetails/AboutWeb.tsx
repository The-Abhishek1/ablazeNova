import Image from "next/image";
import React from "react";
import photo from "@/publictech3.jpg";
import { FaCircleCheck } from "react-icons/fa6";

//Main Function
export default function AboutWeb() {
  return (
    <div className="flex flex-col gap-5 pt-2 p-6 mlg:items-center">
      <div className="flex flex-col gap-8">
        <h1 className="text-[27px] text-blue-600 font-bold mlg:text-[20px]">
          Web Development
        </h1>
        <div className="mlg:max-w-[400px] flex flex-col gap-6 text-[13px]">
          <p>
            Your website is the cornerstone of your online presence. At
            ablazeNova, we create stunning, high-performance websites that look
            amazing and provide an exceptional user experience. Our expert team
            uses the latest technologies to ensure your website stands out and
            meets your business goals.
          </p>
          <p>
            We build responsive, fast-loading sites that drive engagement and
            enhance your brand. Whether you're a startup or an established
            business, our web development services are tailored to fit your
            unique needs and vision.
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
              <p className="text-[13px] mxl:text-[13px]">
                Customized Solutions
              </p>
            </div>
            <div className="flex flex-row items-center  gap-3">
              <FaCircleCheck color="blue" size={16} />
              <p className="text-[13px] mxl:text-[13px]">Responsive Design</p>
            </div>
            <div className="flex flex-row items-center  gap-3">
              <FaCircleCheck color="blue" size={16} />
              <p className="text-[13px] mxl:text-[13px]">Fast Loading Speeds</p>
            </div>
            <div className="flex flex-row items-center  gap-3">
              <FaCircleCheck color="blue" size={16} />
              <p className="text-[13px] mxl:text-[13px]">
                SEO-Friendly Development
              </p>
            </div>
            <div className="flex flex-row items-center  gap-3">
              <FaCircleCheck color="blue" size={16} />
              <p className="text-[13px] mxl:text-[13px]">Robust Security</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-[13px] mlg:max-w-[400px] mlg:text-center">
        Ready to elevate your online presence? Let ablazeNova create a website
        that truly sets you apart. Contact us today to get started!
      </div>
    </div>
  );
}
