import React from 'react'

const page = () => {
  return (
    <div className="md:pl-40 pt-36 md:pb-20 flex flex-col gap-0 z-[10] max-w-[950px]">
        <h2 className="text-[50px] text-white font-serif ">
            James <span className='text-[50px] text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-[#7614d2] to-orange-400'>Fowler</span>
        </h2>
        <p className='font-serif text-orange-400'>
         - About the Author
        </p>
        <p className="text-gray-200 text-[15px]">
        Hello to everyone. I'll skip the usual, "I've never felt comfortable with talking about myself." It seems to be too common a statement these days. Instead, I'll tell you about myself. I've lived all over the United States. From California to Ohio, and from Texas to Nebraska; where I currently reside. I have an Associates of Science in General Academics and a Bachelors of Science in Criminal Justice. Growing up, I enjoyed a great many genres of fiction. My preferred genres are Fantasy and Science Fiction. These are the two main genres I will be writing. My desire in this endeavor, is to earn enough to become a full-time author, and to bring to you many stories, rich in lore and character.
        </p>
    </div>
  )
}

export default page
