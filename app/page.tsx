import Article from "@/components/article-presetation";

const presentation = {
  headline: "Hi, I'm Ali",
  para: "I’m endlessly curious about how economics and technology shape the world around us. Whether I’m analyzing market trends or experimenting with code, I enjoy turning complex ideas into something simple, useful, and impactful.",
};

export default function Home() {
  return (
    <section className="grid place-items-center md:m-8 md:place-items-start">
      <div className="mt-10 grid max-w-4/6 gap-4 text-center md:max-w-100 md:text-left">
        <h1 className="text-2xl">{presentation.headline}</h1>
        <p className="">{presentation.para}</p>
      </div>
    </section>
  );
}
