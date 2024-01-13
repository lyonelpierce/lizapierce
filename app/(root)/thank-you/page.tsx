import { Metadata } from "next";
import { notFound } from "next/navigation";

import ThankYouComponent from "@/components/ThankYouComponent";
import prismadb from "@/lib/prismadb";

export const metadata: Metadata = {
  title: "Thank You",
};

const getOrder = async (orderId: string) => {
  const order = await prismadb.order.findUnique({
    where: {
      id: orderId,
    },
    include: {
      orderItems: {
        include: {
          variant: true,
        },
      },
    },
  });

  return order;
};

const ThankYou = async ({
  searchParams,
}: {
  searchParams?: { [orderId: string]: string };
}) => {
  const { orderId } = searchParams || {};

  if (!orderId) {
    notFound();
  }

  const order = await getOrder(orderId);

  return <ThankYouComponent />;
};

export default ThankYou;
