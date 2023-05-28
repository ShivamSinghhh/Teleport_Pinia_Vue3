<template>
  <div class="bg-warning text-center">
    <h3>Cart Items</h3>
    <div v-for="item in cart.items" :key="item.name" class="row">
      <div class="col">
        <a :href="item.url">
          <h4>{{ item.name }}</h4></a
        >
      </div>
      <div class="cols col-auto">
        <button class="btn btn-danger" @click="cart.removeItem(item)">
          Remove
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useCartStore } from "../store/cart";
export default defineComponent({
  setup() {
    const cart = useCartStore();
    return { cart };
  },
});
</script>
