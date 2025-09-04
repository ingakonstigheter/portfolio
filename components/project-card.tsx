import { Project } from "@/lib/types";
import Link from "next/link";
import React from "react";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card bg-base-100 shadow-sm">
      <figure>
        <img
          src={project.images[0]}
          alt="Start page of a website displaying pokemons"
          width={300}
          height={300}
          className="max-w-100 object-contain"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{project.title}</h2>
        <p>{project.intro}</p>
        <div className="card-actions">
          <Link className="btn" href={`projects/${project.id}`}>
            Read More
          </Link>
          <div>
            <Link href={project.demo}>Demo</Link>
            <Link href={project.demo}>Github Repository</Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
