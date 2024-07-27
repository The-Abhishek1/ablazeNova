"use client";
//Importing Necessary Files
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from "@/public177975028_padded_logo.png";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineShoppingCart,
  MdMenu,
} from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { GoGoal } from "react-icons/go";
import { IoMdClose, IoMdLogOut } from "react-icons/io";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { auth } from "../(firebase)/config";
import List from "../(SearchBar)/List.jsx";
import ServiceList from "../(SearchBar)/ServiceList";
import profilePhoto from "@/publicprofilepic2.jpg";

//Main Function
export default function Header() {
  const router = useRouter();
  const photo = require("@/publicprofileicon.jpg");

  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  const [serviceText, setServiceText] = useState("");
  let serviceHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setServiceText(lowerCase);
  };

  const [profile, Showprofile] = useState(false);
  //State to show menu bar
  const [showMenu, setShowMenu] = useState(false);
  //State to show searchBar
  const [showSearch, setSearch] = useState(false);
  //State to show searchBar
  const [showCart, setCart] = useState(false);
  return (
    <div className="sticky top-0 z-20 w-full flex flex-row items-center text-black p-4 justify-between">
      <div className=" w-full h-full overflow-hidden absolute left-0 -z-10">
        <div className="blur-3xl bg-slate-400 w-full h-full"></div>
      </div>
      <div className="flex flex-row items-center gap-3 ">
        <Image
          src={Logo}
          alt="Logo"
          height={40}
          width={40}
          className="rounded-[30px] h-[40px] w-[40px]"
        />
        <div className="msmm:hidden flex flex-row items-center text-[26px] gap-2 ">
          <h2 className="font-bold text-red-600">Ablaze</h2>
          <h2>Nova</h2>
        </div>
      </div>
      <div className="flex text-blue-500 flex-row relative items-center gap-4 mlg:hidden justify-center">
        <div
          onClick={() => {
            router.push("/");
          }}
          className="font-bold hover:text-indigo-500 cursor-pointer"
        >
          Home
        </div>
        <div
          onClick={() => {
            router.push("/aboutus");
          }}
          className=" hover:text-indigo-500 font-bold cursor-pointer"
        >
          About Us
        </div>
        <div
          onClick={() => {
            router.push("/services");
          }}
          className="flex flex-row items-center gap-1  hover:text-indigo-500 cursor-pointer"
        >
          <p className="font-bold">Services</p>
          <MdOutlineKeyboardArrowDown />
        </div>
        <div className="flex flex-row items-center gap-1  hover:text-indigo-500 cursor-pointer">
          <p className="font-bold">Pages</p>
          <MdOutlineKeyboardArrowDown />
        </div>
        <div
          onClick={() => {
            router.push("/contact");
          }}
          className="font-bold hover:text-indigo-500 cursor-pointer"
        >
          Contact
        </div>
      </div>
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {
            Showprofile(!profile);
            setCart(false);
            setSearch(false);
            setShowMenu(false);
          }}
        >
          {auth?.currentUser?.photoURL == null ? (
            <Image
              unoptimized // for image caching, else error
              src={profilePhoto}
              alt="Profile"
              height={40}
              width={40}
              className="rounded-[30px] cursor-pointer sm:h-[48px] sm:w-[48px]"
            />
          ) : (
            <img
              src={auth?.currentUser?.photoURL}
              alt="Profile"
              height={40}
              width={40}
              className="rounded-[30px] cursor-pointer sm:h-[48px] sm:w-[48px]"
            />
          )}
        </div>
        <div
          onClick={() => {
            setShowMenu(false);
            setCart(false);
            Showprofile(false);
            setSearch(!showSearch);
          }}
          className="bg-white p-4 msm:p-3 rounded-full cursor-pointer"
        >
          <IoSearchOutline />
        </div>
        <button
          onClick={() => {
            router.push("contact");
          }}
          className="mxl:hidden flex flex-row items-center gap-3 bg-indigo-500 text-white p-3 rounded-[7px]"
        >
          <h4>Make Appointment</h4>
          <FaArrowRightLong />
        </button>
        <div
          onClick={() => {
            setSearch(false);
            setShowMenu(false);
            setCart(true);
            Showprofile(false);
          }}
          className="bg-white flex flex-col items-center overflow-hidden relative  p-4 msm:p-3  rounded-full cursor-pointer"
        >
          <MdOutlineShoppingCart />
        </div>

        <div
          onClick={() => {
            setSearch(false);
            Showprofile(false);
            setCart(false);
            setShowMenu(!showMenu);
          }}
          className="bg-blue-500 msm:p-2.5  p-3.5 cursor-pointer text-white rounded-[5px] lg:hidden"
        >
          {showMenu ? <IoMdClose /> : <MdMenu />}
        </div>
      </div>
      {showMenu ? (
        <div className="items-center text-white lg:hidden justify-between absolute top-20 right-4">
          <div className="relative mt-3">
            <input
              type="text"
              className="block text-[15px] msm:text-[13px] outline-none w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
              onChange={inputHandler}
            />
          </div>
          <div>
            <List input={inputText} />
          </div>
        </div>
      ) : null}
      {showSearch ? (
        <div className="items-center text-white justify-between absolute top-20 right-4">
          <div className="relative mt-3">
            <input
              type="text"
              className="block text-black text-[15px] msm:text-[13px] outline-none w-full p-2 ps-10 text-sm  border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
              onChange={serviceHandler}
            />
          </div>
          <div>
            <ServiceList input={serviceText} />
          </div>
        </div>
      ) : null}
      {showCart ? (
        <div className="flex flex-col gap-6 p-4 sm:top-24 rounded-md text-white absolute top-20 right-4  bg-gray-800">
          <div className="flex flex-col gap-10">
            <div className="flex gap-24 flex-row items-center justify-between">
              <h1 className="uppercase text-[15px] font-bold">Shopping cart</h1>
              <div
                onClick={() => {
                  setCart(false);
                }}
                className="bg-white p-2 msm:p-1 rounded-sm cursor-pointer"
              >
                <IoMdClose color="blue" />
              </div>
            </div>
            <div className="flex  flex-col gap-6 justify-center">
              <div className="flex hover:bg-slate-700 rounded-lg p-2 flex-row justify-between items-center">
                <div className="flex flex-row items-center gap-4">
                  <Image
                    src={Logo}
                    alt=""
                    className="w-[40px] p-2 bg-slate-100 rounded-md"
                  />
                  <div>
                    <h3 className="text-[15px] msm:text-[13px]">
                      Gaming Computer
                    </h3>
                    <p className="text-[13px] msm:text-[11px]">1 x $940.00</p>
                  </div>
                </div>
                <IoMdClose size={20} color="gray" />
              </div>
              <div className="flex hover:bg-slate-700 rounded-lg p-2 flex-row justify-between items-center">
                <div className="flex flex-row items-center gap-4">
                  <Image
                    src={Logo}
                    alt=""
                    className="w-[40px] p-2 bg-slate-100 rounded-md"
                  />
                  <div>
                    <h3 className="text-[15px] msm:text-[13px]">
                      Gaming Computer
                    </h3>
                    <p className="text-[13px] msm:text-[11px]">1 x $940.00</p>
                  </div>
                </div>
                <IoMdClose size={20} color="gray" />
              </div>
              <div className="flex hover:bg-slate-700 rounded-lg p-2 flex-row justify-between items-center">
                <div className="flex flex-row items-center gap-4">
                  <Image
                    src={Logo}
                    alt=""
                    className="w-[40px] p-2 bg-slate-100 rounded-md"
                  />
                  <div>
                    <h3 className="text-[15px] msm:text-[13px]">
                      Gaming Computer
                    </h3>
                    <p className="text-[13px] msm:text-[11px]">1 x $940.00</p>
                  </div>
                </div>
                <IoMdClose size={20} color="gray" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <div className="flex flex-row items-center gap-3">
              <h1 className="font-bold">Subtotal:</h1>
              <h1>$4398.00</h1>
            </div>
            <div className="flex flex-row items-center justify-between gap-3">
              <div className="p-2 flex items-center justify-center cursor-pointer rounded-md  bg-blue-500 text-white w-[120px]">
                <button className="uppercase font-bold text-[12px]">
                  View cart
                </button>
              </div>
              <div className="p-2  flex items-center justify-center cursor-pointer  rounded-md  bg-blue-500 text-white w-[120px]">
                <button className="uppercase font-bold text-[12px]">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {profile && auth.currentUser != null ? (
        <div className="absolute sm:top-24 flex flex-col gap-4 top-20 right-5 ">
          <div className="flex flex-col gap-2 p-3 rounded-lg bg-slate-50">
            <h3 className="font-bold text-[17px] ml-4">
              👋{" "}
              <p className="inline text-[12px]">
                Hey {auth?.currentUser?.displayName}
              </p>
            </h3>
            <h5 className="text-[11px] font-bold">
              Emai:{" "}
              <p className="inline font-normal">{auth?.currentUser?.email}</p>
            </h5>
            <h5 className="text-[11px] font-bold">
              User ID:{" "}
              <p className="inline font-normal">{auth?.currentUser?.uid}</p>
            </h5>
          </div>
          <div
            onClick={() => {
              auth?.signOut;
              router.push("/signin");
            }}
            className="flex p-3 justify-center cursor-pointer rounded-lg bg-slate-50 flex-row items-center gap-2 text-[14px] font-bold text-red-600"
          >
            <div>Logout</div>
            <div>
              <IoMdLogOut />
            </div>
          </div>
        </div>
      ) : null}
      {profile && auth.currentUser == null ? (
        <div className="absolute sm:top-24 flex flex-col gap-4 top-20 right-5 ">
          <div className="flex flex-col gap-2 p-3 rounded-lg bg-slate-50">
            <h3 className="font-bold text-center text-[17px]">
              👋 <p className="inline text-[12px]">Hey User</p>
            </h3>
            <p className="text-[10px]">Please signup to get services</p>
          </div>
          <div
            onClick={() => {
              router.push("/signup");
            }}
            className="flex p-3 justify-center cursor-pointer rounded-lg bg-slate-50 flex-row items-center gap-2 text-[14px] font-bold text-green-600"
          >
            <div>Sign Up</div>
            <div>
              <IoMdLogOut />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
