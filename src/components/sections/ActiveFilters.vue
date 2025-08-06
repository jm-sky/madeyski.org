<script setup lang="ts">
import { TagsInput, TagsInputInput, TagsInputItem, TagsInputItemDelete, TagsInputItemText } from '@/components/ui/tags-input';

const selectedTechnologies = defineModel<string[]>('selectedTechnologies', { required: true });
</script>

<template>
  <div v-if="selectedTechnologies.length > 0" class="flex flex-col gap-2">
    <span class="text-sm text-muted-foreground">Wybrane technologie:</span>
    <TagsInput v-model="selectedTechnologies" class="w-full bg-transparent border-none px-0">
      <TagsInputItem
        v-for="tech in selectedTechnologies"
        :key="tech"
        :value="tech"
        class="p-1 h-6 bg-primary/10 text-primary/80 border-primary/20 hover:bg-primary/20"
      >
        <TagsInputItemText />
        <TagsInputItemDelete />
      </TagsInputItem>
    </TagsInput>
  </div>
</template>
