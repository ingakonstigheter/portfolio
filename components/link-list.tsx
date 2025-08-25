import React from "react";
import data from "@/lib/pages.json";
import Link from "next/link";
import Icon from "./icon";

function LinkList({ className }: { className?: string }) {
  const bolderText = "text-2xl font-extrabold tracking-tight text-balance";

  return (
    <ul className="flex justify-end-safe gap-4 p-4 md:grid md:grid-flow-row md:place-content-center md:content-around">
      {data.pages.map((link, index) => (
        <li key={index} className="">
          <Link href={link.href} className={`${className}`}>
            <p className={`text-left md:col-span-2 md:p-4 md:text-2xl`}>
              {link.label}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default LinkList;
