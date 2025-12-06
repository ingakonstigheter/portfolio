"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
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

interface NavbarProps {
  pathname?: string;
}

export default function Navbar({ pathname: propPathname }: NavbarProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const autoPathname = usePathname();
  const pathname = propPathname || autoPathname;

  return (
    <header
      className={`shadow-glow md:sticky fixed left-0 right-0 top-0 md:top-4 md:rounded-full md:block md:max-w-4xl mx-auto p-1 md:mt-4 moving-gradient h-auto`}>
      <nav className=" w-full md:mx-auto md:rounded-full rounded-lg p-2 ">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="md:hidden capitalize text-xl font-bold p-4 hover:scale-105 md:scale-110 transition-transform duration-150">
            portfolio
          </Link>
          <button
            className="md:hidden px-4 cursor-pointer hover:scale-105 md:scale-110 transition-transform duration-150"
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
            className={`bg-bg-secondary w-full px-4 md:px-2 grid overflow-auto md:rounded-full ${
              isOpen ? "h-auto" : "h-0"
            } md:h-auto md:flex md:justify-around md:items-center`}>
            {linkList.map((link) => {
              const isActive =
                pathname === link.path ||
                (link.path !== "/" && pathname?.startsWith(link.path));
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-primary capitalize font-bold md:hover:bg-foreground/30 underline-offset-10 text-lg py-4 md:p-2 md:text-center rounded-full md:my-2 transition-colors duration-150 hover:scale-102 md:scale-110 hover:underline md:hover:no-underline md:hover:shadow-xl ${
                    isActive ? "md:bg-foreground/50 md:shadow-xl" : ""
                  }`}>
                  <link.icon className="inline w-8 h-8 md:mr-2 mr-4" />
                  {link.id}
                </Link>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
