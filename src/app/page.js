'use client';
import Header from "@/components/Header";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { profolio, companiesData } from "@/server/data";

export default function Home() {
  const [headerColor, setHeaderColor] = useState("#e9e9e7");
  const [open, setOpen] = useState(0)

  const sections = [
    { id: "partOne", color: "#e9e9e7" },
    { id: "partTwo", color: "#0d0d0d" },
    { id: "partThree", color: "#e9e9e7" },
    { id: "partFour", color: "#0d0d0d" },
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        const headerHeight = 50;
        const scrollPosition = window.scrollY;
  
        sections.forEach((section) => {
          const element = document.getElementById(section.id);
          if (element) {
            const sectionTop = element.offsetTop;
            const sectionHeight = element.offsetHeight;
  
            if (
              scrollPosition >= sectionTop - headerHeight &&
              scrollPosition < sectionTop + sectionHeight - headerHeight
            ) {
              setHeaderColor(section.color);
            }
          }
        });
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [sections]);

  return (
    <div className="">
      <Header textColor={headerColor} />
      {/* Part ONE */}
      <div id="partOne" className="relative">
        <div>
          <img className="h-[95vh] w-full relative object-cover" src="https://res.cloudinary.com/ddtfebvov/image/upload/v1735629588/uoGweUB1Hmu5gOVlOQ7RI0QXup8_rf6xoh.avif" />
        </div>
        <div className="flex flex-none flex-row flex-nowrap items-center justify-center gap-2 bg-transparent h-full w-full overflow-hidden lg:md:px-10 px-5 lg:md:pt-[100px] pt-[60px] lg:md:pb-[50px] pb-[30px] absolute z-10 lg:md:top-0 top-[52px]">
          <div className="flex flex-nowrap lg:md:flex-row flex-col-reverse items-end lg:md:justify-between justify-center lg:md:gap-[100px] gap-3 flex-[1_0_0px] h-full max-w-[1200px] overflow-hidden p-0 relative w-[1px]">
            <div className="lg:md:hidden relative w-full flex justify-start">
              <Link href="/connect" className="w-max flex flex-col justify-start bg-transparent border border-[#E9E9E7] text-[#E9E9E7] transform transition-all duration-700 ease-out px-5 py-[2px] rounded-full hover:tracking-widest hover:text-[#E9E9E7] hover:bg-[#EB5939] hover:border-[#EB5939]">
                <div className="w-auto flex gap-[10px]">
                  <p className="text-sm font-Plus_Jakarta_Sans ">LET'S TALK</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256" focusable="false" fill='#E9E9E7'><g color='#E9E9E7' weight="light"><path d="M198,64V168a6,6,0,0,1-12,0V78.48L68.24,196.24a6,6,0,0,1-8.48-8.48L177.52,70H88a6,6,0,0,1,0-12H192A6,6,0,0,1,198,64Z"></path></g></svg>
                </div>
              </Link>
            </div>
            <div className='flex justify-start lg:md:w-auto w-full gap-5'>
              <Link 
                href="https://www.linkedin.com/in/shivam--maurya" 
                target="_blank"
                className='cursor-pointer relative inline-block text-base text-[#E9E9E7] font-medium hover:text-[#EB5939] after:content-[""] after:block after:h-[1px] after:w-0 after:bg-[#EB5939] after:transition-all after:duration-500 after:ease-out hover:after:w-full'
              >
                LINKEDIN
              </Link>
              <Link 
                href="https://topmate.io/shivam_maurya10" 
                target="_blank"
                className='cursor-pointer relative inline-block text-base text-[#E9E9E7] font-medium hover:text-[#EB5939] after:content-[""] after:block after:h-[1px] after:w-0 after:bg-[#EB5939] after:transition-all after:duration-500 after:ease-out hover:after:w-full'
              >
                TOPMATE
              </Link>
              <Link 
                href="https://www.instagram.com/shivam_maurya_28/" 
                target="_blank"
                className='cursor-pointer relative inline-block text-base text-[#E9E9E7] font-medium hover:text-[#EB5939] after:content-[""] after:block after:h-[1px] after:w-0 after:bg-[#EB5939] after:transition-all after:duration-500 after:ease-out hover:after:w-full'
              >
                INSTAGRAM
              </Link>
            </div>
            <div className="flex flex-col gap-[30px] overflow-hidden lg:md:w-[550px] w-full">
              <div className="flex flex-col gap-[10px]">
                <h1 className="lg:md:text-[42px] text-[32px] leading-[1.2em] font-medium font-Plus_Jakarta_Sans text-[#E9E9E7]">AI Innovator and Mentor, Crafting Impactful Ideas and Careers from India</h1>
                <h2 className="text-base font-Plus_Jakarta_Sans text-[#E9E9E7]">Hi, I'm Shivam Maurya—a tech enthusiast, AI engineer, and mentor passionate about transforming ideas into impactful solutions. From creating cutting-edge AI projects to guiding aspiring minds in Python and data science, my journey is all about blending innovation with expertise. Let's connect to build, innovate, and inspire!</h2>
              </div>
              <div className="relative w-full">
                <Link href="/" className="w-max flex flex-col justify-start bg-[#E9E9E7] text-[#0d0d0d] transform transition-all duration-500 ease-out px-5 py-[10px] hover:tracking-[0.08em] hover:text-[#E9E9E7] hover:bg-[#EB5939]">
                  <div className="w-auto">
                    <p className="text-sm leading-[1.1em] font-Plus_Jakarta_Sans font-medium">EXPLORE WORKS</p>
                  </div>
                </Link>
              </div>
              <div className="hidden relative w-full lg:md:flex justify-end">
                <Link href="/connect" className="w-max flex flex-col justify-start bg-transparent border border-[#E9E9E7] text-[#E9E9E7] transform transition-all duration-700 ease-out px-5 py-[2px] rounded-full hover:tracking-widest hover:text-[#E9E9E7] hover:bg-[#EB5939] hover:border-[#EB5939]">
                  <div className="w-auto flex gap-[10px]">
                    <p className="text-sm font-Plus_Jakarta_Sans ">LET'S TALK</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256" focusable="false" fill='#E9E9E7'><g color='#E9E9E7' weight="light"><path d="M198,64V168a6,6,0,0,1-12,0V78.48L68.24,196.24a6,6,0,0,1-8.48-8.48L177.52,70H88a6,6,0,0,1,0-12H192A6,6,0,0,1,198,64Z"></path></g></svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Part TWO */}
      <div id="partTwo" className="flex flex-none flex-row flex-nowrap items-center justify-center gap-2 bg-[#e9e9e7] h-min w-full overflow-hidden lg:md:p-[100px_40px] p-[60px_20px] relative">
        <div className="flex flex-col flex-nowrap items-center justify-center lg:md:gap-[100px] gap-[60px] flex-[1_0_0px] h-min max-w-[1200px] overflow-hidden p-0 relative w-[1px]">
          <div className="flex lg:md:flex-row flex-col flex-nowrap items-start lg:md:justify-center justify-start lg:md:gap-[50px] gap-[30px] h-min overflow-hidden p-0 relative w-full">
            <div className="flex-none h-auto relative whitespace-pre-wrap lg:md:w-[27%] w-auto break-words">
              <p className="text-lg text-[#0d0d0d] leading-[1.2em] tracking-wider font-medium font-Plus_Jakarta_Sans">ABOUT ME</p>
            </div>
            <div className="flex lg:md:flex-row flex-col-reverse flex-nowrap items-start justify-center gap-[30px] h-min overflow-hidden p-0 relative lg:md:w-[1px] w-full flex-1">
              <div className="flex flex-col flex-nowrap items-start justify-center gap-[30px] h-min overflow-hidden p-0 relative lg:md:w-[1px] w-full flex-1">
                <div className="flex flex-col justify-start flex-none h-auto relative whitespace-pre-wrap w-full break-words outline-none flex-shrink-0 transform-none">
                  <h2 className="lg:md:text-[36px] text-[28px] text-[#0d0d0d] leading-[1.2em] font-medium font-Plus_Jakarta_Sans">Ready to Turn Your Ideas into Impact? Let's Make It Happen with AI.</h2>
                </div>
                <div className="flex flex-col justify-start flex-none h-auto relative whitespace-pre-wrap w-full break-words outline-none flex-shrink-0 transform-none">
                  <p className="text-base text-[#0d0d0d] leading-[1.4em] font-normal font-Plus_Jakarta_Sans">I'm Shivam Maurya—an AI engineer, mentor, and entrepreneur passionate about driving innovation and creating impactful solutions. With years of experience in AI, data science, and technology, I specialize in transforming ideas into real-world applications that solve complex problems. Whether it's building cutting-edge AI systems, mentoring aspiring tech leaders, or helping startups streamline their processes, my goal is to inspire growth, foster creativity, and make technology accessible. I'm all about pushing boundaries and helping you leverage the power of AI to bring your ideas to life.</p>
                </div>
                <div className="flex-none h-auto relative w-auto">
                  <Link href="/about" className="w-max flex flex-col justify-start bg-transparent border border-[#0d0d0d] text-[#0d0d0d] transform transition-all duration-700 ease-out px-5 py-[2px] rounded-full hover:tracking-widest hover:text-[#E9E9E7] hover:bg-[#EB5939] hover:border-[#EB5939] group">
                    <div className="w-auto flex gap-[10px]">
                      <p className="text-sm font-Plus_Jakarta_Sans ">MORE ABOUT ME</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256" focusable="false" fill='#0d0d0d' className="group-hover:fill-[#E9E9E7] group-hover:text-[#E9E9E7]"><g color='#0d0d0d' weight="light"><path d="M198,64V168a6,6,0,0,1-12,0V78.48L68.24,196.24a6,6,0,0,1-8.48-8.48L177.52,70H88a6,6,0,0,1,0-12H192A6,6,0,0,1,198,64Z"></path></g></svg>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="contents">
                <div className="aspect-[1/1] flex-none h-[200px] overflow-visible relative w-[200px]">
                  <div className="absolute rounded-inherit inset-0">
                    <img loading="lazy" className="block w-full h-full rounded-inherit object-center object-cover" src="https://res.cloudinary.com/ddtfebvov/image/upload/v1735989459/IMG_8531_aerspw.webp" alt="imgself" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#0d0d0d] flex-none h-px overflow-hidden relative w-full"></div>
          <div className="flex lg:md:flex-row flex-col flex-nowrap items-start justify-center lg:md:gap-[50px] gap-[30px] h-min overflow-hidden p-0 relative w-full">
            <div className="flex items-center flex-1 flex-col gap-2.5 h-min justify-center overflow-hidden p-0 relative lg:md:w-[1px] w-full">
              <div className="outline-none flex flex-col justify-start flex-shrink-0 transform-none flex-none h-auto relative whitespace-pre-wrap w-full break-words">
                <h2 className="text-2xl text-[#0d0d0d] leading-[1.2em] font-Plus_Jakarta_Sans font-medium">AI Engineer</h2>
              </div>
              <div className="flex-none h-auto relative whitespace-pre-wrap w-full break-words">
                <h3 className="text-base text-[#0d0d0d] leading-[1.4em] font-Plus_Jakarta_Sans font-normal">Crafting practical AI solutions that address real-world challenges and unlock new opportunities.</h3>
              </div>
            </div>
            <div className="flex items-center flex-1 flex-col gap-2.5 h-min justify-center overflow-hidden p-0 relative lg:md:w-[1px] w-full">
              <div className="outline-none flex flex-col justify-start flex-shrink-0 transform-none flex-none h-auto relative whitespace-pre-wrap w-full break-words">
                <h2 className="text-2xl text-[#0d0d0d] leading-[1.2em] font-Plus_Jakarta_Sans font-medium">Enterpreneur</h2>
              </div>
              <div className="flex-none h-auto relative whitespace-pre-wrap w-full break-words">
                <h3 className="text-base text-[#0d0d0d] leading-[1.4em] font-Plus_Jakarta_Sans font-normal">Building ventures that bridge technology and business, with a focus on creating meaningful, scalable products.</h3>
              </div>
            </div>
            <div className="flex items-center flex-1 flex-col gap-2.5 h-min justify-center overflow-hidden p-0 relative lg:md:w-[1px] w-full">
              <div className="outline-none flex flex-col justify-start flex-shrink-0 transform-none flex-none h-auto relative whitespace-pre-wrap w-full break-words">
                <h2 className="text-2xl text-[#0d0d0d] leading-[1.2em] font-Plus_Jakarta_Sans font-medium">AI Consultant</h2>
              </div>
              <div className="flex-none h-auto relative whitespace-pre-wrap w-full break-words">
                <h3 className="text-base text-[#0d0d0d] leading-[1.4em] font-Plus_Jakarta_Sans font-normal">Helping businesses unlock the potential of AI, offering tailored strategies to enhance operations and foster growth.</h3>
              </div>
            </div>
            <div className="flex items-center flex-1 flex-col gap-2.5 h-min justify-center overflow-hidden p-0 relative lg:md:w-[1px] w-full">
              <div className="outline-none flex flex-col justify-start flex-shrink-0 transform-none flex-none h-auto relative whitespace-pre-wrap w-full break-words">
                <h2 className="text-2xl text-[#0d0d0d] leading-[1.2em] font-Plus_Jakarta_Sans font-medium">Tech Mentor</h2>
              </div>
              <div className="flex-none h-auto relative whitespace-pre-wrap w-full break-words">
                <h3 className="text-base text-[#0d0d0d] leading-[1.4em] font-Plus_Jakarta_Sans font-normal">Empowering the next generation of innovators by sharing knowledge in Python, data science, and AI.</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Part THREE */}
      <div id="partThree" className="flex-none bg-[#0d0d0d] flex flex-row gap-2.5 h-min justify-center overflow-hidden lg:md:px-10 px-5 lg:md:py-[100px] py-[60px] relative w-full">
        <div className="flex items-center flex-[1_0_0px] flex-col lg:md:gap-[50px] gap-[40px] h-min justify-center max-w-[1200px] overflow-hidden p-0 relative w-[1px]">
          <div className="flex lg:md:flex-row flex-col justify-between gap-[30px] h-min overflow-hidden px-0 relative w-full">
            <div className="outline-none flex flex-col justify-start flex-shrink-0 transform-none flex-none h-auto relative lg:md:w-[500px] w-full whitespace-pre-wrap break-words">
              <h2 className="lg:md:text-[36px] text-[28px] text-[#e9e9e7] leading-[1.2em] font-Plus_Jakarta_Sans font-medium">Take a Look at My AI Portfolio</h2>
            </div>
            <div className="flex-none h-auto relative w-auto">
              <Link href="/" className="w-max flex flex-col justify-start bg-[#E9E9E7] text-[#000] transform transition-all duration-700 ease-out px-5 py-[10px] hover:tracking-widest hover:text-[#E9E9E7] hover:bg-[#EB5939]">
                <div className="w-auto">
                  <p className="text-sm font-Plus_Jakarta_Sans ">BROWSE ALL</p>
                </div>
              </Link>
            </div>
          </div>
          <div className="bg-[rgba(233,233,231,0.5)] flex-none h-[1px] overflow-hidden relative w-full"></div>
          <div className="flex items-center flex-none flex-col gap-[40px] h-min justify-center overflow-hidden p-0 relative w-full">
            {profolio.map((data, index) => (<>
              <div key={data.id} className="flex-none h-auto relative w-full group">
                <div className="contents">
                  <div className="flex items-start cursor-pointer lg:md:flex-row flex-col-reverse flex-nowrap lg:md:gap-[50px] gap-[40px] h-min justify-center overflow-hidden p-0 relative w-full opacity-100">
                    <div className="flex items-start self-stretch flex-col flex-nowrap h-auto justify-between gap-[30px] overflow-hidden p-0 relative lg:md:w-1/3 w-full">
                      <div className="flex items-center flex-col flex-nowrap gap-5 h-min justify-center overflow-hidden p-0 relative w-full">
                        <div className="flex items-center flex-col flex-nowrap gap-2 h-min justify-center overflow-hidden p-0 relative w-full">
                          <div className="flex-none h-auto relative whitespace-pre-wrap w-full break-words outline-none flex flex-col justify-start flex-shrink-0 transform-none opacity-100">
                            <h2 className="lg:md:text-[32px] text-[24px] text-[#e9e9e7] leading-[1.2em] font-medium font-Plus_Jakarta_Sans">{data.heading}</h2>
                          </div>
                          <div className="flex-none h-auto relative whitespace-pre-wrap w-full break-words outline-none flex flex-col justify-start flex-shrink-0 transform-none opacity-100">
                            <h3 className="lg:md:text-[20px] text-[18px] text-[#e9e9e7] leading-[1.4em] font-normal font-Plus_Jakarta_Sans">{data.subHeading}</h3>
                          </div>
                        </div>
                        <div className="flex-none h-auto relative whitespace-pre-wrap w-full break-words outline-none flex flex-col justify-start flex-shrink-0 transform-none opacity-100">
                          <p className="text-[20px] text-[#e9e9e780] leading-[1.4em] font-normal font-Plus_Jakarta_Sans">{data.date}</p>
                        </div>
                      </div>
                      <div className="flex-none h-auto relative w-auto">
                      <Link href={`/`} className="w-max flex flex-col justify-start bg-transparent border border-[#E9E9E7] text-[#E9E9E7] transform transition-all duration-700 ease-out px-5 py-[2px] rounded-full hover:tracking-widest hover:text-[#E9E9E7] hover:bg-[#EB5939] hover:border-[#EB5939]">
                        {/*<Link href={`/work/${data.link}`} className="w-max flex flex-col justify-start bg-transparent border border-[#E9E9E7] text-[#E9E9E7] transform transition-all duration-700 ease-out px-5 py-[2px] rounded-full hover:tracking-widest hover:text-[#E9E9E7] hover:bg-[#EB5939] hover:border-[#EB5939]">*/}
                          <div className="w-auto flex gap-[10px]">
                            <p className="text-sm font-Plus_Jakarta_Sans ">This section is still in Updation</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256" focusable="false" fill='#E9E9E7'><g color='#E9E9E7' weight="light"><path d="M198,64V168a6,6,0,0,1-12,0V78.48L68.24,196.24a6,6,0,0,1-8.48-8.48L177.52,70H88a6,6,0,0,1,0-12H192A6,6,0,0,1,198,64Z"></path></g></svg>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="flex items-center aspect-[1.6/1] flex-1 flex-row gap-2.5 justify-center overflow-hidden p-0 relative lg:md:w-[1px] w-full opacity-100">
                      <div className="flex-none h-[110%] overflow-hidden relative w-[110%] transform-none origin-[50%_50%_0px] group-hover:scale-[0.92] duration-700">
                        <div className="absolute rounded-inherit top-0 right-0 bottom-0 left-0">
                          <img sizes="calc(max(min(1100px, 100vw) * 0.6818 - 50px, 0px) * 1.1)" className="block w-full h-full rounded-inherit object-center object-cover" src={data.imageLink} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {profolio.length !== index + 1 && <div className="bg-[rgba(233,233,231,0.5)] flex-none h-[1px] overflow-hidden relative w-full"></div>}
            </>))}
          </div>
        </div>
      </div>
      {/* Part Four */}
      <div id="partFour" className="flex flex-none flex-row flex-nowrap items-center justify-center gap-2 bg-[#e9e9e7] h-min w-full overflow-hidden lg:md:p-[100px_40px] p-[60px_20px] relative">
        <div className="flex flex-nowrap lg:md:flex-row flex-col items-start justify-center gap-[50px] flex-[1_0_0px] h-min max-w-[1200px] overflow-hidden p-0 relative lg:md:w-[1px] w-full">
          <div className="flex-1 h-auto relative whitespace-pre-wrap lg:md:w-[1px] w-full break-words outline-none flex flex-col justify-start flex-shrink-0 transform-none">
            <h2 className="lg:md:text-[36px] text-[28px] text-[#0d0d0d] leading-[1.2em] font-medium font-Plus_Jakarta_Sans">Graduated with a Bachelor of Applications from the School of Management Sciences in my hometown, Varanasi, a tier-3 city.</h2>
          </div>
          <div className="flex items-center flex-1 flex-col lg:md:gap-8 gap-[30px] h-min justify-center overflow-hidden p-0 relative lg:md:w-[1px] w-full">
            <div className="outline-none flex flex-col justify-start flex-shrink-0 transform-none">
              <p className="text-base text-[#0d0d0d] leading-[1.4em] font-normal font-Plus_Jakarta_Sans">With 4 years of experience, I've worked on personal projects, supported startups, and contributed to large MNCs. My journey has involved developing AI solutions, building innovative tech products, and helping businesses optimize their operations. Whether working on small-scale projects or large corporate initiatives, I've gained valuable insights that allow me to adapt and create meaningful impact across different sectors.</p>
            </div>
            <div className="flex-none h-auto relative whitespace-pre-wrap w-full break-words word-wrap outline-none flex flex-col justify-start flex-shrink-0 transform-none">
              <h3 className="lg:md:text-2xl text-[20px] text-[#0d0d0d] leading-[1.2em] font-medium font-Plus_Jakarta_Sans">Here are some of the companies I've had the privilege to work with:</h3>
            </div>
            <div className="flex-none h-auto relative w-full">
              <div className="flex items-center flex-col flex-wrap-nowrap gap-0 h-min justify-center overflow-hidden p-0 relative w-full transform-none transform-origin-[50%_50%_0px]">
                {companiesData.map((data, index) => {
                  const isOpen = open === index;
                  const contentRef = useRef(null);

                  return (<div key={data.id} className={`flex-none h-auto relative w-full ${open === index ? 'transform transition-all' : 'transform-none'} duration-500  transform-origin-[50%_50%_0px]`} onClick={() => { open === index ? setOpen(null) : setOpen(index) }}>
                    <div className={`flex cursor-pointer flex-col gap-0 h-min justify-center overflow-hidden p-0 relative ${open === index ? 'bg-[#EB5939]' : 'bg-transparent'} w-full transform-none transform-origin-[50%_50%_0px] opacity-100`}>
                      <div className="flex-none items-start flex flex-row gap-2.5 h-min justify-center overflow-hidden p-2.5 relative w-full transform-none transform-origin-[50%_50%_0px] opacity-100">
                        <div className="outline-none flex flex-col justify-start flex-shrink-0 transform-none transform-origin-[50%_50%_0px] opacity-100 flex-[1_0_0px] h-auto relative whitespace-pre-wrap w-[1px] break-words">
                          <h2 className={`lg:md:text-xl text-lg ${open === index ? 'text-[#e9e9e7]' : 'text-[#0d0d0d]'} duration-500 leading-[1.2em] font-medium font-Plus_Jakarta_Sans`}>{data.companyName}</h2>
                        </div>
                        <div className={`items-center cursor-pointer flex flex-none flex-row flex-nowrap gap-2.5 h-[44px] justify-center overflow-hidden p-0 relative w-[44px] will-change-[none,_transform] ${open === index ? 'bg-[#e9e9e7] transform' : 'bg-transparent transform-none'} duration-700 ease-out rounded-full transform-origin-[50%_50%_0px]`} onClick={() => { open === index ? setOpen(null) : setOpen(index) }}>
                          <div className={`flex-none h-[28px] relative w-[28px] ${open === index ? 'rotate-180 transform' : 'transform: rotate-0 transform-none'} transform-origin-[50%_50%_0px] will-change-transform duration-500`}>
                            <div className="contents">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" fill={open === index ? '#EB5939' : '#0d0d0d'}><g color={open === index ? '#EB5939' : '#0d0d0d'} weight="light"><path d="M198,64V168a6,6,0,0,1-12,0V78.48L68.24,196.24a6,6,0,0,1-8.48-8.48L177.52,70H88a6,6,0,0,1,0-12H192A6,6,0,0,1,198,64Z"></path></g></svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={`flex-none h-[1px] overflow-hidden relative w-full duration-500 ${open === index ? 'bg-[#E9E9E780]' : 'bg-[#0d0d0d80]'} transform-none transform-origin-[50%_50%_0px] opacity-100`} />
                      <div
                        ref={contentRef}
                        style={{
                          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
                          transition: 'max-height 0.5s ease',
                        }}
                        className={`overflow-hidden`}
                      >
                        <div className={`flex flex-col items-center justify-center flex-none flex-wrap-none gap-0 overflow-hidden p-2 relative w-full transform-none origin-center`}>
                          <div className="flex flex-col items-start flex-none flex-shrink-0 h-auto relative whitespace-pre-wrap w-full break-words overflow-wrap-anywhere transform-none origin-center outline-none">
                            <h5 className="text-base text-[#e9e9e7] leading-[1.4em] font-Plus_Jakarta_Sans font-normal">{data.position}</h5>
                          </div>
                          <div className="flex flex-col items-start flex-none flex-shrink-0 h-auto relative whitespace-pre-wrap w-full break-words overflow-wrap-anywhere transform-none origin-center outline-none">
                            <h5 className="text-base text-[#e9e9e7] leading-[1.4em] font-Plus_Jakarta_Sans font-normal">{data.activeYears}</h5>
                          </div>
                          <div className="flex flex-col items-start flex-none flex-shrink-0 h-auto relative whitespace-pre-wrap w-full break-words overflow-wrap-anywhere outline-none transform-none origin-center">
                            <p className="text-base text-[#e9e9e7] tracking-[-0.02em] leading-[1.6em] font-Plus_Jakarta_Sans font-normal">{data.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>)
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// ${open === index? "block animate-custom-transform-Down" : "hidden animate-custom-transform-Up"} 