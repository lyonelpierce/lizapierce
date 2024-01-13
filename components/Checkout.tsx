"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { CartItem } from "@/types/ProductVariants";
import { BadgeCheck } from "lucide-react";

const Checkout = ({ items }: { items: CartItem[] }) => {
  const [isLoading, setIsLoading] = useState(false);

  const onCheckout = async () => {
    setIsLoading(true);
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
    <Button
      className="flex items-center gap-1 w-full"
      variant="white"
      onClick={onCheckout}
    >
      <BadgeCheck className="w-4 h-4" />
      Continue to checkout
    </Button>
  );
};

export default Checkout;
