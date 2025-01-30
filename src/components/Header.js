import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';

const Header = ({ textColor }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='w-full fixed top-0 left-0 z-20'>
      <div className='contents'>
        <header className='w-full relative py-4 md:py-[30px] px-4 md:px-10 flex flex-row items-center justify-center flex-nowrap gap-[10px] overflow-hidden backdrop-blur-[10px] opacity-100'>
          <div className='relative opacity-100 flex flex-row items-center justify-center gap-[30px] flex-nowrap grow max-w-[1200px] w-[1px] overflow-hidden p-0'>
            <div className='relative flex justify-center items-center flex-row gap-5 p-0 w-min	h-min overflow-hidden'>
              <Link href='/' className='relative overflow-visible w-[180px] md:w-[142px] aspect-3.55/1 flex justify-center items-center gap-2'>
                <div className='absolute inset-0'>
                  <img className='block w-full h-full rounded-inherit object-center object-cover' src={textColor === '#e9e9e7'? 'https://framerusercontent.com/images/J4zFQPQvdzCcM8cbsgUWye4TiQE.png' : 'https://framerusercontent.com/images/5iIrc0JRCKsG14DhG4kBtQPzXTs.png'} />
                </div>
              </Link>
            </div>
            <div className='hidden md:relative md:flex grow flex-row items-center justify-end gap-[10px] flex-nowrap h-min overflow-hidden p-0 w-[1px]'>
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
                <Link href='/building' className='relative flex flex-row flex-nowrap items-center justify-center gap-[10px] h-min w-min overflow-hidden px-2 py-[5px] group'>
                  <div className='bg-[#eb5939] group-hover:w-auto group-hover:left-0 transform transition-all duration-500 ease-in-out origin-center group-hover:translate-x-1 group-hover:translate-y-0 group-hover:translate-z-0 flex items-center justify-center gap-2 h-full w-0 absolute top-0 -left-12 overflow-hidden p-1 z-10'>
                    <div className="flex flex-col justify-start relative h-auto w-auto whitespace-pre outline-none flex-shrink-0 opacity-100">
                      <p className='text-[#FFF] text-sm font-semibold font-Plus_Jakarta_Sans'>BUILDING</p>
                    </div>
                  </div>
                  <div className='flex flex-col justify-start relative h-auto w-auto whitespace-pre outline-none flex-shrink-0 opacity-100'>
                    <p style={{ color: textColor }} className='text-sm font-semibold font-Plus_Jakarta_Sans'>BUILDING</p>
                  </div>
                </Link>
              </div>
              <div className='opacity-100 h-auto w-auto relative'>
                <Link href='/books' className='relative flex flex-row flex-nowrap items-center justify-center gap-[10px] h-min w-min overflow-hidden px-2 py-[5px] group'>
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
                <Link href='/newsletters' className='relative flex flex-row flex-nowrap items-center justify-center gap-[10px] h-min w-min overflow-hidden px-2 py-[5px] group'>
                  <div className='bg-[#eb5939] group-hover:w-auto group-hover:left-0 transform transition-all duration-500 ease-in-out origin-center group-hover:translate-x-1 group-hover:translate-y-0 group-hover:translate-z-0 flex items-center justify-center gap-2 h-full w-0 absolute top-0 -left-12 overflow-hidden p-1 z-10'>
                    <div className="flex flex-col justify-start relative h-auto w-auto whitespace-pre outline-none flex-shrink-0 opacity-100">
                      <p className='text-[#FFF] text-sm font-semibold font-Plus_Jakarta_Sans'>NEWSLETTERS</p>
                    </div>
                  </div>
                  <div className='flex flex-col justify-start relative h-auto w-auto whitespace-pre outline-none flex-shrink-0 opacity-100'>
                    <p style={{ color: textColor }} className='text-sm font-semibold font-Plus_Jakarta_Sans'>NEWSLETTERS</p>
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
            <div className="md:hidden ml-auto">
              <button 
                className="p-2 rounded-lg hover:bg-gray-100"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke={textColor} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
            <div className="hidden md:flex flex-none h-auto relative w-auto">
              <Link href="/connect" className={`${textColor === '#e9e9e7' ? 'text-[#0d0d0d]' : 'text-[#e9e9e7]'} rounded-[50px] w-max flex flex-col justify-start transform transition-all duration-500 ease-out px-5 py-[10px] hover:tracking-[0.08em] hover:text-[#E9E9E7] hover:bg-[#EB5939] bg-[${textColor}]`}>
                <div className="w-auto">
                  <p className="text-sm leading-[1.1em] font-Plus_Jakarta_Sans font-medium">LET'S TALK</p>
                </div>
              </Link>
            </div>
          </div>
        </header>
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden fixed inset-x-0 top-16 bg-white/95 backdrop-blur-lg shadow-lg py-4 px-4`}>
          <nav className="flex flex-col space-y-3">
            <MobileNavLink href="/" text="HOME" />
            <MobileNavLink href="/about" text="ABOUT" />
            <MobileNavLink href="/work" text="WORKS" />
            <MobileNavLink href="/building" text="BUILDING" />
            <MobileNavLink href="/books" text="EBOOKS" />
            <MobileNavLink href="/newsletters" text="NEWSLETTERS" />
            <MobileNavLink href="/sessions" text="LIVE SESSIONS" />
            
            <Link 
              href="/connect" 
              className="mt-4 bg-[#EB5939] text-white rounded-[50px] w-full text-center py-3 px-6 font-semibold hover:bg-opacity-90 transition-colors"
            >
              LET'S TALK
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

const MobileNavLink = ({ href, text }) => (
  <Link href={href} className="py-3 px-4 rounded-lg active:bg-gray-100 transition-colors">
    <p className="text-[#0d0d0d] text-base font-semibold font-Plus_Jakarta_Sans">
      {text}
    </p>
  </Link>
);

export default Header;