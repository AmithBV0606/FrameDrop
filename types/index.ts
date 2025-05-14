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