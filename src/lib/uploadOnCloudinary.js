import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  const result = await cloudinary.uploader.upload(localFilePath, {
    folder: "avatarimages",
  });

  return result;
};

export { uploadOnCloudinary };
