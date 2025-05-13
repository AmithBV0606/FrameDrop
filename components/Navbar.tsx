"use client";

import { ImageIcon, LogOutIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useClerk, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import MobileDrawer from "./MobileDrawer";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();
  const { signOut } = useClerk();

  return (
    <div>
      {/* Navbar : */}
      <header className="bg-black w-full h-20 flex justify-between items-center px-2 sm:px-10 lg:px-16 xl:px-24 border-b border-gray-700">
        {/* Logo and SAAS name : */}
        <div className="flex items-center p-2 gap-1">
          {/* Logo */}
          <Link href={"/home"} className="cursor-pointer">
            <ImageIcon size={40} className="text-success" />
          </Link>

          {/* SAAS Name */}
          <Link href={"/home"} className="cursor-pointer">
            <h1 className="text-2xl font-bold text-success">
              FrameDrop
            </h1>
          </Link>
        </div>

        {/* User Avatar, Logout button and Hamburger Icon : */}
        <div className="flex justify-between items-center">
          {/* Avatar and Name : */}
          <div className="flex justify-center items-center mr-1 md:mr-8">
            {/* User avatar from Clerk */}
            {user && (
              <div className="avatar avatar-online mr-2">
                <div className="w-[45px] rounded-full ring-primary ring-offset-base-100 ring-1 ring-offset-1">
                  <UserButton
                    appearance={{
                      elements: {
                        userButtonAvatarBox: {
                          height: "45px",
                          width: "45px",
                        },
                      },
                    }}
                  />
                </div>
              </div>
            )}

            {/* Greetings with first name : */}
            <div className="hidden md:block">
              <p className="text-sm text-gray-400">Hello, </p>
              <p className="text-sm text-gray-400">{user?.firstName}</p>
            </div>
          </div>

          {/* Logout Icon only visible on large screens */}
          <button
            onClick={async () => {
              await signOut();
            }}
            className="bg-[#DD2803] p-3 rounded-full cursor-pointer hidden sm:block -ml-2 sm:ml-1"
          >
            <LogOutIcon className="h-6 w-6" />
          </button>

          {/* Hamburger icon for mobile screen : */}
          <div className="block sm:hidden">
            <label className="btn btn-circle btn-lg swap swap-rotate bg-[#1A2D37]">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                checked={isOpen}
                onChange={() => setIsOpen((prev) => !prev)}
              />

              {/* hamburger icon */}
              <svg
                className="swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>

              {/* close icon */}
              <svg
                className="swap-on fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </label>
          </div>
        </div>
      </header>

      {/* Drawer for mobile screens : */}
      {isOpen && (
        <div className="relative @md:hidden">
          <MobileDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      )}
    </div>
  );
}