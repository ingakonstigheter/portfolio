import React from "react";
import { IconType } from "react-icons";
import { FaGithubAlt } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import {
  SiDocker,
  SiFigma,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGooglecloud,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostman,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

import { FaJava } from "react-icons/fa";

import { TbApi } from "react-icons/tb";

interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

const skillsData = [
  [
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "PHP", icon: SiPhp, color: "#777BB4" },
  ],
  [
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Java", icon: FaJava, color: "#007396" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "REST APIs", icon: TbApi, color: "#009688" },
  ],
  [
    { name: "Google Cloud Platform", icon: SiGooglecloud, color: "#4285F4" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
  ],
  [
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "GitHub", icon: SiGithub, color: "#181717" },
    { name: "Visual Studio Code", icon: VscVscode, color: "#007ACC" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    { name: "Copilot", icon: FaGithubAlt, color: "#000000" },
  ],
  [
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    { name: "User Research", icon: MdDesignServices, color: "#9C27B0" },
    { name: "Wireframing", icon: MdDesignServices, color: "#673AB7" },
  ],
];

export default function SkillBadges({ index }: { index: number }) {
  const skills = skillsData[index];

  return (
    <div className="flex flex-wrap gap-4">
      {skills.map((skill) => (
        <span
          key={skill.name}
          className="flex items-center gap-2 bg-bg-secondary px-4 py-2 rounded-lg font-semibold hover:scale-105 transition-transform duration-200">
          <skill.icon style={{ color: skill.color }} className="text-2xl" />
          {skill.name}
        </span>
      ))}
    </div>
  );
}
