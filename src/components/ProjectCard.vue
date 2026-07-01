<script setup lang="ts">
import { Calendar, X } from "@lucide/vue";
import type { Project } from "../types/experience";
import { formatDateRange } from "../utils/dateFormatter";
import { firstUp } from "../utils/firstUp";
import { getCategoryVariant, getStatusVariant } from "../utils/variants";
import ProjectCardBody from "./ProjectCardBody.vue";
import { Badge } from "./ui/badge";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "./ui/dialog";

const { project, dense = false } = defineProps<{
  project: Project;
  dense?: boolean;
}>();

const CARD_CLASS = "flex flex-col min-w-0 border border-border rounded-lg bg-white/30 hover:scale-102 hover:bg-white/50 hover:shadow-lg transition-all duration-300";
</script>

<template>
  <li v-if="!dense" :class="[CARD_CLASS, 'gap-4 pt-6 p-8']">
    <ProjectCardBody :project="project" />
  </li>

  <li v-else :class="[CARD_CLASS, 'gap-3 p-4']">
    <Dialog>
      <DialogTrigger as-child>
        <div class="flex flex-col gap-3 cursor-pointer text-left" role="button" tabindex="0">
          <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
            <h4 class="text-xl sm:text-2xl font-bold">{{ project.name }}</h4>
            <div class="flex items-center gap-2 flex-wrap flex-shrink-0">
              <Badge v-if="project.status" :variant="getStatusVariant(project.status)">{{ firstUp(project.status) }}</Badge>
              <Badge v-if="project.category" :variant="getCategoryVariant(project.category)">{{ project.category }}</Badge>
            </div>
          </div>

          <div class="flex items-center gap-2 text-sm text-muted-foreground min-w-0">
            <Calendar :size="16" />
            <span class="max-w-full truncate">{{ formatDateRange(project.dateStart, project.dateEnd, true) }}</span>
          </div>

          <div class="flex items-center flex-wrap gap-1">
            <Badge
              v-for="tech in project.technologies.slice(0, 6)"
              :key="tech"
              variant="info"
              class="text-[10px] px-2 py-0.5"
            >
              {{ tech }}
            </Badge>
            <span v-if="project.technologies.length > 6" class="text-xs text-muted-foreground">+{{ project.technologies.length - 6 }}</span>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle class="sr-only">{{ project.name }}</DialogTitle>
        <DialogDescription class="sr-only">{{ project.description }}</DialogDescription>
        <ProjectCardBody :project="project">
          <template #actions>
            <DialogClose class="rounded-sm text-muted-foreground opacity-70 transition-opacity hover:opacity-100 focus:outline-none">
              <X :size="18" />
              <span class="sr-only">Zamknij</span>
            </DialogClose>
          </template>
        </ProjectCardBody>
      </DialogContent>
    </Dialog>
  </li>
</template>
