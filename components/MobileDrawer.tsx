import sidebarItems from "@/lib/SideBarItems";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

// Hex for side bar : #191e25

export default function MobileDrawer({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const pathname = usePathname();

  return (
    <div
      className={`fixed top-20 right-0 h-full w-4/5 z-50 transform ${
        isOpen ? "translate-x-6" : "translate-x-full"
      } transition-transform duration-300 ease-linear`}
    >
      <div className="bg-black min-h-full w-80 p-4">
        <ul className="mt-2 px-10">
          {sidebarItems.map((item) => (
            <li className="my-4" key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center justify-center py-3 gap-3 w-52 rounded-lg ${
                  pathname === item.href
                    ? "bg-success text-black"
                    : "hover:bg-base-300 border border-gray-800"
                }`}
                onClick={() =>
                  setTimeout(() => {
                    setIsOpen(false);
                  }, 500)
                }
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