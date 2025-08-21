import Article from "@/components/article-presetation";

const presentation =
  {
    headline: "Hi, I'm Ali",
    para: "I’m endlessly curious about how economics and technology shape the world around us. Whether I’m analyzing market trends or experimenting with code, I enjoy turning complex ideas into something simple, useful, and impactful.",
  };

export default function Home() {
  return (
      <section className="grid justify-center">
        <Article headline={presentation.headline} para={presentation.para}></Article>

      </section>
  );
}
