import { uploadOnCloudinary } from "@/lib/uploadOnCloudinary";
import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";

export async function POST(req) {
  const data = await req.formData();
  const file = data.get("file");

  console.log(data);
  console.log(file);

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

  const getdata = await uploadOnCloudinary(path);
  console.log(getdata);

  return NextResponse.json({
    success: true,
    message: "file uploaded",
  });
}
