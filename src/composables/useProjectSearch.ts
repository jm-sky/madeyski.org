import { computed, type ComputedRef, ref, type Ref } from 'vue';
import type { Project } from '../types/experience';

export function useProjectSearch(projects: Project[]): {
  searchTerm: Ref<string>;
  selectedTechnologies: Ref<string[]>;
  availableTechnologies: ComputedRef<string[]>;
  filteredProjects: ComputedRef<Project[]>;
  clearFilters: () => void;
} {
  const searchTerm: Ref<string> = ref('');
  const selectedTechnologies: Ref<string[]> = ref([]);

  // Get all unique technologies from projects, sorted alphabetically
  const availableTechnologies = computed(() => {
    const allTechnologies = new Set<string>();
    projects.forEach(project => {
      project.technologies.forEach(tech => allTechnologies.add(tech));
    });
    return Array.from(allTechnologies).sort();
  });

  // Enhanced search scoring system
  function calculateSearchScore(project: Project, term: string): number {
    const normalizedTerm = term.toLowerCase().trim();
    let score = 0;

    // Name match (highest priority)
    if (project.name.toLowerCase().includes(normalizedTerm)) {
      score += 10;
      if (project.name.toLowerCase().startsWith(normalizedTerm)) {
        score += 5; // Bonus for starting with term
      }
    }

    // Description match
    if (project.description.toLowerCase().includes(normalizedTerm)) {
      score += 5;
    }

    // Technology match
    const techMatches = project.technologies.filter(tech =>
      tech.toLowerCase().includes(normalizedTerm)
    ).length;
    score += techMatches * 3;

    // Company/Role match
    if (project.company?.toLowerCase().includes(normalizedTerm)) {
      score += 3;
    }
    if (project.myRole?.toLowerCase().includes(normalizedTerm)) {
      score += 3;
    }

    // Recent projects get slight boost
    if (project.dateEnd === null) {
      score += 1; // Active projects bonus
    }

    return score;
  }

  // Enhanced search and filter function
  function performSearchAndFilter(term: string, technologies: string[]): Project[] {
    // Start from a shallow copy to avoid mutating the original data order
    let results = projects.slice();

    // Helper: effective timestamp for sorting newest → oldest
    const getProjectSortTimestamp = (project: Project): number => {
      // Treat ongoing projects as the newest
      if (project.dateEnd === null) return Number.MAX_SAFE_INTEGER;
      const effectiveDate = project.dateEnd ?? project.dateStart;
      return new Date(effectiveDate).getTime();
    };

    // Apply technology filter first
    if (technologies.length > 0) {
      results = results.filter(project =>
        technologies.every(tech => project.technologies.includes(tech))
      );
    }

    // Apply text search if provided
    if (term.trim()) {
      results = results
        .map(project => ({
          project,
          score: calculateSearchScore(project, term)
        }))
        .filter(({ score }) => score > 0)
        // Primary sort by relevance score, tie-break by recency
        .sort((a, b) => {
          const byScore = b.score - a.score;
          if (byScore !== 0) return byScore;
          return getProjectSortTimestamp(b.project) - getProjectSortTimestamp(a.project);
        })
        .map(({ project }) => project);
    } else {
      // Default sort (no text search): newest → oldest
      results = results.sort(
        (a, b) => getProjectSortTimestamp(b) - getProjectSortTimestamp(a)
      );
    }

    return results;
  }

  // Computed filtered results
  const filteredProjects = computed(() => {
    return performSearchAndFilter(searchTerm.value, selectedTechnologies.value);
  });

  // Clear all filters
  const clearFilters = () => {
    searchTerm.value = '';
    selectedTechnologies.value = [];
  };

  return {
    searchTerm,
    selectedTechnologies,
    availableTechnologies,
    filteredProjects,
    clearFilters,
  };
}
