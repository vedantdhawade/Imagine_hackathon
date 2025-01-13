import uploadImageClodinary from "../utils/UploadImage.js";

export const GetCropDetails = async (req, res) => {
  const { file } = req.file;
  try {
    const response = await uploadImageClodinary(file);
    res.status(200).json({
      error: false,
      success: true,
      message: "Image Uploaded Successfully",
      url: response.url,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error,
      success: true,
      error: true,
    });
  }
};
