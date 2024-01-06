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
import { ShoppingBag, Trash, BadgeCheck } from "lucide-react";
import CartItem from "@/components/CartItem";
import { Separator } from "./ui/separator";
import { formatter } from "@/lib/utils";

const Cart = () => {
  const cartTrigger = useCartTrigger();
  const cart = useCart();
  const items = useCart((state) => state.items);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  const onCheckout = async () => {
    const response = await fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify({
        items,
      }),
    });
  };

  return (
    <Sheet open={cartTrigger.isOpen} onOpenChange={cartTrigger.onClose}>
      <SheetContent className="flex flex-col justify-between h-full">
        <SheetHeader>
          <SheetTitle className="flex gap-1 items-center text-white">
            <ShoppingBag className="w-5 h-5" />
            Your Cart ({cart.items.length})
          </SheetTitle>
        </SheetHeader>
        <div className="h-full w-full">
          {cart.items.length === 0 ? (
            <div className="text-sm flex items-center justify-center h-full">
              No Items added to the cart
            </div>
          ) : (
            <ul className="divide-y divide-zinc-800 h-full">
              {cart.items.map((item) => (
                <CartItem key={item.id} data={item} />
              ))}
            </ul>
          )}
        </div>
        {cart.items.length > 0 && (
          <>
            <div className="space-y-4 w-full mb-2">
              <Separator className="bg-zinc-800" />
              <p className="flex justify-between text-white text-sm font-semibold w-full">
                <span>Subtotal:</span>
                {formatter.format(totalPrice)}
              </p>
            </div>
            <SheetFooter>
              <Button
                className="flex items-center gap-1 w-full"
                variant="white"
                onClick={onCheckout}
              >
                <BadgeCheck className="w-4 h-4" />
                Continue to Checkout
              </Button>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
