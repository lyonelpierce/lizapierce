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
    <div className="bg-black pt-32 flex-grow h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative h-96">
          <Image
            src="/images/thankyou.jpg"
            alt="Thank You Image"
            fill
            className="object-cover aspect-video rounded-lg opacity-40"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h3 className="text-3xl font-semibold">Thank You!</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouComponent;
