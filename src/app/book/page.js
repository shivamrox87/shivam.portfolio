'use client';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BookingPage = () => {
    return (
        <>
            <Header textColor="#0d0d0d" />
            <div className='flex-none h-[100px] overflow-hidden relative w-full'></div>
            
            {/* Main Content */}
            <div className='flex flex-col items-center justify-start min-h-screen px-[40px] py-[50px]'>
                <div className='w-full max-w-[1200px] flex flex-col gap-10'>
                    {/* Title Section */}
                    <div className='flex flex-col gap-6'>
                        <h1 className='text-5xl text-[#0d0d0d] leading-[1.2em] font-medium font-Plus_Jakarta_Sans'>
                            Book a Session
                        </h1>
                        <p className='text-lg text-[#0d0d0d] leading-[1.4em] font-normal font-Plus_Jakarta_Sans max-w-[800px]'>
                            Let's connect for a personalized consultation where we can discuss your project, explore technical solutions, or dive into AI and development strategies. Whether you're a startup founder, developer, or tech enthusiast, I'm here to help.
                        </p>
                    </div>

                    {/* Calendly Embed */}
                    <div className='w-full h-[800px] bg-white rounded-lg shadow-lg overflow-hidden'>
                        <iframe
                            src="YOUR_CALENDLY_EMBED_LINK"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                        ></iframe>
                    </div>

                    {/* Additional Information */}
                    <div className='flex flex-col gap-6 mt-8 max-w-[800px]'>
                        <h2 className='text-2xl text-[#0d0d0d] leading-[1.2em] font-medium font-Plus_Jakarta_Sans'>
                            What to Expect
                        </h2>
                        <ul className='list-disc pl-6 space-y-3'>
                            <li className='text-base text-[#0d0d0d] leading-[1.4em] font-normal font-Plus_Jakarta_Sans'>
                                In-depth discussion of your project requirements and technical challenges
                            </li>
                            <li className='text-base text-[#0d0d0d] leading-[1.4em] font-normal font-Plus_Jakarta_Sans'>
                                Personalized recommendations and solution strategies
                            </li>
                            <li className='text-base text-[#0d0d0d] leading-[1.4em] font-normal font-Plus_Jakarta_Sans'>
                                Technical guidance and best practices
                            </li>
                            <li className='text-base text-[#0d0d0d] leading-[1.4em] font-normal font-Plus_Jakarta_Sans'>
                                Follow-up resources and action items
                            </li>
                        </ul>
                        <p className='text-sm text-[#0d0d0d80] leading-[1.4em] font-normal font-Plus_Jakarta_Sans mt-4'>
                            Note: Please provide a brief description of your project or consultation needs when booking the session. This helps me prepare and make our time together more productive.
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default BookingPage; 