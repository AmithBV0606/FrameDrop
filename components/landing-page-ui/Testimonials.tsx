"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import testimonials from "@/lib/testimonials";
import Image from "next/image";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className="relative z-10 py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Introduction of Testimonials section : */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          {/* Testimonials Badge : */}
          <div className="inline-block bg-green-500/10 backdrop-blur-sm px-4 py-2 rounded-full border border-green-500/20 text-green-400 font-medium mb-4">
            Testimonials
          </div>

          {/* Main heading : */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 mt-4 text-green-400">
            What our users say
          </h2>

          {/* Paragraph : */}
          <p className="text-md text-gray-500">
            Join thousands of satisfied creators and businesses who have
            transformed their media workflow.
          </p>
        </div>

        {/* The Quote Box : */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/10">
            {/* The quote icon behind the quote box : */}
            <div className="absolute top-8 left-8 text-green-500 opacity-20">
              <Quote className="h-24 w-24" />
            </div>

            {/* Quote Box : */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  {/* Quote : */}
                  <p className="text-xl md:text-2xl italic mb-8 relative z-10">
                    &quot;{testimonials[activeIndex].quote}&quot;
                  </p>

                  {/* About Author : */}
                  <div className="flex flex-col items-center">
                    {/* Author's Image : */}
                    <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-green-500">
                      <Image
                        src={
                          testimonials[activeIndex].avatar || "/placeholder.svg"
                        }
                        alt={testimonials[activeIndex].author}
                        className="w-full h-full object-cover"
                        height={100}
                        width={100}
                      />
                    </div>

                    {/* Author's name : */}
                    <div className="font-bold text-lg">
                      {testimonials[activeIndex].author}
                    </div>

                    {/* Author's role : */}
                    <div className="text-green-400">
                      {testimonials[activeIndex].role}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Arrow icons to navigate through the testimonials : */}

            {/* Left arrow icon : */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 md:-left-6">
              <button
                onClick={prevTestimonial}
                className="bg-black/60 backdrop-blur-sm p-3 rounded-full border border-white/10 hover:bg-green-500/20 hover:border-green-500/30 transition-colors cursor-pointer"
              >
                <ChevronLeft className="h-6 w-6 text-green-400" />
              </button>
            </div>

            {/* Right arrow icon : */}
            <div className="absolute top-1/2 -translate-y-1/2 right-4 md:-right-6">
              <button
                onClick={nextTestimonial}
                className="bg-black/60 backdrop-blur-sm p-3 rounded-full border border-white/10 hover:bg-green-500/20 hover:border-green-500/30 transition-colors cursor-pointer"
              >
                <ChevronRight className="h-6 w-6 text-green-400" />
              </button>
            </div>
          </div>

          {/* Caroousel dots : */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? "bg-green-500 w-8" : "bg-gray-600"
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}