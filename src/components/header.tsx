"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-line/40 bg-brand-cream/95 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3.5 md:px-6">
        <Link
          href="/"
          className="font-display text-lg font-bold leading-tight text-brand-green md:text-xl"
          onClick={() => setOpen(false)}
        >
          Segovia Fried Chicken
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:block" aria-label="Navegación principal">
          <ul className="flex gap-1 text-sm font-semibold">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`rounded-full px-4 py-2 transition ${
                      active ? "bg-brand-copper text-white" : "text-brand-green hover:bg-brand-sand"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand-line/60 bg-white shadow-sm md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          <svg
            className="h-5 w-5 text-brand-green"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav dropdown */}
      {open && (
        <div className="border-t border-brand-line/40 bg-brand-cream/98 md:hidden">
          <nav aria-label="Navegación móvil">
            <ul className="flex flex-col gap-1 px-4 py-3">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center rounded-xl px-4 py-3.5 font-semibold transition ${
                        active ? "bg-brand-copper text-white" : "text-brand-green hover:bg-brand-sand"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
