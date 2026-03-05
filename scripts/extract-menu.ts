import fs from "node:fs";
import path from "node:path";

type MenuItem = { name: string; price: number | null; notes?: string };
type MenuCategory = { id: string; title: string; items: MenuItem[] };

const root = process.cwd();
const cartaDir = path.join(root, "public", "pdf-carta");
const outputFile = path.join(root, "src", "data", "menu.json");
const seedFile = path.join(root, "src", "data", "menu.seed.json");

const fallbackCategories: MenuCategory[] = fs.existsSync(seedFile)
  ? (JSON.parse(fs.readFileSync(seedFile, "utf-8")).categories as MenuCategory[])
  : [
      {
        id: "fallback",
        title: "Carta (fallback manual)",
        items: [
          { name: "Mofongo (res, pollo, longaniza o salami)", price: 17 },
          { name: "Camarones a la criolla", price: 18 },
          { name: "Ceviche de camaron", price: 17 },
          { name: "Bandeja paisa", price: 19 }
        ]
      }
    ];

const moneyRegex = /(\d{1,3}[.,]\d{2})\s*€/g;

const normalizePrice = (raw: string) => Number.parseFloat(raw.replace(",", "."));

async function extractFromPdf(pdfPath: string): Promise<MenuCategory[]> {
  const pdfParse = (await import("pdf-parse")).default;
  const buffer = fs.readFileSync(pdfPath);
  const parsed = await pdfParse(buffer);
  const lines = parsed.text
    .split("\n")
    .map((line) => line.replace(/\s+/g, " ").trim())
    .filter(Boolean);

  const items: MenuItem[] = [];
  for (const line of lines) {
    const prices = [...line.matchAll(moneyRegex)];
    if (!prices.length) continue;

    const firstPrice = normalizePrice(prices[0][1]);
    const name = line.replace(moneyRegex, "").replace(/[.\-]+$/g, "").trim();
    if (!name) continue;
    items.push({ name, price: firstPrice });
  }

  return [
    {
      id: path.basename(pdfPath, ".pdf").toLowerCase().replace(/\s+/g, "-"),
      title: `Carta extraída: ${path.basename(pdfPath)}`,
      items
    }
  ];
}

async function main() {
  const files = fs.existsSync(cartaDir) ? fs.readdirSync(cartaDir) : [];
  const pdfs = files.filter((file) => file.toLowerCase().endsWith(".pdf"));
  const warnings: string[] = [];
  let categories: MenuCategory[] = [];
  let source = "pdf-parse";

  if (pdfs.length) {
    for (const pdf of pdfs) {
      const result = await extractFromPdf(path.join(cartaDir, pdf));
      categories = categories.concat(result);
    }
    if (!categories.some((category) => category.items.length > 0)) {
      warnings.push("PDF detectado pero sin líneas útiles: se aplica fallback manual.");
      categories = fallbackCategories;
      source = "fallback-manual";
    }
  } else {
    warnings.push("No hay PDF nativo en public/pdf-carta. Se aplica fallback manual.");
    source = "fallback-manual";
    categories = fallbackCategories;
  }

  const output = {
    updatedAt: new Date().toISOString().slice(0, 10),
    source,
    warnings,
    featured: categories.flatMap((category) => category.items).slice(0, 6),
    categories
  };

  fs.writeFileSync(outputFile, `${JSON.stringify(output, null, 2)}\n`, "utf-8");
  // eslint-disable-next-line no-console
  console.log(`menu.json generado en ${outputFile}`);
}

void main();
