import type { Metadata } from "next";
import Link from "next/link";
import { SectionTitle } from "@/components/section-title";
import { contactData, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto y reservas",
  description: "Teléfono, WhatsApp, dirección y mapa de Segovia Fried Chicken."
};

export default function ContactoPage() {
  const mapsSrc = `https://www.google.com/maps?q=${encodeURIComponent(contactData.mapQuery)}&output=embed`;

  return (
    <main className="mx-auto w-full max-w-6xl space-y-8 px-4 py-10 md:px-6">
      <SectionTitle eyebrow="Contacto" title="Ven a conocernos" />

      {/* Mapa — primero en móvil para anclar visualmente */}
      <section className="overflow-hidden rounded-3xl border border-brand-line/40 shadow-sm">
        <iframe
          title="Mapa de Segovia Fried Chicken"
          src={mapsSrc}
          width="100%"
          height="320"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block border-0"
        />
      </section>

      {/* Info + CTAs */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Dirección & teléfono */}
        <section className="surface space-y-5 p-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-brand-copper">Dirección</p>
            <p className="mt-1 font-semibold text-brand-green">{contactData.address}</p>
            <p className="text-sm text-brand-green/60">{contactData.city}</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-brand-copper">Teléfono</p>
            {contactData.phones.map((p) => (
              <p key={p} className="mt-1 font-semibold text-brand-green">{p}</p>
            ))}
          </div>
          {contactData.instagram && (
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-brand-copper">Instagram</p>
              <Link
                href={contactData.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block font-semibold text-brand-green underline underline-offset-4"
              >
                @segovia.friedchicken
              </Link>
            </div>
          )}
        </section>

        {/* CTAs */}
        <section className="flex flex-col gap-3">
          <Link
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-start rounded-2xl bg-brand-copper p-6 text-white transition hover:brightness-90"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-white/70">Más rápido</span>
            <span className="mt-1 font-display text-2xl">Reservar por WhatsApp</span>
          </Link>
          <Link
            href={`tel:${contactData.phones[0].replace(/\s+/g, "")}`}
            className="surface flex flex-col items-start p-6 transition hover:border-brand-copper/40"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-brand-copper">Llamar</span>
            <span className="mt-1 font-display text-2xl text-brand-green">{contactData.phones[0]}</span>
          </Link>
        </section>
      </div>
    </main>
  );
}
