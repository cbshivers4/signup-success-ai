import { Play } from "lucide-react";
import { useRef, useState } from "react";
import heroThumb from "@/assets/hero-video-thumb.jpg";

const DEMO_VIDEO_URL =
  "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

export function VideoPlayer() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handlePlay = () => {
    setPlaying(true);
    // wait a tick for the <video> to mount
    requestAnimationFrame(() => {
      videoRef.current?.play().catch(() => {
        /* autoplay blocked — user can press native controls */
      });
    });
  };

  return (
    <div className="group relative aspect-video w-full overflow-hidden rounded-2xl glass shadow-2xl shadow-black/40">
      {playing ? (
        <video
          ref={videoRef}
          src={DEMO_VIDEO_URL}
          poster={heroThumb}
          controls
          playsInline
          className="absolute inset-0 h-full w-full bg-black object-cover"
        />
      ) : (
        <>
          <img
            src={heroThumb}
            alt="TrafficBoost AI product demo — marketing analytics dashboard"
            width={1280}
            height={720}
            className="absolute inset-0 h-full w-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          <button
            type="button"
            aria-label="Play demo video"
            onClick={handlePlay}
            className="absolute inset-0 grid place-items-center"
          >
            <span className="relative flex size-24 items-center justify-center">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-40" />
              <span className="relative grid size-20 place-items-center rounded-full bg-white/10 backdrop-blur-md border border-white/30 transition-transform group-hover:scale-110">
                <Play className="size-8 fill-white text-white ml-1" />
              </span>
            </span>
          </button>
          <div className="pointer-events-none absolute bottom-4 left-5 right-5 flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-white/80">
            <span>Watch the 90s Demo</span>
            <span>1:24</span>
          </div>
        </>
      )}
    </div>
  );
}
