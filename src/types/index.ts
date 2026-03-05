export type MenuItem = {
  name: string;
  price: number | null;
  notes?: string;
  description?: string;
  allergens?: string[];
  image?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  items: MenuItem[];
};

export type MenuData = {
  updatedAt: string;
  source: string;
  warnings: string[];
  categories: MenuCategory[];
  featured: MenuItem[];
};

export type ContactData = {
  name: string;
  slogan: string;
  address: string;
  city: string;
  phones: string[];
  email: string | null;
  instagram: string | null;
  whatsappPrimary: string | null;
  mapQuery: string;
  hours: string[];
  notes: string[];
};
