"use client";

import { Product, ProductOptions } from "@prisma/client";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { cn, createUrl } from "@/lib/utils";

interface ProductWithOptions extends Product {
  options: ProductOptions[];
}

const Filter = ({ products }: { products: ProductWithOptions[] }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const productOptions = products.map((product) => product.options);
  const options = productOptions[0];

  return options.map((option) => (
    <div key={option.id} className="w-full mb-4">
      <Label className="text-xs">{option.name}</Label>
      <div className="flex flex-wrap gap-3 mt-1">
        {option.values.map((value) => {
          const optionNameLower = option.name.toLowerCase();
          const optionSearchParams = new URLSearchParams(
            searchParams.toString()
          );

          // Toggle option in URL
          const currentValues = optionSearchParams.getAll(optionNameLower);
          if (currentValues.includes(value)) {
            currentValues.splice(currentValues.indexOf(value), 1);
          } else {
            currentValues.push(value);
          }

          optionSearchParams.delete(optionNameLower);
          currentValues.forEach((val) =>
            optionSearchParams.append(optionNameLower, val)
          );

          const optionUrl = createUrl(pathname, optionSearchParams);

          const isActive = !currentValues.includes(value);
          return (
            <Button
              key={value}
              onClick={() => {
                router.replace(optionUrl, { scroll: false });
              }}
              className={cn(
                "flex items-center rounded-full border border-zinc-800 bg-zinc-900 px-4 py-1 text-xs font-semibold hover:bg-zinc-800",
                {
                  "cursor-default ring-1 ring-white hover:bg-zinc-800":
                    isActive,
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

export default Filter;
