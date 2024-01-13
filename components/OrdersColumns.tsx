"use client";

import { OrderWithItems } from "@/types/ProductVariants";
import { format } from "date-fns";
import { ColumnDef } from "@tanstack/react-table";
import { formatter } from "@/lib/utils";

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
    cell: ({ row }) => (
      <div className="flex items-center gap-x-2">
        {format(row.original.createdAt, "dd/MM/yyyy")}
      </div>
    ),
  },
  {
    accessorKey: "total",
    header: "Total",
    cell: ({ row }) => (
      <div className="flex items-center gap-x-2">
        {formatter.format(row.original.total / 100)}
      </div>
    ),
  },
];
