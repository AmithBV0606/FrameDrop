"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import steps from "@/lib/steps";
import StepButton from "./StepButton";
import Link from "next/link";
import Image from "next/image";

export function ProcessSteps() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="relative z-10 py-24 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full filter blur-[100px]"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          {/* Process Badge : */}
          <div className="inline-block bg-green-500/10 backdrop-blur-sm px-4 py-2 rounded-full border border-green-500/20 text-green-400 font-medium mb-4">
            Simple Process
          </div>

          {/* Main heading : */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 mt-4 text-green-400">
            How FrameDrop Works
          </h2>

          <p className="text-md text-gray-500">
            Our streamlined process makes media optimization quick and easy, so
            you can focus on creating great content.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-44 items-center">
          {/* Image Showcase section : */}
          <div className="order-1 lg:order-1">
            <div className="relative bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur-sm p-6 rounded-3xl border border-white/10 aspect-video overflow-hidden h-[225px] md:h-[450px]">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-green-700/5 rounded-3xl opacity-50"></div>

              <motion.div
                key={activeStep}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="relative h-full w-full"
              >
                <Image
                  src={steps[activeStep].image || "/placeholder.svg"}
                  alt={steps[activeStep].title}
                  className="h-full w-full object-fill rounded-xl"
                />
              </motion.div>
            </div>
          </div>

          {/* Buttons to navigate throu different steps : */}
          <div className="order-1 lg:order-2 space-y-8">
            {steps.map((step, index) => (
              <div key={index}>
                {/* Button : */}
                <StepButton
                  step={step}
                  index={index}
                  isActive={index === activeStep}
                  onClick={() => setActiveStep(index)}
                />

                {/* Arrow Icon : */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center py-2">
                    <ArrowRight className="h-6 w-6 text-green-500/50" />
                  </div>
                )}
              </div>
            ))}

            {/* CTA Button : */}
            <div className="pt-6">
              <Link href={"/sign-up"}>
                <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-black font-medium rounded-full w-full p-4 cursor-pointer">
                  Try It Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}