"use client";

import { Tabs, TabsContent } from "@/components/ui/tabs";
import { DataTable } from "./DataTable";
import { columns } from "./OrdersColumns";
import { OrderShippingCardProps } from "@/types/ProductVariants";

const DashboardComponent = ({
  orders,
}: {
  orders: OrderShippingCardProps[] | undefined;
}) => {
  if (!orders) return;

  return (
    <Tabs
      orientation="vertical"
      className="flex gap-3 w-full"
      defaultValue="orders"
    >
      <TabsContent value="orders" className="w-full">
        <div className="bg-transparent rounded-lg shadow-lg">
          <DataTable columns={columns} data={orders} />
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default DashboardComponent;
