'use client';

import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import React from 'react'
import Image from 'next/image';
import { Test } from '@/constants';

const Reviews = () => {
  return (
    <section>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        <h2 className='text-white text-center text-[55px] font-semibold mb-12'>
          Some <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7614d2] via-orange-400 to-[#7614d2]"> Reviews </span>
        </h2>
      </div>
      <Swiper slidesPerView={1} breakpoints= {{
        640: { slidesPerView: 2 },
        1400: { slidesPerView: 3},
      }}
      spaceBetween={30}
      modules={[Pagination]}
      pagination={{
        clickable: true,
      }}
      className='h-[350px] mb-12 xl:mb-32'
      >
            {Test.map((person, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className='text-white p-0 mb-10'>
                    <div className="flex items-center gap-x-4">
                      <Image 
                        src={person.avatar}
                        width={70}
                        height={30}
                        alt=""
                        priority
                        className="pix"
                      />
                      <div className="flex flex-col">
                        <div>{person.name}</div>
                        <p className="text-orange-400">{person.rating}</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-white bg-tertiary dark:bg-secondary/40 p-8 min-h-[400px] text-lg text-muted-foreground"><FaQuoteLeft className="text-gray-500"/>{person.review}</div>
                </SwiperSlide>
              )
            })}
          </Swiper>
    </section>
  )
};

export default Reviews;
