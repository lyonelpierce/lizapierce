"use client";

import * as z from "zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

import { OrderWithItems } from "@/types/ProductVariants";

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
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Star } from "lucide-react";

const formSchema = z.object({
  variant: z.string().min(10, {
    message: "Username must be at least 10 characters.",
  }),
  review: z.string().min(10, {
    message: "Username must be at least 10 characters.",
  }),
  title: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  rating: z.enum(["1", "2", "3", "4", "5"]),
});

const ReviewModal = ({
  name,
  image,
  open,
  onOpenChange,
}: {
  name: string;
  image: string;
  open: boolean;
  onOpenChange: () => void;
}) => {
  const [isMounted, setIsMounted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      review: "",
      title: "",
      rating: "5",
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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Leave a Review</DialogTitle>
        </DialogHeader>
        <div className="flex gap-3 bg-black border border-zinc-800 rounded-lg h-full p-2">
          <div className="overflow-hidden">
            <Image
              src={image}
              alt={name}
              width={50}
              height={50}
              className="aspect-square object-cover border border-zinc-800 rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center gap-1 h-full">
            <h3 className="text-sm font-medium">{name}</h3>
          </div>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="title"
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
              name="rating"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs">Rate</FormLabel>
                  <FormControl></FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="rating"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormControl>
                    <RadioGroup defaultValue="5" className="flex gap-2">
                      <div>
                        <RadioGroupItem
                          value="1"
                          id="rating"
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor="rating"
                          className="text-zinc-500 hover:text-white peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                        >
                          <Star className="h-4 w-4" />
                        </Label>
                      </div>
                      <div>
                        <RadioGroupItem
                          value="2"
                          id="paypal"
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor="paypal"
                          className="text-zinc-500 hover:text-white peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                        >
                          <Star className="h-4 w-4" />
                        </Label>
                      </div>
                      <div>
                        <RadioGroupItem
                          value="3"
                          id="apple"
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor="apple"
                          className="text-zinc-500 hover:text-white peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                        >
                          <Star className="h-4 w-4" />
                        </Label>
                      </div>
                      <div>
                        <RadioGroupItem
                          value="4"
                          id="apple"
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor="apple"
                          className="text-zinc-500 hover:text-white peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                        >
                          <Star className="h-4 w-4" />
                        </Label>
                      </div>
                      <div>
                        <RadioGroupItem
                          value="5"
                          id="apple"
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor="apple"
                          className="text-zinc-500 hover:text-white peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                        >
                          <Star className="h-4 w-4" />
                        </Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="flex items-center gap-2">
              <Button
                variant="white"
                size="sm"
                className="text-xs rounded-full px-6"
                type="submit"
              >
                Submit
              </Button>
              <Button
                variant="link"
                size="sm"
                className="text-xs text-white"
                onClick={onOpenChange}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ReviewModal;
