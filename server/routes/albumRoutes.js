const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const {
  createAlbum,
  getAllAlbums,
} = require("../controllers/albumController");

router.post("/", auth, createAlbum); // protected
router.get("/", getAllAlbums);       // public

module.exports = router;
