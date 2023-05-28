<template>
  <div class="container bg-info text-center">
    <marquee behavior="" direction=""
      ><h3>This is Vue3 with Pinia state management.</h3></marquee>
    
    <h4 class="bg-dark text-warning">Cart items : {{ cart.ItemsCount }}</h4>
    <Card>
      <h4 class="bg-warning text-center">Add new item to the cart</h4>
      <AddItem />
    </Card>
    <Card>
      <h4 class="bg-dark text-warning">Cart items : {{ cart.ItemsCount }}</h4>
      <ItemList />
    </Card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AddItem from "../components/AddItem.vue";
import ItemList from "@/components/ItemList.vue";
import { useCartStore } from "../store/cart";
import Card from "../components/Card.vue";

export default defineComponent({
  components: { AddItem, ItemList, Card },
  setup() {
    const cart = useCartStore();
    return { cart };
  },
});
</script>
