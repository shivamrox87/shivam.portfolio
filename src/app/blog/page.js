import Header from '@/components/Header';
import { blogs } from '@/server/data';
import Link from 'next/link';
import React from 'react'

export const metadata = {
  title: "Blog",
  description: "This is Shivam Blog",
};

const page = () => {
  return (
    <div className='bg-[#e9e9e7]'>
      <Header textColor="#0d0d0d" />
      <div className='flex-none h-[100px] overflow-hidden relative w-full'></div>
      {/* Part One */}
      <div className='flex flex-row items-center justify-center gap-2.5 h-min overflow-hidden p-[100px_40px] relative w-full'>
        <div className='place-content-center flex flex-col items-center justify-center gap-20 flex-[1_0_0px] h-min max-w-[1200px] overflow-hidden relative w-[1px]'>
          <div className='flex flex-col items-center justify-center gap-5 h-min overflow-hidden p-0 relative w-full'>
            <div className='flex flex-col items-center justify-center gap-0 h-min overflow-hidden p-0 relative w-[650px]'>
              <div className='flex flex-col items-start flex-shrink-0 h-auto relative whitespace-pre w-auto outline-none transform-none'>
                <p className='text-lg text-[#EB5939] uppercase tracking-[0.12em] leading-[1.2em] font-medium font-Plus_Jakarta_Sans'>My Blog</p>
              </div>
              <div className='flex flex-col justify-start flex-shrink-0 transform-none flex-none h-auto relative whitespace-pre-wrap w-full break-words overflow-wrap break-word outline-none'>
                <h1 className='text-[42px] text-[#0d0d0d] text-center leading-[1.2em] font-medium font-Plus_Jakarta_Sans'>Ideas, insights, perspectives, and other notes</h1>
              </div>
            </div>
            <div className='outline-none flex flex-col justify-start flex-shrink-0 transform-none flex-none h-auto relative whitespace-pre-wrap w-[750px] break-words overflow-wrap'>
              <p className='text-base text-[#0d0d0d] text-center leading-[1.4em] font-normal font-Plus_Jakarta_Sans'>
                In today’s digital age, a well-designed website is no longer just a luxury; it’s a necessity for any business or individual seeking an online presence. Web design goes beyond creating.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Part Two */}
      <div className='flex items-center justify-center flex-row gap-2 h-min overflow-hidden px-10 pb-24 pt-0 relative w-full'>
        <div className='flex flex-col items-center justify-center gap-12 flex-[1_0_0px] h-min max-w-[1200px] overflow-hidden p-0 relative w-[1px]'>
          <div className='flex flex-row items-center justify-center gap-8 h-min overflow-hidden p-0 relative w-full'>
            <div className='flex-[1_0_0px] grid grid-cols-[repeat(3,minmax(100px,_1fr))] auto-rows-min gap-10 justify-items-center h-min p-0 relative w-[1px]'>
              {blogs.map((data, index) => (<div key={index} className='self-start flex-none h-auto relative w-full group'>
                <div className='place-content-center items-center cursor-pointer flex flex-col gap-8 h-min overflow-hidden p-0 relative w-full opacity-100'>
                  <Link href={`/blog/${data.slug}`} className='place-content-center items-center aspect-[1.32707/1] flex flex-row gap-2.5 h-[266px] overflow-hidden p-0 relative no-underline w-full'>
                    <div className='flex-none h-[115%] overflow-hidden relative w-[115%] transform-none origin-center group-hover:scale-[0.92] duration-500'>
                      <div className='absolute rounded-none inset-0'>
                        <img className='block w-full h-full rounded-none object-center object-cover' src={data.image} alt='blogImage' />
                      </div>
                    </div>
                  </Link>
                  <div className='content-start items-start justify-center flex flex-col gap-5 h-min overflow-hidden p-0 relative w-full'>
                    <div className='flex flex-col flex-shrink-0 justify-start flex-none h-auto w-full relative whitespace-pre-wrap break-words outline-none transform-none opacity-100'>
                      <p className='text-base text-[#0d0d0d80] leading-[1.4em] font-normal font-Plus_Jakarta_Sans'>{data.postedOn}</p>
                    </div>
                    <div className='flex flex-col justify-start flex-none h-auto w-full relative whitespace-pre-wrap break-words outline-none transform-none opacity-100'>
                      <h5 className='text-2xl text-[#0d0d0d] leading-[1.2em] font-medium font-Plus_Jakarta_Sans'>{data.blogHeading}</h5>
                    </div>
                    <div className=''>
                      <Link href={`/blog/${data.slug}`} className="w-max flex flex-col justify-start bg-[#0d0d0d] text-[#e9e9e7] transform transition-all duration-500 ease-out px-5 py-[10px] hover:tracking-[0.08em] hover:bg-[#EB5939]">
                        <div className="w-auto">
                          <p className="text-sm leading-[1.1em] font-Plus_Jakarta_Sans font-medium">READ MORE</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page;