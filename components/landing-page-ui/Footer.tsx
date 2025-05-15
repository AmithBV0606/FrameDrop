import type React from "react";
import Link from "next/link";
import { Twitter, Instagram, Facebook, Youtube, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative z-10 pt-16 pb-8 border-t border-white/25">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
          <div>
            {/* Logo and SAAS Name */}
            <div className="flex items-center gap-3 mb-6">
              <Link href={"#navbar"}>
                <div className="relative">
                  <div className="absolute inset-0 bg-green-500 blur-sm rounded-md"></div>

                  {/* Logo */}
                  <div className="relative bg-gradient-to-br from-green-400 to-green-600 p-2 rounded-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-black"
                    >
                      <path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" />
                      <path d="m12 12 4 10 1.7-4.3L22 16Z" />
                    </svg>
                  </div>
                </div>
              </Link>

              {/* SAAS Name : */}
              <Link href={"#navbar"}>
                <span className="text-xl font-bold tracking-tight">
                  FrameDrop
                </span>
              </Link>
            </div>

            {/* Short paragraph about FrameDrop : */}
            <p className="text-gray-400 mb-6 max-w-xs">
              Transform your images and videos instantly with AI-powered
              resizing and compression for any platform.
            </p>

            {/* Social Media : */}
            <div className="flex gap-4">
              <SocialLink
                href="https://x.com/AmithBV0606"
                icon={<Twitter className="h-5 w-5" />}
              />
              <SocialLink
                href="https://www.instagram.com/amith_rao_01/"
                icon={<Instagram className="h-5 w-5" />}
              />
              <SocialLink
                href="https://github.com/AmithBV0606/FrameDrop.git"
                icon={<Github className="h-5 w-5" />}
              />
            </div>
          </div>

          {/* About FrameDrop : */}
          <div className="sm:ml-auto">
            <h4 className="font-bold mb-4 text-lg">Product</h4>
            <ul className="space-y-3">
              <FooterLink href="#hero">Home</FooterLink>
              <FooterLink href="#features">Features</FooterLink>
              <FooterLink href="#process">How It Works</FooterLink>
              <FooterLink href="#testimonials">Testimonials</FooterLink>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} FrameDrop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="bg-black/40 backdrop-blur-sm p-2 rounded-full border border-white/10 hover:bg-green-500/20 hover:border-green-500/30 transition-colors"
      target="_blank"
    >
      {icon}
    </Link>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-gray-400 hover:text-green-400 transition-colors"
      >
        {children}
      </Link>
    </li>
  );
}