"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { useCartTrigger } from "@/hooks/use-cart";
import useCart from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";

const Cart = () => {
  const cartTrigger = useCartTrigger();
  const cart = useCart();
  const removeAll = useCart((state) => state.removeAll);

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
        <SheetFooter>
          <Button onClick={removeAll}>Clear</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
