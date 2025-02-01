'use client';
import React, { useEffect, useState } from 'react'
import Header from '@/components/Header';
import { books } from '@/server/data';
import Link from 'next/link';

const BookComponent = () => {
    const [translateY, setTranslateY] = useState(-218.609);
    const [headerColor, setHeaderColor] = useState("#0d0d0d");

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const newTranslateY = -218.609 + scrollY * 0.5;
            setTranslateY(newTranslateY);
        };

        window.addEventListener('scroll', handleScroll);

        // return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const sections = [
        { id: "partOne", color: "#0d0d0d" },
        { id: "partTwo", color: "#e9e9e7" },
        { id: "partThree", color: "#e9e9e7" },
    ];

    useEffect(() => {
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
    }, [sections]);

    return (
        <>
            <Header textColor={headerColor} />
            <div className='flex-none h-[100px] overflow-hidden relative w-full'></div>
            {/* Part One */}
            <div id="partOne" className='flex flex-row items-center justify-center gap-2.5 h-min overflow-hidden p-[100px_40px] relative w-full'>
                <div className='place-content-center flex flex-col items-center justify-center gap-20 flex-[1_0_0px] h-min max-w-[1200px] overflow-hidden relative w-[1px]'>
                    <div className='flex flex-col items-center justify-center gap-5 h-min overflow-hidden p-0 relative w-full'>
                        <div className='flex flex-col items-center justify-center gap-0 h-min overflow-hidden p-0 relative w-[550px]'>
                            <div className='flex flex-col items-start flex-shrink-0 h-auto relative whitespace-pre w-auto outline-none transform-none'>
                                <p className='text-lg text-[#EB5939] uppercase tracking-[0.12em] leading-[1.2em] font-medium font-Plus_Jakarta_Sans'>Tech eBooks</p>
                            </div>
                            <div className='flex flex-col justify-start flex-shrink-0 transform-none flex-none h-auto relative whitespace-pre-wrap w-full break-words outline-none'>
                                <h1 className='text-[42px] text-[#0d0d0d] text-center leading-[1.2em] font-medium font-Plus_Jakarta_Sans'>AI, Data Science & Python Resources</h1>
                            </div>
                        </div>
                        <div className='outline-none flex flex-col justify-start flex-shrink-0 transform-none flex-none h-auto relative whitespace-pre-wrap w-[600px] break-words overflow-wrap'>
                            <p className='text-base text-[#0d0d0d] text-center leading-[1.4em] font-normal font-Plus_Jakarta_Sans'>
                                Explore our comprehensive collection of eBooks covering artificial intelligence, data science, and Python programming. Each book focuses on specific topics to help you master these cutting-edge technologies.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Remove Part Two and go directly to Part Three */}
            <div id="partThree" className="flex-none bg-[#0d0d0d] flex flex-row gap-2.5 h-min justify-center overflow-hidden px-10 py-[100px] relative w-full border-b border-[#e9e9e780]">
                <div className="flex items-center flex-[1_0_0px] flex-col gap-[50px] h-min justify-center max-w-[1200px] overflow-hidden p-0 relative w-[1px]">
                    <div className="flex flex-row justify-between h-min overflow-hidden px-0 relative w-full">
                        <div className="outline-none flex flex-col justify-start flex-shrink-0 transform-none flex-none h-auto relative w-[500px] whitespace-pre-wrap break-words">
                            <h2 className="text-[36px] text-[#e9e9e7] leading-[1.2em] font-Plus_Jakarta_Sans font-medium">Browse Our Technical Library</h2>
                        </div>
                    </div>
                    <div className="bg-[rgba(233,233,231,0.5)] flex-none h-[1px] overflow-hidden relative w-full"></div>
                    <div className="flex items-center flex-none flex-col gap-[40px] h-min justify-center overflow-hidden p-0 relative w-full">
                        {books.map((data, index) => (<>
                            <div key={index} className="flex-none h-auto relative w-full group">
                                <div className="contents">
                                    <div className="flex items-start cursor-pointer flex-row flex-nowrap gap-[50px] h-min justify-center overflow-hidden p-0 relative w-full opacity-100">
                                        <div className="flex items-start self-stretch flex-col flex-nowrap h-auto justify-between overflow-hidden p-0 relative w-1/3">
                                            <div className="flex items-center flex-col flex-nowrap gap-5 h-min justify-center overflow-hidden p-0 relative w-full">
                                                <div className="flex items-center flex-col flex-nowrap gap-2 h-min justify-center overflow-hidden p-0 relative w-full">
                                                    <div className="flex-none h-auto relative whitespace-pre-wrap w-full break-words outline-none flex flex-col justify-start flex-shrink-0 transform-none opacity-100">
                                                        <h2 className="text-[32px] text-[#e9e9e7] leading-[1.2em] font-medium font-Plus_Jakarta_Sans">{data.bookHeading}</h2>
                                                    </div>
                                                    <div className="flex-none h-auto relative whitespace-pre-wrap w-full break-words outline-none flex flex-col justify-start flex-shrink-0 transform-none opacity-100">
                                                        <h3 className="text-[20px] text-[#e9e9e7] leading-[1.4em] font-normal font-Plus_Jakarta_Sans">{data.bookSubHeading}</h3>
                                                    </div>
                                                </div>
                                                <div className="flex-none h-auto relative whitespace-pre-wrap w-full break-words outline-none flex flex-col justify-start flex-shrink-0 transform-none opacity-100">
                                                    <p className="text-[20px] text-[#e9e9e780] leading-[1.4em] font-normal font-Plus_Jakarta_Sans">{data.postedOn}</p>
                                                </div>
                                            </div>
                                            <div className="flex-none h-auto relative w-auto">
                                                <a href={data.slug} target='_blank' className="w-max flex flex-col justify-start bg-transparent border border-[#E9E9E7] text-[#E9E9E7] transform transition-all duration-700 ease-out px-5 py-[2px] rounded-full hover:tracking-widest hover:text-[#E9E9E7] hover:bg-[#EB5939] hover:border-[#EB5939]">
                                                    <div className="w-auto flex gap-[10px]">
                                                        <p className="text-sm uppercase font-Plus_Jakarta_Sans ">Checkout</p>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256" focusable="false" fill='#E9E9E7'><g color='#E9E9E7' weight="light"><path d="M198,64V168a6,6,0,0,1-12,0V78.48L68.24,196.24a6,6,0,0,1-8.48-8.48L177.52,70H88a6,6,0,0,1,0-12H192A6,6,0,0,1,198,64Z"></path></g></svg>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="flex items-center aspect-[1.6/1] flex-1 flex-row gap-2.5 justify-center overflow-hidden p-0 relative w-[1px] opacity-100">
                                            <div className="flex-none h-[110%] overflow-hidden relative w-[110%] transform-none origin-[50%_50%_0px] group-hover:scale-[0.92] duration-700">
                                                <div className="absolute rounded-inherit top-0 right-0 bottom-0 left-0">
                                                    <img 
                                                        sizes="calc(max(min(1100px, 100vw) * 0.6818 - 50px, 0px) * 1.1)" 
                                                        className="block w-full h-full rounded-inherit object-center object-contain" 
                                                        src={data.image} 
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {books.length !== index + 1 && <div className="bg-[rgba(233,233,231,0.5)] flex-none h-[1px] overflow-hidden relative w-full"></div>}
                        </>))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookComponent;