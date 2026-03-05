import Link from "next/link";
import { contactData, whatsappHref } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-brand-green text-brand-cream">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 md:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl">{contactData.name}</p>
            <p className="mt-2 text-sm text-brand-cream/60">{contactData.slogan}</p>
            <Link
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-copper px-5 py-2.5 text-sm font-bold text-white transition hover:brightness-90 active:scale-95"
            >
              Reservar por WhatsApp
            </Link>
          </div>

          <div className="space-y-1.5 text-sm text-brand-cream/75">
            <p className="font-semibold text-brand-cream">Ubicación</p>
            <p>{contactData.address}</p>
            <p>{contactData.city}</p>
            <p className="mt-3 font-semibold text-brand-cream">Teléfono</p>
            {contactData.phones.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="space-y-1.5 text-sm text-brand-cream/75">
            <p className="font-semibold text-brand-cream">Síguenos</p>
            {contactData.instagram && (
              <Link
                href={contactData.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-brand-cream transition"
              >
                @segovia.friedchicken
              </Link>
            )}
            <p className="mt-3 font-semibold text-brand-cream">Legal</p>
            <Link href="/legal/privacidad" className="block hover:text-brand-cream transition">
              Privacidad
            </Link>
            <Link href="/legal/cookies" className="block hover:text-brand-cream transition">
              Cookies
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-brand-cream/40">
          <p>© {new Date().getFullYear()} Segovia Fried Chicken. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
