import { FeatureShowcase } from "@/components/landing-page-ui/FeatureShowcase";
import { ProcessSteps } from "@/components/landing-page-ui/ProcessSteps";
import { Testimonials } from "@/components/landing-page-ui/Testimonials";
import { Footer } from "@/components/landing-page-ui/Footer";
import Navbar from "@/components/landing-page-ui/Navbar";
import HeroSection from "@/components/landing-page-ui/HeroSection";
import BrandSection from "@/components/landing-page-ui/BrandSection";
import StatsSection from "@/components/landing-page-ui/StatsSection";
import BottomCTA from "@/components/landing-page-ui/BottomCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="fixed inset-0 z-0 opacity-50">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-green-500 rounded-full filter blur-[100px]"></div>
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-green-700 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-green-600 rounded-full filter blur-[100px]"></div>
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Brands Section */}
      <BrandSection />

      {/* Feature Showcase */}
      <FeatureShowcase />

      {/* Process Steps */}
      <ProcessSteps />

      {/* Stats Section */}
      <StatsSection />

      {/* Testimonials */}
      <Testimonials />

      {/* If this project takes off, add Pricing section! */}

      {/* CTA Section */}
      <BottomCTA />

      {/* Footer */}
      <Footer />
    </div>
  );
}