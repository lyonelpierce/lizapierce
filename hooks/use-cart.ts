import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "sonner";
import { CartProduct } from "@/types/ProductWithVariants";

interface CartStore {
  items: CartProduct[];
  addItem: (data: CartProduct) => void;
  removeItem: (data: CartProduct) => void;
  removeAll: () => void;
}

interface CartTrigger {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useCartTrigger = create<CartTrigger>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: CartProduct) => {
        const currentItems = get().items;
        const existingItem = currentItems.find(
          (item) =>
            item.id === data.id &&
            item.gem === data.gem &&
            item.material === data.material &&
            item.size === data.size &&
            item.slug === data.slug &&
            item.karat === data.karat
        );

        if (existingItem) {
          return toast("Item is already in cart.");
        }

        set({ items: [...get().items, data] });
        toast.success("Item added to cart.");
        useCartTrigger.getState().onOpen();
      },
      removeItem: (data: CartProduct) => {
        set({
          items: [
            ...get().items.filter(
              (item) =>
                item.id !== data.id ||
                item.gem !== data.gem ||
                item.material !== data.material ||
                item.size !== data.size ||
                item.slug !== data.slug ||
                item.karat !== data.karat
            ),
          ],
        });
        toast.success("Item removed from cart.");
      },
      removeAll: () => {
        set({ items: [] });
        toast.success("Cart cleared.");
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
