"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

import useCart from "@/hooks/use-cart";

const ThankYou = () => {
  const searchParams = useSearchParams();
  const removeAll = useCart((state) => state.removeAll);

  useEffect(() => {
    if (searchParams.get("success")) {
      removeAll();
    }
  });

  return <div>ThankYou</div>;
};

export default ThankYou;
