import { Metadata } from "next";
import { auth } from "@clerk/nextjs";
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

import Render from "@/components/Render";
import Variants from "@/components/Variants";
import SafePayment from "@/components/SafePayment";
import AddToCart from "@/components/AddToCartButton";
import DynamicPrice from "@/components/DynamicPrice";
import CarouselComponent from "@/components/Carousel";
import ProductTabs from "@/components/ProductTabs";
import WidthWrapper from "@/components/WidthWrapper";
import { Rating } from "@smastrom/react-rating";
import { style } from "@/constants/ratingStyle";

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

  const relatedProducts = prismadb.product.findMany({
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

  const productRating = prismadb.review.findMany({
    where: {
      productId: product.id,
    },
  });

  const [related, rating] = await Promise.all([relatedProducts, productRating]);

  const { userId } = auth();
  let userOrders = null;

  if (userId) {
    const user = await prismadb.user.findUnique({
      where: {
        externalId: userId,
      },
      select: {
        id: true,
      },
    });

    userOrders = await prismadb.order.findFirst({
      where: {
        userId: user?.id,
        isPaid: true,
        orderItems: {
          some: {
            variant: {
              productId: product.id,
            },
          },
        },
      },
      include: {
        orderItems: {
          select: {
            variant: {
              select: {
                title: true,
              },
            },
          },
        },
      },
    });
  }

  const ratingMath = () => {
    if (rating.length === 0) {
      return 0;
    }

    let sum = 0;

    rating.forEach((review) => {
      sum += review.rate;
    });

    return sum / rating.length;
  };

  return (
    <WidthWrapper className="md:h-full">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-2/3 aspect-square h-96 md:h-[40rem]">
          <Render />
        </div>
        <Card className="w-full md:w-1/3 h-max">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-2xl font-medium">
                {product.name}
              </CardTitle>
              <Rating
                value={ratingMath()}
                style={{ maxWidth: 90 }}
                itemStyles={style}
                readOnly
              />
            </div>
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
      <ProductTabs
        product={product}
        rating={rating}
        order={userOrders}
        user={userId}
      />
      <CarouselComponent
        products={related}
        className="text-2xl"
        title="Related Products"
      />
    </WidthWrapper>
  );
};

export default ProductPage;
