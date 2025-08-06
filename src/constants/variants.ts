import type { BadgeVariants } from '../components/ui/badge';
import type { ProjectCategory, ProjectStatus } from '../types/experience';

export const PROJECT_STATUS_VARIANTS: Record<ProjectStatus, BadgeVariants['variant']> = {
  Active: 'success',
  Staging: 'info',
  Archived: 'muted'
} as const;

export const PROJECT_CATEGORY_VARIANTS: Record<ProjectCategory, BadgeVariants['variant']> = {
  Production: 'success',
  Internal: 'info',
  Demo: 'muted'
} as const;
