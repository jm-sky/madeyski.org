<script setup lang="ts">
import type { Technology } from "../types/experience";
import { getPlural } from "../utils/getPlural";
import { CheckIcon, FilterIcon, FilterXIcon } from "lucide-vue-next";

const { technology, isSelected = false, dense = false } = defineProps<{
  technology: Technology
  isSelected?: boolean
  dense?: boolean
}>();

const emit = defineEmits<{
  toggle: [Technology]
}>();
</script>

<template>
  <li
    class="border border-muted-foreground/50 rounded-md bg-white/5 backdrop-blur-[1px] hover:bg-white/10 hover:shadow-lg transition-all duration-300"
    :class="[ { 'ring ring-sky-500/80': isSelected }, dense ? 'p-3' : 'p-4' ]"
  >
    <div class="mb-3">
      <div class="flex justify-between items-start mb-2">
        <h4 class="font-bold" :class="dense ? 'text-base' : 'text-lg'">{{ technology.name }}</h4>
        <button @click="emit('toggle', technology)" class="cursor-pointer p-1 rounded-md hover:bg-white/10">
          <FilterXIcon v-if="isSelected" class="size-4 text-primary" />
          <FilterIcon v-else class="size-4 text-muted-foreground" />
        </button>
      </div>

      <p v-if="!dense" class="text-muted-foreground mb-3" :class="dense ? 'text-xs' : 'text-sm'">
        {{ technology.layer }}
        {{ technology.category }}
      </p>

      <p class="text-muted-foreground bg-white/10 mb-3" :class="dense ? 'text-[10px]' : 'text-xs'">
        {{ technology.projectCount }}
        {{ getPlural(technology.projectCount ?? 0, "projekt", "projekty", "projektów") }}
      </p>

      <div v-if="technology.level" class="space-y-2">
        <div v-if="!dense" class="flex justify-between items-center">
          <span class="text-xs text-muted-foreground">
            Poziom umiejętności
          </span>
          <span class="text-xs text-muted-foreground">
            {{ technology.level }}/5
          </span>
        </div>
        <div class="w-full bg-white/80 rounded-full h-2">
          <div
            class="bg-sky-500 h-2 rounded-full transition-all duration-500"
            :style="{ width: `${(technology.level / 5) * 100}%` }"
          />
        </div>
      </div>
    </div>
  </li>
</template>
