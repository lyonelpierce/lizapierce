import prismadb from "@/lib/prismadb";

import ImageComponent from "@/components/ImageComponent";
import WidthWrapper from "@/components/WidthWrapper";

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
    <WidthWrapper>
      <ImageComponent image="/images/thankyou.jpg" text="Collections" />
    </WidthWrapper>
  );
};

export default Collections;
