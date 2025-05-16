"use client";

import { LogOutIcon } from "lucide-react";
import React, { useState } from "react";
import { useClerk, UserButton, useUser } from "@clerk/nextjs";
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
        <div className="flex items-center gap-3">
          {/* Logo : */}
          <div className="relative">
            <div className="absolute inset-0 bg-green-500 blur-sm rounded-md"></div>

            <div className="relative bg-gradient-to-br from-green-400 to-green-600 p-2 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-black"
              >
                <path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" />
                <path d="m12 12 4 10 1.7-4.3L22 16Z" />
              </svg>
            </div>
          </div>

          {/* SAAS Name : */}
          <span className="text-2xl font-extrabold tracking-tight">FrameDrop</span>
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