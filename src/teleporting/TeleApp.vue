<template>
  <div class="bg-light text-center">
    <h3>Teleport Example</h3>
    <TeleportDemo>
      <h3 class="bg-dark text-warning rounded-2 mb-0">
        <marquee>Stock market is raising up!</marquee>
      </h3>
    </TeleportDemo>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TeleportDemo from "./TeleportDemo.vue";

export default defineComponent({
  components: { TeleportDemo },
});
</script>
