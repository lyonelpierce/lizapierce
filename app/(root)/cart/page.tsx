import CartPageComponent from "@/components/CartPageComponent";
import WidthWrapper from "@/components/WidthWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopping Bag",
};

const Cart = () => {
  return (
    <WidthWrapper>
      <CartPageComponent />
    </WidthWrapper>
  );
};

export default Cart;
