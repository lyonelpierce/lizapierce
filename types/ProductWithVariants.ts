import { Gem, Karat, Material, Product, Size, Variant } from "@prisma/client";

type ProductWithVariants = Product & {
  variants: VariantsWithOptions[];
};

export type { ProductWithVariants };

type VariantsWithOptions = Variant & {
  gem: Gem;
  material: Material;
  size: Size;
  karat: Karat;
};

export type { VariantsWithOptions };

type CartProduct = {
  id: string;
  name: string;
  slug: string;
  price: number;
  gem: string;
  material: string;
  size: string;
  karat?: string;
};

export type { CartProduct };
