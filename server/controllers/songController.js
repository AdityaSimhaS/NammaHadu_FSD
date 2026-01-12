const Song = require("../models/Song");

/**
 * @desc   Create a new song (with Cloudinary audio)
 * @route  POST /api/songs
 * @access Protected
 */
console.log("✅ songController loaded");

exports.createSong = async (req, res) => {
  try {
    console.log("==== CREATE SONG HIT ====");
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    const { title, artist, duration } = req.body;

    // Validate fields
    if (!title || !artist) {
      return res.status(400).json({
        message: "Title and artist are required",
      });
    }

    if (!req.file) {
      return res.status(400).json({
        message: "Audio file is required",
      });
    }

    const song = await Song.create({
      title,
      artist,
      duration,
      audioUrl: req.file.path, // Cloudinary URL
    });

    res.status(201).json(song);
  } catch (err) {
    console.error("CREATE SONG ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};

/**
 * @desc   Get all songs
 * @route  GET /api/songs
 * @access Public
 */
exports.getAllSongs = async (req, res) => {
  try {
    const songs = await Song.find()
      .populate("artist")
      .sort({ createdAt: -1 });

    res.json(songs);
  } catch (err) {
    console.error("GET ALL SONGS ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};

/**
 * @desc   Get single song by ID
 * @route  GET /api/songs/:id
 * @access Public
 */
exports.getSongById = async (req, res) => {
  try {
    const song = await Song.findById(req.params.id).populate("artist");

    if (!song) {
      return res.status(404).json({ message: "Song not found" });
    }

    res.json(song);
  } catch (err) {
    console.error("GET SONG BY ID ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};

/**
 * @desc   Get songs by artist
 * @route  GET /api/songs/artist/:artistId
 * @access Public
 */
exports.getSongsByArtist = async (req, res) => {
  try {
    const { artistId } = req.params;

    const songs = await Song.find({ artist: artistId })
      .populate("artist")
      .sort({ createdAt: -1 });

    res.json(songs);
  } catch (err) {
    console.error("GET SONGS BY ARTIST ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};
