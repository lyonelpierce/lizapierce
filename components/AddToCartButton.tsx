"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { VariantOptions } from "@/types/ProductVariants";

import useCart from "@/hooks/use-cart";
import { useOrigin } from "@/hooks/use-origin";

import { Variant } from "@prisma/client";

import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AiOutlineClear } from "react-icons/ai";
import { useUrl } from "@/hooks/use-url";

function SubmitButton({
  forSale,
  variant,
  name,
  image,
}: {
  forSale: boolean;
  variant: Variant | undefined;
  name: string;
  image: string;
}) {
  const cart = useCart();
  const url = useUrl();

  if (!variant)
    return (
      <Button variant="white" className="w-full" disabled>
        Select Options
      </Button>
    );

  const product = { ...variant, name, url, image };

  return (
    <Button
      variant="white"
      className="gap-1 w-full"
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
  image,
}: {
  forSale: boolean;
  variants: VariantOptions[];
  name: string;
  image: string;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const variant = variants.find((variant: VariantOptions) =>
    variant.options.every(
      (option) => option.value === searchParams.get(option.name.toLowerCase())
    )
  );

  return (
    <div className="flex gap-1">
      <SubmitButton
        forSale={forSale}
        variant={variant}
        name={name}
        image={image}
      />
      <Button
        onClick={() => router.replace(pathname)}
        variant="outline"
        className="bg-black rounded-full h-10 w-10 p-2.5"
        disabled={!variant}
      >
        <AiOutlineClear className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default AddToCart;
