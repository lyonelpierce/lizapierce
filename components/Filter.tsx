"use client";

import { Product, ProductOptions } from "@prisma/client";

interface ProductWithOptions extends Product {
  options: ProductOptions[];
}

const Filter = ({ products }: { products: ProductWithOptions[] }) => {
  const options = products.map((product) => product.options);

  return (
    <div className="w-full">
      {options.map((option, i) => {
        return (
          <div className="flex flex-col gap-4 text-sm font-medium" key={i}>
            {option.map((opt, i) => {
              return (
                <div key={i}>
                  {opt.name}
                  <div className="grid grid-cols-3 gap-2 mt-3">
                    {opt.values.map((value) => {
                      return (
                        <div
                          key={value}
                          className="flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-full text-xs h-8 cursor-pointer hover:bg-zinc-800 hover:ring-1 hover:ring-white hover:scale-110 transition-all duration-300 ease-in-out"
                        >
                          {value}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Filter;
