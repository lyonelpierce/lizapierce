"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Variant } from "@prisma/client";

import { cn } from "@/lib/utils";
import useCart from "@/hooks/use-cart";

import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AiOutlineClear } from "react-icons/ai";
import { useOrigin } from "@/hooks/use-origin";
import { VariantOptions } from "@/types/ProductVariants";

interface Options {
  name: string;
  value: string;
}

interface VariantWithOption extends Variant {
  options: Options[];
}

function useBuildVariantUrl(options: Options[] | undefined) {
  const origin = useOrigin();
  const pathname = usePathname();
  const params = new URLSearchParams();

  options?.forEach((option) => {
    params.append(option.name.toLowerCase(), option.value);
  });

  return `${origin}${pathname}?${params.toString()}`;
}

function SubmitButton({
  forSale,
  variant,
  name,
  image,
}: {
  forSale: boolean;
  variant: VariantWithOption | undefined;
  name: string;
  image: string;
}) {
  const cart = useCart();

  const url = useBuildVariantUrl(variant?.options);

  if (!variant)
    return (
      <Button variant="white" className="w-5/6" disabled>
        Select Options
      </Button>
    );

  const product = { ...variant, name, url, image };

  return (
    <Button
      variant="white"
      className="gap-1 w-5/6"
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
  variants: VariantWithOption[];
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
    <div
      className={cn(
        "flex items-center border rounded-full",
        !variant ? "border-zinc-500" : "border-white"
      )}
    >
      <SubmitButton
        forSale={forSale}
        variant={variant}
        name={name}
        image={image}
      />
      <div className="flex items-center justify-center w-1/6">
        <Button
          size="icon"
          disabled={searchParams.toString() === ""}
          variant="link"
          className="w-4 h-4"
        >
          <AiOutlineClear
            className="w-4 h-4 text-white transition-all ease-in-out hover:scale-125 -ml-1"
            disabled={searchParams.toString() === ""}
            onClick={() => router.replace(pathname)}
          />
        </Button>
      </div>
    </div>
  );
};

export default AddToCart;
