import { Play } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import heroThumb from "@/assets/hero-video-thumb.jpg";

type VideoSource =
  | { kind: "youtube"; id: string }
  | { kind: "vimeo"; id: string }
  | { kind: "file"; url: string };

/** Swap this for any YouTube, Vimeo, or direct MP4/WebM URL. */
const DEMO_VIDEO_URL = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

function parseVideoUrl(url: string): VideoSource {
  try {
    const u = new URL(url);
    const host = u.hostname.replace(/^www\./, "");

    // YouTube: youtu.be/<id>, youtube.com/watch?v=<id>, /embed/<id>, /shorts/<id>
    if (host === "youtu.be") {
      return { kind: "youtube", id: u.pathname.slice(1) };
    }
    if (host.endsWith("youtube.com") || host.endsWith("youtube-nocookie.com")) {
      const v = u.searchParams.get("v");
      if (v) return { kind: "youtube", id: v };
      const m = u.pathname.match(/\/(embed|shorts)\/([^/?#]+)/);
      if (m) return { kind: "youtube", id: m[2] };
    }

    // Vimeo: vimeo.com/<id> or player.vimeo.com/video/<id>
    if (host.endsWith("vimeo.com")) {
      const m = u.pathname.match(/(\d+)/);
      if (m) return { kind: "vimeo", id: m[1] };
    }
  } catch {
    /* fall through */
  }
  return { kind: "file", url };
}

interface VideoPlayerProps {
  src?: string;
  poster?: string;
  label?: string;
  duration?: string;
}

export function VideoPlayer({
  src = DEMO_VIDEO_URL,
  poster = heroThumb,
  label = "Watch the 90s Demo",
  duration = "1:24",
}: VideoPlayerProps) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const source = useMemo(() => parseVideoUrl(src), [src]);

  const handlePlay = () => {
    setPlaying(true);
    if (source.kind === "file") {
      requestAnimationFrame(() => {
        videoRef.current?.play().catch(() => {
          /* autoplay blocked — native controls remain available */
        });
      });
    }
  };

  const embedUrl =
    source.kind === "youtube"
      ? `https://www.youtube-nocookie.com/embed/${source.id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`
      : source.kind === "vimeo"
        ? `https://player.vimeo.com/video/${source.id}?autoplay=1&title=0&byline=0&portrait=0`
        : null;

  return (
    <div className="group relative aspect-video w-full overflow-hidden rounded-2xl glass shadow-2xl shadow-black/40">
      {playing ? (
        embedUrl ? (
          <iframe
            src={embedUrl}
            title={label}
            loading="lazy"
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0 bg-black"
          />
        ) : (
          <video
            ref={videoRef}
            src={source.kind === "file" ? source.url : undefined}
            poster={poster}
            controls
            playsInline
            className="absolute inset-0 h-full w-full bg-black object-cover"
          />
        )
      ) : (
        <>
          <img
            src={poster}
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
            <span>{label}</span>
            <span>{duration}</span>
          </div>
        </>
      )}
    </div>
  );
}
