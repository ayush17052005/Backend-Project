import { v2 as cloudinary } from "cloudinary"

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret:process.env.CLOUDINARY_API_SECRET,
})

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localPath) {
      return null
    }
    cloudinary.uploader(localFilePath, {
      resource_type:"auto"
    })
    console.log("file is uploaded to cloudinary", response.url);
    return response;
  }
  catch (error) {
    fs.unlinkSync(localFilePath)
    //remove local saved file as the upload operation got failed
    return null;
  }
}

export {uploadOnCloudinary}