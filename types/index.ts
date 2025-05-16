import socialFormats from "@/lib/social-formats";
import { LucideIcon } from "lucide-react";

export type SocialFormat = keyof typeof socialFormats;

export interface Video {
  id: string;
  title: string;
  description: string;
  publicId: string;
  originalSize: string;
  compressedSize: string;
  duration: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ImageFormat {
  width: number;
  height: number;
  aspectRatio: string;
  name: string;
  position: {
    x: number;
    y: number;
    scale: number;
    rotation: number;
  };
}

export interface Brands {
  name: string;
  icon: LucideIcon;
}

export interface Features {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
}

export interface Steps {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
}

export interface Testimonials {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}