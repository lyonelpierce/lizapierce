"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useCartTrigger } from "@/hooks/use-cart";
import useCart from "@/hooks/use-cart";

const Cart = () => {
  const cartTrigger = useCartTrigger();
  const cart = useCart();

  return (
    <Sheet open={cartTrigger.isOpen} onOpenChange={cartTrigger.onClose}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-white">
            Cart ({cart.items.length})
          </SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
