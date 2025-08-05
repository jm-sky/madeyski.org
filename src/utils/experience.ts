import type { Project, Technology } from '../types/experience';

// Function to calculate project count for each technology
export function calculateTechnologyStats(projects: Project[], baseTechnologies: Technology[]): Technology[] {
  return baseTechnologies.map(tech => {
    const projectCount = projects.filter(project =>
      project.technologies.includes(tech.name)
    ).length;

    return {
      ...tech,
      projectCount
    };
  }).sort((a, b) => (b.projectCount || 0) - (a.projectCount || 0));
}

// Group technologies by layer for better organization
export function groupTechnologiesByLayer(technologies: Technology[]): Record<string, Technology[]> {
  return technologies.reduce((acc, tech) => {
    if (!acc[tech.layer]) {
      acc[tech.layer] = [];
    }
    acc[tech.layer].push(tech);
    return acc;
  }, {} as Record<string, Technology[]>);
}

// Define layer order for consistent display
export const layerOrder = ["Language", "Frontend", "Backend", "Database", "DevOps", "Tools"];

// Calculate quick stats from projects
export function calculateQuickStats(projects: Project[], technologies: Technology[]) {
  const totalProjects = projects.length;
  const ongoingProjects = projects.filter(p => p.dateEnd === null).length;
  const totalTechnologies = technologies.length;
  const experienceYears = new Date().getFullYear() - 2010; // Started in 2010
  const totalClients = [...new Set(projects.flatMap(p => p.clients || []))].length;

  return {
    experienceYears,
    ongoingProjects,
    totalClients,
    totalProjects,
    totalTechnologies
  };
}
