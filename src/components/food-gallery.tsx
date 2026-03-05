"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";

const foodImages = [
  {
    src: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=900&q=80",
    alt: "Pollo frito crujiente"
  },
  {
    src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=900&q=80",
    alt: "Platos latinos coloridos"
  },
  {
    src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=80",
    alt: "Acompañamientos y snacks"
  },
  {
    src: "https://images.unsplash.com/photo-1580013759032-c96505e24c1f?auto=format&fit=crop&w=900&q=80",
    alt: "Arroz con pollo"
  },
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
    alt: "Plato principal"
  }
];

export function FoodGallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scrollTo = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const child = track.children[index] as HTMLElement;
    if (!child) return;
    track.scrollTo({ left: child.offsetLeft - track.offsetLeft, behavior: "smooth" });
    setActive(index);
  }, []);

  const prev = () => scrollTo(Math.max(0, active - 1));
  const next = () => scrollTo(Math.min(foodImages.length - 1, active + 1));

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const scrollLeft = track.scrollLeft;
    const childWidth = (track.children[0] as HTMLElement)?.offsetWidth ?? 1;
    const gap = 12; // gap-3 = 12px
    const idx = Math.round(scrollLeft / (childWidth + gap));
    setActive(Math.min(Math.max(idx, 0), foodImages.length - 1));
  };

  return (
    <div className="relative">
      {/* Scroll track */}
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-3 scrollbar-none md:mx-auto md:grid md:max-w-6xl md:grid-cols-5 md:overflow-visible md:px-6"
        aria-label="Galeria de platos"
      >
        {foodImages.map((img, i) => (
          <div
            key={i}
            id={`gallery-slide-${i}`}
            className="relative min-w-[72vw] snap-start md:min-w-0"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={900}
              height={600}
              className="h-64 w-full rounded-2xl object-cover md:h-52"
            />
          </div>
        ))}
      </div>

      {/* Mobile-only controls */}
      <div className="mt-4 flex items-center justify-center gap-4 md:hidden">
        {/* Prev */}
        <button
          onClick={prev}
          disabled={active === 0}
          aria-label="Imagen anterior"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-line bg-white text-brand-green shadow-sm transition hover:border-brand-copper hover:text-brand-copper disabled:opacity-30"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex gap-2" role="tablist" aria-label="Seleccionar imagen">
          {foodImages.map((img, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === active}
              aria-label={img.alt}
              onClick={() => scrollTo(i)}
              className={`h-2 rounded-full transition-all ${
                i === active
                  ? "w-6 bg-brand-copper"
                  : "w-2 bg-brand-line hover:bg-brand-copper/50"
              }`}
            />
          ))}
        </div>

        {/* Next */}
        <button
          onClick={next}
          disabled={active === foodImages.length - 1}
          aria-label="Imagen siguiente"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-line bg-white text-brand-green shadow-sm transition hover:border-brand-copper hover:text-brand-copper disabled:opacity-30"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
