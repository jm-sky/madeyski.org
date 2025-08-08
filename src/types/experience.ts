export type ProjectStatus = "Active" | "Staging" | "Archived";
export type ProjectCategory = "Demo" | "Internal" | "Production";

export interface SubProject {
  /** Sub-project name */
  name: string;
  /** Sub-project URL */
  url: string;
}

export interface Project {
  /** Project id - should be unique */
  id?: string;

  /** Key achievements or metrics (e.g., "Reduced processing time by 50%", "Served 10k+ users") */
  achievements?: string[];

  /** Project category - PROD = Production/Client work, DEMO = Personal/Demo projects, INTERNAL = Internal company tools */
  category?: ProjectCategory;

  /** Project status - active, staging, archived */
  status: ProjectStatus;

  /** Main challenges faced and how they were solved */
  challenges?: string[];

  /** End clients or stakeholders who benefited from the project */
  clients?: string[];

  /** Company or organization where the project was developed */
  company?: null | string;

  /** Project end date in YYYY-MM-DD format, null if ongoing */
  dateEnd: null | string;

  /** Project start date in YYYY-MM-DD format */
  dateStart: string;

  /** Detailed project description - focus on business value, technical challenges, and outcomes */
  description: string;

  /** Links to demo, repository, or documentation (if public/allowed) */
  links?: {
    demo?: string;
    documentation?: string;
    github?: string;
  };

  /** Your specific role in the project - be precise about responsibilities */
  myRole?: string;

  /** Project name - should be descriptive and professional */
  name: string;

  /** Project scale/scope indicators */
  scale?: {
    /** Budget range if relevant */
    budget?: "large" | "medium" | "small";
    /** Duration in months */
    duration?: number;
    /** Team size */
    teamSize?: number;
    /** Approximate number of users/beneficiaries */
    users?: number;
  };

  /** Team members who worked on the project */
  team?: string[];

  /** Technologies used - should match Technology.name values for consistency */
  technologies: string[];

  /** Optional sub-projects for template-based projects */
  subProjects?: SubProject[];
}

export interface Technology {
  category: "Framework" | "Library" | "Platform" | "Service" | "System";
  layer: "Backend" | "Database" | "DevOps" | "Frontend" | "Language" | "Tools";
  level?: 1 | 2 | 3 | 4 | 5; // 1 = Basic, 2 = Intermediate, 3 = Advanced, 4 = Expert, 5 = Master
  name: string;
  projectCount?: number; // Automatically calculated - number of projects using this technology
}
