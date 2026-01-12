import { useEffect, useState } from "react";
import { getAllArtists } from "../services/artistService";
import { getAllSongs } from "../services/songService";

import ArtistCard from "../components/artistCard";
import SongCard from "../components/songCard";

const Home = () => {
  const [artists, setArtists] = useState([]);
  const [songs, setSongs] = useState([]);

  {songs.map((song) => (
  <SongCard key={song._id} song={song} songs={songs} />
))}


  useEffect(() => {
    const fetchData = async () => {
      const artistData = await getAllArtists();
      const songData = await getAllSongs();

      setArtists(artistData);
      setSongs(songData);
    };

    fetchData();
  }, []);

  return (
    <div className="home-page">
      <h2>Artists</h2>

      <div className="artist-grid">
        {artists.map((artist) => (
          <ArtistCard key={artist._id} artist={artist} />
        ))}
      </div>

      <h2>Songs</h2>

      <div className="song-list">
        {songs.map((song) => (
          <SongCard 
          key={song._id} 
          song={song}
          songs={songs} />
        ))}
      </div>
    </div>
  );
};

export default Home;
