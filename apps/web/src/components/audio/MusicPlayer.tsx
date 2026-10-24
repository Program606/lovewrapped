import { useRef, useState } from "react";

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const fileId = "1mGrhsjM7hsu9lwmcZKX4yek4_QdtY4X1";

  const musicUrl =
    `https://drive.google.com/uc?export=download&id=${fileId}`;

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Audio playback failed:", error);
      }
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div>
      <audio
        ref={audioRef}
        src={musicUrl}
        loop
        preload="metadata"
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      />

      <button onClick={toggleMusic}>
        {isPlaying ? "⏸ Pause" : "▶ Play"}
      </button>
    </div>
  );
}