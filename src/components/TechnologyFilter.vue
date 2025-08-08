<script setup lang="ts">
import Select from './ui/select/Select.vue';
import { computed } from 'vue';

const selectedTechnologies = defineModel<string[]>('selectedTechnologies', { required: true });

const props = defineProps<{
  availableTechnologies: string[];
  hasActiveFilters: boolean;
}>();

// Transform technologies for select component
const technologyOptions = computed(() =>
  props.availableTechnologies.map(tech => ({
    value: tech,
    label: tech
  }))
);

</script>

<template>
  <div class="flex">
    <Select
      v-model="selectedTechnologies"
      :options="technologyOptions"
      placeholder="Wybierz technologie..."
      :multiple="true"
      :max-label-length="3"
      class="w-full"
    />
  </div>
</template>
