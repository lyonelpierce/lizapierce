"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";

import useCart from "@/hooks/use-cart";
import { useCartTrigger } from "@/hooks/use-cart";

import CartItem from "@/components/CartItem";
import CartSummary from "@/components/CartSummary";
import Checkout from "@/components/Checkout";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ShoppingBag } from "lucide-react";
import PopoverCheckout from "./PopoverCheckout";

const Cart = () => {
  const [isMounted, setIsMounted] = useState(false);

  const { userId } = useAuth();
  const cartTrigger = useCartTrigger();
  const cart = useCart();
  const items = useCart((state) => state.items);

  useEffect(() => setIsMounted(true), []);

  if (!isMounted) return null;

  return (
    <Sheet open={cartTrigger.isOpen} onOpenChange={cartTrigger.onClose}>
      <SheetContent className="flex flex-col justify-between h-full">
        <SheetHeader>
          <SheetTitle className="flex gap-1 items-center text-white font-medium text-base">
            <ShoppingBag className="w-5 h-5" />
            Shopping Bag ({cart.items.length})
          </SheetTitle>
        </SheetHeader>
        <div className="h-full w-full">
          {cart.items.length === 0 ? (
            <div className="text-sm flex items-center justify-center h-full">
              No items added to your shopping bag.
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
            <CartSummary items={items} />
            {userId ? (
              <Checkout items={items} />
            ) : (
              <PopoverCheckout items={items} />
            )}
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
