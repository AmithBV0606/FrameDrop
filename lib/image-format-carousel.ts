import { ImageFormat } from "@/types";

const formats: ImageFormat[] = [
  {
    width: 1080,
    height: 1080,
    aspectRatio: "1:1",
    name: "Instagram Square",
    position: { x: 0, y: 0, scale: 1, rotation: 0 },
  },
  {
    width: 780,
    // height: 1350, original
    height: 1225,
    aspectRatio: "4:5",
    name: "Instagram Portrait",
    position: { x: 0, y: 0, scale: 1, rotation: 0 },
  },
  {
    width: 1200,
    // height: 675, original
    height: 875,
    aspectRatio: "16:9",
    name: "Twitter Post",
    position: { x: 0, y: 0, scale: 1, rotation: 0 },
  },
  {
    width: 1500,
    height: 500,
    aspectRatio: "3:1",
    name: "Twitter Header",
    position: { x: 0, y: 0, scale: 1, rotation: 0 },
  },
  {
    width: 1220,
    height: 612,
    aspectRatio: "205:78",
    name: "Facebook Cover",
    position: { x: 0, y: 0, scale: 1, rotation: 0 },
  },
];

export default formats;