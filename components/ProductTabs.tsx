import { Rating } from "@prisma/client";

import { ProductDetails } from "@/types/ProductVariants";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SignInButton } from "@clerk/nextjs";

const ProductTabs = ({
  product,
  rating,
  ordered,
  user,
}: {
  product: ProductDetails;
  rating: Rating[];
  ordered: boolean;
  user: string | null;
}) => {
  console.log(ordered);
  return (
    <Tabs defaultValue="description">
      <TabsList className="border-t border-x border-zinc-800 overflow-hidden">
        <TabsTrigger value="description">Description</TabsTrigger>
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
      </TabsList>
      <TabsContent
        value="description"
        className="border rounded-t-none border-zinc-800 rounded-b-lg rounded-r-lg p-5 bg-zinc-950 h-32"
      >
        {product.description}
      </TabsContent>
      <TabsContent
        value="reviews"
        className="border rounded-t-none border-zinc-800 rounded-b-lg rounded-r-lg p-5 bg-zinc-950 h-32"
      >
        {rating.length === 0 ? (
          <div className="flex flex-col gap-2 justify-center items-center h-full">
            There are currently no ratings
            {!user ? (
              <div>
                <SignInButton afterSignInUrl="" /> to leave a review.
              </div>
            ) : (
              <div>
                {ordered ? (
                  <p className="cursor-pointer">Leave a review</p>
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
  );
};

export default ProductTabs;