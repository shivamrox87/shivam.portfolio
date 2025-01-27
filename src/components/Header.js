import Link from 'next/link';
import React from 'react';

const Header = ({ textColor }) => {
  return (
    <div className='w-full fixed top-0 left-0 z-20'>
      <div className='contents'>
        <header className='w-full relative py-[30px] px-10 flex flex-row items-center justify-center flex-nowrap gap-[10px] overflow-hidden backdrop-blur-[10px] opacity-100'>
          <div className='relative opacity-100 flex flex-row items-center justify-center gap-[30px] flex-nowrap grow max-w-[1200px] w-[1px] overflow-hidden p-0'>
            <div className='relative flex justify-center items-center flex-row gap-5 p-0 w-min	h-min overflow-hidden'>
              <Link href='/' className='relative overflow-visible w-[142px] aspect-3.55/1 flex justify-center items-center gap-2'>
                <div className='absolute inset-0'>
                  <img className='block w-full h-full rounded-inherit object-center object-cover' src={textColor === '#e9e9e7'? 'https://framerusercontent.com/images/J4zFQPQvdzCcM8cbsgUWye4TiQE.png' : 'https://framerusercontent.com/images/5iIrc0JRCKsG14DhG4kBtQPzXTs.png'} />
                </div>
              </Link>
            </div>
            <div className='relative flex grow flex-row items-center justify-end gap-[10px] flex-nowrap h-min overflow-hidden p-0 w-[1px]'>
              <div className='opacity-100 h-auto w-auto relative'>
                <Link href='/' className='relative flex flex-row flex-nowrap items-center justify-center gap-[10px] h-min w-min overflow-hidden px-2 py-[5px] group'>
                  <div className='bg-[#eb5939] group-hover:w-auto group-hover:left-0 transform transition-all duration-700 ease-out origin-center group-hover:translate-x-0 group-hover:translate-y-0 group-hover:translate-z-0 flex items-center justify-center gap-2 h-full w-0 absolute top-0 -left-12 overflow-hidden px-2 py-[5px] z-10'>
                    <div className="flex flex-col justify-start relative h-auto w-auto whitespace-pre outline-none flex-shrink-0 opacity-100" style={{ transform: 'none', transformOrigin: '50% 50% 0' }}>
                      <p className='text-[#FFF] text-sm font-semibold font-Plus_Jakarta_Sans'>HOME</p>
                    </div>
                  </div>
                  <div className='flex flex-col justify-start relative h-auto w-auto whitespace-pre outline-none flex-shrink-0 opacity-100'>
                    <p style={{ color: textColor }} className='text-sm font-semibold font-Plus_Jakarta_Sans'>HOME</p>
                  </div>
                </Link>
              </div>
              <div className='opacity-100 h-auto w-auto relative'>
                <Link href='/about' className='relative flex flex-row flex-nowrap items-center justify-center gap-[10px] h-min w-min overflow-hidden px-2 py-[5px] group'>
                  <div className='bg-[#eb5939] group-hover:w-auto group-hover:left-0 transform transition-all duration-500 ease-in-out origin-center group-hover:translate-x-1 group-hover:translate-y-0 group-hover:translate-z-0 flex items-center justify-center gap-2 h-full w-0 absolute top-0 -left-12 overflow-hidden p-1 z-10'>
                    <div className="flex flex-col justify-start relative h-auto w-auto whitespace-pre outline-none flex-shrink-0 opacity-100" style={{ transform: 'none', transformOrigin: '50% 50% 0' }}>
                      <p className='text-[#FFF] text-sm font-semibold font-Plus_Jakarta_Sans'>ABOUT</p>
                    </div>
                  </div>
                  <div className='flex flex-col justify-start relative h-auto w-auto whitespace-pre outline-none flex-shrink-0 opacity-100'>
                    <p style={{ color: textColor }} className='text-sm font-semibold font-Plus_Jakarta_Sans'>ABOUT</p>
                  </div>
                </Link>
              </div>
              <div className='opacity-100 h-auto w-auto relative'>
                <Link href='/work' className='relative flex flex-row flex-nowrap items-center justify-center gap-[10px] h-min w-min overflow-hidden px-2 py-[5px] group'>
                  <div className='bg-[#eb5939] group-hover:w-auto group-hover:left-0 transform transition-all duration-500 ease-in-out origin-center group-hover:translate-x-1 group-hover:translate-y-0 group-hover:translate-z-0 flex items-center justify-center gap-2 h-full w-0 absolute top-0 -left-12 overflow-hidden p-1 z-10'>
                    <div className="flex flex-col justify-start relative h-auto w-auto whitespace-pre outline-none flex-shrink-0 opacity-100" style={{ transform: 'none', transformOrigin: '50% 50% 0' }}>
                      <p className='text-[#FFF] text-sm font-semibold font-Plus_Jakarta_Sans'>WORKS</p>
                    </div>
                  </div>
                  <div className='flex flex-col justify-start relative h-auto w-auto whitespace-pre outline-none flex-shrink-0 opacity-100'>
                    <p style={{ color: textColor }} className='text-sm font-semibold font-Plus_Jakarta_Sans'>WORKS</p>
                  </div>
                </Link>
              </div>
              <div className='opacity-100 h-auto w-auto relative'>
                <Link href='/blog' className='relative flex flex-row flex-nowrap items-center justify-center gap-[10px] h-min w-min overflow-hidden px-2 py-[5px] group'>
                  <div className='bg-[#eb5939] group-hover:w-auto group-hover:left-0 transform transition-all duration-500 ease-in-out origin-center group-hover:translate-x-1 group-hover:translate-y-0 group-hover:translate-z-0 flex items-center justify-center gap-2 h-full w-0 absolute top-0 -left-12 overflow-hidden p-1 z-10'>
                    <div className="flex flex-col justify-start relative h-auto w-auto whitespace-pre outline-none flex-shrink-0 opacity-100">
                      <p className='text-[#FFF] text-sm font-semibold font-Plus_Jakarta_Sans'>BLOG</p>
                    </div>
                  </div>
                  <div className='flex flex-col justify-start relative h-auto w-auto whitespace-pre outline-none flex-shrink-0 opacity-100'>
                    <p style={{ color: textColor }} className='text-sm font-semibold font-Plus_Jakarta_Sans'>BLOG</p>
                  </div>
                </Link>
              </div>
              <div className='opacity-100 h-auto w-auto relative'>
                <Link href='/ebooks' className='relative flex flex-row flex-nowrap items-center justify-center gap-[10px] h-min w-min overflow-hidden px-2 py-[5px] group'>
                  <div className='bg-[#eb5939] group-hover:w-auto group-hover:left-0 transform transition-all duration-500 ease-in-out origin-center group-hover:translate-x-1 group-hover:translate-y-0 group-hover:translate-z-0 flex items-center justify-center gap-2 h-full w-0 absolute top-0 -left-12 overflow-hidden p-1 z-10'>
                    <div className="flex flex-col justify-start relative h-auto w-auto whitespace-pre outline-none flex-shrink-0 opacity-100">
                      <p className='text-[#FFF] text-sm font-semibold font-Plus_Jakarta_Sans'>EBOOKS</p>
                    </div>
                  </div>
                  <div className='flex flex-col justify-start relative h-auto w-auto whitespace-pre outline-none flex-shrink-0 opacity-100'>
                    <p style={{ color: textColor }} className='text-sm font-semibold font-Plus_Jakarta_Sans'>EBOOKS</p>
                  </div>
                </Link>
              </div>
              <div className='opacity-100 h-auto w-auto relative'>
                <Link href='/sessions' className='relative flex flex-row flex-nowrap items-center justify-center gap-[10px] h-min w-min overflow-hidden px-2 py-[5px] group'>
                  <div className='bg-[#eb5939] group-hover:w-auto group-hover:left-0 transform transition-all duration-500 ease-in-out origin-center group-hover:translate-x-1 group-hover:translate-y-0 group-hover:translate-z-0 flex items-center justify-center gap-2 h-full w-0 absolute top-0 -left-12 overflow-hidden p-1 z-10'>
                    <div className="flex flex-col justify-start relative h-auto w-auto whitespace-pre outline-none flex-shrink-0 opacity-100">
                      <p className='text-[#FFF] text-sm font-semibold font-Plus_Jakarta_Sans'>LIVE SESSIONS</p>
                    </div>
                  </div>
                  <div className='flex flex-col justify-start relative h-auto w-auto whitespace-pre outline-none flex-shrink-0 opacity-100'>
                    <p style={{ color: textColor }} className='text-sm font-semibold font-Plus_Jakarta_Sans'>LIVE SESSIONS</p>
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex-none h-auto relative w-auto">
              <Link href="/book" className={`${textColor === '#e9e9e7' ? 'text-[#0d0d0d]' : 'text-[#e9e9e7]'} rounded-[50px] w-max flex flex-col justify-start transform transition-all duration-500 ease-out px-5 py-[10px] hover:tracking-[0.08em] hover:text-[#E9E9E7] hover:bg-[#EB5939] bg-[${textColor}]`}>
                <div className="w-auto">
                  <p className="text-sm leading-[1.1em] font-Plus_Jakarta_Sans font-medium">LET'S TALK</p>
                </div>
              </Link>
            </div>
          </div>
        </header>
      </div>
    </div>
  )
}

export default Header;