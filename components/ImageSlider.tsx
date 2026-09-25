"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { sliderImages } from "@/data/sliderImages";

const AUTOPLAY_INTERVAL_MS = 5000;

export function ImageSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef<number | null>(null);

  const startAutoplay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sliderImages.length);
    }, AUTOPLAY_INTERVAL_MS);
  }, []);

  const stopAutoplay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
  }, [startAutoplay, stopAutoplay]);

  const goToSlide = useCallback(
    (index: number) => {
      setActiveIndex((index + sliderImages.length) % sliderImages.length);
      startAutoplay();
    },
    [startAutoplay],
  );

  const goToPrevious = useCallback(() => {
    goToSlide(activeIndex - 1);
  }, [activeIndex, goToSlide]);

  const goToNext = useCallback(() => {
    goToSlide(activeIndex + 1);
  }, [activeIndex, goToSlide]);

  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    if (touchStartX.current === null) return;

    const deltaX = event.changedTouches[0].clientX - touchStartX.current;
    const swipeThreshold = 50;

    if (deltaX > swipeThreshold) {
      goToPrevious();
    } else if (deltaX < -swipeThreshold) {
      goToNext();
    }

    touchStartX.current = null;
  };

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Öne çıkan görseller"
      className="relative h-[calc(100vh-4rem)] min-h-120 w-full overflow-hidden bg-black"
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {sliderImages.map((image, index) => (
        <div
          key={image.src}
          aria-hidden={index !== activeIndex}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          {image.collageImages ? (
            <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-0.5 sm:grid-cols-4 sm:grid-rows-1 sm:gap-1">
              {image.collageImages.map((collageImage) => (
                <div
                  key={collageImage.src}
                  className="relative h-full w-full overflow-hidden"
                >
                  <Image
                    src={collageImage.src}
                    alt={collageImage.alt}
                    fill
                    quality={100}
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className={`object-cover transition-transform duration-[6000ms] ease-out ${
                      index === activeIndex ? "scale-110" : "scale-100"
                    }`}
                  />
                </div>
              ))}
            </div>
          ) : (
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0}
              quality={100}
              sizes="(max-width: 768px) 300vw, 100vw"
              className={`object-cover transition-transform duration-[6000ms] ease-out ${
                index === activeIndex ? "scale-110" : "scale-100"
              }`}
            />
          )}
        </div>
      ))}

      {/* Blends the top of the slider into the solid black navbar above it */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-linear-to-b from-black/90 to-transparent sm:h-56" />
      {/* Darkens the lower portion for caption legibility and a cinematic base */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-black via-black/55 to-transparent" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10">
        <div className="mx-auto max-w-7xl px-5 pb-24 sm:pb-28 md:px-16 md:pb-32">
          <div
            key={activeIndex}
            className="max-w-xl [animation:slider-caption-in_0.8s_ease-out]"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-orange-400">
              Merkür Müzik ve Sanat Akademisi
            </p>
            <p className="font-display text-4xl text-white sm:text-5xl md:text-6xl">
              {sliderImages[activeIndex].title}
            </p>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={goToPrevious}
        aria-label="Önceki görsel"
        className="absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:border-orange-500 hover:bg-orange-500 sm:left-8 sm:h-14 sm:w-14"
      >
        <svg
          className="h-5 w-5 sm:h-6 sm:w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <button
        type="button"
        onClick={goToNext}
        aria-label="Sonraki görsel"
        className="absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:border-orange-500 hover:bg-orange-500 sm:right-8 sm:h-14 sm:w-14"
      >
        <svg
          className="h-5 w-5 sm:h-6 sm:w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 sm:bottom-10">
        {sliderImages.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => goToSlide(index)}
            aria-label={`${index + 1}. görsele git`}
            aria-current={index === activeIndex}
            className="relative h-1 w-8 overflow-hidden rounded-full bg-white/30 transition-colors duration-300 hover:bg-white/50 sm:w-12"
          >
            {index === activeIndex && (
              <span className="absolute inset-y-0 left-0 w-0 rounded-full bg-orange-500 [animation:slider-progress_5000ms_linear_forwards]" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
