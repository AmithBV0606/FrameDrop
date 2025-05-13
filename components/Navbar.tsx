"use client";

import { ImageIcon, LogOutIcon } from "lucide-react";
import React from "react";
import { useClerk, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

export default function Navbar() {
  const { user } = useUser();
  const { signOut } = useClerk();

  return (
    <header className="bg-black w-full h-20 flex justify-between items-center px-2 lg:px-24">
      <div className="flex justify-start items-center p-2 gap-2">
        {/* Logo */}
        <Link href={"/home"} className="cursor-pointer">
          <ImageIcon size={40} className="text-success" />
        </Link>

        {/* SAAS Name */}
        <Link href={"/home"} className="cursor-pointer">
          <h1 className="text-2xl font-bold italic text-success">FrameDrop</h1>
        </Link>
      </div>

      <div className="flex justify-between items-center">
        {/* Avatar and Name : */}
        <div className="flex justify-center items-center mr-2 md:mr-8">
          {/* User avatar from Clerk */}
          {user && (
            <div className="avatar avatar-online mr-3">
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
          className="bg-[#DD2803] p-3 rounded-full cursor-pointer hidden md:block"
        >
          <LogOutIcon className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}