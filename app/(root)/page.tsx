import prismadb from "@/lib/prismadb";

import Hero from "@/components/Hero";
import Partnership from "@/components/Partnership";
import CarouselComponent from "@/components/Carousel";

export default async function Home() {
  const products = await prismadb.product.findMany({
    where: {
      forSale: true,
    },
    include: {
      collection: {
        select: {
          slug: true,
        },
      },
      category: {
        select: {
          slug: true,
        },
      },
    },
  });

  return (
    <div className="space-y-12 md:space-y-4 bg-black">
      <Hero />
      <CarouselComponent
        products={products}
        className="text-4xl"
        title="New Collection"
      />
      <Partnership />
    </div>
  );
}
