import Image from "next/image";
import { cn } from "@/lib/utils";

const ImageComponent = ({
  image,
  text,
  className,
}: {
  image: string;
  text: string;
  className?: string;
}) => {
  return (
    <div className="bg-black">
      <div className={cn("max-w-7xl mx-auto", className)}>
        <div className="relative w-full h-96">
          <Image
            src={image}
            alt="Woman in beach"
            fill
            className="rounded-3xl object-cover opacity-40"
          />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 md:w-1/3">
            <h2 className="text-4xl md:text-5xl text-center capitalize">
              {text}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageComponent;
