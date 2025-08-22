import Card from "@/components/card";
import { fetchAllProjects } from "@/lib/data/project";
import { Post } from "@/lib/interfaces";
import React, { Suspense } from "react";

async function ProjectsList() {
  const posts = await fetchAllProjects();

  return (
    <>
      {posts.map((post: Post, index) => (
        <Card key={index} post={post} />
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
