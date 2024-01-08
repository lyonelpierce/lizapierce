"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ProductOptions } from "@prisma/client";
import { cn, createUrl } from "@/lib/utils";
import { VariantOptions } from "@/types/ProductVariants";
import { Button } from "./ui/button";
import { Label } from "./ui/label";

type Combination = {
  id: string;
  forSale: boolean;
  [key: string]: string | boolean;
};

const Variants = ({
  options,
  variants,
}: {
  options: ProductOptions[];
  variants: VariantOptions[];
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const nonOrOneOption =
    !options.length ||
    (options.length === 1 && options[0]?.values.length === 1);

  if (nonOrOneOption) {
    return null;
  }

  const combinations: Combination[] = variants.map((variant) => ({
    id: variant.id,
    forSale: variant.forSale,
    ...variant.options.reduce(
      (acc, option) => ({ ...acc, [option.name.toLowerCase()]: option.value }),
      {}
    ),
  }));

  return options.map((option) => (
    <div key={option.id} className="w-full mb-4">
      <Label className="text-xs">{option.name}</Label>
      <div className="flex flex-wrap gap-3 mt-1">
        {option.values.map((value) => {
          const optionNameLower = option.name.toLowerCase();
          const optionSearchParams = new URLSearchParams(
            searchParams.toString()
          );
          optionSearchParams.set(optionNameLower, value);

          const optionUrl = createUrl(pathname, optionSearchParams);

          const filtered = Array.from(optionSearchParams.entries()).filter(
            ([key, value]) =>
              options.find(
                (option) =>
                  option.name.toLowerCase() === key &&
                  option.values.includes(value)
              )
          );
          const isForSale = combinations.find((combination) =>
            filtered.every(
              ([key, value]) =>
                combination[key] === value && combination.forSale
            )
          );

          const isActive = searchParams.get(optionNameLower) === value;
          return (
            <Button
              key={value}
              aria-disabled={!isForSale}
              disabled={!isForSale}
              onClick={() => {
                router.replace(optionUrl, { scroll: false });
              }}
              title={`${option.name} ${value}${
                !isForSale ? " - Not Available" : ""
              }`}
              className={cn(
                "flex items-center rounded-full border border-zinc-800 bg-zinc-900 px-4 py-1 text-xs font-semibold",
                {
                  "cursor-default ring-1 ring-white hover:bg-zinc-800":
                    isActive,
                  "ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-white hover:bg-zinc-800 hover:ring-1":
                    !isActive && isForSale,
                  "relative z-10 cursor-not-allowed overflow-hidden bg-black text-neutral-300 before:absolute before:inset-x-0 before:-z-10 before:h-px before:-rotate-45 before:bg-neutral-700 before:transition-transform":
                    !isForSale,
                }
              )}
              size="sm"
            >
              {value}
            </Button>
          );
        })}
      </div>
    </div>
  ));
};

export default Variants;
