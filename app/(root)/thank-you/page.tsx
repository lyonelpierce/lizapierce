import { Metadata } from "next";
import { notFound } from "next/navigation";

import ThankYouComponent from "@/components/ThankYouComponent";
import prismadb from "@/lib/prismadb";
import { Separator } from "@/components/ui/separator";
import { formatter } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

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

  console.log(order);

  if (!order) {
    notFound();
  }

  return (
    <div className="bg-black pt-24 flex-grow h-screen">
      <div className="max-w-7xl mx-auto px-4 space-y-8">
        <ThankYouComponent />
        <div className="flex gap-3">
          <Card className="w-1/2">
            <CardHeader>
              <h3 className="text-xl font-semibold">Shipping Information</h3>
              <Separator className="bg-zinc-800" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4 divide-y divide-zinc-800 text-sm">
                <p className="flex justify-between capitalize">
                  <span className="font-medium">Name: </span>
                  {order.name}
                </p>
                <p className="flex justify-between capitalize">
                  <span className="font-medium">Address: </span>
                  {order.address}
                </p>
                <p className="flex justify-between">
                  <span className="font-medium">E-mail: </span>
                  {order.email}
                </p>
                <p className="flex justify-between">
                  <span className="font-medium">Phone: </span>
                  {order.phone}
                </p>
                <p className="flex justify-between">
                  <span className="font-medium">Date: </span>
                  {order.createdAt.toLocaleDateString()}
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="w-1/2">
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
                  {formatter.format(order.total / 100)}
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
