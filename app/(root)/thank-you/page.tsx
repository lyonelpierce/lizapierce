import { Metadata } from "next";
import { notFound } from "next/navigation";

import prismadb from "@/lib/prismadb";
import { formatter } from "@/lib/utils";

import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import ImageComponent from "@/components/ImageComponent";
import OrderShippingCard from "@/components/OrderShippingCard";

export const metadata: Metadata = {
  title: "Thank You",
};

const getOrder = async (orderId: string) => {
  const order = prismadb.order.findUnique({
    where: {
      id: orderId,
    },
    include: {
      orderItems: {
        include: {
          variant: true,
          product: true,
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

  if (!order) {
    notFound();
  }

  return (
    <div className="bg-black pt-20 md:pt-24 flex-grow h-full md:h-screen">
      <div className="max-w-7xl mx-auto px-4 space-y-8">
        <ImageComponent image="/images/thankyou.jpg" text="Thank You!" />
        <div className="flex flex-col md:flex-row gap-3 h-full">
          <OrderShippingCard order={order} />
          <Card className="w=full md:w-1/2">
            <CardHeader>
              <h3 className="text-xl font-semibold">Order Details</h3>
              <Separator className="bg-zinc-800" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4 divide-y divide-zinc-800 text-sm">
                {order.orderItems.map((orderItem) => (
                  <div key={orderItem.id} className="flex flex-col">
                    <p className="flex justify-between font-medium w-full">
                      <span>{orderItem.product.name}</span>
                      {formatter.format(orderItem.variant.price)}
                    </p>
                    <p className="text-zinc-500">{orderItem.variant.title}</p>
                  </div>
                ))}
                <div className="flex justify-between">
                  <span className="font-medium">Total: </span>
                  {formatter.format((order.total ?? 0) / 100)}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
