import type { BadgeVariants } from '../components/ui/badge';
import type { ProjectCategory, ProjectStatus } from '../types/experience';
import { PROJECT_CATEGORY_VARIANTS, PROJECT_STATUS_VARIANTS } from '../constants/variants';

export function getStatusVariant(status?: ProjectStatus): BadgeVariants['variant'] {
  if (!status) return 'muted';
  return PROJECT_STATUS_VARIANTS[status] ?? 'muted';
}

export function getCategoryVariant(category?: ProjectCategory): BadgeVariants['variant'] {
  if (!category) return 'muted';
  return PROJECT_CATEGORY_VARIANTS[category] ?? 'muted';
}
