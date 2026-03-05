"use client";

import { useState } from "react";
import Image from "next/image";
import { formatPrice } from "@/lib/site";

type DishCardProps = {
  name: string;
  price: number | null;
  notes?: string;
  description?: string;
  allergens?: string[];
  image?: string;
};

export function DishCard({ name, price, notes, description, allergens, image }: DishCardProps) {
  const [open, setOpen] = useState(false);
  const hasDetail = !!(description || allergens?.length || image);

  return (
    <>
      <article
        onClick={() => hasDetail && setOpen(true)}
        role={hasDetail ? "button" : undefined}
        tabIndex={hasDetail ? 0 : undefined}
        onKeyDown={(e) => hasDetail && e.key === "Enter" && setOpen(true)}
        aria-label={hasDetail ? `Ver detalles de ${name}` : undefined}
        className={`group flex min-w-0 items-center justify-between gap-3 overflow-hidden rounded-2xl border border-brand-line/60 bg-white px-5 py-4 shadow-sm transition hover:border-brand-copper/40 hover:shadow-md${hasDetail ? " cursor-pointer" : ""}`}
      >
        <div className="min-w-0">
          <h3 className="truncate text-base font-bold text-brand-green">{name}</h3>
          {notes ? <p className="mt-0.5 truncate text-xs text-brand-green/60">{notes}</p> : null}
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <p className="rounded-full bg-brand-copper-light px-3 py-1 text-sm font-bold text-brand-copper">
            {formatPrice(price)}
          </p>
          {hasDetail && (
            <svg
              className="h-4 w-4 shrink-0 text-brand-green/25 transition group-hover:text-brand-copper"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
        </div>
      </article>

      {/* Bottom sheet / modal */}
      {open && hasDetail && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          {/* Sheet */}
          <div
            role="dialog"
            aria-modal="true"
            aria-label={name}
            className="fixed bottom-0 left-0 right-0 z-50 max-h-[88svh] overflow-y-auto rounded-t-3xl bg-brand-cream shadow-2xl md:bottom-auto md:left-1/2 md:top-1/2 md:w-full md:max-w-lg md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-3xl"
          >
            {/* Drag handle (mobile only) */}
            <div className="sticky top-0 flex justify-center pt-3 pb-1 md:hidden">
              <div className="h-1 w-10 rounded-full bg-brand-line" />
            </div>

            {image && (
              <div className="relative overflow-hidden md:rounded-t-3xl">
                <Image
                  src={image}
                  alt={name}
                  width={800}
                  height={480}
                  className="h-52 w-full object-cover"
                />
              </div>
            )}

            <div className="p-6">
              <div className="flex items-start justify-between gap-3">
                <h2 className="font-display text-2xl leading-tight text-brand-green">{name}</h2>
                <span className="shrink-0 rounded-full bg-brand-copper px-4 py-1 text-base font-bold text-white">
                  {formatPrice(price)}
                </span>
              </div>

              {notes && <p className="mt-1 text-sm text-brand-green/60">{notes}</p>}

              {description && (
                <p className="mt-4 leading-relaxed text-brand-green/80">{description}</p>
              )}

              {allergens && allergens.length > 0 && (
                <div className="mt-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-copper">
                    Alérgenos
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {allergens.map((a) => (
                      <span
                        key={a}
                        className="rounded-full border border-brand-line bg-white px-3 py-1 text-xs font-semibold text-brand-green"
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <button
                onClick={() => setOpen(false)}
                className="btn-primary mt-6 w-full"
              >
                Cerrar
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
