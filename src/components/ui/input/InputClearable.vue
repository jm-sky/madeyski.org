<script setup lang="ts">
import { X } from 'lucide-vue-next';
import Button from '../button/Button.vue';
import Input from './Input.vue';

const modelValue = defineModel<string | number>('modelValue', { required: true });

const clearSearch = () => {
  modelValue.value = '';
};
</script>

<template>
  <div class="relative">
    <Input
      v-model="modelValue"
      placeholder="Szukaj projektów..."
      class="pr-10"
    />
    <Button
      v-if="modelValue.toString().trim() !== ''"
      variant="ghost"
      size="icon"
      class="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 hover:bg-white/20 transition-all duration-200"
      @click="clearSearch"
    >
      <X class="size-4" />
    </Button>
  </div>
</template>
