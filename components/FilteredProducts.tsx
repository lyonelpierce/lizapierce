"use client";

import ProductCards from "@/components/ProductCards";
import { useSearchParams } from "next/navigation";
import {
  Product,
  ProductOptions,
  Variant,
  VariantOptions,
} from "@prisma/client";

interface VariantWithOptions extends Variant {
  options: VariantOptions[];
}

interface ProductFilter extends Product {
  collection: {
    slug: string;
  };
  category: {
    slug: string;
  };
  options: ProductOptions[];
  variants: VariantWithOptions[];
}

const FilteredProducts = ({ products }: { products: ProductFilter[] }) => {
  const searchParams = useSearchParams();

  const sizes = searchParams.getAll("size");
  const materials = searchParams.getAll("material");
  const gems = searchParams.getAll("gem");
  const karats = searchParams.getAll("karat");

  // Filter products based on the selected sizes
  const filteredProducts = products.filter((product) => {
    const variantOptions = product.variants.map((variant) => ({
      size: variant.options.find((option) => option.name === "Size")?.value,
      material: variant.options.find((option) => option.name === "Material")
        ?.value,
      gem: variant.options.find((option) => option.name === "Gem")?.value,
      karat: variant.options.find((option) => option.name === "Karat")?.value,
    }));

    return (
      (sizes.length === 0 ||
        variantOptions.some((option) => sizes.includes(option.size!))) &&
      (materials.length === 0 ||
        variantOptions.some((option) =>
          materials.includes(option.material!)
        )) &&
      (gems.length === 0 ||
        variantOptions.some((option) => gems.includes(option.gem!))) &&
      (karats.length === 0 ||
        variantOptions.some((option) => karats.includes(option.karat!)))
    );
  });

  return (
    <>
      {filteredProducts.length === 0 ? (
        <div className="flex items-center justify-center w-full min-h-max">
          <p className="text-sm font-medium">No results</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 w-full md:w-3/4 h-min">
          {filteredProducts.map((product) => (
            <ProductCards key={product.name} product={product} />
          ))}
        </div>
      )}
    </>
  );
};

export default FilteredProducts;
