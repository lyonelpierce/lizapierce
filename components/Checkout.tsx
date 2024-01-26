import { useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { CartItem } from "@/types/ProductVariants";

import { BadgeCheck } from "lucide-react";

const Checkout = ({ items, text }: { items: CartItem[]; text: string }) => {
  const { userId } = useAuth();

  const onCheckout = async () => {
    const response = await fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify({
        variants: items.map((item) => ({
          id: item.id,
          productId: item.productId,
        })),
      }),
    });

    const data = await response.json();
    window.location = data.url;
  };

  return (
    <Button
      className={cn(
        "w-full rounded-full text-xs",
        userId ? "bg-white text-black" : "bg-transparent text-white"
      )}
      variant="outline"
      onClick={onCheckout}
    >
      {userId ? (
        <>
          <BadgeCheck className="w-4 h-4 mr-1" />
          <p>{text}</p>
        </>
      ) : (
        <p>Continue as a guest</p>
      )}
    </Button>
  );
};

export default Checkout;
