import type { Metadata } from "next";
import Link from "next/link";
import { MenuBrowser } from "@/components/menu-browser";
import { SectionTitle } from "@/components/section-title";
import { menuData } from "@/lib/site";

const cartaScans = [
  "/pdf-carta/WhatsApp Image 2026-03-04 at 08.36.06.jpeg",
  "/pdf-carta/WhatsApp Image 2026-03-04 at 08.36.06 (1).jpeg",
  "/pdf-carta/WhatsApp Image 2026-03-04 at 08.36.06 (2).jpeg",
  "/pdf-carta/WhatsApp Image 2026-03-04 at 08.36.06 (3).jpeg"
];

export const metadata: Metadata = {
  title: "Carta y precios",
  description: "Consulta la carta de Segovia Fried Chicken, busca platos y revisa precios."
};

export default function CartaPage() {
  return (
    <main className="mx-auto w-full max-w-6xl space-y-8 px-4 py-10 md:px-6">
      <SectionTitle eyebrow="Carta" title="Platos y precios" />

      <MenuBrowser categories={menuData.categories} />

      {/* Escaneos de la carta física */}
      <section className="space-y-4 pt-4">
        <h2 className="font-display text-3xl text-brand-green">Carta física</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {cartaScans.map((file) => (
            <article key={file} className="surface overflow-hidden">
              <object data={file} type="image/jpeg" className="h-72 w-full">
                <p className="p-4 text-sm text-brand-green/60">No se puede mostrar la imagen.</p>
              </object>
              <div className="border-t border-brand-line/40 p-3">
                <Link href={file} className="btn-secondary py-2 text-xs" target="_blank">
                  Ver en pantalla completa
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
