"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import formats from "@/lib/image-format-carousel";

export function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (hoveredIndex === null) {
        setActiveIndex((prev) => (prev + 1) % formats.length); // This resets the activeIndex to 0 after the length of formats is exceeded!
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [hoveredIndex]);

  return (
    <div className="relative h-[500px] w-full flex items-center justify-center">
      {/* Decorative hexagon grid */}
      <div className="absolute inset-0 grid grid-cols-6 gap-4 opacity-20">
        {Array.from({ length: 36 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square bg-green-500/10 rounded-lg border border-green-500/20"
            style={{
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
          ></div>
        ))}
      </div>

      {/* Image formats */}
      <div className="relative w-full h-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            className="absolute"
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -40 }}
            transition={{ duration: 0.5 }}
          >
            {/* Card : */}
            <div
              className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border-2 border-green-500 shadow-lg shadow-green-500/20"
              style={{
                width: `${formats[activeIndex].width / 3}px`,
                height: `${formats[activeIndex].height / 3}px`,
                maxWidth: "400px",
                maxHeight: "450px",
              }}
            >
              <Image
                src={`/HeroImage.png?height=${formats[activeIndex].height}&width=${formats[activeIndex].width}`}
                alt={`${formats[activeIndex].name} format example`}
                fill
                className="object-cover"
              />

              {/* Transparent layer upon the photo : */}
              <div className="absolute inset-x-0 bottom-0 bg-black/60 backdrop-blur-sm p-4">
                <div className="text-base font-medium">
                  {formats[activeIndex].name}
                </div>

                <div className="text-sm text-gray-400 flex justify-between">
                  <span>{formats[activeIndex].aspectRatio}</span>
                  <span>
                    {formats[activeIndex].width}×{formats[activeIndex].height}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Format selector (5 dots below the image) : */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
        {formats.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === activeIndex ? "bg-green-500 w-6" : "bg-gray-600"
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}