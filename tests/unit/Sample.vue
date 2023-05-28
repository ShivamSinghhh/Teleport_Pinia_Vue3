<template>
  <div>{{ data }}</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Sample",
  setup() {
    const data = ref<string>("Vue and TDD");
    return { data };
  },
});
</script>
