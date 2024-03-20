"use client";
import React from "react";

import { Socials } from "@/constants";

const Header = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[100px] bg-black flex justify-between items-center px-10 md:px-20">
        <div className="flex flex-row gap-3 items-center">
            <h1 className="text-white text-[25px] font-semibold">The Ascendancy <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7614d2] via-orange-400 to-[#7614d2]">Paradox</span></h1>
        </div>

        <a href={'https://x.com/authorj_fowler?s=11'}>
        <div className='flex flex-row gap-5 mb-2'>
          {Socials.map((social) => (
            <img
            key={social.name}
            src={social.src}
            alt={social.name}
            width={28}
            height={28}
            />
         ))}
        </div>
        </a>    
    </div>
  )
}

export default Header