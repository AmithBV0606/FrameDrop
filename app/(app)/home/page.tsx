"use client";

import React, { useState, useEffect, useCallback } from "react";
import VideoCard from "@/components/VideoCard";
import { Video } from "@/types";

export default function Home() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // API call :
  const fetchVideos = useCallback(async () => {
    try {
      const response = await fetch("/api/videos");
      const data = await response.json();

      if (Array.isArray(data)) {
        setVideos(data);
      } else {
        throw new Error("Unexpected response format!!");
      }
    } catch (error) {
      console.log(error);
      setError("Failed to fetch videos!!");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  const handleDownload = useCallback((url: string, title: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${title}.mp4`);
    link.setAttribute("target", "_blank");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="text-2xl font-semibold italic">Loading</span>
        <span className="loading loading-dots loading-md mt-3"></span>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Videos</h1>

      {videos.length === 0 ? (
        <div className="w-full h-screen flex justify-center items-center text-lg text-gray-500">
          No videos available!!
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              onDownload={handleDownload}
            />
          ))}
        </div>
      )}
    </div>
  );
}