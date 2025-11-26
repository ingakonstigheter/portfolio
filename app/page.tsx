import { Github, LucideLinkedin, Mail, User } from "lucide-react";
import React from "react";
import text from "../lib/textEN.json";
import Link from "next/link";
import ProjectList from "./components/project-list";
import { getProjectsFromFile, type Project } from "@/lib/project-data";

export default function Home() {
  const projects = getProjectsFromFile();

  return (
    <main
      className="grid mx-auto justify-center max-w-2xl"
      style={{ gap: "var(--size-4xl)", margin: "var(--size-4xl) auto" }}>
      <section className="grid mx-auto">
        <h1>{text.home.welcome}</h1>
        <ul className="flex" style={{ gap: "var(--size-lg)" }}>
          <li>
            <Mail size={30}></Mail>
          </li>
          <li>
            <LucideLinkedin size={30}></LucideLinkedin>
          </li>
          <li>
            <Github size={30}></Github>
          </li>
        </ul>
      </section>
      <section className="grid" style={{ gap: "var(--size-2xl)" }}>
        <h2>
          <Link href={text.home.nav[0].path}>{text.home.nav[0].title}</Link>
        </h2>
        <p>{text.about.about}</p>
      </section>
      <section style={{ gap: "var(--size-2xl)" }} className="grid">
        <h2>My Projects</h2>
        <ProjectList projects={projects} />
      </section>
    </main>
  );
}
