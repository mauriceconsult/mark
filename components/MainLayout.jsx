"use client"
import React, { useContext } from "react";
import Navbar from "./Navbar";
import { AiOutlineHome } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { FaAngleRight, FaRegAddressBook } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";
import { GiSatelliteCommunication } from "react-icons/gi";
import {SiSinglestore} from "react-icons/si"
import Link from "next/link";
import { MenuContext } from "@/context/MenuContext";

const MainLayout = ({ children }) => {
    const { open } = useContext(MenuContext);
    
  return (
    <div className="bg-gray-300 w-screen min-h-screen">
      <Navbar />
      <div className="flex justify-start items-start">
        {/* <aside className="bg-white rounded-md w-48 p-4"> */}
        <aside
          className={`bg-white min-h-[100vh] rounded-lg overflow-hidden transition-all duration-200 ${
            open ? "w-60 p-4" : "w-0"
          } md:w-60 md:p-4`}
        >
          <ul>
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-green-900 rounded-xl p-2">
              <AiOutlineHome className="mr-2" />
              <Link href={"/"}>Home</Link>
            </li>
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-green-900 rounded-xl p-2">
              <GiSatelliteCommunication className="mr-2" />
              <Link href={"/"}>Contact Us</Link>
            </li>
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-green-900 rounded-xl p-2">
              <GrProjects className="mr-2" />
              <h3 className="flex-1">Projects</h3>
              <FaAngleRight />
            </li>
            <li className="flex flex-col justify-start items-start hover:bg-blue-200 hover:text-green-900 rounded-xl p-2">
              <div className="w-full flex flex-row justify-start items-center">
                <PiStudent className="mr-2" />
                <h3 className="flex-1">Class Register</h3>
                <FaAngleRight />
              </div>
              <ul className="ml-8 mt-4">
                <li className="flex justify-center items-center gap-4">
                  <SiSinglestore />
                  <Link href="/class-register/selectbox">Select Box</Link>
                </li>
              </ul>
            </li>
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-green-900 rounded-xl p-2">
              <FaRegAddressBook className="mr-2" />
              <h3 className="flex-1">Staff</h3>
              <FaAngleRight />
            </li>
          </ul>
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
