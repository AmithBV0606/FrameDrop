"use client";

import React, { useState, useEffect, useRef } from "react";
import { CldImage } from "next-cloudinary";
import { toast } from "react-toastify";

const socialFormats = {
  "Instagram Square (1:1)": {
    width: 1080,
    height: 1080,
    aspectRatio: "1:1",
  },
  "Instagram Portrait (4:5)": {
    width: 1080,
    height: 1350,
    aspectRatio: "4:5",
  },
  "Twitter Post (16:9)": {
    width: 1200,
    height: 675,
    aspectRatio: "16:9",
  },
  "Twitter Header (3:1)": {
    width: 1500,
    height: 500,
    aspectRatio: "3:1",
  },
  "Facebook Cover (205:78)": {
    width: 820,
    height: 312,
    aspectRatio: "205:78",
  },
};

type SocialFormat = keyof typeof socialFormats;

export default function page() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState<SocialFormat>(
    "Instagram Square (1:1)"
  );
  const [isTransforming, setIsTransforming] = useState(false);

  const imageRef = useRef<HTMLImageElement>(null);

  // To make sure there is not transform happening if there is no image uploaded.
  useEffect(() => {
    if (uploadedImage) {
      setIsTransforming(true);
    }
  }, [uploadedImage, selectedFormat]);

  // File(Image) upload handler function
  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    setIsUploading(true);

    // Collecting the form data
    const formData = new FormData();
    formData.append("file", file);

    // API call
    try {
      const response = await fetch("/api/image-upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) toast.success("Image uploaded successfully!");

      if (!response.ok) throw new Error("Failed to upload the image!");

      const data = await response.json();
      setUploadedImage(data.publicId);
    } catch (error) {
      console.log(error);
      toast.error("Failed to upload the image!");
    } finally {
      setIsUploading(false);
    }
  };

  // Image download handler function
  const handleDownload = () => {
    if (!imageRef.current) return;

    // We're using fetch to access the URL
    fetch(imageRef.current.src)
      // Response from the URL is being converted into blob
      .then((response) => response.blob())
      .then((blob) => {
        // To create an URL out of that blob.
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `${selectedFormat
          .replace(/\s+/g, "_")
          .toLowerCase()}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4 text-center">
        Social Media Image Creator
      </h1>

      <div className="card">
        <div className="card-body">
          <h2 className="card-title mb-2">Upload an Image</h2>

          {/* Input field : */}
          <div className="form-control">
            <label className="label">
              <span className="label-text mb-1">Choose an image file</span>
            </label>

            <input
              type="file"
              onChange={handleFileUpload}
              className="file-input file-input-bordered file-input-success w-full rounded-lg"
            />
          </div>

          {/* To show progress bar while the image is being uploaded  */}
          {isUploading && (
            <div className="mt-4">
              <progress className="progress progress-success w-full"></progress>
            </div>
          )}

          {/* Once after uploading the image we need to show options for different social media aspect ratio, for the users to select from */}
          {uploadedImage && (
            <div className="mt-6">
              <h2 className="card-title mb-4">Select Social Media Format</h2>

              <div className="form-control">
                <select
                  className="select select-success outline-none w-full"
                  value={selectedFormat}
                  onChange={(e) =>
                    setSelectedFormat(e.target.value as SocialFormat)
                  }
                >
                  {Object.keys(socialFormats).map((format) => (
                    <option key={format} value={format}>
                      {format}
                    </option>
                  ))}
                </select>
              </div>

              {/* Preview : */}
              <div className="mt-6 relative">
                <h3 className="text-lg font-semibold mb-2">Preview :</h3>

                <div className="flex justify-center">
                  {isTransforming && (
                    <div className="absolute inset-0 flex items-center justify-center bg-base-100 bg-opacity-50 z-10">
                      <span className="loading loading-spinner loading-lg"></span>
                    </div>
                  )}

                  {/* Preview Image from cloudinary-next :  */}
                  <CldImage
                    width={socialFormats[selectedFormat].width}
                    height={socialFormats[selectedFormat].height}
                    src={uploadedImage}
                    sizes="100vw"
                    alt="transformed image"
                    crop="fill"
                    aspectRatio={socialFormats[selectedFormat].aspectRatio}
                    gravity="auto"
                    ref={imageRef}
                    onLoad={() => setIsTransforming(false)}
                    className="rounded-lg"
                  />
                </div>
              </div>

              {/* Download button : */}
              <div className="card-actions justify-end mt-6">
                <button
                  className="btn btn-success rounded-lg"
                  onClick={handleDownload}
                >
                  Download for {selectedFormat}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}