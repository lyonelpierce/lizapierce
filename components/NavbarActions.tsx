"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import useCart from "@/hooks/use-cart";
import { useCartTrigger } from "@/hooks/use-cart";

import { ShoppingBag } from "lucide-react";

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  const cartTrigger = useCartTrigger();
  const cart = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const handleClick = () => {
    if (pathname === "/cart") {
      return;
    }
    cartTrigger.onOpen();
  };

  return (
    <div
      className="flex gap-1 cursor-pointer transition-transform ease-in-out hover:transform hover:scale-125"
      onClick={handleClick}
    >
      <ShoppingBag className="w-4 h-4" />
      <p className="hidden sm:block">{cart.items.length}</p>
    </div>
  );
};

export default NavbarActions;
