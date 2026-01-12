import { createContext, useEffect, useRef, useState } from "react";

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const audioRef = useRef(new Audio());

  const [queue, setQueue] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);

  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  /* ---------------- PLAY SONG ---------------- */
  const playSong = (song, songList = []) => {
    if (!song) return;

    if (songList.length) {
      setQueue(songList);
      const index = songList.findIndex((s) => String(s._id) === String(song._id));
      setCurrentIndex(index);
    } else {
      setQueue([song]);
      setCurrentIndex(0);
    }
  };

  /* ----------- PLAY SONG WHEN INDEX CHANGES ----------- */
  useEffect(() => {
    if (currentIndex === null || !queue[currentIndex]) return;

    const song = queue[currentIndex];

    audioRef.current.src = song.audioUrl;
    audioRef.current.load();

    audioRef.current
      .play()
      .then(() => {
        setCurrentSong(song);
        setIsPlaying(true);
      })
      .catch(console.error);
  }, [currentIndex, queue]);

  /* ---------------- CONTROLS ---------------- */
  const togglePlay = () => {
    if (!audioRef.current.src) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const playNext = () => {
    setCurrentIndex((prev) => {
      if (prev === null || prev >= queue.length - 1) return prev;
      return prev + 1;
    });
  };

  const playPrev = () => {
    setCurrentIndex((prev) => {
      if (prev === null || prev <= 0) return prev;
      return prev - 1;
    });
  };

  const seekTo = (time) => {
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  /* ---------------- AUDIO EVENTS ---------------- */
  useEffect(() => {
    const audio = audioRef.current;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const setMeta = () => setDuration(audio.duration || 0);
    const onEnd = playNext;

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", setMeta);
    audio.addEventListener("ended", onEnd);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", setMeta);
      audio.removeEventListener("ended", onEnd);
    };
  }, [queue]);

  return (
    <PlayerContext.Provider
      value={{
        currentSong,
        isPlaying,
        currentTime,
        duration,
        playSong,
        togglePlay,
        playNext,
        playPrev,
        seekTo,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
