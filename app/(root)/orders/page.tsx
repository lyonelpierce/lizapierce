import { Metadata } from "next";
import { auth } from "@clerk/nextjs";
import prismadb from "@/lib/prismadb";

import Heading from "@/components/ui/Heading";
import DashboardComponent from "@/components/DashboardComponent";
import WidthWrapper from "@/components/WidthWrapper";

export const metadata: Metadata = {
  title: "Dashboard",
};

const getOrder = async () => {
  const { userId } = auth();

  if (userId) {
    const user = await prismadb.user.findUnique({
      where: {
        externalId: userId,
      },
      select: {
        id: true,
      },
    });

    const orders = await prismadb.order.findMany({
      where: {
        userId: user?.id,
        isPaid: true,
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

    return orders;
  }
};

const Dashboard = async () => {
  const orders = await getOrder();

  return (
    <WidthWrapper className="h-dvh">
      <Heading text="Orders" cart={orders?.length} />
      <DashboardComponent orders={orders} />
    </WidthWrapper>
  );
};

export default Dashboard;
