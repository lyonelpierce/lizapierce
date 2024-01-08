"use client";

import Link from "next/link";
import Image from "next/image";

import useCart from "@/hooks/use-cart";
import { formatter, materialFormatter } from "@/lib/utils";
import { CartProduct } from "@/types/ProductVariants";

import { Trash } from "lucide-react";

interface CartItemProps {
  data: CartProduct;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(data);
  };

  return (
    <li className="flex text-xs w-full py-6 font-medium">
      <div className="w-1/5">
        <Image src="/" alt="" width={50} height={50} />
      </div>
      <div className="flex flex-col gap-1 w-4/5">
        <div>
          <h3 className="flex items-center justify-between text-base font-medium">
            <Link href={data.slug}>{data.name}</Link>
            <Trash
              className="w-4 h-4 cursor-pointer transition-transform ease-in-out hover:scale-125"
              onClick={onRemove}
            />
          </h3>
          <h4 className="text-sm">{formatter.format(data.price)}</h4>
        </div>
        <p>
          {data.size} -{" "}
          <span className="capitalize">{materialFormatter(data.material)}</span>{" "}
          - <span className="capitalize">{data.gem}</span>
          {data.material.includes("gold") && ` - ${data.karat}k`}
        </p>
      </div>
    </li>
  );
};

export default CartItem;
