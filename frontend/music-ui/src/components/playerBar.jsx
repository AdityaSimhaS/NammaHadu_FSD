import { useContext } from "react";
import { PlayerContext } from "../context/playerContext";
import formatTime from "../utils/formatTime";

const PlayerBar = () => {
  const {
    currentSong,
    isPlaying,
    togglePlay,
    playNext,
    playPrev,
    currentTime,
    duration,
    seekTo,
  } = useContext(PlayerContext);

  if (!currentSong) return null;

  return (
    <div className="player-bar">
      {/* Left: Song info */}
      <div className="player-info">
        <strong>{currentSong.title}</strong>
        <div className="player-artist">
          {currentSong.artist?.name}
        </div>
      </div>

      {/* Center: Controls + Seek */}
      <div className="player-center">
        <div className="controls">
          <button onClick={playPrev}>⏮️</button>
          <button onClick={togglePlay}>
            {isPlaying ? "⏸" : "▶️"}
          </button>
          <button onClick={playNext}>⏭️</button>
        </div>

        <div className="seek-container">
          <span>{formatTime(currentTime)}</span>
          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={(e) => seekTo(Number(e.target.value))}
          />
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Right spacer */}
      <div className="player-spacer" />
    </div>
  );
};

export default PlayerBar;
