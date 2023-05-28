<template>
<h3>{{ greet }}</h3>
</template>

<script setup lang="ts">
import { computed } from 'vue';
const greet = computed(():string=> {return 'welcome'})
</script>