"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

type HomeHeroFilmProps = {
  /** 1080p cut used from the lg breakpoint up. */
  desktopSrc: string;
  /** 720p cut used below the lg breakpoint to keep mobile data use down. */
  mobileSrc: string;
  posterSrc: string;
  caption?: string;
};

const DESKTOP_QUERY = "(min-width: 1024px)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

export function HomeHeroFilm({
  desktopSrc,
  mobileSrc,
  posterSrc,
  caption = "Canary Wharf",
}: HomeHeroFilmProps) {
  const desktopRef = useRef<HTMLVideoElement | null>(null);
  const mobileRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const isPlayingRef = useRef(false);
  const isDesktopRef = useRef(true);
  const inViewRef = useRef(true);
  const documentVisibleRef = useRef(true);

  const [isPlaying, setIsPlaying] = useState(false);
  const [ready, setReady] = useState({ desktop: false, mobile: false });
  const [videoFailed, setVideoFailed] = useState(false);

  /**
   * Only the video matching the current breakpoint is played, so the other
   * file is never fetched (both use preload="none").
   */
  const syncPlayback = useCallback(() => {
    const desktop = desktopRef.current;
    const mobile = mobileRef.current;
    if (!desktop || !mobile) return;

    const active = isDesktopRef.current ? desktop : mobile;
    const inactive = isDesktopRef.current ? mobile : desktop;

    inactive.pause();
    active.muted = true;

    if (
      isPlayingRef.current &&
      inViewRef.current &&
      documentVisibleRef.current
    ) {
      const playPromise = active.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => setIsPlaying(false));
      }
    } else {
      active.pause();
    }
  }, []);

  // Autoplay unless the visitor asked for reduced motion or is on Save-Data.
  useEffect(() => {
    isDesktopRef.current = window.matchMedia(DESKTOP_QUERY).matches;
    documentVisibleRef.current = document.visibilityState === "visible";

    const reducedMotion = window.matchMedia(REDUCED_MOTION_QUERY);
    const desktopQuery = window.matchMedia(DESKTOP_QUERY);
    const nav = navigator as Navigator & {
      connection?: { saveData?: boolean };
    };
    const saveData = Boolean(nav.connection?.saveData);

    setIsPlaying(!reducedMotion.matches && !saveData);

    const onReducedMotionChange = (event: MediaQueryListEvent) => {
      if (event.matches) setIsPlaying(false);
    };
    const onDesktopChange = (event: MediaQueryListEvent) => {
      isDesktopRef.current = event.matches;
      syncPlayback();
    };

    reducedMotion.addEventListener("change", onReducedMotionChange);
    desktopQuery.addEventListener("change", onDesktopChange);

    return () => {
      reducedMotion.removeEventListener("change", onReducedMotionChange);
      desktopQuery.removeEventListener("change", onDesktopChange);
    };
  }, [syncPlayback]);

  useEffect(() => {
    isPlayingRef.current = isPlaying;
    syncPlayback();
  }, [isPlaying, syncPlayback]);

  // Do not decode video that has been scrolled out of view or hidden in a tab.
  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        inViewRef.current = entry.isIntersecting;
        syncPlayback();
      },
      { threshold: 0.1 }
    );
    observer.observe(node);

    const onVisibilityChange = () => {
      documentVisibleRef.current = document.visibilityState === "visible";
      syncPlayback();
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [syncPlayback]);

  const markReady = (which: "desktop" | "mobile") => {
    setReady((previous) =>
      previous[which] ? previous : { ...previous, [which]: true }
    );
  };

  const handleFailure = () => {
    setVideoFailed(true);
    setIsPlaying(false);
  };

  return (
    <>
      {/* Decorative film layer — kept out of the accessibility tree. */}
      <div
        ref={containerRef}
        aria-hidden="true"
        className="absolute inset-0 overflow-clip bg-ppf-deep"
      >
        <Image
          src={posterSrc}
          alt=""
          fill
          preload
          sizes="100vw"
          className="object-cover"
        />

        {!videoFailed ? (
          <>
            <video
              ref={desktopRef}
              src={desktopSrc}
              muted
              loop
              playsInline
              preload="none"
              tabIndex={-1}
              onPlaying={() => markReady("desktop")}
              onError={handleFailure}
              className={`absolute inset-0 hidden h-full w-full object-cover transition-opacity duration-700 lg:block ${
                ready.desktop ? "opacity-100" : "opacity-0"
              }`}
            />
            <video
              ref={mobileRef}
              src={mobileSrc}
              muted
              loop
              playsInline
              preload="none"
              tabIndex={-1}
              onPlaying={() => markReady("mobile")}
              onError={handleFailure}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 lg:hidden ${
                ready.mobile ? "opacity-100" : "opacity-0"
              }`}
            />
          </>
        ) : null}
      </div>

      {/* Film credit. */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20">
        <div className="container-ppf flex justify-end pt-4 sm:pt-5">
          <span className="rounded-[2px] border border-cream/20 bg-[#002420]/55 px-2.5 py-1.5 font-sans text-[0.66rem] font-medium tracking-[0.04em] text-cream/90 backdrop-blur-md">
            {caption} · Illustrative footage
          </span>
        </div>
      </div>
    </>
  );
}
