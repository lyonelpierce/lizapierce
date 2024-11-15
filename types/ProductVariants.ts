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

interface ProductWithDetails extends Product {
  collection: {
    slug: string;
  };
  category: {
    slug: string;
  };
}

export type { ProductWithDetails };

interface OrderItemDetails extends OrderItem {
  variant: Variant;
  product: Product;
}

interface OrderShippingCardProps extends Order {
  orderItems: OrderItemDetails[];
}

export type { OrderShippingCardProps };
