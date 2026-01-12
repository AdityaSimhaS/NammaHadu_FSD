import API from "./api";

// Get all artists
export const getAllArtists = async () => {
  const res = await API.get("/artists");
  return res.data;
};

// Get artist by ID
export const getArtistById = async (id) => {
  const res = await API.get(`/artists/${id}`);
  return res.data;
};
