<script setup lang="ts">
import type { Project } from '../../types/experience';
import ProjectCard from '../ProjectCard.vue';
import InputClearable from '../ui/input/InputClearable.vue';
import Button from '../ui/button/Button.vue';
import { X } from 'lucide-vue-next';
import { computed } from 'vue';
import TechnologyFilter from '../TechnologyFilter.vue';
import ActiveFilters from './ActiveFilters.vue';
import { getPlural } from '@/utils/getPlural';

const props = defineProps<{
  filteredProjects: Project[];
  availableTechnologies: string[];
  clearFilters: () => void;
}>();

const searchTerm = defineModel<string>('searchTerm', { required: true });
const selectedTechnologies = defineModel<string[]>('selectedTechnologies', { required: true });
const dense = defineModel<boolean>('dense', { required: true });

// Check if any filters are active
const hasActiveFilters = computed(() =>
  searchTerm.value.trim() !== '' || selectedTechnologies.value.length > 0
);
</script>

<template>
  <section>
    <div class="mb-6 flex items-center justify-between gap-4">
      <h2 class="text-2xl font-bold">Projekty</h2>
      <label class="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer select-none">
        <input
          type="checkbox"
          class="size-4 accent-sky-600 cursor-pointer"
          v-model="dense"
        />
        Dense mode
      </label>
    </div>
    <div>
      <!-- Filter Controls -->
      <div class="mb-8 space-y-4">
        <div class="flex flex-col sm:flex-row sm:items-center gap-4">
          <InputClearable
            v-model="searchTerm"
            placeholder="Szukaj projektów..."
            class="w-full"
          />

          <div class="flex flex-col sm:flex-row sm:items-center gap-4">
            <TechnologyFilter
              v-model:selected-technologies="selectedTechnologies"
              :has-active-filters
              :clear-filters="clearFilters"
              :available-technologies="availableTechnologies"
            />

            <div class="flex items-end">
              <Button
                v-if="hasActiveFilters"
                variant="outline"
                size="default"
                @click="clearFilters"
              >
                <X class="size-4" />
                Wyczyść filtry
              </Button>
            </div>
          </div>
        </div>

        <!-- Active Filters Display -->
        <ActiveFilters
          v-model:selected-technologies="selectedTechnologies"
        />
      </div>

      <!-- Results Summary -->
      <div v-if="hasActiveFilters" class="mb-4 text-sm text-muted-foreground">
        Znaleziono {{ filteredProjects.length }} {{ getPlural(filteredProjects.length, 'projekt', 'projekty', 'projektów') }}
      </div>

      <!-- Project List with Animation -->
      <TransitionGroup
        name="project"
        tag="ul"
        :class="[
          'grid gap-6',
          dense ? 'grid-cols-2' : 'grid-cols-1'
        ]"
      >
        <ProjectCard
          v-for="project in props.filteredProjects"
          :key="project.id"
          :project="project"
          :dense="dense"
          class="transition-all duration-300 hover:scale-[1.02]"
        />
      </TransitionGroup>

      <!-- No Results Message -->
      <div v-if="props.filteredProjects.length === 0 && hasActiveFilters" class="text-center py-8">
        <p class="text-muted-foreground">Nie znaleziono projektów spełniających kryteria wyszukiwania.</p>
        <Button
          variant="outline"
          class="mt-4"
          @click="clearFilters"
        >
          <X class="size-4" />
          Wyczyść filtry
        </Button>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Project list animations */
.project-enter-active,
.project-leave-active {
  transition: all 0.5s ease;
}

.project-enter-from {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
}

.project-leave-to {
  opacity: 0;
  transform: translateY(-30px) scale(0.95);
}

.project-move {
  transition: transform 0.5s ease;
}

/* Stagger animation for initial load */
.project-enter-active {
  transition-delay: calc(var(--enter-delay, 0) * 0.1s);
}
</style>
