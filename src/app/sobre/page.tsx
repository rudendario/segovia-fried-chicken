import type { Metadata } from "next";
import Image from "next/image";
import { SectionTitle } from "@/components/section-title";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description: "Conoce la historia y la propuesta de Segovia Fried Chicken."
};

export default function SobrePage() {
  return (
    <main className="mx-auto w-full max-w-6xl space-y-10 px-4 py-10 md:px-6">
      {/* Hero split */}
      <div className="grid gap-6 md:grid-cols-2 md:items-center">
        <div>
          <SectionTitle
            eyebrow="Sobre nosotros"
            title="Sazón latina con alma segoviana"
          />
          <div className="mt-6 space-y-3 text-brand-green/70">
            <p>Producto fresco, cocina casera y raciones generosas con el calor latino que nos define.</p>
            <p>Un espacio ideal para comidas familiares, amigos y celebraciones especiales.</p>
          </div>
        </div>
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80"
          alt="Interior del restaurante"
          width={900}
          height={600}
          className="h-72 w-full rounded-3xl object-cover md:h-80"
        />
      </div>

      {/* Valores */}
      <div className="grid gap-3 md:grid-cols-3">
        {[
          { title: "Producto fresco", desc: "Ingredientes seleccionados cada día." },
          { title: "Cocina casera", desc: "Recetas auténticas dominicanas y ecuatorianas." },
          { title: "Ambiente cálido", desc: "Un lugar para quedarse y volver." }
        ].map((v) => (
          <div key={v.title} className="surface p-5">
            <h3 className="font-display text-xl text-brand-green">{v.title}</h3>
            <p className="mt-1 text-sm text-brand-green/60">{v.desc}</p>
          </div>
        ))}
      </div>

      {/* Galería del local */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        <Image
          src="/imagenes/WhatsApp Image 2026-03-05 at 11.52.51.jpeg"
          alt="Interior del restaurante"
          width={720}
          height={960}
          className="h-52 w-full rounded-2xl object-cover md:h-64"
        />
        <Image
          src="/imagenes/WhatsApp Image 2026-03-05 at 11.52.51 (1).jpeg"
          alt="Comedor"
          width={720}
          height={960}
          className="h-52 w-full rounded-2xl object-cover md:h-64"
        />
        <Image
          src="/imagenes/WhatsApp Image 2026-03-05 at 11.52.51 (2).jpeg"
          alt="Decoración"
          width={720}
          height={960}
          className="col-span-2 h-52 w-full rounded-2xl object-cover md:col-span-1 md:h-64"
        />
      </div>

      {/* Banner extra */}
      <div className="relative min-h-[220px] overflow-hidden rounded-3xl md:min-h-[280px]">
        <Image
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80"
          alt="Ambiente restaurante"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-green/75" />
        <div className="relative z-10 flex h-full min-h-[220px] flex-col justify-center px-6 py-12 text-brand-cream md:min-h-[280px] md:px-10">
          <p className="font-display text-3xl md:text-4xl">
            &ldquo;Sabores que alimentan el alma&rdquo;
          </p>
          <p className="mt-2 text-brand-cream/70">Segovia Fried Chicken · Calle Doctor Sancho, 3</p>
        </div>
      </div>
    </main>
  );
}
