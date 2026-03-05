import menu from "@/data/menu.json";
import contact from "@/data/contact.json";
import type { ContactData, MenuData } from "@/types";

export const menuData = menu as MenuData;
export const contactData = contact as ContactData;

export const whatsappHref = contactData.whatsappPrimary
  ? `https://wa.me/${contactData.whatsappPrimary}?text=${encodeURIComponent("Hola, quiero reservar en Segovia Fried Chicken.")}`
  : "#";

export const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/carta", label: "Carta" },
  { href: "/sobre", label: "Sobre nosotros" },
  { href: "/eventos", label: "Eventos" },
  { href: "/contacto", label: "Contacto" }
];

export function formatPrice(price: number | null) {
  if (price === null) return "Consultar";
  return `${price.toFixed(2).replace(".", ",")} €`;
}
