import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function BottomCTA() {
  return (
    <section className="relative z-10 py-24">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/50 via-green-700/10 to-gray-800 rounded-3xl"></div>

          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-5"></div>

          <div className="relative p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-green-400">
              Ready to transform your media?
            </h2>

            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
              Join thousands of creators and businesses who use FrameDrop to
              perfect their visual content.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href={"/sign-up"}>
                <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-black font-medium text-lg px-8 py-3 rounded-full flex items-center cursor-pointer">
                  <span>Register Now</span>
                  <ChevronRight className="ml-2 h-7 w-7" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}