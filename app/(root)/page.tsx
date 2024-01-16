import prismadb from "@/lib/prismadb";

import Hero from "@/components/Hero";
import ImageComponent from "@/components/ImageComponent";
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
      <ImageComponent
        image="/images/partner.jpg"
        text="Let's become a partnership!"
        className="px-4"
      />
    </div>
  );
}
