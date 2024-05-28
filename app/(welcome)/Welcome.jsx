"use client";
import Image from "next/image";
import React from "react";
import welcome1 from "@/publicwelcome1.jpg";
import welcome2 from "@/publicwelcome2.jpg";
import { useRouter } from "next/navigation";

// Main Functiom
export default function Welcome() {
  const navigation = useRouter();
  return (
    <div className="flex flex-col items-center justify-center  h-[100vh]">
      <Image
        alt="welcome"
        priority
        src={welcome2}
        className="max-h-[80%] md:max-w-[60%] max-w-[80%]"
      />

      <button
        onClick={() => {
          navigation.push("signup");
        }}
        className="bg-blue-500 mmd:text-[13px] mmd:px-5 mmd:p-2 p-3 px-10 rounded-xl font-bold  text-white "
      >
        Let's Get Started
      </button>
    </div>
  );
}
