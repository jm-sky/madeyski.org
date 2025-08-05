<script setup lang="ts">
defineProps<{
  tech?: string;
}>();
</script>

<template>
  <span class="bg-blue-400/20 text-blue-700/80 px-2 py-1 rounded text-xs">
    <slot>{{ tech }}</slot>
  </span>
</template>
