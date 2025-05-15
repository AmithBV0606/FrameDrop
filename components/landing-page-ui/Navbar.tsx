import React from "react";
import NavLink from "./NavLink";
import Link from "next/link";

export default function Navbar() {
  return (
    <header
      className="relative z-10 bg-gradient-to-r from-gray-800/10 to-blue-900/10"
      id="navbar"
    >
      <div className="container mx-auto py-6 px-4">
        {/* Navbar for Navigation */}
        <nav className="flex justify-between items-center">
          {/* Logo and SAAS Name : */}
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
            <span className="text-xl font-bold tracking-tight">FrameDrop</span>
          </div>

          {/* Navigation Menu : */}
          <div className="hidden md:flex">
            <div className="bg-gray-900 backdrop-blur-md rounded-full p-1 border border-white/10">
              <div className="flex gap-1">
                <NavLink href="#features">Features</NavLink>
                <NavLink href="#process">How It Works</NavLink>
                <NavLink href="#testimonials">Testimonials</NavLink>
              </div>
            </div>
          </div>

          {/* CTA Buttons : */}
          <div className="flex items-center gap-4">
            <Link href={"/sign-in"}>
              <button className="text-white hover:text-green-400 hover:bg-white/5 px-6 py-3 rounded-md cursor-pointer text-lg">
                Log in
              </button>
            </Link>

            <Link href={"/sign-up"}>
              <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-black font-medium rounded-full py-3 px-6 cursor-pointer text-lg">
                Get Started
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}