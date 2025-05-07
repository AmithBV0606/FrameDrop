import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import { auth } from "@clerk/nextjs/server";

// Configuration
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

interface CloudinaryUploadResult {
  public_id: string;
  [key: string]: any;
}

export async function POST(request: NextRequest) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // To get the Form data from the user.
    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "File not found" }, { status: 400 });
    }

    // ________________________________________________________________________________________

    // Logic to upload images to cloudinary.

    // File has a property of arrayBuffer from which we can get the bytes of the image.
    const bytes = await file.arrayBuffer();

    // Since an arrayBuffer cannot be uploaded to cloudinary directly, we need to create a buffer out of arrayBuffer.
    const buffer = Buffer.from(bytes);

    // To upload an image.
    const result = await new Promise<CloudinaryUploadResult>(
      (resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          { folder: "FrameDrop-Uploads" },
          (error, result) => {
            if (error) reject(error);
            else resolve(result as CloudinaryUploadResult);
          }
        );

        uploadStream.end(buffer);
      }
    );

    // ________________________________________________________________________________________

    return NextResponse.json({ publicId: result.public_id }, { status: 200 });
  } catch (error) {
    console.log("Failed to upload the image!", error);
    return NextResponse.json(
      { error: "Failed to upload the image!" },
      { status: 500 }
    );
  }
}