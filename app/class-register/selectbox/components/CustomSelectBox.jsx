"use client";
import React, { useState } from "react";
import { BsChevronExpand } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";

const classRegister = ["P-1", "P-2", "P-3", "P-4", "P-5", "P-6", "P-7", "P-8"];

const CustomSelectBox = () => {
  const [selectedClass, setSelectedClass] = useState("P-1");
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-gray-200 flex flex-col justify-center items-center w-fit relative z-30">
        <div
          onClick={() => setOpen((prev) => !prev)}
          className="flex flex-row justify-between items-center bg-white w-48 my-2 p-2 rounded-lg cursor-pointer"
        >
          <span>{selectedClass}</span>
          <BsChevronExpand className="text-gray-400" />
        </div>
        <div
          className={`flex flex-col bg-white w-48 my-2 rounded-lg ${
            open ? "opacity-100 h-auto" : "opacity-0 h-0"
          } transition-all duration-200 overflow-hidden absolute top-16 left-0`}
        >
          {classRegister.map((item) => (
            <div
              key={item}
              onClick={() => {
                setSelectedClass(item);
                setOpen(false);
              }}
              className={`flex justify-start items-center gap-x-2 px-2 py-1 hover:bg-orange-300 cursor-pointer ${
                selectedClass === item ? "bg-orange-200" : ""
              }`}
            >
              <AiOutlineCheck
                className={`text-orange-400 ${
                  selectedClass === item ? "opacity-100" : "opacity-0"
                }`}
              />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div
        onClick={() => setOpen(false)}
        className={`bg-gray-200 fixed inset-0 opacity-50 z-0 ${open ? "block": "hidden"}`}
      ></div>
    </>
  );
};

export default CustomSelectBox;
