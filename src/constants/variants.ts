import type { BadgeVariants } from '../components/ui/badge';
import type { ProjectCategory, ProjectStatus } from '../types/experience';

export const PROJECT_STATUS_VARIANTS: Record<ProjectStatus, BadgeVariants['variant']> = {
  Live: 'success',
  Staging: 'info',
  Retired: 'muted'
} as const;

export const PROJECT_STATUS_DESCRIPTIONS: Record<ProjectStatus, string> = {
  Live: 'System jest wdrożony i aktualnie działa.',
  Staging: 'Wdrożenie w toku lub środowisko testowe — jeszcze nie w pełnej produkcji.',
  Retired: 'Rozwój zakończony; system może już nie być używany lub został zastąpiony.'
} as const;

export const PROJECT_CATEGORY_VARIANTS: Record<ProjectCategory, BadgeVariants['variant']> = {
  Production: 'success',
  Internal: 'info',
  Demo: 'muted'
} as const;

export const PROJECT_CATEGORY_DESCRIPTIONS: Record<ProjectCategory, string> = {
  Production: 'Projekt zrealizowany dla klienta lub jako produkt komercyjny.',
  Internal: 'Wewnętrzne narzędzie lub projekt firmowy, nie tworzony bezpośrednio dla klienta zewnętrznego.',
  Demo: 'Osobisty projekt demonstracyjny / portfolio.'
} as const;
