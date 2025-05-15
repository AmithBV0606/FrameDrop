import { ChevronRight } from "lucide-react";
import React from "react";
import { Carousel } from "./Carousel";

export default function HeroSection() {
  return (
    <section className="relative z-10 pt-12 pb-24 overflow-hidden" id="hero">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Badge : */}
            <div className="inline-block bg-green-500/10 backdrop-blur-sm px-4 py-2 rounded-full border border-green-500/20 text-green-400 font-medium">
              Resize • Compress • Optimize
            </div>

            {/* Main heading : */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block">Perfect</span>
              <span className="block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
                  Media
                </span>{" "}
                for Every
              </span>
              <span className="block">Platform</span>
            </h1>

            {/* Small paragraph explaining our SAAS idea : */}
            <p className="text-xl text-gray-300 max-w-lg">
              Transform your images and videos instantly with AI-powered
              resizing and compression for any social media platform.
            </p>

            {/* CTA button : */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-black font-medium text-lg px-6 py-0  rounded-full flex items-center gap-1 cursor-pointer">
                <span>Start Free Trial</span>
                <ChevronRight className="h-6 w-6" />
              </button>

              <button className="border border-green-500 text-white hover:bg-green-500/10 text-lg px-8 py-3 rounded-full cursor-pointer">
                Watch Demo
              </button>
            </div>

            {/* Ratings : */}
            {/* <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-black bg-gray-800"
                  ></div>
                ))}
              </div>

              <div>
                <div className="font-medium">Trusted by 10,000+ creators</div>
                <div className="text-green-400 text-sm">★★★★★ 4.9/5 rating</div>
              </div>
            </div> */}
          </div>

          <div className="relative h-[575px]">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-green-700/20 rounded-3xl blur-3xl"></div>
            
            <div className="relative bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur-sm p-8 rounded-3xl border border-white/10 h-full">
              <Carousel />
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-green-500/10 rounded-full filter blur-[50px]"></div>
        <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-green-600/20 rounded-full filter blur-[30px]"></div>
      </div>
    </section>
  );
}