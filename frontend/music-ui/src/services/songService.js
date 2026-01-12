import API from "./api";

// Get all songs
export const getAllSongs = async () => {
  const res = await API.get("/songs");
  return res.data;
};

// Get songs by artist
export const getSongsByArtist = async (artistId) => {
  const res = await API.get(`/songs/artist/${artistId}`);
  return res.data;
};
