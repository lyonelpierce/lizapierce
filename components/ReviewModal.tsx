"use client";

import * as z from "zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Variant } from "@prisma/client";
import { OrderWithItems } from "@/types/ProductVariants";

const formSchema = z.object({
  review: z.string().min(10, {
    message: "Username must be at least 10 characters.",
  }),
  title: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const ReviewModal = ({
  name,
  image,
  orders,
}: {
  name: string;
  image: string;
  orders: OrderWithItems[] | null;
}) => {
  const [isMounted, setIsMounted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      review: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Dialog>
      {/* <DialogContent>
        <DialogHeader>
          <DialogTitle>Leave a Review</DialogTitle>
        </DialogHeader>
        <div className="flex gap-1 bg-black border border-zinc-800 rounded-lg">
          <div className="overflow-hidden p-2">
            <Image
              src={image}
              alt={name}
              width={50}
              height={50}
              className="aspect-square object-cover border border-zinc-800 rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center h-full">
            <h3 className="text-sm font-medium">{name}</h3>
            <p className=" text-xs text-zinc-500">{variantName}</p>
          </div>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="review"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs">Title</FormLabel>
                  <FormControl>
                    <Input placeholder="One word title..." {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="review"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs">Review</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Write your review..." {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="review"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs">Rate</FormLabel>
                  <FormControl></FormControl>
                </FormItem>
              )}
            />
            <div className="flex items-center gap-2">
              <Button
                variant="white"
                size="sm"
                className="text-xs rounded-full px-6"
              >
                Submit
              </Button>
              <Button variant="link" size="sm" className="text-xs text-white">
                Cancel
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent> */}
    </Dialog>
  );
};

export default ReviewModal;
