"use client";

import Link from "next/link";

import useCart from "@/hooks/use-cart";
import { formatter } from "@/lib/utils";
import { useCartTrigger } from "@/hooks/use-cart";

import CartItem from "@/components/CartItem";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ShoppingBag, BadgeCheck } from "lucide-react";
import { Separator } from "@/components/ui/separator";

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
        productIds: items.map((item) => item.id),
      }),
    });

    const data = await response.json();
    window.location = data.url;
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
          <div className="flex flex-col gap-4">
            <div className="space-y-4 w-full mb-2">
              <Separator className="bg-zinc-800" />
              <p className="flex justify-between text-white text-sm font-semibold w-full">
                <span>Subtotal:</span>
                {formatter.format(totalPrice)}
              </p>
            </div>
            <Link href="/cart" className="w-full">
              <Button
                className="bg-transparent rounded-full text-xs delay-150 w-full"
                variant="outline"
              >
                View cart
              </Button>
            </Link>
            <Button
              className="flex items-center gap-1 w-full"
              variant="white"
              onClick={onCheckout}
            >
              <BadgeCheck className="w-4 h-4" />
              Continue to checkout
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
