import CodeWindow from "./code-window";

export default function Hero() {
  const name = "Ali Zaifie";
  const catchPhraseList = [
    "Full-Stack Developer",
    "Problem Solver",
    "Tech Enthusiast",
    "Lifelong Learner",
    "Team Player",
  ];

  return (
    <div className="grid gap-8 lg:gap-4 lg:mt-8 mt-4 lg:grid-flow-col items-center mx-auto">
      <div className="grid items-center lg:text-left md:gap-8 gap-4">
        <h1 className="text-8xl font-bold md:mx-auto ">
          <span className="text-9xl font-extrabold block">Hello</span>
          I'm
          <span className="gradient-text"> {name}</span>
        </h1>

        <p className="text-2xl max-w-xl mx-auto lg:text-center">
          I build scalable applications and solve complex problems as a
          full-stack developer.
        </p>

        <div className="btn-primary max-w-fit max-h-fit md:mx-auto mr-auto lg:ml-auto">
          <button className="bg-bg-secondary/50 px-8 py-4 rounded-xl shadow-glow hover:bg-transparent hover:cursor-pointer transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
      <CodeWindow></CodeWindow>
    </div>
  );
}
