import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { CartItem } from './types';
import { getProductById } from '../apis';

interface State {
  cart: CartItem[];
  count: number;
}

interface Action {
  addItem: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
}

type CartStore = State & Action;

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],
      count: 0,
      addItem: async (productId, quantity = 1) => {
        const product = await getProductById(productId);

        const oldCart = get().cart;

        return set(() => {
          const newCart = product?.data
            ? oldCart.filter((cartItem) => cartItem.id !== productId).concat({ ...product?.data, quantity })
            : oldCart;

          return {
            cart: newCart,
            count: getCount(newCart),
          };
        });
      },
      removeItem: (productId) =>
        set(() => {
          const newCart = get().cart.filter((cartItem) => cartItem.id !== productId);

          return { cart: newCart, count: getCount(newCart) };
        }),
      clearCart: () => set({ cart: [], count: 0 }),
    }),
    { name: 'cart' }
  )
);

const getCount = (cart: CartItem[]) => cart.reduce((acc, cartItem) => cartItem.quantity + acc, 0);
