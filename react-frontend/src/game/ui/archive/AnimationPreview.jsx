import { useEffect, useState } from "react";

export default function AnimationPreview({ animation }) {
  const [naturalSize, setNaturalSize] = useState(null);
  const [frame, setFrame] = useState(0);
  const frames = Math.max(1, animation.frames ?? 1);
  const sheetFrames = Math.max(frames, animation.sheetFrames ?? frames);
  const fps = Math.max(1, animation.fps ?? 1);
  const frameRatio = naturalSize
    ? Math.max(0.45, Math.min(2.2, (naturalSize.width / sheetFrames) / naturalSize.height))
    : 1;

  useEffect(() => {
    setFrame(0);
    if (frames <= 1) return undefined;

    const timer = window.setInterval(() => {
      setFrame((value) => (value + 1) % frames);
    }, 1000 / fps);

    return () => window.clearInterval(timer);
  }, [animation.image, fps, frames]);

  return (
    <div
      key={animation.image}
      className="archive-animated-sprite"
      style={{
        "--frames": frames,
        aspectRatio: frameRatio,
      }}
    >
      <img
        src={animation.image}
        alt=""
        aria-hidden="true"
        style={{
          width: `${sheetFrames * 100}%`,
          transform: `translateX(-${(frame * 100) / sheetFrames}%)`,
        }}
        onLoad={(event) => {
          setNaturalSize({
            width: event.currentTarget.naturalWidth,
            height: event.currentTarget.naturalHeight,
          });
        }}
      />
    </div>
  );
}
