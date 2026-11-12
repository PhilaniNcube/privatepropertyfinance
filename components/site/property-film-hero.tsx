"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Pause, Play } from "lucide-react";

type PropertyFilmHeroMediaProps = {
  /** Whether the background film mode is enabled (Direction B) vs static poster (Direction A). */
  mode?: "static" | "film";
  /** Optional licensed MP4/WebM property loop URL once approved by owner. */
  videoSrc?: string;
  posterSrc?: string;
  posterAlt?: string;
};

const PROPERTY_SEQUENCE = [
  {
    src: "/images/hero-architecture.jpg",
    label: "Commercial & mixed-use architecture",
  },
  {
    src: "/images/development-site.jpg",
    label: "UK ground-up & conversion development",
  },
  {
    src: "/images/commercial-offices.jpg",
    label: "Regional & city office assets",
  },
  {
    src: "/images/london-street.jpg",
    label: "Residential investment & refurbishment",
  },
];

export function PropertyFilmHeroMedia({
  mode = "static",
  videoSrc,
  posterSrc = "/images/hero-architecture.jpg",
  posterAlt = "Contemporary UK commercial and residential investment architecture",
}: PropertyFilmHeroMediaProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [canRunMotion, setCanRunMotion] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoFailed, setVideoFailed] = useState(false);
  const [shotIndex, setShotIndex] = useState(0);

  useEffect(() => {
    if (mode !== "film" || typeof window === "undefined") {
      setCanRunMotion(false);
      return;
    }

    const mobileQuery = window.matchMedia("(max-width: 1023px)");
    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    const nav = navigator as Navigator & {
      connection?: { saveData?: boolean };
    };
    const saveData = Boolean(nav.connection?.saveData);

    const evaluate = () => {
      const eligible =
        !mobileQuery.matches && !reducedMotionQuery.matches && !saveData;
      setCanRunMotion(eligible);
      setIsPlaying(eligible);
    };

    evaluate();
    mobileQuery.addEventListener("change", evaluate);
    reducedMotionQuery.addEventListener("change", evaluate);
    return () => {
      mobileQuery.removeEventListener("change", evaluate);
      reducedMotionQuery.removeEventListener("change", evaluate);
    };
  }, [mode]);

  useEffect(() => {
    if (!canRunMotion || !isPlaying || videoSrc) return;
    const timer = window.setInterval(() => {
      setShotIndex((prev) => (prev + 1) % PROPERTY_SEQUENCE.length);
    }, 3800);
    return () => window.clearInterval(timer);
  }, [canRunMotion, isPlaying, videoSrc]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !canRunMotion || !videoSrc || videoFailed) return;
    if (isPlaying) {
      const playPromise = video.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {
          setIsPlaying(false);
        });
      }
    } else {
      video.pause();
    }
  }, [canRunMotion, isPlaying, videoSrc, videoFailed]);

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[3px] border border-line bg-cream-dark lg:aspect-[5/4]">
      {/* Static poster always loads first for instant LCP and acts as fallback on mobile / reduced-motion / Save-Data */}
      <Image
        src={posterSrc}
        alt={posterAlt}
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover"
      />

      {/* Desktop motion layer — decorative footage kept out of accessibility reading order (aria-hidden="true") */}
      {mode === "film" && canRunMotion ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          {videoSrc && !videoFailed ? (
            <video
              ref={videoRef}
              src={videoSrc}
              poster={posterSrc}
              muted
              loop
              playsInline
              preload="metadata"
              tabIndex={-1}
              onError={() => setVideoFailed(true)}
              className="h-full w-full object-cover"
            />
          ) : (
            PROPERTY_SEQUENCE.map((shot, idx) => {
              const active = idx === shotIndex;
              return (
                <div
                  key={shot.src}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    active ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={shot.src}
                    alt=""
                    fill
                    sizes="50vw"
                    className={`object-cover transition-transform [transition-duration:4000ms] ease-out ${
                      active && isPlaying ? "scale-[1.04]" : "scale-100"
                    }`}
                  />
                </div>
              );
            })
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#00332E]/55 via-transparent to-transparent" />
        </div>
      ) : null}

      {/* Caption & keyboard-accessible Pause/Play control */}
      <div className="absolute inset-x-3 bottom-3 z-10 flex items-center justify-between gap-3">
        <span className="rounded-[2px] bg-[#00332E]/88 px-2.5 py-1 font-sans text-[0.66rem] font-medium tracking-[0.04em] text-cream/95 backdrop-blur-sm">
          {mode === "film" && canRunMotion
            ? `${PROPERTY_SEQUENCE[shotIndex].label} · Illustrative footage`
            : "Illustrative UK commercial & investment architecture"}
        </span>

        {mode === "film" && canRunMotion ? (
          <button
            type="button"
            onClick={togglePlay}
            aria-label={
              isPlaying
                ? "Pause background property film"
                : "Play background property film"
            }
            aria-pressed={!isPlaying}
            className="inline-flex min-h-9 items-center gap-1.5 rounded-[3px] border border-cream/40 bg-[#00332E]/90 px-3 py-1.5 font-sans text-xs font-semibold text-cream shadow-sm transition-colors hover:bg-[#00665C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {isPlaying ? (
              <>
                <Pause className="h-3.5 w-3.5" aria-hidden="true" />
                Pause film
              </>
            ) : (
              <>
                <Play className="h-3.5 w-3.5" aria-hidden="true" />
                Play film
              </>
            )}
          </button>
        ) : null}
      </div>
    </div>
  );
}
