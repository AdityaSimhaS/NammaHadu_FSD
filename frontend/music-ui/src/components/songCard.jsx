import { useContext } from "react";
import { PlayerContext } from "../context/playerContext";

const SongCard = ({ song, songs }) => {
  const { playSong } = useContext(PlayerContext);

  return (
    <div className="song-card" onClick={() => playSong(song, songs)}>
      <div>
        <strong>{song.title}</strong>
        <div>{song.artist?.name}</div>
      </div>
      <span>▶️</span>
    </div>
  );
};

export default SongCard;
