import prismadb from "@/lib/prismadb";

const getCollections = async () => {
  const collections = await prismadb.collection.findMany({
    where: {
      products: {
        some: {
          id: {
            not: "",
          },
        },
      },
    },
    include: {
      products: true,
    },
  });

  return collections;
};

export const metadata = {
  title: "Collections",
  description: "Collections",
};

const Collections = async () => {
  const collections = await getCollections();

  return (
    <div className="bg-black pt-24 flex-grow h-screen">
      <div className="max-w-7xl mx-auto px-4 space-y-8">Collections</div>
    </div>
  );
};

export default Collections;
