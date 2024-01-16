import { Metadata } from "next";
import { notFound } from "next/navigation";
import { auth } from "@clerk/nextjs";

import ThankYouComponent from "@/components/ThankYouComponent";
import prismadb from "@/lib/prismadb";
import { Separator } from "@/components/ui/separator";
import { formatter } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Thank You",
};

const getOrder = async (orderId: string) => {
  const { userId } = auth();

  if (!userId) notFound();

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

  const user = prismadb.user.findUnique({
    where: {
      externalId: userId,
    },
  });

  const [orders, users] = await Promise.all([order, user]);

  const data = { orders, users };

  return data;
};

const ThankYou = async ({
  searchParams,
}: {
  searchParams?: { [orderId: string]: string };
}) => {
  const { userId } = auth();
  const { orderId } = searchParams || {};

  if (!orderId) {
    notFound();
  }

  const data = await getOrder(orderId);

  if (!data) {
    notFound();
  }

  if (userId !== data.users?.externalId) {
    notFound();
  }

  return (
    <div className="bg-black pt-20 md:pt-24 flex-grow h-full md:h-screen">
      <div className="max-w-7xl mx-auto px-4 space-y-8">
        <ThankYouComponent />
        <div className="flex flex-col md:flex-row gap-3 h-full">
          <Card className="w-full md:w-1/2">
            <CardHeader>
              <h3 className="text-xl font-semibold">Shipping Information</h3>
              <Separator className="bg-zinc-800" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4 divide-y divide-zinc-800 text-sm">
                <p className="flex justify-between capitalize">
                  <span className="font-medium">Name: </span>
                  {data.orders?.name}
                </p>
                <p className="flex justify-between capitalize">
                  <span className="font-medium">Address: </span>
                  {data.orders?.address}
                </p>
                <p className="flex justify-between">
                  <span className="font-medium">E-mail: </span>
                  {data.orders?.email}
                </p>
                <p className="flex justify-between">
                  <span className="font-medium">Phone: </span>
                  {data.orders?.phone}
                </p>
                <p className="flex justify-between">
                  <span className="font-medium">Date: </span>
                  {data.orders?.createdAt.toLocaleDateString()}
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="w=full md:w-1/2">
            <CardHeader>
              <h3 className="text-xl font-semibold">Order Details</h3>
              <Separator className="bg-zinc-800" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4 divide-y divide-zinc-800 text-sm">
                {data.orders?.orderItems.map((orderItem) => (
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
                  {formatter.format((data.orders?.total ?? 0) / 100)}
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
