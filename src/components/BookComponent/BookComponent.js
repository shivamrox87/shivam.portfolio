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

    useEffect(() => {
        // Add Payhip embed script
        const script = document.createElement('script');
        script.src = 'https://payhip.com/embed-page.js?v=24u68984';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

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
                        {books.map((data, index) => (
                            <div key={index} className="flex-none h-auto relative w-full">
                                <div className="contents">
                                    <div className="flex items-start flex-row flex-nowrap gap-[50px] h-min justify-center overflow-hidden p-0 relative w-full opacity-100">
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
                                        </div>
                                        <div className="flex items-center aspect-[1.6/1] flex-1 flex-row gap-2.5 justify-center overflow-hidden p-0 relative w-[1px] opacity-100">
                                            <div className="payhip-embed-page" data-key={data.payhipKey}></div>
                                        </div>
                                    </div>
                                </div>
                                {books.length !== index + 1 && <div className="bg-[rgba(233,233,231,0.5)] flex-none h-[1px] overflow-hidden relative w-full"></div>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookComponent;