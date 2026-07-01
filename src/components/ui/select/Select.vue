<script setup lang="ts">
import {
  SelectContent,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectPortal,
  SelectRoot,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectTrigger,
  SelectValue,
  SelectViewport
} from 'reka-ui'
import { ChevronDown, ChevronUp, Check } from '@lucide/vue'
import { cn } from "@/lib/utils"
import { computed, type HTMLAttributes } from "vue"

defineOptions({
  inheritAttrs: false
})

const props = defineProps<{
  placeholder?: string
  class?: HTMLAttributes["class"]
  options: { value: string; label: string }[]
  multiple?: boolean
  maxLabelLength?: number
}>()

const modelValue = defineModel<string | string[]>({ required: true })

const remainingItems = computed(() => {
  if (!modelValue.value) return 0
  if (!modelValue.value.length) return 0

  const flatModelValue = [modelValue.value].flat()
  const maxLabelLength = props.maxLabelLength ?? 10
  return flatModelValue.length - maxLabelLength
})

const selectedLabel = computed(() => {
  if (!modelValue.value) return props.placeholder
  if (!modelValue.value.length) return props.placeholder

  const flatModelValue = [modelValue.value].flat()
  const maxLabelLength = props.maxLabelLength ?? 10
  const items = flatModelValue.slice(0, maxLabelLength).join?.(', ')

  return items
})
</script>

<template>
  <SelectRoot v-model="modelValue" :multiple="multiple">
    <SelectTrigger
      :class="cn(
        'flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-white/30 dark:bg-input/30 px-3 py-2 text-sm shadow-xs placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
        props.class,
      )"
      v-bind="$attrs"
    >
      <SelectValue :placeholder="placeholder">
        {{ selectedLabel }}
        <span v-if="remainingItems > 0" class="text-xs text-muted-foreground">+{{ remainingItems }}</span>
      </SelectValue>
      <ChevronDown class="size-4 opacity-50" />
    </SelectTrigger>

    <SelectPortal>
      <SelectContent
        class="relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
        position="popper"
        :side-offset="4"
      >
        <SelectScrollUpButton class="flex cursor-default items-center justify-center py-1">
          <ChevronUp class="size-4" />
        </SelectScrollUpButton>

        <SelectViewport
          class="p-1"
          :style="{
            '--radix-select-content-transform-origin': 'var(--radix-popper-transform-origin)',
            '--radix-select-content-available-width': 'var(--radix-popper-available-width)',
            '--radix-select-content-available-height': 'var(--radix-popper-available-height)',
            '--radix-select-trigger-width': 'var(--radix-popper-anchor-width)',
            '--radix-select-trigger-height': 'var(--radix-popper-anchor-height)',
          }"
        >
          <SelectItem
            v-for="option in options"
            :key="option.value"
            :value="option.value"
            class="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
          >
            <span class="absolute right-2 flex size-3.5 items-center justify-center">
              <SelectItemIndicator>
                <Check class="size-4" />
              </SelectItemIndicator>
            </span>
            <SelectItemText>
              {{ option.label }}
            </SelectItemText>
          </SelectItem>
        </SelectViewport>

        <SelectScrollDownButton class="flex cursor-default items-center justify-center py-1">
          <ChevronDown class="size-4" />
        </SelectScrollDownButton>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>

<style scoped>
[data-placeholder] {
  color: var(--color-muted-foreground);
}
</style>
