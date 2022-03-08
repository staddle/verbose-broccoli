import { defineStore } from "pinia";
import CatalogItem from "../models/CatalogItem"

export const useStore = defineStore({
  id: "cart",
  state: () => ({
    items: [],
  }),
  getters: {
    itemCount: (state) => state.items.length,
    totalPrice: (state) => state.items.reduce((total, item) => total + item.price, 0),
    specificItem: (state) => (id) => state.items.find(item => item.id === id)
  },
  actions: {
    add(item: CatalogItem) {
      this.items.push(item);
    },
    remove(item: CatalogItem) {
      this.items.splice(this.items.indexOf(item), 1);
    },
    removeById(id: number) {
      this.items.splice(this.items.findIndex(item => item.id === id), 1);
    },
  },
});
