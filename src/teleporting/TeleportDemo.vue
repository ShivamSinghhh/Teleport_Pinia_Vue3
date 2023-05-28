<template>
  <div class="bg-success text-warning text-center">
    <button class="btn-danger" @click="toggleTeleport">Toggle Teleport</button>
    <teleport to="body" v-if="isTeleportVisible">
      <div class="teleport-content">
        <slot />
      </div>
    </teleport>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const isTeleportVisible = ref<boolean>(false);
    const toggleTeleport = () => {
      isTeleportVisible.value = !isTeleportVisible.value;
      console.log("Teleport is being called");
    };
    return { isTeleportVisible, toggleTeleport };
  },
});
</script>

<style scoped>
.teleport-content {
  position: absolute;
  top: 12%;
  left: 50%;
  transform: translate(-50%);
  padding: 1rem;
  background-color: whitesmoke;
  border: 1px solid aqua;
  border-radius: 1rem;
  box-shadow: 0, 2px, 4px rgba(0, 0, 0, 1);
}
</style>
