import React from "react";

export default function StatsSection() {
  return (
    <section className="relative z-10 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-md border-y border-white/5"></div>
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <StatCard number="[ ]" label="Content Aware Cropping" />
          <StatCard number="60% - 70%" label="File Size Reduction" />
          <StatCard number="3" label="Optimized Platform" />
        </div>
      </div>
    </section>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="bg-gray-900 backdrop-blur-md rounded-2xl p-6 border border-white/5 text-center transform hover:scale-105 transition-transform">
      <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600 mb-2">
        {number}
      </div>
      <div className="text-gray-300">{label}</div>
    </div>
  );
}