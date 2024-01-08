"use client";

import { useSearchParams } from "next/navigation";

import { VariantOptions } from "@/types/ProductVariants";

import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

function SubmitButton({
  forSale,
  variantId,
}: {
  forSale: boolean;
  variantId: string | undefined;
}) {
  if (!forSale) {
    return (
      <Button variant="white" className="gap-1">
        Out of Stock
      </Button>
    );
  }
  return (
    <Button variant="white" className="gap-1 mt-2" disabled={!variantId}>
      {forSale ? (
        <>
          <ShoppingBag className="w-4 h-4" />
          Add to Cart
        </>
      ) : (
        <>Out of Stock</>
      )}
    </Button>
  );
}

const AddToCart = ({
  forSale,
  variants,
}: {
  forSale: boolean;
  variants: VariantOptions[];
}) => {
  const searchParams = useSearchParams();
  const defaultVariantId = variants.length === 1 ? variants[0]?.id : undefined;

  const variant = variants.find((variant: VariantOptions) =>
    variant.options.every(
      (option) => option.value === searchParams.get(option.name.toLowerCase())
    )
  );

  const selectedVariantId = variant?.id || defaultVariantId;
  return <SubmitButton forSale={forSale} variantId={selectedVariantId} />;
};

export default AddToCart;
