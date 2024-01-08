"use client";

import Link from "next/link";
import Image from "next/image";

import useCart, { useCartTrigger } from "@/hooks/use-cart";
import { formatter } from "@/lib/utils";

import { Trash } from "lucide-react";
import { Variant } from "@prisma/client";

interface CartItemProps {
  data: Variant & {
    name?: string;
    href?: string;
  };
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const cart = useCart();
  const cartTrigger = useCartTrigger();

  const onRemove = () => {
    cart.removeItem(data.id);
  };

  if (!data.href) return null;

  return (
    <li className="flex text-xs w-full py-6 font-medium">
      <div className="w-1/5">
        <Image src="/" alt="" width={50} height={50} />
      </div>
      <div className="flex flex-col gap-1 w-4/5">
        <div>
          <h3 className="flex items-center justify-between text-base font-medium">
            <Link href={data.href} onClick={cartTrigger.onClose}>
              {data.name}
            </Link>
            <Trash
              className="w-4 h-4 cursor-pointer transition-transform ease-in-out hover:scale-125"
              onClick={onRemove}
            />
          </h3>
          <h4 className="text-sm">{formatter.format(data.price)}</h4>
        </div>
        <p>{data.title}</p>
      </div>
    </li>
  );
};

export default CartItem;
