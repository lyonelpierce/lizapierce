"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { useCartTrigger } from "@/hooks/use-cart";
import useCart from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Trash } from "lucide-react";
import CartItem from "@/components/CartItem";

const Cart = () => {
  const cartTrigger = useCartTrigger();
  const cart = useCart();
  const removeAll = useCart((state) => state.removeAll);
  console.log(cart.items);
  return (
    <Sheet open={cartTrigger.isOpen} onOpenChange={cartTrigger.onClose}>
      <SheetContent className="h-full">
        <SheetHeader>
          <SheetTitle className="flex gap-1 items-center text-white">
            <ShoppingBag className="w-5 h-5" />
            Your Cart ({cart.items.length})
          </SheetTitle>
        </SheetHeader>
        {cart.items.length === 0 ? (
          <div className="text-sm flex items-center justify-center h-full">
            No Items added to the cart
          </div>
        ) : (
          <ul className="divide-y divide-zinc-800">
            {cart.items.map((item) => (
              <CartItem key={item.id} data={item} />
            ))}
          </ul>
        )}
        <SheetFooter>
          <Button
            className="flex items-center gap-1 w-full"
            variant="white"
            onClick={removeAll}
          >
            <Trash className="w-4 h-4" />
            Clear
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
