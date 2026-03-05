import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de privacidad"
};

export default function PrivacidadPage() {
  return (
    <main className="mx-auto w-full max-w-4xl space-y-4 px-4 py-10 md:px-6">
      <h1 className="font-display text-5xl text-brand-green">Política de privacidad</h1>
      <p className="surface p-5 text-brand-green/85">
        TODO: sustituir este texto por la política de privacidad oficial del restaurante (responsable, finalidad, base legal,
        conservación y derechos de usuarios).
      </p>
    </main>
  );
}
