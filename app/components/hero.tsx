import CodeWindow from "./code-window";

export default function Hero() {
  const name = "Ali Zaifie";
  return (
    <div className="grid gap-4 mt-4 lg:grid-cols-2 items-center">
      <div>
        <h1 className="text-6xl font-bold mb-8">
          <span className="text-7xl font-extrabold block">Hello</span>
          I'm
          <span className="gradient-text"> {name}</span>
        </h1>

        <p className="text-2xl mb-6 max-w-3xl">
          I'm a passionate full-stack developer with expertise in building
          scalable web applications and solving complex problems. Explore my
          portfolio to see my skills, experience, and projects.
        </p>
        <button className="btn-primary">Learn More</button>
      </div>
      <CodeWindow></CodeWindow>
    </div>
  );
}
