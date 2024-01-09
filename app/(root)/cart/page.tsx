"use client";

import CartItem from "@/components/CartItem";
import CartSummary from "@/components/CartSummary";
import useCart from "@/hooks/use-cart";

const Cart = () => {
  const cart = useCart();
  const items = useCart((state) => state.items);

  return (
    <div className="h-screen pt-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 text-sm font-medium h-full w-full">
        <h2 className="text-2xl">Cart ({cart.items.length})</h2>
        <div className="flex">
          <div className="w-2/3">
            {cart.items.length === 0 ? (
              <div className="text-sm flex items-center justify-center h-full">
                No Items added to the cart
              </div>
            ) : (
              <ul className="divide-y divide-zinc-800 w-full h-full">
                {cart.items.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </ul>
            )}
          </div>
          <div className="w-1/3">
            <CartSummary items={items} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
