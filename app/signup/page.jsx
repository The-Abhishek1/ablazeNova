import React from "react";
import Leftside from "./Leftside";
import Rightside from "./Rightside";
export default function page() {
  return (
    <div className="flex mmd:flex-col flex-row justify-center items-center w-[100%] h-[100vh] bg-white p-4">
      <Leftside />
      <Rightside />
    </div>
  );
}
