const Artist = require("../models/artist");

// CREATE ARTIST
exports.createArtist = async (req, res) => {
  try {
    const { name, bio, image } = req.body;

    const existing = await Artist.findOne({ name });
    if (existing) {
      return res.status(400).json({ message: "Artist already exists" });
    }

    const artist = await Artist.create({ name, bio, image });
    res.status(201).json(artist);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET ALL ARTISTS
exports.getAllArtists = async (req, res) => {
  try {
    const artists = await Artist.find().sort({ name: 1 });
    res.json(artists);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateArtist = async (req, res) => {
  try {
    const artist = await Artist.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!artist) {
      return res.status(404).json({ message: "Artist not found" });
    }

    res.json(artist);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getArtistById = async (req, res) => {
  try {
    const artist = await Artist.findById(req.params.id);

    if (!artist) {
      return res.status(404).json({ message: "Artist not found" });
    }

    res.json(artist);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
