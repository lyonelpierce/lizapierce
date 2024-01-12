import {
  Order,
  OrderItem,
  Product,
  ProductOptions,
  Variant,
} from "@prisma/client";

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
  url: string;
  image: string;
};

export type { CartItem };

interface OrderWithItems extends Order {
  orderItems: OrderItem[];
}
export type { OrderWithItems };
