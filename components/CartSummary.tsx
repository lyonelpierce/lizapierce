import { formatter } from "@/lib/utils";
import { Separator } from "./ui/separator";
import { CartItem } from "@/types/ProductVariants";

const CartSummary = ({ items }: { items: CartItem[] }) => {
  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  return (
    <div className="space-y-4 w-full mb-2">
      <Separator className="bg-zinc-800" />
      <p className="flex justify-between text-white text-sm font-semibold w-full">
        <span>Subtotal:</span>
        {formatter.format(totalPrice)}
      </p>
    </div>
  );
};

export default CartSummary;
