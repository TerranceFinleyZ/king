import Footer from '@/components/Footer';
import React from 'react';

const Page: React.FC = () => {
  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        {/* text */}
        <div className='flex flex-col w-full max-w-[700px]'>
          {/* text */}
          <h2 className='text-white text-center text-[55px] font-semibold mb-12'>
          Support <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7614d2] via-orange-400 to-[#7614d2]"> Us </span>
          </h2>
            <button className='rounded-[20px] group bg-[#7614d2] hover:bg-orange-400 px-5 py-3 text-lg text-white max-w-[200%]'>
              <span className='text-white'>Donate</span>
            </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;