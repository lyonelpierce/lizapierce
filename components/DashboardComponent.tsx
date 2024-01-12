"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Receipt, Truck } from "lucide-react";
import { DataTable } from "./DataTable";
import { columns } from "./OrdersColumns";
import { OrderWithItems } from "@/types/ProductVariants";

const DashboardMenu = [
  {
    name: "Orders",
    value: "orders",
    icon: <Receipt className="w-4 h-4" />,
  },
];

const DashboardComponent = ({
  orders,
}: {
  orders: OrderWithItems[] | undefined;
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
