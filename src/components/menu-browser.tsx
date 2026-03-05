"use client";

import { useMemo, useState } from "react";
import { DishCard } from "@/components/dish-card";
import type { MenuCategory } from "@/types";

type MenuBrowserProps = {
  categories: MenuCategory[];
};

export function MenuBrowser({ categories }: MenuBrowserProps) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("sugerencias");

  const filtered = useMemo(() => {
    return categories
      .filter((category) => activeCategory === "all" || category.id === activeCategory)
      .map((category) => ({
        ...category,
        items: category.items.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))
      }))
      .filter((category) => category.items.length > 0);
  }, [activeCategory, categories, query]);

  return (
    <div className="space-y-6">
      {/* Search */}
      <div className="relative">
        <svg
          className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-green/40"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
        </svg>
        <input
          type="search"
          placeholder="Buscar plato..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="w-full rounded-2xl border border-brand-line/60 bg-white py-3 pl-11 pr-4 text-sm outline-none ring-brand-copper shadow-sm focus:ring-2"
          aria-label="Buscar plato"
        />
      </div>

      {/* Category pills — horizontal scroll on mobile */}
      <div className="overflow-hidden">
      <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 scrollbar-none md:mx-0 md:flex-wrap md:px-0">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(activeCategory === cat.id ? "all" : cat.id)}
            className={`pill-filter ${activeCategory === cat.id ? "pill-filter-active" : "pill-filter-inactive"}`}
          >
            {cat.title}
          </button>
        ))}
      </div>
      </div>

      {/* Results */}
      {filtered.map((category) => (
        <section key={category.id} className="space-y-2">
          <h3 className="font-display text-2xl text-brand-green">{category.title}</h3>
          <div className="grid min-w-0 gap-2 md:grid-cols-2">
            {category.items.map((item) => (
              <DishCard key={`${category.id}-${item.name}`} name={item.name} price={item.price} notes={item.notes} description={item.description} allergens={item.allergens} image={item.image} />
            ))}
          </div>
        </section>
      ))}

      {!filtered.length ? (
        <p className="py-6 text-center text-brand-green/50">No hay resultados para tu búsqueda.</p>
      ) : null}
    </div>
  );
}
