import { Product, ProductOptions, Variant } from "@prisma/client";

type ProductDetails = Product & {
  variants: VariantOptions[];
  options: ProductOptions[];
};

export type { ProductDetails };

type VariantOptions = Variant & {
  options: { name: string; value: string }[];
};

export type { VariantOptions };

type CartItem = Variant & {
  name: string;
  href: string;
};

export type { CartItem };
