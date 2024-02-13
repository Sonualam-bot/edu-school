import { uploadOnCloudinary } from "@/lib/uploadOnCloudinary";
import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.formData();
    const file = data.get("file");

    if (!file) {
      return NextResponse.json({
        success: false,
        message: "No image found",
      });
    }
    const byteData = await file.arrayBuffer();
    const buffer = Buffer.from(byteData);
    const path = `./public/schoolImage/${file.name}`;

    await writeFile(path, buffer);

    const result = await uploadOnCloudinary(path);

    return Response.json({
      success: true,
      message: "file uploaded",
      cloudinaryResult: result.secure_url,
    });
  } catch (error) {
    console.error("Error uploading file:", error.message);
    return NextResponse.json({
      success: false,
      message: "Error uploading file to Cloudinary",
    });
  }
}
