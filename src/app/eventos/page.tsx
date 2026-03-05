import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionTitle } from "@/components/section-title";
import { whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Eventos y celebraciones",
  description: "Organiza celebraciones, grupos y comidas de empresa en Segovia Fried Chicken."
};

const eventImages = [
  {
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=900&q=80",
    label: "Cumpleaños y aniversarios"
  },
  {
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80",
    label: "Comidas de empresa"
  },
  {
    src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=900&q=80",
    label: "Reuniones familiares"
  },
  {
    src: "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?auto=format&fit=crop&w=900&q=80",
    label: "Grupos turísticos"
  }
];

export default function EventosPage() {
  return (
    <main className="mx-auto w-full max-w-6xl space-y-10 px-4 py-10 md:px-6">
      <SectionTitle eyebrow="Eventos" title="Celebraciones con sabor" />

      {/* Imagen hero */}
      <div className="relative overflow-hidden rounded-3xl">
        <Image
          src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1600&q=80"
          alt="Celebración en el restaurante"
          width={1600}
          height={900}
          className="h-64 w-full object-cover md:h-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-green/60 to-transparent" />
      </div>

      {/* Cards de eventos */}
      <div className="grid gap-4 md:grid-cols-2">
        {eventImages.map((ev) => (
          <article key={ev.label} className="relative overflow-hidden rounded-2xl">
            <Image
              src={ev.src}
              alt={ev.label}
              width={900}
              height={600}
              className="h-44 w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-green/80 to-transparent" />
            <p className="absolute bottom-4 left-4 font-display text-xl text-white">{ev.label}</p>
          </article>
        ))}
      </div>

      {/* CTA */}
      <section className="rounded-3xl bg-brand-green px-6 py-10 text-brand-cream md:px-10">
        <h2 className="font-display text-3xl md:text-4xl">Pide propuesta para tu evento</h2>
        <p className="mt-2 max-w-xl text-brand-cream/70">
          WhatsApp con fecha, número de personas y tipo de celebración.
        </p>
        <div className="mt-6">
          <Link href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Solicitar propuesta
          </Link>
        </div>
      </section>
    </main>
  );
}
