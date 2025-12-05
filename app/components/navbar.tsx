"use client";
import Link from "next/link";
import React from "react";
import {
  FaHome,
  FaCode,
  FaGraduationCap,
  FaLaptopCode,
  FaEnvelope,
} from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa6";
import { HiOutlineBars3, HiXMark } from "react-icons/hi2";

const linkList = [
  { id: "home", icon: FaHome, text: "Home", path: "/" },
  { id: "skills", icon: FaCode, text: "Skills", path: "/skills" },
  {
    id: "experience",
    icon: FaBriefcase,
    text: "Experience",
    path: "/experience",
  },
  {
    id: "education",
    icon: FaGraduationCap,
    text: "Education",
    path: "/education",
  },
  { id: "projects", icon: FaLaptopCode, text: "Projects", path: "/projects" },
  { id: "contact", icon: FaEnvelope, text: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div
      className={`md:sticky fixed left-0 right-0 top-0 md:top-4 md:rounded-full md:block md:max-w-4xl mx-auto p-1 md:mt-4 moving-gradient h-auto`}>
      <nav className=" w-full md:mx-auto md:rounded-full rounded p-2 ">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="md:hidden capitalize  text-xl font-bold p-4">
            portfolio
          </Link>
          <button
            className="md:hidden px-4 cursor-pointer "
            onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <HiXMark className="w-8 h-8" />
            ) : (
              <HiOutlineBars3 className="w-8 h-8" />
            )}
          </button>
        </div>
        <div>
          <ul
            className={`bg-bg-secondary w-full px-4 md:px-2 grid overflow-auto rounded-full ${
              isOpen ? "h-auto" : "h-0"
            } md:h-auto md:flex md:justify-around md:items-center`}>
            {linkList.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="text-primary capitalize font-bold text-lg  py-4 md:py-2 hover:underline md:max-px-2 md:hover:bg-foreground/30 md:hover:no-underline rounded-full md:my-2">
                <link.icon className="inline w-6 h-6 mr-4" />
                {link.id}
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
