"use client";

import { useSearchParams } from "next/navigation";

import { formatter } from "@/lib/utils";
import { VariantOptions } from "@/types/ProductVariants";

import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";

const DynamicPrice = ({
  variants,
  minPrice,
  maxPrice,
}: {
  variants: VariantOptions[];
  minPrice: number;
  maxPrice: number;
}) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  const searchParams = useSearchParams();

  const variant = variants.find((variant: VariantOptions) =>
    variant.options.every(
      (option) => option.value === searchParams.get(option.name.toLowerCase())
    )
  );

  if (!isMounted) return null;
  return (
    <>
      {!variant ? (
        <Label className="text-base">
          {formatter.format(minPrice)} - {formatter.format(maxPrice)}
        </Label>
      ) : (
        <Label className="text-base">{formatter.format(variant.price)}</Label>
      )}
    </>
  );
};

export default DynamicPrice;
