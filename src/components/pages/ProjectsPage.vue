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
</script>

<template>
  <div class="space-y-16 text-justify">
    <ProjectSection
      v-model:search-term="searchTerm"
      v-model:selected-technologies="selectedTechnologies"
      :filtered-projects="filteredProjects"
      :available-technologies="availableTechnologies"
      :clear-filters="clearFilters"
    />

    <TechnologySection
      :grouped-technologies="groupedTechnologies"
      :sorted-layer-groups="sortedLayerGroups"
    />
  </div>
</template>
