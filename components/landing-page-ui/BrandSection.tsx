import React from "react";
import optimizedForBrands from "@/lib/brands";

export default function BrandSection() {
  return (
    <section className="relative z-10 py-12 bg-black/50 backdrop-blur-md border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-gray-400 text-sm uppercase tracking-wider">
            Optimized for major platforms like
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          {optimizedForBrands.map((brand) => (
            <div key={brand.name} className="text-gray-400 font-medium text-xl flex flex-col justify-center items-center gap-2">
              <brand.icon className="h-8 w-8" />
              {brand.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}