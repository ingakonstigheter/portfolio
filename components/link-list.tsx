import React from "react";
import data from "@/lib/pages.json";
import Link from "next/link";
import Icon from "./icon";

function LinkList({ className }: { className?: string }) {
  return (
    <ul className="grid grid-flow-col m-4 md:grid-flow-row md:content-around">
      {data.pages.map((link, index) => (
        <li key={index} className="">
          <Link href={link.href} className={`${className} flex justify-center`}>
            <figure className="hidden md:block place-self-center">
              <Icon name={link.icon as keyof typeof Icon} className=""/>
            </figure>
            <p className="col-span-3 md:col-span-2 md:p-4">{link.label}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default LinkList;
