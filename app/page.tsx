import { Github, LucideLinkedin, Mail, User } from "lucide-react";
import React from "react";
import text from "../lib/textEN.json";
import Link from "next/link";

export default function Home() {
  return (
    <main className="grid mx-auto justify-center max-w-2xl gap-16 my-16">
      <section className="grid mx-auto">
        <h1>{text.home.welcome}</h1>
        <ul className="flex gap-4">
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
      <section className="grid gap-8">
        <h2>
          <Link href={text.home.nav[0].path}>{text.home.nav[0].title}</Link>
        </h2>
        <p>{text.about.about}</p>
      </section>
      <section>
        <h2>My Projects</h2>
      </section>
    </main>
  );
}
