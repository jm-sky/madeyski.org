<script setup lang="ts">
import type { Technology } from '../../types/experience';
import ProjectSection from '../sections/ProjectSection.vue';
import TechnologySection from '../sections/TechnologySection.vue';
import { projects } from '../../data/projects';
import { baseTechnologies } from '../../data/technologies';
import {
  calculateTechnologyStats,
  groupTechnologiesByLayer,
  layerOrder
} from '../../utils/experience';
import { useProjectSearch } from '../../composables/useProjectSearch';
import { ref } from 'vue';
import { TooltipProvider } from '../ui/tooltip';

// Process data
const technologies: Technology[] = calculateTechnologyStats(projects, baseTechnologies);
const groupedTechnologies: Record<string, Technology[]> = groupTechnologiesByLayer(technologies);
const sortedLayerGroups: string[] = layerOrder.filter(layer => groupedTechnologies[layer]);

// Enhanced search functionality
const {
  searchTerm,
  selectedTechnologies,
  availableTechnologies,
  filteredProjects,
  clearFilters
} = useProjectSearch(projects);

// Dense mode toggle
const dense = ref(false);
</script>

<template>
  <TooltipProvider :delay-duration="200">
    <div class="space-y-16 text-justify">
      <ProjectSection
        v-model:search-term="searchTerm"
        v-model:selected-technologies="selectedTechnologies"
        v-model:dense="dense"
        :filtered-projects="filteredProjects"
        :available-technologies="availableTechnologies"
        :clear-filters="clearFilters"
      />

      <TechnologySection
        v-model:selected-technologies="selectedTechnologies"
        v-model:dense="dense"
        :grouped-technologies="groupedTechnologies"
        :sorted-layer-groups="sortedLayerGroups"
      />
    </div>
  </TooltipProvider>
</template>
