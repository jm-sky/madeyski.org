<script setup lang="ts">
defineProps<{
  href: string;
}>();
</script>

<template>
<a
  class="text-blue-500/80 relative before:content-[''] before:block before:w-0 before:h-[1px] before:bg-blue-500 before:absolute before:bottom-0 before:left-0 before:transition-all before:duration-300 before:ease-in-out hover:before:w-full"
  :href
  rel="noopener noreferrer"
  target="_blank"
  >
    <slot />
  </a>
</template>
