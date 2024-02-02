"use client";

import { useState } from "react";

import {
  OrderShippingCardProps,
  OrderWithItems,
} from "@/types/ProductVariants";

import { Eye } from "lucide-react";
import OrderDialog from "./OrderDialog";

const CellActions = ({ data }: { data: OrderShippingCardProps }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <OrderDialog open={open} setOpen={() => setOpen(!open)} data={data} />
      <div className="hidden sm:flex items-center gap-x-2">{data.id}</div>
      <Eye className="w-4 h-4 flex sm:hidden" onClick={() => setOpen(true)} />
    </>
  );
};

export default CellActions;
