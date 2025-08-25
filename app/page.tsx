import Bento from "@/components/bento";
import CarouselPreview from "@/components/carousel-preview";
import Image from "next/image";

const presentation = {
  headline: "Hi, I'm Ali",
  para: "I’m endlessly curious about how economics and technology shape the world around us. Whether I’m analyzing market trends or experimenting with code, I enjoy turning complex ideas into something simple, useful, and impactful.",
};

export default function Home() {
  return (
    <>
      <div className="grid text-center md:mt-4 md:grid-cols-3 md:grid-rows-2 md:text-left">
        <div className="md:col-span-3">
          <Bento>
            <h1 className="text-left text-4xl font-extrabold tracking-tight text-balance">
              {presentation.headline}
            </h1>
            <p className="text-justify text-lg md:text-left">
              {presentation.para}
            </p>
          </Bento>
        </div>
      </div>
      <div className="col-start-2 hidden justify-center md:flex">
        <Bento>
          <figure>
            <Image
              src={"/person.jpg"}
              alt={""}
              width={400}
              height={700}
            ></Image>
          </figure>
        </Bento>
      </div>
      <article className="grid justify-center md:col-start-1 md:row-start-2 md:justify-start">
        <Bento>
          <h1 className="text-left text-4xl font-extrabold tracking-tight text-balance">
            Check out my latest projects
          </h1>
          <CarouselPreview></CarouselPreview>
        </Bento>
      </article>
    </>
  );
}
