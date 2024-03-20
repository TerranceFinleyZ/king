import React from 'react'
import Image from 'next/image'
import { Knight } from '@/constants'


const page = () => {
  return (
    <div className="pl-20 md:pl-40 pt-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
        <h1 className="hidden md:block text-[50px] text-white font-semibold font-serif ">
        More Amazing<span className='text-[50px] text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-[#7614d2] to-orange-400'> Works</span>
        </h1>
        <p className="text-gray-200 hidden md:block">
        In the late 90's, a mysterious virus, dubbed the Apocalypse Virus, wiped out 3.5 billion people and all mammalian wildlife. Two years after the virus suddenly disappeared, Dinosaurs began to emerge out of the deepest wildernesses of the Earth. In the year 2020, Josiah and Adeniji are members of the paramilitary order, The Saurian Rangers. While assisting in the protection of a newly built outpost in northeastern Nigeria, a chance encounter with a dinosaur, may finally bring about answers to the tragedies that occurred over 20 years ago.
        </p>
        <div className='flex-col md:flex-row hidden md:flex'>
            <a href={'https://www.amazon.com/Saurian-Rangers-James-Fowler/dp/B093RLBMYT/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr='} className='rounded-[20px] group bg-[#7614d2] hover:bg-orange-400 px-5 py-3 text-lg text-white max-w-[200px]'>
            Purchase
            </a>
        </div>

        <a href={'https://www.amazon.com/Saurian-Rangers-James-Fowler/dp/B093RLBMYT/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr='}>
        <div>
        {Knight.map((Knight) => (
          <Image
            key={Knight.name}
            src={Knight.src}
            alt={Knight.name}
            width={300}
            height={300}
            className='booka'
          />
        ))}
        </div>
        </a>
    </div>
  )
}

export default page
