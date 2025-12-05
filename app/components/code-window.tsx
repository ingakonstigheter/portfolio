import { FaCircle } from "react-icons/fa";
import { TypewriterText } from "./typewriter-text";
import { highlightCode } from "@/lib/shiki-singleton";

const profile = `
    const profile = {
        name: "Ali Zaifie",
        title: "Full-Stack Developer | Problem Solver",
        skills: [
            "React", "NextJS", "Express", "PHP", 
            "Google Cloud", "MySQL", "Docker", 
            "TypeScript", "JAVA", "Git", "OOP" 
            "RESTful APIs", "GraphQL", "NodeJS",
            "HTML5", "CSS", "TailwindCSS",
        ],
        hardWorker: true,
        quickLearner: true,
        problemSolver: true,
        hireable: function () {
            return;
            this.hardWorker &&
            this.problemSolver &&
            this.quickLearner;
        },
    };

`;
export default async function CodeWindow() {
  const html = await highlightCode(profile);
  const words = [
    "developer.ts",
    "developer.js",
    "developer.py",
    "developer.java",
    "developer.tsx",
    "developer.php",
  ];
  return (
    <article className="w-full  moving-gradient p-1 md:rounded-lg md:max-w-4xl rounded-lg">
      <header className="bg-bg-secondary flex items-center rounded-t-lg">
        <div className="flex gap-2 p-2 mx-2 py-4">
          <FaCircle className="w-4 h-4" style={{ color: "#ff5f57" }} />
          <FaCircle className="w-4 h-4" style={{ color: "#ffbd2e" }} />
          <FaCircle className="w-4 h-4" style={{ color: "#28ca42" }} />
        </div>
        <p>
          <TypewriterText words={words} />
        </p>
      </header>
      <main className="overflow-auto rounded-b-lg">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </main>
    </article>
  );
}
