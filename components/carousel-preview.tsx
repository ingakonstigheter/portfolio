import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { getAllProjects } from "@/lib/data/projects";

function CarouselPreview() {
  const projects = getAllProjects();
  return (
    <Carousel className="m-auto max-w-[400px]">
      <CarouselContent className="">
        {projects.map((project, index) => (
          <CarouselItem key={index}>
            <Image
              src={project.images[0]}
              alt={""}
              width={400}
              height={400}
            ></Image>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default CarouselPreview;
