import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function PersonalCard() {
  return (
    <div className="grid place-items-center space-y-2 text-center">
      <Avatar className="size-30">
        <AvatarImage src="/avatar.svg"></AvatarImage>
        <AvatarFallback>AZ</AvatarFallback>
      </Avatar>
      <p className="scroll-m-20 text-center text-2xl font-extrabold tracking-tight text-balance">
        Ali Z
      </p>
      <div className="mt-1 grid grid-cols-3 justify-center gap-4">
        <Link href={""} className="flex justify-center">
          <FaGithub className="size-8" />
        </Link>
        <Link href={""} className="flex justify-center">
          <FaLinkedin className="size-8" />
        </Link>
        <Link href={""} className="flex justify-center">
          <IoMdMail className="size-8" />
        </Link>
      </div>
    </div>
  );
}

export default PersonalCard;
