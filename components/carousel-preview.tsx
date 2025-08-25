import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

function CarouselPreview() {
  return (
    <Carousel className="m-auto max-w-[400px]">
      <CarouselContent className="">
        <CarouselItem className="">
          <Image
            src={"https://picsum.photos/id/1/400"}
            alt={""}
            width={400}
            height={400}
          ></Image>
        </CarouselItem>
        <CarouselItem className="">
          <Image
            src={"https://picsum.photos/id/2/400"}
            alt={""}
            width={400}
            height={400}
          ></Image>
        </CarouselItem>
        <CarouselItem className="">
          <Image
            src={"https://picsum.photos/id/3/400"}
            alt={""}
            width={400}
            height={400}
          ></Image>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default CarouselPreview;
