"use client";
import React, { useState } from "react";
import { BsChevronExpand } from "react-icons/bs";
import { AiOutlineCheck } from "react-icons/ai";
import Link from "next/link";

const actions = [
  { id: 1, label: "User Dashboard", route: "/users/dashboard" },
  { id: 2, label: "subjects", route: "/users/subjects" },
  { id: 3, label: "reports", route: "/users/reports" },
  { id: 4, label: "register", route: "/users/register" },
  { id: 5, label: "log out", route: "/auth/logout" },
];

const UserSelectBox = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex flex-col justify-center items-center relative z-30">
        <div
          onClick={() => setOpen((prev) => !prev)}
          className="p-2 cursor-pointer"
        >
          <span className="border-2 border-blue-600 p-1 rounded-lg">User</span>
        </div>
        <div
          className={`flex flex-col bg-sky-200 w-40 my-2 rounded-lg ${
            open ? "opacity-100 h-auto" : "opacity-0 h-0"
          } transition-all duration-200 overflow-hidden absolute top-12 right-0`}
        >
          {actions.map((item) => (
            <div
              key={item}
              onClick={() => {
                setOpen(false);
              }}
              className={`flex justify-center items-center p-2 hover:bg-sky-300 cursor-pointer`}
            >
              <Link href={item.route}>{item.label}</Link>
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

export default UserSelectBox;
