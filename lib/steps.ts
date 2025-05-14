import { Download, Settings, Upload } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Your Media",
    description:
      "Drag and drop your images or videos into FrameDrop. We support all major file formats.",
    image: "/ProcessPic-1.png",
  },
  {
    icon: Settings,
    title: "Choose Your Settings",
    description:
      "Select platform presets or customize dimensions, quality, and format to your exact needs.",
    image: "/ProcessPic-2.png?height=600&width=800",
  },
  {
    icon: Download,
    title: "Download Optimized Files",
    description:
      "Get your perfectly sized media ready for any platform. Download individually or in batch.",
    image: "/ProcessPic-3.png?height=600&width=800",
  },
];

export default steps;