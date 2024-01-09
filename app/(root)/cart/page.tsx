import CartPageComponent from "@/components/CartPageComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopping Bag",
};

const Cart = () => {
  return (
    <div className="h-screen pt-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 text-sm font-medium h-full w-full">
        <CartPageComponent />
      </div>
    </div>
  );
};

export default Cart;
