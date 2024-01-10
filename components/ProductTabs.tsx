import { Rating } from "@prisma/client";

import { ProductDetails } from "@/types/ProductVariants";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProductTabs = ({
  product,
  rating,
}: {
  product: ProductDetails;
  rating: Rating[];
}) => {
  console.log(rating);
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
          <div className="flex justify-center items-center h-full">
            There are currently no ratings
          </div>
        ) : (
          <div>Hello</div>
        )}
      </TabsContent>
    </Tabs>
  );
};

export default ProductTabs;
