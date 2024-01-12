"use client";

import { OrderWithItems } from "@/types/ProductVariants";
import { Order } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<OrderWithItems>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "orderItems",
    header: "No. of Products",
    cell: ({ row }) => (
      <div className="flex items-center gap-x-2">
        {row.original.orderItems.length}
      </div>
    ),
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
];
