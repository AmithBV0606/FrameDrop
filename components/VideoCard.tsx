"use client";

import React, { useState, useEffect, useCallback } from "react";
import { getCldImageUrl, getCldVideoUrl } from "next-cloudinary";
import { Download, Clock, FileDown, FileUp } from "lucide-react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { filesize } from "filesize";
import { Video } from "@/app/generated/prisma";
import Image from "next/image";

// getCldImageUrl - Needed for creating thumbnails for the videos

// To use "relativeTime" :
dayjs.extend(relativeTime);

interface VideoCardProps {
  video: Video;
  onDownload: (url: string, title: string) => void;
}

export default function VideoCard({ video, onDownload }: VideoCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [previewError, setPreviewError] = useState(false);

  // To get the thumbnail URL from an existing video(present in the cloudinary folder) :
  const getThumbnailUrl = useCallback((publicId: string) => {
    return getCldImageUrl({
      src: publicId,
      width: 400,
      height: 225,
      crop: "fill",
      gravity: "auto",
      format: "jpg",
      quality: "auto",
      assetType: "video",
    });
  }, []);

  // To get the full video URL(present in the cloudinary folder) :
  const getFullVideoUrl = useCallback((publicId: string) => {
    return getCldVideoUrl({
      src: publicId,
      width: 1920,
      height: 1080,
    });
  }, []);

  // To get the preview video URL :
  const getPreviewVideoUrl = useCallback((publicId: string) => {
    return getCldVideoUrl({
      src: publicId,
      width: 400,
      height: 225,
      rawTransformations: ["e_preview:duration_5:max_seg_9:min_seg_dur_1"],
    });
  }, []);

  // File size :
  const formatSize = useCallback((size: number) => {
    return filesize(size);
  }, []);

  // Video Duration :
  const formatDuration = useCallback((seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  }, []);

  // Compressed percentage :
  const compressionPercentage = Math.round(
    (1 - Number(video.compressedSize) / Number(video.originalSize)) * 100
  );

  useEffect(() => {
    setPreviewError(false);
  }, [isHovered]);

  const handlePreviewError = () => {
    setPreviewError(true);
  };

  return (
    <div
      className="card bg-black rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* First Half of the Card : */}
      <figure className="aspect-video relative">
        {/* Video : */}
        {isHovered ? (
          previewError ? (
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <p className="text-red-500">Preview not available!</p>
            </div>
          ) : (
            <video
              src={getPreviewVideoUrl(video.publicId)}
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
              onError={handlePreviewError}
            />
          )
        ) : (
          <Image
            src={getThumbnailUrl(video.publicId)}
            alt={video.title}
            className="w-full h-full object-cover"
            width={400}
            height={225}
          />
        )}

        {/* Duration on the Video : */}
        <div className="absolute bottom-2 right-2 bg-base-100 bg-opacity-70 px-2 py-1 rounded-lg text-sm flex items-center">
          <Clock size={16} className="mr-1" />
          {formatDuration(video.duration)}
        </div>
      </figure>

      {/* Other Half of the Card : */}
      <div className="card-body p-4">
        {/* Video Title : */}
        <h2 className="card-title text-lg font-bold">{video.title}</h2>

        {/* Video Description : */}
        <p className="text-sm text-base-content opacity-70 mb-4">
          {video.description}
        </p>

        {/* Uploaded at : */}
        <p className="text-sm text-base-content opacity-70 mb-4">
          Uploaded {dayjs(video.createdAt).fromNow()}
        </p>

        {/* Original and Compressed Size : */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          {/* Original Size : */}
          <div className="flex items-center">
            <FileUp size={18} className="mr-2 text-primary" />

            <div>
              <div className="font-semibold">Original</div>
              <div>{formatSize(Number(video.originalSize))}</div>
            </div>
          </div>

          {/* Compressed Size : */}
          <div className="flex items-center">
            <FileDown size={18} className="mr-2 text-primary" />

            <div>
              <div className="font-semibold">Compressed</div>
              <div>{formatSize(Number(video.compressedSize))}</div>
            </div>
          </div>
        </div>

        {/* Compression percentage : */}
        <div className="flex justify-between items-center mt-4">
          <div className="text-sm font-semibold">
            Compression :
            <span className="text-accent"> {compressionPercentage}%</span>
          </div>

          {/* Download button : */}
          <button
            className="btn btn-success btn-sm"
            onClick={() =>
              onDownload(getFullVideoUrl(video.publicId), video.title)
            }
          >
            <Download size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}