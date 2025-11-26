import ProjectCard from "./project-card";
import type { Project } from "@/lib/project-data";

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  if (projects.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "var(--size-4xl) 0" }}>
        <p
          style={{
            color: "var(--color-text-secondary)",
            fontSize: "var(--font-size-lg)",
          }}>
          No projects yet. Check back soon!
        </p>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "var(--size-2xl)",
      }}>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
