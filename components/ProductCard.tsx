import Link from "next/link";
import Image from "next/image";

import { formatter } from "@/lib/utils";

import { ProductWithDetails } from "@/types/ProductVariants";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ProductCards = ({ product }: { product: ProductWithDetails }) => {
  return (
    <Link
      href={`/${product.collection.slug}/${product.category.slug}/${product.slug}`}
      className="w-full h-full"
    >
      <Card className="bg-zinc-950 h-full border rounded-3xl text-white overflow-hidden transition-all hover:bg-zinc-900 hover:border-white hover:scale-[1.03] cursor-pointer">
        <Image
          src={product.image}
          alt="Heart Ring"
          width={600}
          height={600}
          className="w-full rounded-b-3xl aspect-square object-cover"
        />
        <CardHeader className="flex flex-col justify-between">
          <CardTitle className="text-sm md:text-base">{product.name}</CardTitle>
          <CardDescription className="text-zinc-500">
            {formatter.format(product.minPrice)} +
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
};

export default ProductCards;
