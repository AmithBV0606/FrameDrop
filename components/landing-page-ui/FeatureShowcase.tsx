"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import features from "@/lib/features";
import FeatureButton from "./FeatureButton";

export function FeatureShowcase() {
  const [activeFeature, setActiveFeature] = useState(0);
  const featureAccordingToIndex = features[activeFeature];

  return (
    <section id="features" className="relative z-10 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          {/* Feature Badge : */}
          <div className="inline-block bg-green-500/10 backdrop-blur-sm px-4 py-2 rounded-full border border-green-500/20 text-green-400 font-medium mb-4">
            Powerful Features
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 mt-4 text-green-400">
            Everything you need in one place
          </h2>

          <p className="text-md text-gray-500">
            FrameDrop combines powerful tools with an intuitive interface to
            make media optimization simple and effective.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Features Button : */}
          <div className="order-1 lg:order-1">
            <div className="grid gap-4">
              {features.map((feature, index) => (
                <FeatureButton
                  key={index}
                  feature={feature}
                  isActive={index === activeFeature}
                  onClick={() => setActiveFeature(index)}
                />
              ))}
            </div>
          </div>

          {/* Feature Showcase Card : (Changes when clicked on different Features Button) */}
          <div className="order-2 lg:order-2">
            <div className="relative bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur-sm p-8 rounded-3xl border border-green-400/50 h-[450px] sm:h-[350px]">
              <div className="relative h-full flex flex-col justify-center">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Feature Icon : */}
                  <div className="bg-black/40 p-3 rounded-lg w-fit">
                    <div className="bg-gradient-to-r from-green-400 to-green-600 rounded p-2 text-black">
                      <featureAccordingToIndex.icon />
                    </div>
                  </div>

                  {/* Feature Title "" */}
                  <h3 className="text-2xl font-bold">
                    {features[activeFeature].title}
                  </h3>

                  {/* Feature Description : */}
                  <p className="text-gray-300">
                    {features[activeFeature].description}
                  </p>

                  {/* Feature Benefits : */}
                  <div className="grid grid-cols-2 gap-3 pt-4 mb-2">
                    {features[activeFeature].benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2">
                        {/* Check Icon : */}
                        <div className="bg-green-500/20 p-1 rounded-full">
                          <Check className="h-4 w-4 text-green-500" />
                        </div>

                        {/* Benefit : */}
                        <span className="text-sm text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}