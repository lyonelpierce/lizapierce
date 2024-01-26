import { SignInButton } from "@clerk/nextjs";

import { CartItem } from "@/types/ProductVariants";

import { useCartTrigger } from "@/hooks/use-cart";

import { BadgeCheck } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import Checkout from "./Checkout";

const PopoverCheckout = ({ items }: { items: CartItem[] }) => {
  const cartTrigger = useCartTrigger();

  return (
    <Popover>
      <PopoverTrigger className="w-full">
        <div
          className={buttonVariants({
            variant: "white",
            className: "w-full gap-1",
          })}
          style={{ borderRadius: "100px" }}
        >
          <BadgeCheck className="w-4 h-4" />
          Continue to checkout
        </div>
      </PopoverTrigger>
      <PopoverContent
        className="flex flex-col gap-3 text-xs py-4 border-zinc-800 bg-black/10 backdrop-blur"
        sideOffset={12}
      >
        <div className="py-2">
          <p className="text-base font-semibold">Checkout</p>
          <p className="font-medium">How would you like to checkout?</p>
        </div>
        <Checkout items={items} text="Checkout as a guest" />
        <SignInButton mode="modal" redirectUrl="/checkout">
          <Button variant="white" onClick={cartTrigger.onClose}>
            Sign in to my account
          </Button>
        </SignInButton>
      </PopoverContent>
    </Popover>
  );
};

export default PopoverCheckout;
