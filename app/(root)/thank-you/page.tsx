import { Metadata } from "next";

import ThankYouComponent from "@/components/ThankYouComponent";

export const metadata: Metadata = {
  title: "Thank You",
};

const ThankYou = () => {
  return <ThankYouComponent />;
};

export default ThankYou;
