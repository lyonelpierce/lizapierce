"use client";

import * as z from "zod";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProductWithVariants } from "@/types/ProductWithVariants";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ShoppingBag } from "lucide-react";

import { cn, formatter } from "@/lib/utils";
import CanvasComponent from "@/components/CanvasComponent";
import ElizabethRing from "@/components/ElizabethRing";

const CustomizeForm = ({ product }: { product: ProductWithVariants }) => {
  const [material, setMaterial] = useState("silver");

  const formSchema = z.object({
    size: z.string(),
    gem: z.string(),
    material: z.string(),
    karat: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      size: "4",
      gem: "diamond",
      material: "silver",
      karat: "18k",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
    } catch (error) {
      console.log(error);
    }
    console.log(values);
  }

  //  Extract Options

  const uniqueSizeIds = new Set();
  const uniqueGemIds = new Set();
  const uniqueMaterialIds = new Set();
  const uniqueKaratIds = new Set();

  const uniqueSizes = product.variants.filter((variant) => {
    if (!uniqueSizeIds.has(variant.sizeId)) {
      uniqueSizeIds.add(variant.sizeId);
      return true;
    }
    return false;
  });

  const uniqueGems = product.variants.filter((variant) => {
    if (!uniqueGemIds.has(variant.gemId)) {
      uniqueGemIds.add(variant.gemId);
      return true;
    }
    return false;
  });

  const uniqueMaterials = product.variants.filter((variant) => {
    if (!uniqueMaterialIds.has(variant.materialId)) {
      uniqueMaterialIds.add(variant.materialId);
      return true;
    }
    return false;
  });

  const uniqueKarats = product.variants.filter((variant) => {
    if (!uniqueKaratIds.has(variant.karatId)) {
      uniqueKaratIds.add(variant.karatId);
      return true;
    }
    return false;
  });

  const uniqueSizeObjects = uniqueSizes.map((variant) => variant.size);
  const uniqueGemObjects = uniqueGems.map((variant) => variant.gem);
  const uniqueMaterialObjects = uniqueMaterials.map(
    (variant) => variant.material
  );
  const uniqueKaratObjects = uniqueKarats.map((variant) => variant.karat);

  const sortedSizes = uniqueSizeObjects.sort((a, b) =>
    a.value.localeCompare(b.value)
  );

  return (
    <div className="flex w-full">
      <div className="w-2/3 h-2/3">
        <CanvasComponent level={7}>
          <ElizabethRing material={material} positionY={-2.5} scale={1.5} />
        </CanvasComponent>
      </div>
      <div className="flex flex-col gap-4 w-1/3">
        <div className="font-normal">
          <h2 className="text-4xl">{product.name}</h2>
          <h3 className="text-xl">{formatter.format(product.basePrice)}</h3>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="size"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Size</FormLabel>
                  <FormControl>
                    <RadioGroup
                      defaultValue={field.value}
                      onValueChange={field.onChange}
                      className="flex"
                    >
                      {sortedSizes.map((size) => (
                        <div className="flex items-center" key={size.id}>
                          <RadioGroupItem
                            value={size.value}
                            id={size.id}
                            className="peer sr-only"
                          />
                          <Label
                            htmlFor={size.id}
                            className="bg-zinc-800 rounded-full w-16 h-10 py-2.5 flex items-center justify-center transition-all ease-in-out hover:scale-105 hover:bg-zinc-700 cursor-pointer hover:border-zinc-200 peer-data-[state=checked]:bg-zinc-600 [&:has([data-state=checked])]:bg-zinc-600"
                          >
                            <p className="text-xs font-semibold">{size.name}</p>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="gem"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gem</FormLabel>
                  <FormControl>
                    <RadioGroup
                      defaultValue={field.value}
                      onValueChange={field.onChange}
                      className="flex"
                    >
                      {uniqueGemObjects.map((gem) => (
                        <div className="flex items-center" key={gem.id}>
                          <RadioGroupItem
                            value={gem.value}
                            id={gem.id}
                            className="peer sr-only"
                          />
                          <Label
                            htmlFor={gem.id}
                            className="bg-zinc-800 rounded-full h-10 py-2.5 px-4 flex items-center justify-center transition-all ease-in-out hover:scale-105 hover:bg-zinc-700 cursor-pointer hover:border-zinc-200 peer-data-[state=checked]:bg-zinc-600 [&:has([data-state=checked])]:bg-zinc-600"
                          >
                            <p className="flex gap-1 items-center text-xs font-semibold">
                              <Image
                                src={gem.image}
                                alt={gem.name}
                                width={20}
                                height={20}
                              />
                              {gem.name}
                            </p>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="material"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Material</FormLabel>
                  <FormControl>
                    <RadioGroup
                      defaultValue={"silver"}
                      onValueChange={(value) => {
                        field.onChange;
                        setMaterial(value);
                      }}
                      className="flex"
                    >
                      {uniqueMaterialObjects.map((material) => (
                        <div className="flex items-center" key={material.id}>
                          <RadioGroupItem
                            value={material.value}
                            id={material.id}
                            className="peer sr-only"
                          />
                          <Label
                            htmlFor={material.id}
                            className="bg-zinc-800 rounded-full h-10 py-2.5 px-4 flex gap-1 items-center justify-center transition-all ease-in-out hover:scale-105 hover:bg-zinc-700 cursor-pointer hover:border-zinc-200 peer-data-[state=checked]:bg-zinc-600 [&:has([data-state=checked])]:bg-zinc-600"
                          >
                            <div
                              className={cn(
                                "w-6 h-6 rounded-full bg-gradient-to-tr",
                                {
                                  "from-gray-300 via-white to-gray-300":
                                    material.value === "silver",
                                  "from-rose-300 via-white to-rose-300":
                                    material.value === "rosegold",
                                  "from-amber-500 via-white to-amber-500":
                                    material.value === "gold",
                                }
                              )}
                            />
                            <p className="text-sm font-semibold">
                              {material.name}
                            </p>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </FormControl>
                </FormItem>
              )}
            />
            {(material === "gold" ||
              material === "rosegold" ||
              material === "whitegold") && (
              <FormField
                control={form.control}
                name="karat"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Karat</FormLabel>
                    <FormControl>
                      <RadioGroup
                        defaultValue={field.value}
                        onValueChange={field.onChange}
                        className="flex"
                      >
                        {uniqueKaratObjects.map((karat) => (
                          <div className="flex items-center" key={karat.id}>
                            <RadioGroupItem
                              value={karat.value}
                              id={karat.id}
                              className="peer sr-only"
                            />
                            <Label
                              htmlFor={karat.id}
                              className="bg-zinc-800 rounded-full w-16 h-10 py-2.5 flex items-center justify-center transition-all ease-in-out hover:scale-105 hover:bg-zinc-700 cursor-pointer hover:border-zinc-200 peer-data-[state=checked]:bg-zinc-600 [&:has([data-state=checked])]:bg-zinc-600"
                            >
                              <p className="text-xs font-semibold">
                                {karat.name}
                              </p>
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />
            )}
            <Button type="submit" className="gap-1" variant="white">
              <ShoppingBag className="w-4 h-4" />
              Add to cart
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CustomizeForm;
