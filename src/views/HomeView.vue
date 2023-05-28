<template>
  <div class="home">
    <PiniaApp />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PiniaApp from "./PiniaApp.vue";
export default defineComponent({
  name: "HomeView",
  components: {
    PiniaApp,
  },
});
</script>
