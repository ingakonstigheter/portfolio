import { getProjectByID } from "@/lib/data/projects";
import React from "react";
import Image from "next/image";
import Badges from "./badges";

export async function ProjectCardFull({ id }: { id: number }) {
  const project = getProjectByID(id);
  if (!project) {
    return null;
  }
  return (
    <div className="grid grid-cols-1 gap-4 bg-red-200 max-h-[80vh]">
      <article className="card grid gap-4 bg-base-100 shadow-sm py-8 h-min">
        <div className="card-body grid md:grid-cols-2 gap-4">
          <div className=" items-center grid gap-10 h-1/2 text-center row-span-3 md:border-r-2 p-4">
            <h2 className="card-title justify-center text-4xl mb-4">
              {project.title}
            </h2>
            <p className="break-words">{project.description}</p>
            <div className="card-actions mx-auto">
              {project.tags.map((tag, index) => {
                return <Badges key={index} tag={tag}></Badges>;
              })}
            </div>
          </div>
          <div className="overflow-auto max-h-1/2 ">
            {project.images.map((image, index) => (
              <figure key={index}>
                <Image
                  src={image}
                  alt=""
                  width={500}
                  height={500}
                  className="w-full object-contain"
                />
              </figure>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
