"use client";

import * as z from "zod";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { usePathname } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

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
import {
  FaCcAmex,
  FaCcDinersClub,
  FaCcDiscover,
  FaCcMastercard,
  FaCcStripe,
  FaCcVisa,
} from "react-icons/fa";

import useCart from "@/hooks/use-cart";
import { cn, formatter } from "@/lib/utils";
import { CartProduct } from "@/types/ProductWithVariants";
import CanvasComponent from "@/components/CanvasComponent";
import ElizabethRing from "@/components/ElizabethRing";
import { Gem, Karat, Material, Product, Size } from "@prisma/client";

const CustomizeForm = ({
  product,
  gems,
  materials,
  sizes,
  karats,
}: {
  product: Product;
  gems: Gem[];
  materials: Material[];
  sizes: Size[];
  karats: Karat[];
}) => {
  const cart = useCart();
  const pathname = usePathname();

  const [material, setMaterial] = useState("white-gold");
  const [gem, setGem] = useState("diamond");
  const [karat, setKarat] = useState("16");
  const [price, setPrice] = useState(product.basePrice);

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
      material: "white-gold",
      karat: "16",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const cartProduct: CartProduct = {
        id: product.id,
        name: product.name,
        slug: pathname,
        price: price,
        size: values.size,
        gem: values.gem,
        material: values.material,
      };
      if (values.material.includes("gold")) {
        cartProduct.karat = values.karat;
      }
      cart.addItem(cartProduct);
    } catch (error) {
      console.log(error);
    }
  }

  // Calculate Price

  const variantPrice = () => {
    const getGemPrice = gems.find((gems) => gems.value === gem);
    const getMaterialPrice = materials.find(
      (materials) => materials.value === material
    );
    const getKaratPrice = karats.find((karats) => karats.value === karat);

    if (!getGemPrice || !getMaterialPrice || !getKaratPrice) {
      return null;
    }

    const { price: gemPrice } = getGemPrice;
    const { price: materialPrice } = getMaterialPrice;
    const { price: karatPrice } = getKaratPrice;

    setPrice(product.basePrice + gemPrice + materialPrice + karatPrice);
  };

  useEffect(() => {
    variantPrice();
  }, [gem, material, karat]);

  return (
    <div className="flex w-full h-full">
      <div className="w-2/3 h-full">
        <CanvasComponent level={6} intensity={0.3}>
          <ElizabethRing
            material={material}
            gem={gem}
            positionY={-2}
            scale={1.6}
          />
        </CanvasComponent>
      </div>
      <div className="flex flex-col gap-4 w-1/3">
        <div className="font-normal">
          <h2 className="text-3xl">{product.name}</h2>
          <h3 className="text-xl">{formatter.format(price)}</h3>
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
                      {sizes.map((size) => (
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
                      {gems.map((gem) => (
                        <div className="flex items-center" key={gem.id}>
                          <RadioGroupItem
                            value={gem.value}
                            id={gem.id}
                            onClick={() => setGem(gem.value)}
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
                      defaultValue={field.value}
                      onValueChange={field.onChange}
                      className="flex"
                    >
                      {materials.map((material) => (
                        <div className="flex items-center" key={material.id}>
                          <RadioGroupItem
                            value={material.value}
                            id={material.id}
                            onClick={() => setMaterial(material.value)}
                            className="peer sr-only"
                          />
                          <Label
                            htmlFor={material.id}
                            className="bg-zinc-800 rounded-full h-10 py-2.5 px-4 flex gap-1 items-center justify-center transition-all ease-in-out hover:scale-105 hover:bg-zinc-700 cursor-pointer hover:border-zinc-200 peer-data-[state=checked]:bg-zinc-600 [&:has([data-state=checked])]:bg-zinc-600"
                          >
                            <div
                              className={cn(
                                "w-6 h-6 rounded-full bg-gradient-to-tr flex-none",
                                {
                                  "from-gray-500 via-white to-gray-500":
                                    material.value === "platinum",
                                  "from-gray-700 via-white to-gray-700":
                                    material.value === "white-gold",
                                  "from-rose-300 via-white to-rose-300":
                                    material.value === "rose-gold",
                                  "from-amber-500 via-white to-amber-500":
                                    material.value === "gold",
                                  "from-gray-900 via-white to gray-900":
                                    material.value === "silver",
                                }
                              )}
                            />
                            <p className="text-xs font-semibold">
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
              material === "rose-gold" ||
              material === "white-gold") && (
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
                        {karats.map((karat) => (
                          <div className="flex items-center" key={karat.id}>
                            <RadioGroupItem
                              value={karat.value}
                              id={karat.id}
                              onClick={() => setKarat(karat.value)}
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
            <Button type="submit" className="gap-1 w-full" variant="white">
              <ShoppingBag className="w-4 h-4" />
              Add to cart
            </Button>
          </form>
        </Form>
        <div className="space-y-4 border border-zinc-800 rounded-md p-4">
          <h4 className="text-xs text-center">Guaranteed Safe Checkout</h4>
          <div className="flex items-center justify-center gap-4">
            <FaCcStripe className="w-10 h-10" />
            <FaCcVisa className="w-10 h-10" />
            <FaCcMastercard className="w-10 h-10" />
            <FaCcAmex className="w-10 h-10" />
            <FaCcDiscover className="w-10 h-10" />
            <FaCcDinersClub className="w-10 h-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizeForm;
