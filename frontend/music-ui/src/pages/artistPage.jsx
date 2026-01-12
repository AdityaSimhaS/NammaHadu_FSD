import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArtistById } from "../services/artistService";
import { getSongsByArtist } from "../services/songService";
import SongCard from "../components/songCard"; 

const ArtistPage = () => {
  const { id } = useParams();

  const [artist, setArtist] = useState(null);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const artistData = await getArtistById(id);
      const songsData = await getSongsByArtist(id);

      setArtist(artistData);
      setSongs(songsData);
    };

    fetchData();
  }, [id]);

  if (!artist) return null;

  return (
    <div className="artist-page">
      <h2>{artist.name}</h2>

      <div className="song-list">
        {songs.length === 0 ? (
          <p>No songs available</p>
        ) : (
          songs.map((song) => (
            <SongCard
              key={song._id}
              song={song}
              songs={songs}  
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ArtistPage;
