import prismadb from "@/lib/prismadb";
import { notFound } from "next/navigation";

const ProductPage = async ({ params }: { params: { productId: string } }) => {
  const product = await prismadb.product.findMany({
    where: {
      id: params.productId,
    },
  });

  if (product.length === 0) return notFound();

  return (
    <div className="h-full bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4">Rings Page</div>
    </div>
  );
};

export default ProductPage;
