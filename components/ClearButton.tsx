"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

import { Button } from "./ui/button";
import { AiOutlineClear } from "react-icons/ai";
import { VariantOptions } from "@/types/ProductVariants";

const ClearButton = ({ variants }: { variants: VariantOptions[] }) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const variant = variants.find((variant: VariantOptions) =>
    variant.options.every(
      (option) => option.value === searchParams.get(option.name.toLowerCase())
    )
  );

  return (
    <Button
      onClick={() => router.replace(pathname)}
      variant="outline"
      className="bg-black rounded-full h-10 w-10 p-2.5"
      disabled={!variant}
    >
      <AiOutlineClear className="w-6 h-6" />
    </Button>
  );
};

export default ClearButton;
