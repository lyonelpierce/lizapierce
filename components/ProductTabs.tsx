"use client";

import { useState } from "react";
import { SignInButton } from "@clerk/nextjs";

import { useUrl } from "@/hooks/use-url";
import { Review } from "@prisma/client";
import { OrderWithItems, ProductDetails } from "@/types/ProductVariants";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import ReviewModal from "./ReviewModal";

const ProductTabs = ({
  product,
  rating,
  order,
  user,
}: {
  product: ProductDetails;
  rating: Review[];
  order: OrderWithItems | null;
  user: string | null;
}) => {
  const [open, setOpen] = useState(false);

  const url = useUrl();

  return (
    <>
      <ReviewModal
        name={product.name}
        image={product.image}
        open={open}
        onOpenChange={() => setOpen(!open)}
      />
      <Tabs defaultValue="description">
        <TabsList className="border-t border-x border-zinc-800 overflow-hidden">
          <TabsTrigger value="description" className="text-xs px-4">
            Description
          </TabsTrigger>
          <TabsTrigger value="reviews" className="text-xs px-4">
            Reviews
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="description"
          className="border rounded-t-none border-zinc-800 rounded-b-lg rounded-tr-lg p-5 bg-zinc-950 h-32"
        >
          <div dangerouslySetInnerHTML={{ __html: product.description }} />
        </TabsContent>
        <TabsContent
          value="reviews"
          className="border rounded-t-none border-zinc-800 rounded-b-lg rounded-tr-lg p-5 bg-zinc-950 h-32"
        >
          {rating.length === 0 ? (
            <div className="flex flex-col gap-2 justify-center items-center h-full">
              There are currently no ratings
              {!user ? (
                <div>
                  <SignInButton afterSignInUrl={url} /> to leave a review.
                </div>
              ) : (
                <div>
                  {!order ? (
                    <p
                      className="transition-colors ease-in-out hover:text-zinc-200 cursor-pointer"
                      onClick={() => setOpen(true)}
                    >
                      Leave a review
                    </p>
                  ) : (
                    "Only customers who have ordered this product can leave a review"
                  )}
                </div>
              )}
            </div>
          ) : (
            <div>Hello</div>
          )}
        </TabsContent>
      </Tabs>
    </>
  );
};

export default ProductTabs;
