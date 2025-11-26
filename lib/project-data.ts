export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
};

/**
 * Get projects from local JSON file
 */
export function getProjectsFromFile(): Project[] {
  try {
    const projects = require('./projects.json');
    return projects.map((p: any) => ({
      ...p,
      createdAt: new Date(p.createdAt),
      updatedAt: new Date(p.updatedAt),
    }));
  } catch (error) {
    console.error('Error loading projects:', error);
    return [];
  }
}
