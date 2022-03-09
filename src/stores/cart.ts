import { defineStore } from "pinia";
import Cart from "@/models/Cart";
import type CatalogItem from "@/models/CatalogItem";

export const useStore = defineStore('cart', {
  state: () => ({
    cart: new Cart()
  }),
  getters: {
    itemCount: (state) => state.cart.itemCount,
    totalPrice: (state) => state.cart.totalPrice,
    specificItem: (state) => (id : string) => state.cart.specificItem(id),
    fullCart: (state) => state.cart.fullCart,
  },
  actions: {
    add(item: CatalogItem) {
      this.cart.add(item);
    },
    remove(item: CatalogItem) {
      this.cart.remove(item);
    },
    removeById(id: string) {
      this.cart.removeById(id);
    },
  },
});
