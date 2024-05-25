import React from "react";
import Image from "next/image";
import photo from "@/publicdigital_marketing.avif";
//Main Function
export default function ImageSlide() {
  return (
    <div className="flex items-center justify-center p-6 px-10">
      <Image src={photo} alt="" />
    </div>
  );
}
