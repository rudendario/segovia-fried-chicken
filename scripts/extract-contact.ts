import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const imageDir = path.join(root, "public", "imagenes");
const outputFile = path.join(root, "src", "data", "contact.json");

const fallback = {
  name: "Segovia Fried Chicken",
  slogan: "Sabores que alimentan el alma",
  address: "Calle Doctor Sancho, 3",
  city: "40001 Segovia, Espana",
  phones: ["+34 921 09 21 44", "+34 665 44 84 19"],
  email: null,
  instagram: "https://instagram.com/segovia.friedchicken",
  whatsappPrimary: "34665448419",
  mapQuery: "Calle Doctor Sancho 3, 40001 Segovia",
  hours: ["TODO: anadir horarios oficiales"],
  notes: ["Fallback manual aplicado.", "No se detecto email legible en tarjeta."]
};

const extractPhones = (text: string) => {
  const matches = text.match(/(?:\+?34)?\s?\d{3}\s?\d{2}\s?\d{2}\s?\d{2}/g) ?? [];
  return [...new Set(matches.map((m) => m.replace(/\s+/g, " ").trim()))];
};

async function ocrImage(filePath: string): Promise<string> {
  const tesseract = await import("tesseract.js");
  const result = await tesseract.recognize(filePath, "eng+spa");
  return result.data.text;
}

async function main() {
  const images = fs.existsSync(imageDir) ? fs.readdirSync(imageDir) : [];
  const first = images.find((file) => /\.(jpg|jpeg|png)$/i.test(file));
  if (!first) {
    fs.writeFileSync(outputFile, `${JSON.stringify(fallback, null, 2)}\n`, "utf-8");
    // eslint-disable-next-line no-console
    console.log("No hay imagen para OCR. Escrito fallback manual.");
    return;
  }

  try {
    const text = await ocrImage(path.join(imageDir, first));
    const phones = extractPhones(text);
    const instaMatch = text.match(/@[\w.]+/);
    const emailMatch = text.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);

    const output = {
      ...fallback,
      phones: phones.length ? phones.map((p) => (p.startsWith("+34") ? p : `+34 ${p}`)) : fallback.phones,
      email: emailMatch?.[0] ?? null,
      instagram: instaMatch ? `https://instagram.com/${instaMatch[0].replace("@", "")}` : fallback.instagram,
      notes: ["OCR best-effort aplicado. Revisar campos antes de publicar."]
    };

    fs.writeFileSync(outputFile, `${JSON.stringify(output, null, 2)}\n`, "utf-8");
    // eslint-disable-next-line no-console
    console.log(`contact.json generado con OCR desde ${first}`);
  } catch {
    fs.writeFileSync(outputFile, `${JSON.stringify(fallback, null, 2)}\n`, "utf-8");
    // eslint-disable-next-line no-console
    console.log("OCR fallo. Escrito fallback manual.");
  }
}

void main();
