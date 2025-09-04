import projects from "@/lib/data/projects.json";
import { Project } from "../types";


export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectByID(id: number): Project | undefined {
  return projects.find((project) => project.id === id);
}
