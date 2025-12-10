import React from "react";
import SkillCard from "../components/skill-badges";
import { FaReact, FaServer, FaCloud, FaTools, FaPalette } from "react-icons/fa";
import SkillBadges from "../components/skill-badges";

function Page() {
  const categories = [
    { name: "Frontend Development", icon: FaReact, color: "#61DAFB" },
    { name: "Backend Development", icon: FaServer, color: "#68A063" },
    { name: "Cloud & DevOps", icon: FaCloud, color: "#4285F4" },
    { name: "Tools & Technologies", icon: FaTools, color: "#F0DB4F" },
    { name: "UI/UX Design", icon: FaPalette, color: "#F24E1E" },
  ] as const;

  return (
    <section className="mt-8">
      <ul className="grid md:grid-cols-2 gap-16 max-w-7xl mx-auto">
        {categories.map((category, index) => (
          <article
            key={index}
            className="grid gap-4 p-8 rounded-lg border border-gray-300/50 shadow-glow hover:scale-105 transition-transform duration-300">
            <div className="flex gap-4 ">
              <category.icon
                className="inline w-12 h-12 text-center"
                style={{ color: category.color }}
              />
              <h2 className="text-4xl font-bold mb-4 fit-min flex gap-3">
                {category.name}
              </h2>
            </div>
            <SkillBadges index={index} />
          </article>
        ))}
      </ul>
    </section>
  );
}

export default Page;
