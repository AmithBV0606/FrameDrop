"use client";

import sidebarItems from "@/lib/SideBarItems";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export default function MainDrawer() {
  const pathname = usePathname();

  return (
    <div className="drawer xl:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      <div className="drawer-side max-h-screen">
        <ul className="bg-black text-base-content h-full w-80 p-4 pl-14">
          {sidebarItems.map((item) => (
            <li className="my-4" key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center justify-center py-3 gap-3 w-52 rounded-lg ${
                  pathname === item.href
                    ? "bg-success text-black"
                    : "hover:bg-gray-900 border border-gray-800"
                }`}
              >
                <item.icon className="w-6 h-6" />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}