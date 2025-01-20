import React from 'react';
import Header from "@/components/Header";
import { profolio } from "@/server/data";
import Link from "next/link";
import ScrollComponent from '@/components/WorkComponent/ScrollComponent';

export async function generateMetadata({ params }) {
    const { slug } = params;

    const project = profolio.find((b) => b.link === slug);

    if (!project) {
        return {
            title: 'Project Not Found',
            description: 'The requested project does not exist.',
            openGraph: {
                title: 'Project Not Found',
                description: 'The requested project does not exist.',
            },
            twitter: {
                card: 'summary_large_image',
                title: 'Project Not Found',
                description: 'The requested project does not exist.',
            },
        };
    }

    const excerpt = project.subHeading.split(' ').slice(0, 10).join(' ') + '...';

    return {
        title: project.heading,
        description: `${excerpt}`,
        openGraph: {
            title: project.heading,
            description: `${excerpt}`,
            images: [
                {
                    url: project.imageLink,
                    alt: project.heading,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: project.heading,
            description: `${excerpt}`,
            images: [project.imageLink],
        },
    };
}

const page = ({ params }) => {
    const { slug } = params;

    const project = profolio.find((b) => b.link === slug);
    return (
        <div className='bg-[#e9e9e7]'>
            {/* Part One */}
            <div className='place-content-center items-center flex flex-none flex-row gap-0 h-min overflow-hidden p-0 relative w-full'>
                <div className='absolute inset-0'>
                    <img className='block w-full h-full rounded-inherit object-center object-cover' src={project.imageLink} alt='project-main' />
                </div>
                <div className='flex flex-col items-center place-content-center bg-[#0d0d0d80] flex-[1_0_0px] h-[90vh] w-[1px] overflow-hidden p-0 relative gap-0'>
                    <div className='w-full'>
                        <div className='contents'>
                            <header className='w-full relative py-[30px] px-10 flex flex-row items-center justify-center flex-nowrap gap-[10px] overflow-hidden backdrop-blur-[10px] opacity-100'>
                                <div className='relative opacity-100 flex flex-row items-center justify-center gap-[30px] flex-nowrap grow max-w-[1200px] w-[1px] overflow-hidden p-0'>
                                    <div className='relative flex justify-center items-center flex-row gap-5 p-0 w-min	h-min overflow-hidden'>
                                        <Link href='/' className='relative overflow-visible w-[142px] aspect-3.55/1 flex justify-center items-center gap-2'>
                                            <div className='absolute inset-0'>
                                                <img className='block w-full h-full rounded-inherit object-center object-cover' src='https://framerusercontent.com/images/J4zFQPQvdzCcM8cbsgUWye4TiQE.png' />
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
                                                    <p style={{ color: '#E9E9E7' }} className='text-sm font-semibold font-Plus_Jakarta_Sans'>HOME</p>
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
                                                    <p style={{ color: '#E9E9E7' }} className='text-sm font-semibold font-Plus_Jakarta_Sans'>ABOUT</p>
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
                                                    <p style={{ color: '#E9E9E7' }} className='text-sm font-semibold font-Plus_Jakarta_Sans'>WORKS</p>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className='opacity-100 h-auto w-auto relative'>
                                            <Link href='/blog' className='relative flex flex-row flex-nowrap items-center justify-center gap-[10px] h-min w-min overflow-hidden px-2 py-[5px] group'>
                                                <div className='bg-[#eb5939] group-hover:w-auto group-hover:left-0 transform transition-all duration-500 ease-in-out origin-center group-hover:translate-x-1 group-hover:translate-y-0 group-hover:translate-z-0 flex items-center justify-center gap-2 h-full w-0 absolute top-0 -left-12 overflow-hidden p-1 z-10'>
                                                    <div className="flex flex-col justify-start relative h-auto w-auto whitespace-pre outline-none flex-shrink-0 opacity-100" style={{ transform: 'none', transformOrigin: '50% 50% 0' }}>
                                                        <p className='text-[#FFF] text-sm font-semibold font-Plus_Jakarta_Sans'>BLOG</p>
                                                    </div>
                                                </div>
                                                <div className='flex flex-col justify-start relative h-auto w-auto whitespace-pre outline-none flex-shrink-0 opacity-100'>
                                                    <p style={{ color: '#E9E9E7' }} className='text-sm font-semibold font-Plus_Jakarta_Sans'>BLOG</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="flex-none h-auto relative w-auto">
                                        <Link href="/books" className={`text-[#0D0D0D] rounded-[50px] w-max flex flex-col justify-start transform transition-all duration-500 ease-out px-5 py-[10px] hover:tracking-[0.08em] hover:text-[#E9E9E7] hover:bg-[#EB5939] bg-[#E9E9E7]`}>
                                            <div className="w-auto">
                                                <p className="text-sm leading-[1.1em] font-Plus_Jakarta_Sans font-medium">BOOKS</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </header>
                        </div>
                    </div>
                    <div className='flex items-center place-content-center flex-[1_0_0px] flex-row gap-[10px] h-[1px] w-full overflow-hidden p-[100px_40px_50px] relative'>
                        <div className='flex items-start content-start justify-between flex-[1_0_0px] flex-col h-full max-w-[1200px] overflow-hidden p-0 relative w-[1px]'>
                            <div className='content-start flex items-start flex-col gap-[30px] justify-center flex-[1_0_0px] h-px overflow-hidden p-0 relative w-[550px]'>
                                <div className='flex items-center justify-center content-center flex-none flex-col gap-[10px] h-min overflow-hidden p-0 relative w-full'>
                                    <div className='outline-none flex flex-col justify-start flex-shrink-0 transform-none flex-none h-auto relative whitespace-pre-wrap w-full break-words'>
                                        <p className='text-[#EB5939] text-lg leading-[1.2em] tracking-[0.12em] uppercase font-medium font-Plus_Jakarta_Sans'>Creative</p>
                                    </div>
                                    <div className='outline-none flex flex-col justify-start flex-shrink-0 transform-none flex-none h-auto relative whitespace-pre-wrap w-full break-words'>
                                        <h1 className='text-[#E9E9E7] text-[42px] leading-[1.2em] font-medium font-Plus_Jakarta_Sans'>{project.heading}</h1>
                                    </div>
                                    <div className='outline-none flex flex-col justify-start flex-shrink-0 transform-none flex-none h-auto relative whitespace-pre-wrap w-full break-words'>
                                        <p className='text-base text-[#e9e9e7] leading-[1.4em] font-Plus_Jakarta_Sans font-normal'>{project.subHeading}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center justify-between flex-none flex-row h-min overflow-hidden p-0 relative w-full content-center'>
                                <div className='flex gap-5'>
                                    <span className='cursor-pointer relative inline-block text-sm text-[#E9E9E7] leading-[1.1em] font-medium font-Plus_Jakarta_Sans hover:text-[#EB5939] after:content-[""] after:block after:h-[1px] after:w-0 after:bg-[#EB5939] after:transition-all after:duration-500 after:ease-out hover:after:w-full'>TWITTER</span>
                                    <span className='cursor-pointer relative inline-block text-sm text-[#E9E9E7] leading-[1.1em] font-medium font-Plus_Jakarta_Sans hover:text-[#EB5939] after:content-[""] after:block after:h-[1px] after:w-0 after:bg-[#EB5939] after:transition-all after:duration-500 after:ease-out hover:after:w-full'>BEHANCE</span>
                                    <span className='cursor-pointer relative inline-block text-sm text-[#E9E9E7] leading-[1.1em] font-medium font-Plus_Jakarta_Sans hover:text-[#EB5939] after:content-[""] after:block after:h-[1px] after:w-0 after:bg-[#EB5939] after:transition-all after:duration-500 after:ease-out hover:after:w-full'>DRIBBLE</span>
                                </div>
                                <div className="relative w-full flex justify-end">
                                    <Link href="/work" className="w-max flex flex-col justify-start bg-transparent border border-[#E9E9E7] text-[#E9E9E7] transform transition-all duration-700 ease-out px-5 py-[2px] rounded-full hover:tracking-widest hover:text-[#E9E9E7] hover:bg-[#EB5939] hover:border-[#EB5939]">
                                        <div className="w-auto flex gap-[10px] items-center">
                                            <p className="text-sm font-Plus_Jakarta_Sans ">LET’S TALK</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256" focusable="false" fill='#E9E9E7'><g color='#E9E9E7' weight="light"><path d="M198,64V168a6,6,0,0,1-12,0V78.48L68.24,196.24a6,6,0,0,1-8.48-8.48L177.52,70H88a6,6,0,0,1,0-12H192A6,6,0,0,1,198,64Z"></path></g></svg>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Part Two */}
            <div className='flex items-center justify-center flex-none flex-row gap-2.5 h-min overflow-hidden p-[100px_40px] relative w-full'>
                <div className='justify-center content-center flex items-start flex-1 flex-col gap-2.5 h-min max-w-[1200px] overflow-hidden p-0 relative w-[1px]'>
                    <div className='outline-none flex flex-col justify-start flex-shrink-0 transform-none flex-none h-auto relative whitespace-pre-wrap w-full break-words overflow-wrap-break-word'>
                        <h2 className='text-[#0d0d0d] text-4xl leading-[1.2em] font-medium font-Plus_Jakarta_Sans'>About the Project</h2>
                    </div>
                    <div className='outline-none flex flex-col justify-start flex-shrink-0 transform-none flex-none h-auto relative whitespace-pre-wrap w-1/2 break-words overflow-wrap-break-word'>
                        <p className='text-[#0d0d0d] text-base leading-[1.4em] font-normal font-Plus_Jakarta_Sans'>{project.subHeading}</p>
                    </div>
                </div>
            </div>
            {/* Part Three */}
            <ScrollComponent project={project.imageLinkSec} />
            {/* Part Four */}
            <div className='flex items-center justify-center gap-2.5 h-min overflow-hidden p-[50px_40px] relative w-full'>
                <div className='content-start flex items-start justify-center flex-col gap-2.5 flex-[1_0_0px] h-min max-w-[1200px] overflow-hidden p-0 relative w-[1px]'>
                    <div className='flex flex-col justify-start flex-shrink-0 transform-none flex-none h-auto relative whitespace-pre-wrap w-[50%] break-words outline-none'>
                        <p className='text-base text-[#0d0d0d] leading-[1.4em] font-normal font-Plus_Jakarta_Sans'>{project.textsec}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page;