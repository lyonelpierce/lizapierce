"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Product, ProductOptions } from "@prisma/client";

import { cn, createUrl } from "@/lib/utils";

import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { AiOutlineClear } from "react-icons/ai";

interface ProductWithOptions extends Product {
  options: ProductOptions[];
}

const Filter = ({ products }: { products: ProductWithOptions[] }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const productOptions = products.map((product) => product.options);
  const options = productOptions[0];

  return (
    <>
      {options.map((option) => (
        <div key={option.id} className="w-full mb-4">
          <Label className="text-xs">{option.name}</Label>
          <div className="flex flex-wrap gap-1 mt-1">
            {option.values.map((value) => {
              const optionNameLower = option.name.toLowerCase();
              const optionSearchParams = new URLSearchParams(
                searchParams.toString()
              );
              optionSearchParams.set(optionNameLower, value);

              const isActive = searchParams.get(optionNameLower) === value;

              if (isActive) {
                optionSearchParams.delete(optionNameLower);
              } else {
                optionSearchParams.set(optionNameLower, value);
              }
              const optionUrl = createUrl(pathname, optionSearchParams);

              return (
                <Button
                  key={value}
                  onClick={() => {
                    router.replace(optionUrl, { scroll: false });
                  }}
                  className={cn(
                    "flex items-center rounded-full border border-zinc-800 bg-zinc-900 px-4 py-1 text-xs font-semibold hover:bg-zinc-800",
                    {
                      "ring-1 ring-white hover:bg-zinc-800": isActive,
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
      ))}
      <Button
        size="icon"
        disabled={searchParams.toString() === ""}
        variant="white"
        className="w-full gap-1"
        onClick={() => router.replace(pathname)}
      >
        <AiOutlineClear className="w-4 h-4" />
        Clear
      </Button>
    </>
  );
};

export default Filter;
