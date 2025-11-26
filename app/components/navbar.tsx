import React from "react";
import text from "../../lib/textEN.json";
import Link from "next/link";

export default function Navbar() {
  const lang = "sv";
  return (
    <nav>
      <ul className="flex gap-4 font-mono" style={{ gap: "var(--size-lg)" }}>
        {text.home.nav.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            style={{ color: "var(--color-text-primary)" }}>
            {item.title}
          </Link>
        ))}
      </ul>
    </nav>
  );
}
