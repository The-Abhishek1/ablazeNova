import { React, useState } from "react";
import { services } from "./SearchBar";
import Link from "next/link";
import { useRouter } from "next/navigation";

function ServiceList(props) {
  const router = useRouter();
  //create a new array by filtering the original array
  const filteredData = services.filter((el) => {
    //if no input the return the original
    if (props.input === "") {
      return el;
    }
    //return the item which contains the user input
    else {
      return el.text.toLowerCase().includes(props.input);
    }
  });
  return (
    <ul className="flex flex-col p-4 gap-2 mt-4 font-medium rounded-lg  rtl:space-x-reverse  bg-gray-800 ">
      {filteredData.map((item) => (
        <li
          onClick={() => {
            router.push("/services/" + item.text);
          }}
          key={item.id}
          className="block uppercase cursor-pointer hover:text-gray-900 text-[13px] msm:text-[11px] py-2 px-3 rounded hover:bg-gray-100  dark:text-white dark:hover:bg-gray-700 dark:hover:text-white  dark:border-gray-700"
          aria-current="page"
        >
          {item.text}
        </li>
      ))}
    </ul>
  );
}

export default ServiceList;
