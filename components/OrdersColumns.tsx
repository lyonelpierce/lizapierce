"use client";

import { format } from "date-fns";
import { ColumnDef } from "@tanstack/react-table";

import { formatter } from "@/lib/utils";

import { OrderShippingCardProps } from "@/types/ProductVariants";

import CellActions from "@/components/CellActions";

export const columns: ColumnDef<OrderShippingCardProps>[] = [
  {
    accessorKey: "id",
    header: () => (
      <>
        <div className="hidden sm:flex">ID</div>
        <div className="sm:hidden flex">Action</div>
      </>
    ),
    cell: ({ row }) => <CellActions data={row.original} />,
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
    accessorKey: "orderItems",
    header: "No. items",
    cell: ({ row }) => (
      <div className="flex items-center gap-x-2">
        {row.original.orderItems.length}
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
