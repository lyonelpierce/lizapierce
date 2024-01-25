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
import { Rating } from "@smastrom/react-rating";
import { style } from "@/constants/ratingStyle";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  review: z.string().min(10, {
    message: "Username must be at least 10 characters.",
  }),
  title: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  rating: z.union([
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
  ]),
});

const ReviewModal = ({
  id,
  name,
  image,
  open,
  onOpenChange,
}: {
  id: string;
  name: string;
  image: string;
  open: boolean;
  onOpenChange: () => void;
}) => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      review: "",
      title: "",
      rating: 5,
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const response = await fetch("http://localhost:3000/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, id }),
      });

      const message = await response.text();

      if (response.status === 200) {
        onOpenChange();
        toast.success(message);
        router.refresh();
      } else if (response.status === 201) {
        toast.error(message);
      } else {
        toast.error("Something went wrong!");
      }
    } catch (error) {
      console.log(error);
    }
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
                  <FormControl>
                    <Rating
                      style={{ maxWidth: 120 }}
                      itemStyles={style}
                      {...field}
                      value={field.value as number}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="flex items-center gap-2 pt-4">
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
                type="button"
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
