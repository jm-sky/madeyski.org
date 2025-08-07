<script setup lang="ts">
import type { Technology } from '../../types/experience';
import TechnologyCard from '../TechnologyCard.vue';

defineProps<{
  groupedTechnologies: Record<string, Technology[]>;
  sortedLayerGroups: string[];
}>();

const selectedTechnologies = defineModel<string[]>('selectedTechnologies', { required: true });

const toggleTechnology = (technology: Technology) => {
  if (selectedTechnologies.value.includes(technology.name)) {
    selectedTechnologies.value = selectedTechnologies.value.filter(t => t !== technology.name);
  } else {
    selectedTechnologies.value.push(technology.name);
  }
};
</script>

<template>
  <section>
    <h2 class="text-2xl font-bold mb-8">Technologie</h2>
    <div class="space-y-6">
      <div
        v-for="layer in sortedLayerGroups"
        :key="layer"
      >
        <h3 class="text-xl font-bold mb-6 text-sky-600 border-b border-sky-600/30 pb-2">{{ layer }}</h3>
        <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <TechnologyCard
            v-for="technology in groupedTechnologies[layer]"
            :key="technology.name"
            :technology="technology"
            :is-selected="selectedTechnologies.includes(technology.name)"
            @toggle="toggleTechnology(technology)"
          />
        </ul>
      </div>
    </div>
  </section>
</template>
