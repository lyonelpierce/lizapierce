"use client";

import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { OrderShippingCardProps } from "@/types/ProductVariants";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import OrderShippingCard from "./OrderShippingCard";

const OrderDialog = ({
  open,
  setOpen,
  data,
}: {
  open: boolean;
  setOpen: () => void;
  data: OrderShippingCardProps;
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">
            Order Information
          </DialogTitle>
        </DialogHeader>
        <OrderShippingCard order={data} />
      </DialogContent>
    </Dialog>
  );
};

export default OrderDialog;
