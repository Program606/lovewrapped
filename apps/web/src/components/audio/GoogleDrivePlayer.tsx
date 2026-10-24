export function GoogleDriverPlayer() {
  const audioUrl = "song.mp3";
  const audioUrl1 = "https://drive.google.com/file/d/16XMMTcKaNRlbfKF_qcCZr764EKQNtHzy/view?usp=sharing";
  return (
    <audio
      controls
      src={audioUrl}
      preload="metadata"
      onLoadedMetadata={() => console.log("Audio loaded!")}
      onError={(e) => console.error(e.currentTarget.error)}
    />
  );
}