import type { BadgeVariants } from '../components/ui/badge';
import type { ProjectCategory, ProjectStatus } from '../types/experience';
import { PROJECT_CATEGORY_VARIANTS, PROJECT_STATUS_DESCRIPTIONS, PROJECT_STATUS_VARIANTS } from '../constants/variants';

export function getStatusVariant(status?: ProjectStatus): BadgeVariants['variant'] {
  if (!status) return 'muted';
  return PROJECT_STATUS_VARIANTS[status] ?? 'muted';
}

export function getStatusDescription(status?: ProjectStatus): string | undefined {
  if (!status) return undefined;
  return PROJECT_STATUS_DESCRIPTIONS[status];
}

export function getCategoryVariant(category?: ProjectCategory): BadgeVariants['variant'] {
  if (!category) return 'muted';
  return PROJECT_CATEGORY_VARIANTS[category] ?? 'muted';
}
