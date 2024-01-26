"use client";

import { SignInButton, useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import useCart, { useCartTrigger } from "@/hooks/use-cart";

import CartItem from "@/components/CartItem";
import Checkout from "@/components/Checkout";
import Heading from "@/components/ui/Heading";
import CartSummary from "@/components/CartSummary";
import SafePayment from "@/components/SafePayment";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CheckoutPageComponent = () => {
  const { userId } = useAuth();
  const cartTrigger = useCartTrigger();

  const cart = useCart();
  const items = useCart((state) => state.items);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Heading text="Checkout" cart={cart.items.length} />
      <div className="flex flex-col md:flex-row gap-5">
        <div className={cn(items.length !== 0 ? "w-full md:w-2/3" : "w-full")}>
          {cart.items.length === 0 ? (
            <div className="text-sm flex items-center justify-center h-screen">
              No items added to your shopping bag.
            </div>
          ) : (
            <ul className="divide-y divide-zinc-800 w-full h-full">
              {cart.items.map((item) => (
                <CartItem key={item.id} data={item} />
              ))}
            </ul>
          )}
        </div>
        {items.length !== 0 && (
          <Card className="w-full md:w-1/3 h-full pb-4 px-2">
            <CardHeader>Order Summary</CardHeader>
            <CardContent>
              <CartSummary items={items} />
            </CardContent>
            {!userId ? (
              <div className="flex flex-col gap-2 w-full p-4">
                <Checkout items={items} />
                <SignInButton mode="modal" redirectUrl="/checkout">
                  <Button
                    variant="white"
                    className="w-full"
                    onClick={cartTrigger.onClose}
                  >
                    Sign in to my account
                  </Button>
                </SignInButton>
              </div>
            ) : (
              <div className="px-4">
                <Checkout items={items} />
              </div>
            )}
            <div className="pt-4">
              <SafePayment />
            </div>
          </Card>
        )}
      </div>
    </>
  );
};

export default CheckoutPageComponent;
