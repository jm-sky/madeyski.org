<script setup lang="ts">
import { Building2, Calendar, User } from "@lucide/vue";
import type { Project } from "../types/experience";
import { formatDateRange } from "../utils/dateFormatter";
import { firstUp } from "../utils/firstUp";
import { getPlural } from "../utils/getPlural";
import { getCategoryDescription, getCategoryVariant, getStatusDescription, getStatusVariant } from "../utils/variants";
import { Badge } from "./ui/badge";
import Link from "./ui/Link.vue";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const { project } = defineProps<{
  project: Project;
}>();

const DATE_RANGE_TOOLTIP = "Okres realizacji projektu";
const ROLE_TOOLTIP = "Moja rola w projekcie";
const COMPANY_TOOLTIP = "Firma lub kontekst, w ramach którego zrealizowano projekt";
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
      <h4
        class="text-xl sm:text-2xl font-bold"
        :class="{ 'order-2 sm:order-none': !!$slots.actions }"
        :id="project.id"
      >{{ project.name }}</h4>
      <div
        class="flex items-center gap-2 flex-shrink-0"
        :class="{ 'order-1 sm:order-none justify-between w-full sm:w-auto': !!$slots.actions }"
      >
        <div class="flex items-center gap-2 flex-wrap">
          <Tooltip v-if="project.status">
            <TooltipTrigger as-child>
              <Badge :variant="getStatusVariant(project.status)">{{ firstUp(project.status) }}</Badge>
            </TooltipTrigger>
            <TooltipContent>{{ getStatusDescription(project.status) }}</TooltipContent>
          </Tooltip>
          <Tooltip v-if="project.category">
            <TooltipTrigger as-child>
              <Badge :variant="getCategoryVariant(project.category)">{{ project.category }}</Badge>
            </TooltipTrigger>
            <TooltipContent>{{ getCategoryDescription(project.category) }}</TooltipContent>
          </Tooltip>
        </div>
        <slot name="actions" />
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] text-sm text-muted-foreground gap-4">
      <Tooltip>
        <TooltipTrigger as-child>
          <div class="flex items-center gap-2 min-w-0">
            <Calendar :size="16" class="flex-shrink-0" />
            <span class="max-w-full truncate">{{ formatDateRange(project.dateStart, project.dateEnd, true) }}</span>
          </div>
        </TooltipTrigger>
        <TooltipContent>{{ DATE_RANGE_TOOLTIP }}</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger as-child>
          <div class="flex items-center md:justify-center gap-2 min-w-0">
            <User :size="16" class="flex-shrink-0" />
            <span class="max-w-full truncate">{{ project.myRole }}</span>
          </div>
        </TooltipTrigger>
        <TooltipContent>{{ ROLE_TOOLTIP }}</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger as-child>
          <div class="flex items-center gap-2 min-w-0">
            <Building2 :size="16" class="flex-shrink-0" />
            <span class="max-w-full truncate">{{ project.company ?? "Freelance" }}</span>
          </div>
        </TooltipTrigger>
        <TooltipContent>{{ COMPANY_TOOLTIP }}</TooltipContent>
      </Tooltip>
    </div>

    <p class="text-muted-foreground leading-relaxed">{{ project.description }}</p>

    <div v-if="project?.subProjects?.length" class="border-l-4 border-blue-200 pl-4 bg-blue-50/50 rounded-r-lg py-3">
      <h5 class="font-semibold text-blue-900/80 mb-2">Realizacje:</h5>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div
          v-for="subProject in project.subProjects"
          :key="subProject.name"
          class="inline-flex items-center gap-1"
        >
          <Link
            :href="subProject.url"
            class="text-sm font-medium text-blue-600 hover:text-blue-800"
          >
          {{ subProject.name }}
          </Link>
        </div>
      </div>
    </div>

    <div v-if="project?.achievements?.length">
      <h5 class="font-semibold text-green-700 mb-2">Osiągnięcia:</h5>
      <ul class="list-disc list-inside text-sm text-muted-foreground space-y-1">
        <li v-for="achievement in project.achievements" :key="achievement">{{ achievement }}</li>
      </ul>
    </div>

    <div v-if="project?.challenges?.length">
      <h5 class="font-semibold text-orange-700 mb-2">Wyzwania:</h5>
      <ul class="list-disc list-inside text-sm text-muted-foreground space-y-1">
        <li v-for="challenge in project.challenges" :key="challenge">{{ challenge }}</li>
      </ul>
    </div>

    <div v-if="project.clients || project.team || project.links" class="flex flex-wrap gap-4 text-sm text-muted-foreground">
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
      <div class="flex items-center flex-wrap mt-2 gap-2">
        <Badge
          v-for="tech in project.technologies"
          :key="tech"
          variant="info"
        >
          {{ tech }}
        </Badge>
      </div>
    </div>
  </div>
</template>
