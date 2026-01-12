const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary");

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "music-app/songs",
    resource_type: "video", // REQUIRED for audio
    format: async () => "mp3",
  },
});

const uploadAudio = multer({ storage });

module.exports = uploadAudio;
