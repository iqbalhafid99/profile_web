"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [icon, setIcon] = useState(false);

  const handleClick = () => {
    setIcon(!icon);
  };

  return (
    <nav className="relative md:text-lg z-10 font-bold">
      <div className="lg:px-20 md:px-10 px-6 py-8 lg:gap-10 md:flex md:gap-5 gap-6 md:items-center md:justify-between">
        <Link href={"/"}>
          <Image
            src="/assets/images/logoweb.png"
            alt="Logo"
            width={100}
            height={50}
            priority={true}
            className="w-auto h-auto"
          />
        </Link>

        <div>
          <ul className="lg:gap-10 md:gap-5 hidden md:flex gap-6 ml-2">
            <Link href={"/"}>
              <li className="hover:scale-110 hover:text-gray-500 duration-300">
                Home
              </li>
            </Link>
            <Link href={"/service"}>
              <li className="hover:scale-110 hover:text-gray-500 duration-300">
                Service
              </li>
            </Link>
            <Link href={"/skills"}>
              <li className="hover:scale-110 hover:text-gray-500 duration-300">
                Skills
              </li>
            </Link>
            <Link href={"/contact"}>
              <li className="hover:scale-110 hover:text-gray-500 duration-300">
                Contact
              </li>
            </Link>
          </ul>
        </div>

        <div className=" hidden md:flex">
          <button className="hover:scale-110 hover:shadow-xl duration-300 hover:text-gray-400 md:px-8 hiddenpx-6 py-3 bg-neutral text-neutral-content rounded-xl">
            <Link href={"/portfolio"}>Portfolio Here</Link>
          </button>
        </div>
        <div
          onClick={handleClick}
          className="md:hidden absolute right-10 top-10"
        >
          {icon ? (
            <button>
              <AiOutlineClose size={25} />
            </button>
          ) : (
            <button>
              <AiOutlineMenu size={25} />
            </button>
          )}
        </div>
      </div>
      <div
        className={
          icon
            ? "md:hidden absolute top-[100px] right-0 bottom-0 left-0  flex w-full h-[90vh] items-center justify-center ease-in-out duration-300 bg-[#FD5956]"
            : "md:hidden absolute top-[100px] right-0 left-[-100%] flex w-full h-[90vh] items-center justify-center ease-in-out duration-300 bg-[#FD5956]"
        }
      >
        <div>
          <ul className="text-white font-bold items-center text-xl justify-center flex flex-col gap-12 ml-2">
            <Link onClick={handleClick} href={"/"}>
              <li className="hover:scale-110 hover:text-black duration-300">
                Home
              </li>
            </Link>
            <Link onClick={handleClick} href={"/service"}>
              <li className="hover:scale-110 hover:text-black  duration-300">
                Service
              </li>
            </Link>
            <Link onClick={handleClick} href={"/skills"}>
              <li className="hover:scale-110 hover:text-black  duration-300">
                Skills
              </li>
            </Link>
            <Link onClick={handleClick} href={"/contact"}>
              <li className="hover:scale-110 hover:text-black  duration-300">
                Contact
              </li>
            </Link>
          </ul>
          <Link onClick={handleClick} href={"/portfolio"}>
            <div>
              <button className="hover:scale-110 hover:shadow-xl duration-300 mt-20 px-6 py-3 bg-black text-white rounded-xl font-semibold">
                Portfolio Here
              </button>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
