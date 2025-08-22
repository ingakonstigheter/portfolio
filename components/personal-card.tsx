import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CiMail } from 'react-icons/ci';


function PersonalCard() {
  return (
    <div className='hidden md:grid bg-amber-400 place-items-center'>
        <p>Ali</p>
        <div>
            <p>Connect at</p>
            <div className="flex gap-4">
                <Link href={''}><FaGithub /></Link>
                <Link href={''}><FaLinkedin /></Link>
                <Link href={''}><CiMail /></Link>
            </div>
        </div>
    </div>
  )
}

export default PersonalCard