'use client';
import React, { useEffect, useRef, useState } from 'react'
import Header from '@/components/Header';
import { companiesData, playGround, tools } from '@/server/data';
import Link from 'next/link';

const AboutSide = () => {
    const [open, setOpen] = useState(0)
    const [headerColor, setHeaderColor] = useState("#0d0d0d");
    const [showPhoto, setShowPhoto] = useState(0);
    const contentRef = useRef(null);

    const sections = [
        { id: "partOne", color: "#0d0d0d" },
        { id: "partTwo", color: "#e9e9e7" },
        { id: "partThree", color: "#0d0d0d" },
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
        <>
            <Header textColor={headerColor} />
            <div className='flex-none lg:md:h-[100px] h-[85px] overflow-hidden relative w-full'></div>
            {/* Part one */}
            <div id="partOne" className='place-content-center items-center flex flex-none flex-row gap-2.5 h-min overflow-hidden lg:md:px-[40px] px-5 lg:md:py-[100px] py-[60px] relative w-full bg-gray-200'>
                <div className='content-start justify-center items-start flex flex-1 lg:md:flex-row flex-col gap-[50px] h-min max-w-[1200px] overflow-hidden p-0 relative lg:md:w-[1px] w-full'>
                    <div className='place-content-center items-center flex flex-1 flex-col gap-[30px] h-min overflow-hidden p-0 relative lg:md:w-[1px] w-full'>
                        <div className='outline-none flex flex-col justify-start flex-shrink-0 transform-none flex-[0_0_auto] h-auto relative whitespace-pre-wrap w-full break-words overflow-wrap-anywhere'>
                            <h1 className='lg:md:text-[140px] text-[60px] text-[#0d0d0d] leading-[1.1em] font-medium font-Plus_Jakarta_Sans'>
                                Hey, <br />I’m Shivam
                            </h1>
                        </div>
                        <div className='place-content-center items-center flex flex-[0_0_auto] flex-col gap-2.5 h-min overflow-hidden p-0 relative w-full'>
                            <div className='outline-none flex flex-col justify-start flex-shrink-0 transform-none flex-[0_0_auto] h-auto relative whitespace-pre-wrap w-full break-words'>
                                <p className='text-base text-[#0d0d0d] leading-[1.4em] font-normal font-Plus_Jakarta_Sans'>
                                    Navigating the ever-evolving world of AI and technology, I am passionate about developing innovative solutions that bridge the gap between complex systems and real-world impact. With over 4 years of experience, my focus is on leveraging AI, cloud infrastructure, and automation to drive meaningful change.
                                </p>
                            </div>
                            <div className='outline-none flex flex-col justify-start flex-shrink-0 transform-none flex-[0_0_auto] h-auto relative whitespace-pre-wrap w-full break-words'>
                                <p className='text-base text-[#0d0d0d] leading-[1.4em] font-normal font-Plus_Jakarta_Sans'>
                                    For me, technology is more than just code—it's about solving problems, creating efficient workflows, and enhancing user experiences. From building AI-driven products to optimizing processes for startups and enterprises, my work reflects a commitment to making technology accessible, impactful, and future-ready.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='place-content-center items-center flex flex-[0_0_auto] flex-col gap-5 h-min overflow-hidden p-0 relative w-min'>
                        <div className='aspect-w-1 aspect-h-1 flex-none lg:md:h-[350px] h-[250px] overflow-visible relative lg:md:w-[350px] w-[250px]'>
                            <div className='absolute rounded-inherit inset-0'>
                                <img className='block w-full h-full rounded-inherit object-center object-cover' src='https://res.cloudinary.com/ddtfebvov/image/upload/v1735989459/IMG_8531_aerspw.webp' />
                            </div>
                        </div>
                        <div className='flex-none h-auto relative w-auto'>
                            <Link href="/work" className="w-max flex flex-col justify-start bg-transparent border border-[#0d0d0d] text-[#0d0d0d] transform transition-all duration-500 ease-out px-5 py-[2px] rounded-full hover:tracking-widest hover:text-[#E9E9E7] hover:bg-[#EB5939] hover:border-[#EB5939] group">
                                <div className="w-auto flex gap-[10px]">
                                    <p className="text-sm font-Plus_Jakarta_Sans ">LET'S TALK</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256" focusable="false" fill='#0d0d0d' className="group-hover:fill-[#E9E9E7] group-hover:text-[#E9E9E7]"><g color='#0d0d0d' weight="light"><path d="M198,64V168a6,6,0,0,1-12,0V78.48L68.24,196.24a6,6,0,0,1-8.48-8.48L177.52,70H88a6,6,0,0,1,0-12H192A6,6,0,0,1,198,64Z"></path></g></svg>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Part Two */}
            <div id="partTwo" className='flex flex-none flex-row place-content-center items-center bg-[#0d0d0d] gap-[10px] h-min overflow-hidden lg:md:p-[100px_40px] p-[60px_20px] relative w-full'>
                <div className='flex flex-grow lg:md:flex-row flex-col place-content-start items-start gap-[50px] h-min max-w-[1200px] overflow-hidden p-0 relative lg:md:w-[1px] w-full'>
                    <div className='outline-none flex flex-col justify-start flex-shrink-0 transform-none flex-grow h-auto relative whitespace-pre-wrap lg:md:w-[1px] w-full break-words'>
                        <h2 className='lg:md:text-4xl text-[28px] text-[#e9e9e7] leading-[1.2em] font-medium font-Plus_Jakarta_Sans'>Graduated with a Bachelor of Applications from the School of Management Sciences in my hometown, Varanasi, a tier-3 city.</h2>
                    </div>
                    <div className='flex flex-grow flex-col place-content-center items-center gap-[30px] h-min overflow-hidden p-0 relative lg:md:w-[1px] w-full'>
                        <div className="outline-none flex flex-col justify-start flex-shrink-0 transform-none">
                            <p className="text-base text-[#e9e9e7] leading-[1.4em] font-normal font-Plus_Jakarta_Sans">With 4 years of experience, I’ve worked on personal projects, supported startups, and contributed to large MNCs. My journey has involved developing AI solutions, building innovative tech products, and helping businesses optimize their operations. Whether working on small-scale projects or large corporate initiatives, I've gained valuable insights that allow me to adapt and create meaningful impact across different sectors.</p>
                        </div>
                        <div className="flex-none h-auto relative whitespace-pre-wrap w-full break-words word-wrap outline-none flex flex-col justify-start flex-shrink-0 transform-none">
                            <h3 className="lg:md:text-2xl text-[20px] text-[#e9e9e7] leading-[1.2em] font-medium font-Plus_Jakarta_Sans">Here are some of the companies I’ve had the privilege to work with:</h3>
                        </div>
                        <div className="flex-none h-auto relative w-full">
                            <div className="flex items-center flex-col flex-wrap-nowrap gap-0 h-min justify-center overflow-hidden p-0 relative w-full transform-none transform-origin-[50%_50%_0px] ">
                                {companiesData.map((data, index) => {
                                    const isOpen = open === index;
                                    const contentRef = useRef(null);

                                    return (<div key={data.id} className={`flex-none h-auto relative w-full ${open === index ? 'transform transition-all' : 'transform-none'} duration-500  transform-origin-[50%_50%_0px]`} onClick={() => { open === index ? setOpen(null) : setOpen(index) }}>
                                        <div className={`flex cursor-pointer flex-col gap-0 h-min justify-center overflow-hidden p-0 relative ${open === index ? 'bg-[#EB5939]' : 'bg-transparent'} w-full transform-none transform-origin-[50%_50%_0px] opacity-100`}>
                                            <div className="flex-none items-start flex flex-row gap-2.5 h-min justify-center overflow-hidden p-2.5 relative w-full transform-none transform-origin-[50%_50%_0px] opacity-100">
                                                <div className="outline-none flex flex-col justify-start flex-shrink-0 transform-none transform-origin-[50%_50%_0px] opacity-100 flex-[1_0_0px] h-auto relative whitespace-pre-wrap w-[1px] break-words">
                                                    <h2 className={`lg:md:text-xl text-lg ${open === index ? 'text-[#e9e9e7]' : 'text-[#e9e9e7]'} duration-500 leading-[1.2em] font-medium font-Plus_Jakarta_Sans`}>{data.companyName}</h2>
                                                </div>
                                                <div className={`items-center cursor-pointer flex flex-none flex-row flex-nowrap gap-2.5 h-[44px] justify-center overflow-hidden p-0 relative w-[44px] will-change-[none,_transform] ${open === index ? 'bg-[#e9e9e7] transform' : 'bg-transparent transform-none'} duration-700 ease-out rounded-full transform-origin-[50%_50%_0px]`} onClick={() => { open === index ? setOpen(null) : setOpen(index) }}>
                                                    <div className={`flex-none h-[28px] relative w-[28px] ${open === index ? 'rotate-180 transform' : 'transform: rotate-0 transform-none'} transform-origin-[50%_50%_0px] will-change-transform duration-500`}>
                                                        <div className="contents">
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" fill={open === index ? '#EB5939' : '#e9e9e7'}><g color={open === index ? '#EB5939' : '#e9e9e7'} weight="light"><path d="M198,64V168a6,6,0,0,1-12,0V78.48L68.24,196.24a6,6,0,0,1-8.48-8.48L177.52,70H88a6,6,0,0,1,0-12H192A6,6,0,0,1,198,64Z"></path></g></svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={`flex-none h-[1px] overflow-hidden relative w-full duration-500 ${open === index ? 'bg-[#E9E9E780]' : 'bg-[#e9e9e780]'} transform-none transform-origin-[50%_50%_0px] opacity-100`} />
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
            {/* Part Three */}
            <div id="partThree" className='flex flex-none flex-row place-content-center items-center gap-[10px] h-min overflow-hidden lg:md:p-[100px_40px] p-[60px_20px] relative w-full'>
                <div className='flex flex-grow lg:md:flex-row flex-col place-content-start items-start lg:md:gap-[50px] gap-[40px] h-min max-w-[1200px] overflow-hidden p-0 relative lg:md:w-[1px] w-full'>
                    <div className='flex flex-none flex-col justify-start flex-shrink-0 outline-none transform-none relative h-auto lg:md:w-[300px] w-full whitespace-pre-wrap break-words'>
                        <p className='text-lg text-[#0d0d0d] leading-[1.2em] font-medium font-Plus_Jakarta_Sans'>THE TOOLS</p>
                    </div>
                    <div className='flex flex-grow flex-col place-content-center items-center gap-[50px] h-min overflow-hidden p-0 relative lg:md:w-[1px] w-full'>
                        <div className='flex flex-none flex-col place-content-start items-start gap-[20px] h-min overflow-hidden p-0 relative w-full'>
                            <div className='flex flex-none flex-col justify-start flex-shrink-0 outline-none transform-none relative h-auto lg:md:w-1/2 w-full whitespace-pre-wrap break-words'>
                                <h2 className='lg:md:text-4xl text-[28px] text-[#0d0d0d] leading-[1.2em] font-medium font-Plus_Jakarta_Sans'>Building with Powerful Technologies</h2>
                            </div>
                            <div className='flex flex-none flex-col justify-start flex-shrink-0 outline-none transform-none relative h-auto w-full whitespace-pre-wrap break-words'>
                                <p className='text-base text-[#0d0d0d] leading-[1.4em] font-normal font-Plus_Jakarta_Sans'>I use a variety of tools to drive the development and deployment of my projects. For AI and automation, Python is my go-to language, while OpenAI provides powerful NLP capabilities. For cloud infrastructure, I work with Azure, AWS, and GCP, depending on the project’s requirements. Langchain is my choice for data processing, and GitHub ensures smooth version control and collaboration. To optimize development and deployment workflows, I rely on Docker for containerization, ensuring projects run seamlessly across environments. Below are the key technologies I specialize in.</p>
                            </div>
                        </div>
                        <div className='grid flex-none lg:md:gap-7 gap-[15px] auto-rows-min lg:md:grid-cols-[repeat(4,_minmax(100px,_1fr))] grid-cols-[repeat(2,_minmax(100px,_1fr))] grid-rows-[repeat(2,_min-content)] h-min justify-center overflow-hidden p-0 relative w-full'>
                            {tools.map((data) => (<div className='place-self-start flex-none h-auto relative w-full'>
                                <div className='place-content-center items-center cursor-pointer flex flex-col lg:md:gap-[15px] gap-[10px] h-min overflow-hidden lg:md:p-[20px] p-[15px] relative will-change-[transform] transform transition-all duration-500 ease-out bg-[#0d0d0d] w-full rounded-[5px] opacity-100 hover:bg-[#EB5939]'>
                                    <div className='flex-none h-[50px] overflow-hidden relative w-full'>
                                        <div className='absolute inset-0 rounded-inherit'>
                                            <img className='block w-full h-full rounded-inherit object-left object-contain' src={data.image} alt={data.alt} />
                                        </div>
                                    </div>
                                    <div className='outline-none flex flex-col justify-start flex-none h-auto relative whitespace-pre-wrap w-full break-words'>
                                        <h6 className='text-xl text-[#e9e9e6] leading-[1.2em] font-medium font-Plus_Jakarta_Sans'>{data.name}</h6>
                                    </div>
                                </div>
                            </div>))}
                        </div>
                    </div>
                </div>
            </div>
            {/* Part Four */}
            <div id="partFour" className='flex place-content-center items-center flex-none flex-row gap-2 h-min overflow-hidden lg:md:p-[100px_40px] p-[60px_20px] relative w-full border-t border-[#0d0d0d80]'>
                <div className='flex place-content-center items-center flex-grow flex-shrink-0 flex-col gap-12 h-min max-w-[1200px] overflow-visible p-0 relative lg:md:w-[1px] w-full'>
                    <div className='outline-none flex flex-col justify-start flex-shrink-0 transform-none flex-none h-auto relative w-full whitespace-pre-wrap break-words'>
                        <h2 className='lg:md:text-4xl text-[28px] text-[#0d0d0d] leading-[1.2em] font-medium font-Plus_Jakarta_Sans'>The Playground</h2>
                    </div>
                    <div className='place-content-center items-center hidden lg:md:flex flex-none flex-col gap-0 h-min overflow-visible p-0 relative w-full'>
                        {playGround.map((data, index) => (<div className='flex-none h-auto relative w-full'>
                            <div className='place-content-center items-center cursor-pointer flex flex-col gap-2.5 h-min overflow-visible py-5 px-2.5 relative border-b border-solid border-[rgba(13,13,13,0.5)] opacity-100 w-full group'>
                                <div className='lg:md:transform transform-none translate-y-[-50%] opacity-0 group-hover:opacity-100 aspect-[1.53846/1] flex-0 lg:md:h-[260px] h-[150px] overflow-hidden relative lg:md:absolute right-[100px] top-1/2 lg:md:w-[400px] w-[150px]'>
                                    <div className='absolute inset-0'>
                                        <img className='block w-full h-full rounded-none object-center object-cover' src={data.image} alt={data.name} />
                                    </div>
                                </div>
                                <div className='place-content-center items-center flex flex-col gap-0 h-min overflow-hidden p-0 relative w-full'>
                                    <div className='place-content-center items-center flex flex-row gap-2.5 h-min overflow-hidden p-0 relative w-full'>
                                        <div className='flex-1 h-auto relative whitespace-pre-wrap w-px break-words overflow-wrap-break transform-none opacity-100 outline-none flex flex-col justify-start flex-shrink-0'>
                                            <p className='text-sm text-[#0d0d0d80] uppercase leading-[1.1em] font-medium font-Plus_Jakarta_Sans'>{data.category}</p>
                                        </div>
                                        <div className='flex-0 h-auto relative whitespace-pre w-auto transform-none opacity-100 outline-none flex flex-col justify-start flex-shrink-0'>
                                            <p className='text-sm text-[#0d0d0d80] leading-[1.1em] font-medium font-Plus_Jakarta_Sans'>{index > 8 ? index + 1 : `0${index + 1}`}</p>
                                        </div>
                                    </div>
                                    <div className='flex-0 h-auto relative whitespace-pre-wrap w-full break-words overflow-wrap break-word outline-none flex flex-col justify-start flex-shrink-0 transform-none opacity-100'>
                                        <h3 className='lg:md:text-[32px] text-[24px] text-[#0d0d0d] leading-[1.2em] font-medium font-Plus_Jakarta_Sans'>{data.name}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>))}
                    </div>
                    <div className='place-content-center items-center lg:md:hidden flex flex-none flex-col gap-0 h-min overflow-visible p-0 relative w-full'>
                        {playGround.map((data, index) => (<div className='flex-none h-auto relative w-full'>
                            <div className='place-content-center items-start cursor-pointer flex flex-col gap-2.5 h-min overflow-visible py-5 px-2.5 relative border-b border-solid border-[rgba(13,13,13,0.5)] opacity-100 w-full'>
                                <div
                                    ref={contentRef}
                                    style={{
                                        maxHeight: showPhoto === index ? `${contentRef.current?.scrollHeight}px` : '0px',
                                        transition: 'max-height 0.5s ease',
                                    }}
                                    className={`overflow-hidden`}
                                >
                                    <div className='opacity-100 aspect-[1.53846/1] flex-0 h-[150px] overflow-hidden relative w-[150px]'>
                                        <div className='absolute inset-0'>
                                            <img className='block w-full h-full rounded-none object-center object-cover' src={data.image} alt={data.name} />
                                        </div>
                                    </div>
                                </div>
                                <div className='place-content-center items-center flex flex-col gap-0 h-min overflow-hidden p-0 relative w-full' onClick={() => showPhoto === index ? setShowPhoto(null) : setShowPhoto(index) }>
                                    <div className='place-content-center items-center flex flex-row gap-2.5 h-min overflow-hidden p-0 relative w-full'>
                                        <div className='flex-1 h-auto relative whitespace-pre-wrap w-px break-words overflow-wrap-break transform-none opacity-100 outline-none flex flex-col justify-start flex-shrink-0'>
                                            <p className='text-sm text-[#0d0d0d80] uppercase leading-[1.1em] font-medium font-Plus_Jakarta_Sans'>{data.category}</p>
                                        </div>
                                        <div className='flex-0 h-auto relative whitespace-pre w-auto transform-none opacity-100 outline-none flex flex-col justify-start flex-shrink-0'>
                                            <p className='text-sm text-[#0d0d0d80] leading-[1.1em] font-medium font-Plus_Jakarta_Sans'>{index > 8 ? index + 1 : `0${index + 1}`}</p>
                                        </div>
                                    </div>
                                    <div className='flex-0 h-auto relative whitespace-pre-wrap w-full break-words overflow-wrap break-word outline-none flex flex-col justify-start flex-shrink-0 transform-none opacity-100'>
                                        <h3 className='lg:md:text-[32px] text-[24px] text-[#0d0d0d] leading-[1.2em] font-medium font-Plus_Jakarta_Sans'>{data.name}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutSide