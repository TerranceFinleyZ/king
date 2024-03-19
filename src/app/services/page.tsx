import React from 'react';
import Image from 'next/image';
import { Lines } from '@/constants';
import Link from 'next/link';


const Page: React.FC = () => {
  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        {/* text */}
        <div className='flex flex-col w-full max-w-[700px]'>
          {/* text */}
          <h2 className='text-white text-center text-[55px] font-semibold mb-12'>
          Read Free <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7614d2] via-orange-400 to-[#7614d2]"> Chapter </span>
          </h2>
          <div className='mx-auto flex items-center justify-center h-full'>
          {Lines.map((Lines) => (
            <Link href='chap'>
            <Image
              key={Lines.name}
              src={Lines.src}
              alt={Lines.name}
              width={300}
              height={300}
              className='h-[60%] flex bg-cover bg-center rounded-xl border-white items-center justify-center'
            />
            </Link>
          ))}

          </div>
        </div>
      </div>

    </div>
  );
};

export default Page;
