import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-[#0D0D0D] flex flex-row flex-nowrap items-center justify-center gap-[10px] h-min overflow-hidden p-[100px_40px_30px] relative w-full'>
      <div className='flex flex-col flex-nowrap items-center justify-center gap-[30px] h-min max-w-[1200px] w-full overflow-hidden p-0 relative'>
        <div className='flex flex-col flex-nowrap items-start justify-center gap-[10px] h-min overflow-visible p-0 relative w-full'>
          <div className='flex flex-col flex-nowrap items-start justify-center gap-0 h-min overflow-hidden p-0 relative w-full'>
            <div className='text-xl text-[#E9E9E7] leading-[1.4em] font-normal font-Plus_Jakarta_Sans'>Have an idea?</div>
            <div className='text-4xl text-[#E9E9E7] font-Plus_Jakarta_Sans font-medium'>Let’s rock with me</div>
          </div>
          <div className='w-full h-[1px] bg-[#E9E9E7] mt-[10px]' />
          <div>
            <p className='text-[84px] text-[#E9E9E7] font-Plus_Jakarta_Sans font-medium'>
              <a className='hover:text-[#EB5939] cursor-pointer'>Contact Me</a>
            </p>
          </div>
        </div>
        <div className='w-full h-[1px] bg-[#E9E9E7]' />
        <div className='w-full flex justify-between items-start'>
          <div className='relative flex justify-center items-center flex-row gap-5 p-0 w-min	h-min overflow-hidden'>
            <Link href='/' className='relative overflow-visible w-[142px] aspect-3.55/1 flex justify-center items-center gap-2'>
              <img className='w-11 h-11' src='https://res.cloudinary.com/ddtfebvov/image/upload/v1735989459/IMG_8531_aerspw.webp' alt='logo' />
              <div className='flex flex-col justify-center'>
                <span className='text-[#E9E9E7] font-medium text-xl leading-4'>SHIVAM</span>
                <span className='text-[#EB5939] font-medium text-xl'>MAURYA.</span>
              </div>
            </Link>
          </div>
          <div className='flex flex-col items-center'>
            <div className='text-base text-[#E9E9E7] font-Plus_Jakarta_Sans'>Based in Varanasi</div>
            <div className='text-base text-[#E9E9E7] font-Plus_Jakarta_Sans'>INDIA</div>
          </div>
          <div className='flex gap-5'>
            <span className='cursor-pointer relative inline-block text-base text-[#E9E9E7] font-medium hover:text-[#EB5939] after:content-[""] after:block after:h-[1px] after:w-0 after:bg-[#EB5939] after:transition-all after:duration-500 after:ease-out hover:after:w-full'>TWITTER</span>
            <span className='cursor-pointer relative inline-block text-base text-[#E9E9E7] font-medium hover:text-[#EB5939] after:content-[""] after:block after:h-[1px] after:w-0 after:bg-[#EB5939] after:transition-all after:duration-500 after:ease-out hover:after:w-full'>BEHANCE</span>
            <span className='cursor-pointer relative inline-block text-base text-[#E9E9E7] font-medium hover:text-[#EB5939] after:content-[""] after:block after:h-[1px] after:w-0 after:bg-[#EB5939] after:transition-all after:duration-500 after:ease-out hover:after:w-full'>DRIBBLE</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;