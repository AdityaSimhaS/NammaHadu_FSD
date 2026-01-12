const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const uploadAudio = require("../middleware/uploadAudio");

const {
  createSong,
  getAllSongs,
  getSongById,
  getSongsByArtist,
} = require("../controllers/songController");

// upload song
router.post("/",auth, uploadAudio.single("audio"), createSong);

// public
router.get("/",auth, getAllSongs);

// SPECIFIC ROUTE FIRST
router.get("/artist/:artistId", getSongsByArtist);

// GENERIC ROUTE LAST
router.get("/:id", getSongById);

module.exports = router;

