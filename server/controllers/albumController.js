const Album = require("../models/album");

// CREATE ALBUM
exports.createAlbum = async (req, res) => {
  try {
    const album = await Album.create(req.body);
    res.status(201).json(album);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET ALL ALBUMS
exports.getAllAlbums = async (req, res) => {
  try {
    const albums = await Album.find().populate("artist");
    res.json(albums);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
