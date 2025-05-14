import { Features } from "@/types";
import {
  ImageIcon,
  Video,
  Palette,
  Clock,
  LayoutDashboard,
} from "lucide-react";

const features: Features[] = [
  {
    icon: LayoutDashboard,
    title: "Dashboard",
    description:
      "Users get to enjoy the custom dashboard, through which they can see all the videos they've compressed so far using FrameDrop. Also they can download those videos again and again!",
    benefits: [
      "Custom dashboard",
      "Video-upload history",
      "Download old videos again and again",
    ],
  },
  {
    icon: ImageIcon,
    title: "Smart Image Resizing",
    description:
      "Automatically resize images for different social media platforms with optimized dimensions. Cloudinary's AI detects the important parts of your image to ensure perfect cropping every time.",
    benefits: [
      "Preserve image quality",
      "Automatic subject detection",
      "Content aware cropping",
      "Aspect ratios according to social media",
    ],
  },
  {
    icon: Video,
    title: "Video Compression",
    description:
      "Compress videos without losing quality, perfect for faster loading and sharing. Our advanced algorithms ensure your videos look great while reducing file size by up to 90%.",
    benefits: [
      "Maintain video quality",
      "Reduce file size",
      "One click download",
    ],
  },
  {
    icon: Palette,
    title: "Format Conversion (Coming Soon)",
    description:
      "Convert between different file formats including JPEG, PNG, WebP, and more. Choose the right format for each platform to maximize quality and performance.",
    benefits: [
      "Multiple formats",
      "Optimize for web",
      "Preserve metadata",
    ],
  },
  {
    icon: Clock,
    title: "Scheduled Processing (Coming Soon)",
    description:
      "Set up automated processing for your media at scheduled times. Perfect for content creators who need to prepare media for multiple platforms.",
    benefits: [
      "Automated workflows",
      "Time-based triggers",
      "Integration with publishing tools",
      "Custom schedules",
    ],
  },
];

export default features;