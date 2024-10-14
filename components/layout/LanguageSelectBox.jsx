"use client";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import React, { useState } from "react";
import Link from "next/link";
import {BsGlobeAmericas} from "react-icons/bs"

const languages = [
  { id: 1, flag: "fi fi-us", route: "/en" },
  { id: 1, flag: "fi fi-ug", route: "/fa" },
];

const LanguageSelectBox = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex flex-col justify-center items-center relative z-30">
        <div
          onClick={() => setOpen((prev) => !prev)}
          className="p-2 cursor-pointer"
        >
          <span className="text-2xl">
            <BsGlobeAmericas/>
          </span>
        </div>
        <div
          className={`flex flex-col bg-orange-200 w-16 rounded-lg ${
            open ? "opacity-100 h-auto" : "opacity-0 h-0"
          } transition-all duration-200 overflow-hidden absolute top-12 right-8`}
        >
          {languages.map((item) => (
            <div
              key={item}
              onClick={() => {
                setOpen(false);
              }}
              className={`flex justify-center items-center p-2 hover:bg-orange-300 cursor-pointer`}
            >
              <Link href={item.route}>
              <span className={item.flag}></span>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div
        onClick={() => setOpen(false)}
        className={`bg-gray-200 fixed inset-0 opacity-50 z-0 ${
          open ? "block" : "hidden"
        }`}
      ></div>
    </>
  );
};

export default LanguageSelectBox;
