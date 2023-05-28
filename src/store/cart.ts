// npm install pinia
import { defineStore } from "pinia";

export type Item = { name: string; url: string };

export const useCartStore = defineStore({
  id: "cart",
  state: () => ({
    items: [] as Item[],
  }),

  getters: {
    ItemsCount: (state: any) => state.items.length,
  },

  actions: {
    // CRUD function with axios
    addItem(item: Item) {
      // axios.post(url,Item).then(response => response.data).catch(error =>console.log(error))
      this.items.push(item);
      console.log(`new item ${item} is added`);
    },
    removeItem(item: Item) {
      // axios.delete(url,Item.name).then(response => console.log(response.data))
      const it = this.items.findIndex((s: any) => s.name === item.name);
      if (it >= -1) this.items.splice(it, 1);
    },
  },
});
