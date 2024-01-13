"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

import useCart from "@/hooks/use-cart";

const ThankYouComponent = () => {
  const searchParams = useSearchParams();
  const removeAll = useCart((state) => state.removeAll);

  useEffect(() => {
    if (searchParams.get("success")) {
      removeAll();
    }
  });

  return (
    <div className="relative h-96">
      <Image
        src="/images/thankyou.jpg"
        alt="Thank You Image"
        fill
        className="object-cover aspect-video rounded-lg opacity-40"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h2 className="text-3xl font-semibold">Thank You!</h2>
      </div>
    </div>
  );
};

export default ThankYouComponent;
