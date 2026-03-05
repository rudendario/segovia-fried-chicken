import Image from "next/image";
import Link from "next/link";
import { SectionTitle } from "@/components/section-title";
import { DishCard } from "@/components/dish-card";
import { menuData, whatsappHref } from "@/lib/site";
import { FoodGallery } from "@/components/food-gallery";

const heroImage =
  "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=1800&q=80";


const atmosphereImages = [
  {
    src: "/imagenes/WhatsApp Image 2026-03-05 at 11.52.51.jpeg",
    alt: "Mesa junto a ventana"
  },
  {
    src: "/imagenes/WhatsApp Image 2026-03-05 at 11.52.51 (1).jpeg",
    alt: "Vista del comedor"
  },
  {
    src: "/imagenes/WhatsApp Image 2026-03-05 at 11.52.51 (2).jpeg",
    alt: "Ambiente interior"
  }
];

export default function HomePage() {
  return (
    <main>
      {/* ── HERO full-screen ── */}
      <section className="relative flex min-h-[92svh] items-end overflow-hidden bg-brand-green md:min-h-[85vh]">
        <Image
          src={heroImage}
          alt="Comida latina vibrante"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-green via-brand-green/25 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-14 pt-28 md:px-6 md:pb-20">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-brand-copper">
            Segovia · Cocina latina y castellana
          </p>
          <h1 className="font-display text-5xl leading-[1.08] text-white md:text-7xl">
            Sabor auténtico<br className="hidden sm:block" /> en el corazón de Segovia
          </h1>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/carta" className="btn-primary px-7 py-3.5 text-base">
              Ver carta
            </Link>
            <Link
              href={whatsappHref}
              className="btn-ghost px-7 py-3.5 text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reservar por WhatsApp
            </Link>
          </div>
        </div>
      </section>


      {/* ── SLIDER INFINITO ── */}
      <section className="overflow-hidden py-8">
        <div className="flex w-max marquee-track gap-4">
          {[
            { src: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=600&q=80", label: "Pollo frito" },
            { src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80", label: "Snacks" },
            { src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80", label: "Platos latinos" },
            { src: "https://images.unsplash.com/photo-1580013759032-c96505e24c1f?auto=format&fit=crop&w=600&q=80", label: "Arroz con pollo" },
            { src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80", label: "Plato principal" },
            { src: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80", label: "Burger" },
            { src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80", label: "Ensalada" },
            { src: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=600&q=80", label: "Pasta" },
            /* duplicado para loop infinito sin salto */
            { src: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=600&q=80", label: "Pollo frito" },
            { src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80", label: "Snacks" },
            { src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80", label: "Platos latinos" },
            { src: "https://images.unsplash.com/photo-1580013759032-c96505e24c1f?auto=format&fit=crop&w=600&q=80", label: "Arroz con pollo" },
            { src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80", label: "Plato principal" },
            { src: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80", label: "Burger" },
            { src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80", label: "Ensalada" },
            { src: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=600&q=80", label: "Pasta" },
          ].map((img, i) => (
            <div key={i} className="relative shrink-0 overflow-hidden rounded-2xl">
              <Image
                src={img.src}
                alt={img.label}
                width={600}
                height={400}
                className="h-52 w-72 object-cover transition duration-500 hover:scale-105 md:h-60 md:w-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green/60 to-transparent" />
              <span className="absolute bottom-3 left-4 font-display text-lg text-white">{img.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── PLATOS DESTACADOS ── */}
      <section className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6">
        <div className="flex items-end justify-between gap-4">
          <SectionTitle eyebrow="Lo mejor de la casa" title="Platos destacados" />
          <Link
            href="/carta"
            className="shrink-0 text-sm font-semibold text-brand-copper underline underline-offset-4"
          >
            Ver todo
          </Link>
        </div>
        <div className="mt-5 grid gap-2 md:grid-cols-2 lg:grid-cols-3">
          {menuData.featured.map((item) => (
            <DishCard key={item.name} name={item.name} price={item.price} notes={item.notes} description={item.description} allergens={item.allergens} image={item.image} />
          ))}
        </div>
      </section>

      {/* ── GALERÍA COMIDA — scroll horizontal en móvil ── */}
      <section className="py-8">
        <div className="mx-auto mb-5 w-full max-w-6xl px-4 md:px-6">
          <SectionTitle eyebrow="Galería" title="Así es nuestra cocina" />
        </div>
        <FoodGallery />
      </section>

      {/* ── LOCAL — fotos reales ── */}
      <section className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6">
        <SectionTitle eyebrow="Nuestro local" title="Ven a conocernos" />
        <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3">
          {atmosphereImages.map((img) => (
            <Image
              key={img.alt}
              src={img.src}
              alt={img.alt}
              width={720}
              height={960}
              className="h-52 w-full rounded-2xl object-cover md:h-72"
            />
          ))}
        </div>
      </section>

      {/* ── TESTIMONIOS — scroll horizontal en móvil ── */}
      <section className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6">
        <SectionTitle eyebrow="Opiniones" title="Lo que dicen nuestros clientes" />
        <div className="mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 scrollbar-none md:grid md:grid-cols-3 md:overflow-visible">
          {[
            { quote: "Sabor latino auténtico y trato cercano. Volveremos sin duda.", author: "María G." },
            { quote: "Perfecto para ir en grupo. Carta amplia y raciones generosas.", author: "Carlos M." },
            { quote: "La mejor mezcla de cocina latina y castellana que he probado.", author: "Ana R." }
          ].map((t) => (
            <blockquote key={t.author} className="surface flex w-[62vw] shrink-0 snap-start flex-col items-center justify-center gap-3 p-5 text-center aspect-square md:aspect-auto md:w-auto md:items-start md:text-left">
              <p className="text-brand-green/80 leading-relaxed">{t.quote}</p>
              <footer className="text-xs font-bold text-brand-copper">{t.author}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* ── CTA EVENTOS ── */}
      <section className="relative mx-4 mb-12 min-h-[280px] overflow-hidden rounded-3xl md:mx-auto md:max-w-6xl">
        <Image
          src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1600&q=80"
          alt="Celebración en el restaurante"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-green/80" />
        <div className="relative z-10 px-6 py-12 text-brand-cream md:px-10 md:py-16">
          <h2 className="font-display text-4xl leading-tight md:text-5xl">
            Cumpleaños, grupos<br className="hidden sm:block" /> y eventos privados
          </h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={whatsappHref}
              className="btn-primary px-7 py-3.5 text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reservar ahora
            </Link>
            <Link href="/eventos" className="btn-ghost px-7 py-3.5 text-base">
              Saber más
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
