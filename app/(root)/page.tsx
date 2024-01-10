import prismadb from "@/lib/prismadb";

import Hero from "@/components/Hero";
import Partnership from "@/components/Partnership";
import CarouselComponent from "@/components/Carousel";

export default async function Home() {
  const products = await prismadb.product.findMany({
    where: {
      forSale: true,
    },
  });

  return (
    <>
      <Hero />
      <CarouselComponent products={products} />
      <Partnership />
    </>
  );
}
