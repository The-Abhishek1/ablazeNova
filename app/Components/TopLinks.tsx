"use client";

//Importing Necessary Files
import React from "react";
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";
import {
  FaXTwitter,
  FaWhatsapp,
  FaDiscord,
  FaInstagram,
  FaMapLocationDot,
} from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { FiMail } from "react-icons/fi";
import Link from "next/link";

//  Main Function
function TopLinks() {
  return (
    <div className=" text-blue-600 relative flex flex-row justify-around p-5">
      <div className="flex flex-row gap-4 mlg:hidden">
        <div className="flex flex-row items-center gap-2">
          <p>
            <FaMapLocationDot />
          </p>
          <p>17 NJ-12, JP Nagar, Karnataka</p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <p>
            <IoCallOutline />
          </p>
          <p>+91 6366652685</p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <p>
            <FiMail />
          </p>
          <p>idiot63666@gmail.com</p>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center gap-3">
        <p className="msmm:text-[12px]">Follow Us On :</p>
        <div className="flex flex-row items-center gap-3">
          <Link
            href={"https://www.facebook.com/profile.php?id=100055080378695"}
          >
            <FaFacebookSquare />
          </Link>

          <Link href={"https://chat.whatsapp.com/HBVLCUUYSIZ0OOSYPgMXEq"}>
            <FaWhatsapp />
          </Link>
          <Link
            href={
              "https://www.instagram.com/ablazenova?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            }
          >
            <FaInstagram />
          </Link>
          <Link href={"https://discord.com/invite/4t925gde"}>
            <FaDiscord />
          </Link>
          <Link href={"https://www.youtube.com/@idiot017"}>
            <FaYoutube />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TopLinks;
