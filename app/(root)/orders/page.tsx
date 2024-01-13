import { Metadata } from "next";
import { auth } from "@clerk/nextjs";
import prismadb from "@/lib/prismadb";

import Heading from "@/components/ui/Heading";
import DashboardComponent from "@/components/DashboardComponent";

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
        orderItems: true,
      },
    });

    return orders;
  }
};

const Dashboard = async () => {
  const orders = await getOrder();

  return (
    <div className="bg-black pt-32 flex-grow h-screen">
      <div className="max-w-7xl mx-auto px-4 h-full space-y-8">
        <Heading text="Orders" />
        <DashboardComponent orders={orders} />
      </div>
    </div>
  );
};

export default Dashboard;
