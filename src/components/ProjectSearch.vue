<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Project } from '../types/experience'
import ProjectCard from './ProjectCard.vue'

interface Props {
  projects: Project[]
}

const props = defineProps<Props>()

const searchTerm = ref('')

const filteredProjects = computed(() => {
  if (searchTerm.value.trim() === '') {
    return props.projects
  }

  const term = searchTerm.value.toLowerCase().trim()

  return props.projects.filter(project => {
    const searchableText = [
      project.name,
      project.description,
      project.company,
      project.myRole,
      ...(project.technologies || [])
    ].filter(Boolean).join(' ').toLowerCase()

    return searchableText.includes(term)
  })
})

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('pl-PL', {
    year: 'numeric',
    month: 'long'
  })
}
</script>

<template>
  <div>
    <!-- Search Input -->
    <div class="mb-8">
      <input
        v-model="searchTerm"
        class="w-full px-4 py-2 bg-white/50 border border-muted-foreground/50 rounded-lg text-muted-foreground placeholder-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent"
        placeholder="Szukaj projektów..."
        type="text"
      />
    </div>

    <!-- Project List -->
    <ul class="grid grid-cols-1 gap-6">
      <ProjectCard v-for="project in filteredProjects" :key="project.id" :project="project" />
    </ul>

    <!-- No Results Message -->
    <div v-if="filteredProjects.length === 0 && searchTerm.trim() !== ''" class="text-center py-8 text-white/60">
      <p>Nie znaleziono projektów spełniających kryteria wyszukiwania.</p>
    </div>
  </div>
</template>
