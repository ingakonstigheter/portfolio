"use client";

import type { Project } from "@/lib/project-data";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      style={{
        backgroundColor: "var(--color-bg-secondary)",
        border: "1px solid var(--color-border)",
        borderRadius: "0.5rem",
        overflow: "hidden",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = "translateY(-4px)";
        el.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.1)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "none";
      }}>
      <div style={{ width: "100%", height: "200px", overflow: "hidden" }}>
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <div style={{ padding: "var(--size-lg)" }}>
        <h3
          style={{
            marginBottom: "var(--size-md)",
            color: "var(--color-text-primary)",
          }}>
          {project.title}
        </h3>
        <p
          style={{
            color: "var(--color-text-secondary)",
            marginBottom: "var(--size-md)",
          }}>
          {project.description.length > 120
            ? project.description.substring(0, 120) + "..."
            : project.description}
        </p>
        <p
          style={{
            fontSize: "var(--font-size-sm)",
            color: "var(--color-text-tertiary)",
          }}>
          {new Date(project.createdAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}
