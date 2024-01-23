import ImageComponent from "@/components/ImageComponent";
import WidthWrapper from "@/components/WidthWrapper";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us",
};

const AboutPage = () => {
  return (
    <div className="pt-20">
      <div className="relative h-[30rem]">
        <Image
          src="/images/partner.jpg"
          alt="About"
          fill
          className="object-cover absolute blur-[1px] opacity-60"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h2 className="text-4xl font-semibold">About Us</h2>
        </div>
      </div>
      <WidthWrapper>
        <div>asd</div>
      </WidthWrapper>
    </div>
  );
};

export default AboutPage;
