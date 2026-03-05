# Segovia Fried Chicken Web

Web en Next.js (App Router) + TypeScript + Tailwind, lista para desplegar en Vercel.

## Requisitos

- Node.js 20+
- npm 10+

## Desarrollo local

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
npm run start
```

## Estructura clave

- `src/app/`: rutas y páginas.
- `src/components/`: componentes reutilizables.
- `src/data/menu.json`: carta en formato estructurado.
- `src/data/contact.json`: datos de contacto.
- `public/imagenes`: fotos reales del local.
- `public/pdf-carta`: material de carta escaneado.

## Scripts de extracción

### Carta

```bash
npm run extract:menu
```

- Busca PDFs en `public/pdf-carta` y hace parsing con `pdf-parse`.
- Si no hay PDF o el parsing falla, aplica fallback manual.
- Genera `src/data/menu.json`.

### Contacto (OCR)

```bash
npm run extract:contact
```

- Intenta OCR con `tesseract.js` sobre una imagen en `public/imagenes`.
- Extrae teléfonos/instagram/email por regex (best-effort).
- Si falla OCR, aplica fallback manual y genera `src/data/contact.json`.

## Limitaciones actuales documentadas

- En `public/pdf-carta` no hay PDF nativo; hay imágenes escaneadas.
- Por eso en `/carta`:
  - Se renderiza la carta en HTML desde `menu.json`.
  - Se muestra fallback con escaneos descargables.
- `email` y `horarios` no se ven con claridad en material actual:
  - `email` está como `null`.
  - `horarios` como `TODO` editable en `src/data/contact.json`.

## Edición rápida de contenidos

- Destacados y precios: `src/data/menu.json`
- Contacto/WhatsApp/mapa/redes: `src/data/contact.json`
- Textos de marketing por página: archivos `src/app/**/page.tsx`
