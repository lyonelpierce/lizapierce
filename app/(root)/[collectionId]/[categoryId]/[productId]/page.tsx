import { Metadata } from "next";
import { notFound } from "next/navigation";
import prismadb from "@/lib/prismadb";

import { ProductDetails } from "@/types/ProductVariants";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Render from "@/components/Render";
import Variants from "@/components/Variants";
import SafePayment from "@/components/SafePayment";
import AddToCart from "@/components/AddToCartButton";
import DynamicPrice from "@/components/DynamicPrice";
import CarouselComponent from "@/components/Carousel";

async function getProduct({
  params,
}: {
  params: { productId: string };
}): Promise<ProductDetails> {
  const product = await prismadb.product.findUnique({
    where: {
      slug: params.productId,
    },
    include: {
      options: {
        orderBy: {
          name: "desc",
        },
      },
      variants: {
        include: {
          options: {
            select: {
              name: true,
              value: true,
            },
          },
        },
      },
    },
  });

  if (!product) return notFound();

  return product;
}

export async function generateMetadata({
  params,
}: {
  params: { productId: string };
}): Promise<Metadata> {
  const product = await getProduct({ params });

  return {
    title: product.name,
  };
}

const ProductPage = async ({ params }: { params: { productId: string } }) => {
  const product = await getProduct({ params });

  const relatedProducts = await prismadb.product.findMany({
    take: 4,
    where: {
      AND: [
        {
          OR: [
            { categoryId: product.categoryId },
            { collectionId: product.collectionId },
          ],
        },
        {
          NOT: {
            slug: product.slug,
          },
        },
      ],
    },
    include: {
      category: {
        select: {
          slug: true,
        },
      },
      collection: {
        select: {
          slug: true,
        },
      },
    },
  });

  return (
    <div className="h-full bg-black pt-32">
      <div className="max-w-7xl mx-auto text-sm font-medium h-full space-y-4">
        <div className="flex gap-8">
          <div className="w-2/3">
            <Render />
          </div>
          <Card className="w-1/3 h-full">
            <CardHeader>
              <CardTitle className="text-2xl font-medium">
                {product.name}
              </CardTitle>
              <DynamicPrice
                variants={product.variants}
                minPrice={product.minPrice}
                maxPrice={product.maxPrice}
              />
              <Separator className="bg-zinc-800 my-4" />
            </CardHeader>
            <CardContent className="px-5">
              <Variants options={product.options} variants={product.variants} />
              <AddToCart
                forSale={product.forSale}
                variants={product.variants}
                name={product.name}
                image={product.image}
              />
              <Separator className="bg-zinc-800 my-4" />
            </CardContent>
            <CardFooter>
              <SafePayment />
            </CardFooter>
          </Card>
        </div>
        <Tabs>
          <TabsList className="border-t border-x border-zinc-800 overflow-hidden">
            <TabsTrigger value="Description">Description</TabsTrigger>
            <TabsTrigger value="Reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent
            value="Description"
            className="border rounded-t-none border-zinc-800 rounded-b-lg rounded-r-lg p-5 bg-zinc-950"
          >
            {product.description}
          </TabsContent>
          <TabsContent value="Reviews">Rev</TabsContent>
        </Tabs>
        <CarouselComponent
          products={relatedProducts}
          className="text-2xl"
          title="Related Products"
        />
      </div>
    </div>
  );
};

export default ProductPage;
