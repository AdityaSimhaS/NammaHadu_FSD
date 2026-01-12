const mongoose = require("mongoose");

const songSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    artist: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Artist",
      required: true,
    },
    album: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Album",
    },
    audioUrl: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
    },
    duration: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Song", songSchema);
