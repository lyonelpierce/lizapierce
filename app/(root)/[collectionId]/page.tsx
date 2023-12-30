import prismadb from "@/lib/prismadb";
import { notFound } from "next/navigation";

const CollectionPage = async ({
  params,
}: {
  params: { collectionId: string };
}) => {
  const collection = await prismadb.collection.findUnique({
    where: {
      slug: params.collectionId,
    },
  });

  if (!collection) return notFound();

  return (
    <div className="h-full bg-black pt-20">
      <div className="max-w-7xl mx-auto px-4">Collections Page</div>
    </div>
  );
};

export default CollectionPage;
