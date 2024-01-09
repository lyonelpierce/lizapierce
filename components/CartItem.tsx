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
    url?: string;
    image?: string;
  };
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const cart = useCart();
  const cartTrigger = useCartTrigger();

  const onRemove = () => {
    cart.removeItem(data.id);
  };

  if (!data.url || !data.image || !data.name) return null;

  return (
    <li className="flex gap-2 text-xs w-full py-6 font-medium">
      <div className="border border-zinc-800 rounded-lg overflow-hidden w-24 h-fit">
        <Image
          src={data.image}
          alt={data.name}
          width={800}
          height={800}
          className="object-cover aspect-square"
        />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <div>
          <h3 className="flex items-center justify-between text-base font-medium">
            <Link
              href={data.url}
              className="cursor-pointer"
              onClick={cartTrigger.onClose}
            >
              {data.name}
            </Link>
            <Trash
              className="w-4 h-4 cursor-pointer transition-transform ease-in-out hover:scale-125"
              onClick={onRemove}
            />
          </h3>
          <h4 className="text-sm">{formatter.format(data.price)}</h4>
        </div>
        <p className="text-zinc-500">{data.title}</p>
      </div>
    </li>
  );
};

export default CartItem;
