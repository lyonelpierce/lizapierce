"use client";

import { useSearchParams } from "next/navigation";

import { formatter } from "@/lib/utils";
import { VariantOptions } from "@/types/ProductVariants";

import { Label } from "@/components/ui/label";

const DynamicPrice = ({
  variants,
  basePrice,
}: {
  variants: VariantOptions[];
  basePrice: number;
}) => {
  const searchParams = useSearchParams();

  const variant = variants.find((variant: VariantOptions) =>
    variant.options.every(
      (option) => option.value === searchParams.get(option.name.toLowerCase())
    )
  );

  return (
    <>
      {!variant ? (
        <Label className="text-lg">{formatter.format(basePrice)}</Label>
      ) : (
        <Label className="text-lg">{formatter.format(variant.price)}</Label>
      )}
    </>
  );
};

export default DynamicPrice;
