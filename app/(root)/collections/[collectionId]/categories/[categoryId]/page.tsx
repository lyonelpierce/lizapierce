import prismadb from "@/lib/prismadb";
import { notFound } from "next/navigation";

const CategoryPage = async ({ params }: { params: { categoryId: string } }) => {
  const category = await prismadb.category.findUnique({
    where: {
      slug: params.categoryId,
    },
  });

  if (!category) return notFound();

  return (
    <div className="h-full bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4">Rings Page</div>
    </div>
  );
};

export default CategoryPage;
