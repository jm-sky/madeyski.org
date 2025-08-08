<script setup lang="ts">
import { Building2, Calendar, User } from "lucide-vue-next";
import type {
  Project,
  ProjectCategory,
  ProjectStatus,
} from "../types/experience";
import { formatDateRange } from "../utils/dateFormatter";
import { firstUp } from "../utils/firstUp";
import { getPlural } from "../utils/getPlural";
import { getStatusVariant, getCategoryVariant } from "../utils/variants";
import { Badge } from "./ui/badge";
import Link from "./ui/Link.vue";

const { project, dense = false } = defineProps<{
  project: Project;
  dense?: boolean;
}>();
</script>

<template>
  <li
    class="flex flex-col border border-border rounded-lg bg-white/30 hover:scale-102 hover:bg-white/50 hover:shadow-lg transition-all duration-300"
    :class="dense ? 'gap-3 p-4' : 'gap-4 pt-6 p-8'"
  >
    <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
      <h4 class="text-xl sm:text-2xl font-bold" :id="project.id">{{ project.name }}</h4>
      <div class="flex items-center gap-2 flex-shrink-0">
        <Badge v-if="project.status" :variant="getStatusVariant(project.status)">{{ firstUp(project.status) }}</Badge>
        <Badge v-if="project.category" :variant="getCategoryVariant(project.category)">{{ project.category }}</Badge>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] text-sm text-muted-foreground" :class="dense ? 'gap-2' : 'gap-4'">
      <div class="flex items-center gap-2 min-w-46">
        <Calendar :size="16" />
        <span class="max-w-full truncate">{{ formatDateRange(project.dateStart, project.dateEnd, true) }}</span>
      </div>
      <div v-if="!dense" class="flex items-center md:justify-center gap-2 whitespace-nowrap">
        <User :size="16" />
        <span class="max-w-full truncate">{{ project.myRole }}</span>
      </div>
      <div v-if="!dense" class="flex items-center gap-2">
        <Building2 :size="16" />
        <span class="max-w-full truncate">{{ project.company ?? "Freelance" }}</span>
      </div>
    </div>

    <p v-if="!dense" class="text-muted-foreground leading-relaxed">{{ project.description }}</p>

    <div v-if="!dense && project?.achievements?.length">
      <h5 class="font-semibold text-green-700 mb-2">Osiągnięcia:</h5>
      <ul class="list-disc list-inside text-sm text-muted-foreground space-y-1">
        <li v-for="achievement in project.achievements" :key="achievement">{{ achievement }}</li>
      </ul>
    </div>

    <div v-if="!dense && project?.challenges?.length">
      <h5 class="font-semibold text-orange-700 mb-2">Wyzwania:</h5>
      <ul class="list-disc list-inside text-sm text-muted-foreground space-y-1">
        <li v-for="challenge in project.challenges" :key="challenge">{{ challenge }}</li>
      </ul>
    </div>

    <div v-if="!dense && (project.clients || project.team || project.links)"  class="flex flex-wrap gap-4 text-sm text-muted-foreground">
      <div v-if="project.clients && project.clients.length > 0">
        <span class="font-semibold">Klienci:</span>
        {{ project.clients.join(", ") }}
      </div>
      <div v-if="project.team && project.team.length > 0">
        <span class="font-semibold">Zespół:</span> {{ project.team.length }} {{ getPlural(project.team.length, "osoba", "osoby", "osób") }}
      </div>
      <div v-if="project.links">
        <div class="flex flex-wrap gap-2">
          <span class="font-semibold">Linki:</span>
          <Link v-if="project.links.github" :href="project.links.github">GitHub</Link>
          <Link v-if="project.links.demo" :href="project.links.demo">Demo</Link>
          <Link v-if="project.links.documentation" :href="project.links.documentation">Dokumentacja</Link>
        </div>
      </div>
    </div>

    <div class="text-sm">
      <span class="font-semibold text-muted-foreground">Technologie:</span>
      <div class="flex items-center flex-wrap mt-2" :class="dense ? 'gap-1' : 'gap-2'">
        <Badge
          v-for="tech in (dense ? project.technologies.slice(0, 6) : project.technologies)"
          :key="tech"
          variant="info"
          :class="dense ? 'text-[10px] px-2 py-0.5' : ''"
        >
          {{ tech }}
        </Badge>
        <span v-if="dense && project.technologies.length > 6" class="text-xs text-muted-foreground">+{{ project.technologies.length - 6 }}</span>
      </div>
    </div>
  </li>
</template>
