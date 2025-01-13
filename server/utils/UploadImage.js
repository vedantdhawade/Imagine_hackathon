import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLODINARY_CLOUD_NAME,
  api_key: process.env.CLODINARY_API_KEY,
  api_secret: process.env.CLODINARY_API_SECRET_KEY,
});

const uploadImageClodinary = async (image) => {
  try {
    if (!image?.buffer) {
      throw new Error("Image buffer is not available.");
    }

    const buffer = image.buffer;

    const uploadImage = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: "binkeyit" },
        (error, uploadResult) => {
          if (error) {
            return reject(
              new Error(`Cloudinary upload failed: ${error.message}`)
            );
          }
          resolve(uploadResult);
        }
      );
      uploadStream.end(buffer);
    });

    return uploadImage;
  } catch (error) {
    console.error("Upload to Cloudinary failed:", error.message);
    throw error;
  }
};

export default uploadImageClodinary;
