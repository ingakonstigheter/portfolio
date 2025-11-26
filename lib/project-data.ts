import prisma from "./prisma-client";

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
};

/**
 * Fetch all projects from the database
 */
export async function getAllProjects(): Promise<Project[]> {
  try {
    const projects = await prisma.project.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

/**
 * Fetch a single project by ID
 */
export async function getProjectById(id: number): Promise<Project | null> {
  try {
    const project = await prisma.project.findUnique({
      where: { id },
    });
    return project;
  } catch (error) {
    console.error(`Error fetching project ${id}:`, error);
    return null;
  }
}

/**
 * Create a new project
 */
export async function createProject(data: {
  title: string;
  description: string;
  image: string;
}): Promise<Project | null> {
  try {
    const project = await prisma.project.create({
      data,
    });
    return project;
  } catch (error) {
    console.error("Error creating project:", error);
    return null;
  }
}

/**
 * Update a project
 */
export async function updateProject(
  id: number,
  data: Partial<{ title: string; description: string; image: string }>
): Promise<Project | null> {
  try {
    const project = await prisma.project.update({
      where: { id },
      data,
    });
    return project;
  } catch (error) {
    console.error(`Error updating project ${id}:`, error);
    return null;
  }
}

/**
 * Delete a project
 */
export async function deleteProject(id: number): Promise<boolean> {
  try {
    await prisma.project.delete({
      where: { id },
    });
    return true;
  } catch (error) {
    console.error(`Error deleting project ${id}:`, error);
    return false;
  }
}
