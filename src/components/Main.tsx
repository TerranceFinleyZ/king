'use client';
import React from 'react'

import { Books } from '@/constants'

const Main = () => {
  return (
    <div className="pl-20 md:pl-40 pt-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
        <h1 className="hidden md:block text-[50px] text-white font-semibold font-serif ">
        The Ascendancy <span className='text-[50px] text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-[#7614d2] to-orange-400'>Paradox</span>
        </h1>
        <p className="text-gray-200 hidden md:block">
        A promise and a threat from their kidnappers, "complete their Crucible or face the annihilation of Earth." This is the situation 24 young men find themselves in upon waking up in a barren room. What is the Crucible and what awaits them inside it? Who is behind it? And why were they specifically chosen out of the 7 billion people Earth has to offer?
        </p>
        <p className='font-serif text-orange-400 hidden md:block'>
          - James Fowler
        </p>
        <div className='flex-col md:flex-row hidden md:flex '>
            <a href={'https://www.amazon.com/Ascendancy-Paradox-James-Fowler/dp/B0B8VJF774/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr='} className='rounded-[20px] group bg-[#7614d2] hover:bg-orange-400 px-5 py-3 text-lg text-white max-w-[200px]'>
            Purchase
            </a>
        </div>

        <a href={'https://www.amazon.com/Ascendancy-Paradox-James-Fowler/dp/B0B8VJF774/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr='}>
        <div>
        {Books.map((Books) => (
          <img
            key={Books.name}
            src={Books.src}
            alt={Books.name}
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

export default Main
