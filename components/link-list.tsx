import React from "react";
import data from "@/lib/pages.json";
import Link from "next/link";
import Icon from "./icon";

function LinkList({ linkClassName }: { linkClassName?: string }) {
    return (
        <>
            {data["pages"].map((link, index) => (
                <li key={index} >
                    <Link href={link.href} className={`${linkClassName} p-2`}>
                        <figure className="flex justify-center">
                            <Icon name={link.icon as keyof typeof Icon}/>
                        </figure>
                        <p>{link.label}</p>
                    </Link>
                </li>
            ))}
        </>
    );
}

export default LinkList;
