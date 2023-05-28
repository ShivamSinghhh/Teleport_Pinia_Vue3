<template>
  <div>
    <h1>Vue3 app</h1>
    <h2>Count: {{ count }}</h2>
    <button @click="increment">Increment</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const count = ref<number>(10);
    const increment = () => count.value++;

    return { count, increment };
  },
});
</script>
