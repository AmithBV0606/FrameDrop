"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function page() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const router = useRouter();

  // Max file size of 60MB :
  const MAX_FILE_SIZE = 70 * 1024 * 1024;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!file) return;

    if (file.size > MAX_FILE_SIZE) {
      toast.warning(
        "File size is too big. Upload video of size less than 60MB!!"
      );
      return;
    }

    setIsUploading(true);

    // Collecting the Form data
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("file", file);

    // Additional data we need to send, so that we can store the original size of the uploaded video in our database
    formData.append("originalSize", file.size.toString());

    // API call
    try {
      const response = await fetch("/api/video-upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Failed to upload the video!");

      if (response.ok) {
        toast.success("Video uploaded successfully!");
        router.push("/home");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to upload the video!");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Upload Video</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title : */}
        <div className="space-y-2">
          <label className="label">
            <span className="label-text">Title (*required)</span>
          </label>

          <input
            type="text"
            value={title}
            className="input input-bordered input-success w-full"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* Description : */}
        <div className="space-y-2">
          <label className="label">
            <span className="label-text">Description (optional)</span>
          </label>

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="textarea textarea-bordered textarea-success w-full"
          />
        </div>

        {/* File upload :  */}
        <div className="space-y-2">
          <label className="label">
            <span className="label-text">Video File (*required)</span>
          </label>

          <input
            type="file"
            accept="video/*"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="file-input file-input-success file-input-bordered w-full"
            required
          />
        </div>

        {/* Submit button : */}
        <button
          type="submit"
          className="btn btn-success mt-2"
          disabled={isUploading}
        >
          {isUploading ? "Uploading..." : "Upload Video"}
        </button>
      </form>
    </div>
  );
}