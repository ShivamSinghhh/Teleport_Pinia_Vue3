<template>
  <div class="bg-warning text-center">
    <h3>Add New Product</h3>
    <form class="form" @submit.prevent="submitData">
      <div class="mb-3">
        <label for="" class="form-label"> Name </label>
        <input class="form-control" type="text" v-model="inputs.name" />
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Url</label>
        <input type="text" class="form-control" v-model="inputs.url" />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useCartStore } from "@/store/cart";

export default defineComponent({
  setup() {
    const cart = useCartStore();
    const inputs = reactive({
      name: "",
      url: "",
    });
    const submitData = () => {
      cart.addItem({ ...inputs });
      inputs.name = "";
      inputs.url = "";
      alert("one record added ");
    };
    return { inputs, submitData };
  },
});
</script>
