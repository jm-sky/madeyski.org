import { cva } from "class-variance-authority"
import type { VariantProps } from "class-variance-authority"

export { default as Badge } from "./Badge.vue"

export const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        danger: "border-transparent bg-danger text-danger-foreground [a&]:hover:bg-danger/90 focus-visible:ring-danger/20 dark:focus-visible:ring-danger/40",
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        muted: "border-transparent bg-muted-foreground/20 text-muted-foreground [a&]:hover:bg-muted/90",
        info: "border-transparent bg-info/20 text-info-darker/80 [a&]:hover:bg-info/90",
        success: "border-transparent bg-success/20 text-success-darker/80 [a&]:hover:bg-success/90",
        warning: "border-transparent bg-warning/20 text-warning-darker/80 [a&]:hover:bg-warning/90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)
export type BadgeVariants = VariantProps<typeof badgeVariants>
