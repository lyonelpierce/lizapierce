import CheckoutPageComponent from "@/components/CheckoutPageComponent";
import WidthWrapper from "@/components/WidthWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shopping Bag",
};

const Checkout = () => {
  return (
    <WidthWrapper className="h-dvh">
      <CheckoutPageComponent />
    </WidthWrapper>
  );
};

export default Checkout;
