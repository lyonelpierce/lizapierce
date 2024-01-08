"use client";

import { useSearchParams } from "next/navigation";

import { VariantOptions } from "@/types/ProductVariants";

import useCart from "@/hooks/use-cart";

import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Variant } from "@prisma/client";

function SubmitButton({
  forSale,
  variant,
  name,
}: {
  forSale: boolean;
  variant: Variant | undefined;
  name: string;
}) {
  const cart = useCart();
  const { href } = new URL(window.location.href);

  if (!variant)
    return (
      <Button variant="white" className="mt-2" disabled>
        Select Options
      </Button>
    );

  const product = { ...variant, name, href };

  return (
    <Button
      variant="white"
      className="gap-1 mt-2"
      disabled={!forSale}
      onClick={() => cart.addItem(product)}
    >
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
  name,
}: {
  forSale: boolean;
  variants: VariantOptions[];
  name: string;
}) => {
  const searchParams = useSearchParams();

  const variant = variants.find((variant: VariantOptions) =>
    variant.options.every(
      (option) => option.value === searchParams.get(option.name.toLowerCase())
    )
  );

  return <SubmitButton forSale={forSale} variant={variant} name={name} />;
};

export default AddToCart;
