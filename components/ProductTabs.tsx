"use client";

import { useState } from "react";
import { SignInButton } from "@clerk/nextjs";
import { format } from "date-fns";

import { useUrl } from "@/hooks/use-url";
import { Order, Review } from "@prisma/client";
import { ProductDetails } from "@/types/ProductVariants";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import ReviewModal from "./ReviewModal";
import { Rating } from "@smastrom/react-rating";
import { style } from "@/constants/ratingStyle";
import { Button } from "@/components/ui/button";

interface Variant {
  title: string;
}

interface OrderItem {
  variant: Variant;
}

interface OrderWithTitle extends Order {
  orderItems: OrderItem[];
}

const ProductTabs = ({
  product,
  rating,
  order,
  user,
}: {
  product: ProductDetails;
  rating: Review[];
  order: OrderWithTitle | null;
  user: string | null;
}) => {
  const [open, setOpen] = useState(false);
  const url = useUrl();

  return (
    <>
      <ReviewModal
        id={product.id}
        name={product.name}
        image={product.image}
        open={open}
        onOpenChange={() => setOpen(!open)}
      />
      <Tabs defaultValue="description">
        <TabsList className="border-t border-x border-zinc-800 overflow-hidden">
          <TabsTrigger value="description" className="text-xs font-medium px-4">
            Description
          </TabsTrigger>
          <TabsTrigger value="reviews" className="text-xs font-medium px-4">
            Reviews
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="description"
          className="border rounded-t-none border-zinc-800 rounded-b-lg rounded-tr-lg p-5 bg-zinc-950 h-full"
        >
          <div
            dangerouslySetInnerHTML={{ __html: product.description }}
            className="text-sm py-4"
          />
        </TabsContent>
        <TabsContent
          value="reviews"
          className="border rounded-t-none border-zinc-800 rounded-b-lg rounded-tr-lg p-5 bg-zinc-950 text-sm h-full"
        >
          {rating.length === 0 ? (
            <div className="flex flex-col gap-2 justify-center items-center h-full py-4">
              There are currently no reviews on this product.
              {!user ? (
                <div>
                  <SignInButton afterSignInUrl={url} mode="modal" /> to leave a
                  review.
                </div>
              ) : (
                <div>
                  {order ? (
                    <Button
                      onClick={() => setOpen(true)}
                      variant="link"
                      className="text-white text-sm"
                    >
                      Leave a review
                    </Button>
                  ) : (
                    "Only customers who have ordered this product can leave a review"
                  )}
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-col divide-y divide-zinc-800">
              {rating.map((review) => (
                <div key={review.id} className="flex flex-col gap-3 py-4">
                  <div className="flex flex-col gap-1">
                    <div className="flex justify-between">
                      <p className="text-sm font-semibold capitalize">
                        {review.title}
                      </p>
                      <p className="text-sm text-zinc-500">
                        {format(review.createdAt, "dd/MM/yyyy")}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Rating
                        value={review.rate}
                        style={{ maxWidth: 80 }}
                        itemStyles={style}
                        isDisabled
                      />
                    </div>
                  </div>
                  <p className="text-xs font-medium">{review.review}</p>
                </div>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </>
  );
};

export default ProductTabs;
