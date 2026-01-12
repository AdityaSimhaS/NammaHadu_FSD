const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const {
  createArtist,
  getAllArtists,
  updateArtist,
  getArtistById,
} = require("../controllers/artistController");

router.post("/", auth, createArtist); // protected
router.get("/", getAllArtists);        // public
router.put("/:id", updateArtist);
router.get("/:id", getArtistById);

module.exports = router;
