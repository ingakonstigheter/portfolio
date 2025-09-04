import ProjectCard from "@/components/project-card";
import { getAllProjects } from "@/lib/data/projects";
import { Project } from "@/lib/types";
import React, { Suspense } from "react";

async function ProjectsList() {
  const posts = getAllProjects();

  return (
    <>
      {posts.map((post: Project, index) => (
        <ProjectCard key={index} project={post} />
      ))}
    </>
  );
}

export default function Projects() {
  return (
    <div className="m-4 grid grid-cols-1 gap-4">
      <Suspense fallback={<p>Loading...</p>}>
        <ProjectsList />
      </Suspense>
    </div>
  );
}
