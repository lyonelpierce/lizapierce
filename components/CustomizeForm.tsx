"use client";

import * as z from "zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Gem, Material, Size, Variant } from "@prisma/client";

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

type VariantWithDetails = Variant & {
  size: Size;
  gem: Gem;
  material: Material;
};

const CustomizeForm = ({
  gems,
  sizes,
  materials,
  variants,
}: {
  gems: Gem[];
  sizes: Size[];
  materials: Material[];
  variants: VariantWithDetails[];
}) => {
  const formSchema = z.object({
    size: z
      .string()
      .refine((value) => sizes.some((size) => size.value === value), {
        message: "Invalid size value",
      }),
    gem: z.string().refine((value) => gems.some((gem) => gem.value === value), {
      message: "Invalid gem value",
    }),
    material: z
      .string()
      .refine(
        (value) => materials.some((material) => material.value === value),
        {
          message: "Invalid material value",
        }
      ),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      size: sizes[0].value,
      gem: gems[0].value,
      material: materials[0].value,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
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
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor={material.id}
                        className="bg-zinc-800 rounded-lg w-12 h-12 flex items-center justify-center transition-all ease-in-out hover:scale-105 hover:bg-zinc-700 cursor-pointer hover:border-zinc-200 peer-data-[state=checked]:bg-zinc-600 [&:has([data-state=checked])]:bg-zinc-600"
                      >
                        <p className="text-sm font-semibold">{material.name}</p>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" className="gap-1 uppercase" variant="white">
          <ShoppingBag className="w-4 h-4" />
          Add to cart
        </Button>
      </form>
    </Form>
  );
};

export default CustomizeForm;
