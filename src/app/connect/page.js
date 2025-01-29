'use client';
import React, { useEffect } from 'react';
import Header from '@/components/Header';

const BookingPage = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://server.fillout.com/embed/v1/';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <>
            <Header textColor="#0d0d0d" />
            <div className='flex-none h-[100px] overflow-hidden relative w-full'></div>
            
            {/* Main Content */}
            <div className='flex flex-col items-center justify-start min-h-screen px-[40px] py-[50px]'>
                <div className='w-full max-w-[1200px] flex flex-col gap-10'>
                    {/* Title Section */}
                    <div className='flex flex-col gap-6'>
                        <h1 className='text-5xl text-[#1E293B] leading-[1.2em] font-medium font-Plus_Jakarta_Sans'>
                            Let's Build Something Great
                        </h1>
                        <p className='text-lg text-[#64748B] leading-[1.4em] font-normal font-Plus_Jakarta_Sans max-w-[800px]'>
                            Whether you're exploring AI integration, scaling your tech infrastructure, or need technical guidance for your startup, I'm here to help turn your ideas into reality.
                        </p>
                    </div>

                    {/* Fillout Form Embed Section with Highlight Box */}
                    <div className='w-full flex flex-col md:flex-row gap-8'>
                        {/* Form */}
                        <div className='w-full md:w-2/3 h-[800px] bg-white rounded-lg shadow-lg overflow-hidden'>
                            <div 
                                style={{ width: '100%', height: '100%' }} 
                                data-fillout-id="e6kGwZrh12us" 
                                data-fillout-embed-type="standard" 
                                data-fillout-inherit-parameters 
                                data-fillout-dynamic-resize
                            ></div>
                        </div>

                        {/* Highlight Box */}
                        <div className='w-full md:w-1/3 bg-[#F4F7FE] rounded-lg p-8 h-fit shadow-lg border border-[#EB5939]/10'>
                            <div className='flex flex-col gap-6'>
                                <h3 className='text-2xl text-[#EB5939] font-medium font-Plus_Jakarta_Sans'>
                                    Let's Solve Together
                                </h3>
                                <div className='space-y-4'>
                                    <p className='text-base text-[#1E293B] leading-relaxed font-Plus_Jakarta_Sans'>
                                        I'm here to help you with:
                                    </p>
                                    <ul className='space-y-3'>
                                        <li className='flex items-start gap-2'>
                                            <span className='text-[#EB5939] mt-1'>•</span>
                                            <span className='text-[#1E293B]'>Building AI solutions - from small apps to enterprise-scale systems</span>
                                        </li>
                                        <li className='flex items-start gap-2'>
                                            <span className='text-[#EB5939] mt-1'>•</span>
                                            <span className='text-[#1E293B]'>Technical consulting for your startup or business idea</span>
                                        </li>
                                        <li className='flex items-start gap-2'>
                                            <span className='text-[#EB5939] mt-1'>•</span>
                                            <span className='text-[#1E293B]'>Guidance on tech stack, architecture & scalability</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className='bg-white/80 rounded-lg p-4'>
                                    <p className='text-sm text-[#1E293B] leading-relaxed'>
                                        Whether you need help with a proof-of-concept AI app or scaling to production, I can be your technical sounding board. Let's have a focused chat to explore how to bring your ideas to life.
                                    </p>
                                </div>
                                <div className='space-y-2'>
                                    <a 
                                        href="https://topmate.io/shivam_maurya10" 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='inline-block bg-[#EB5939] hover:bg-[#D14B30] text-white font-medium py-3 px-6 rounded-lg text-center transition-colors duration-200 w-full'
                                    >
                                        Schedule a Chat
                                    </a>
                                    <p className='text-sm text-center text-[#64748B] font-Plus_Jakarta_Sans'>
                                        30-minute video conversation
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Additional Information */}
                    <div className='flex flex-col gap-6 mt-8 max-w-[800px]'>
                        <h2 className='text-2xl text-[#EB5939] leading-[1.2em] font-medium font-Plus_Jakarta_Sans'>
                            What You'll Get
                        </h2>
                        <ul className='space-y-4'>
                            <li className='flex items-start gap-3'>
                                <span className='text-[#EB5939] mt-1 text-lg'>•</span>
                                <div>
                                    <h3 className='text-[#1E293B] font-medium mb-1'>Technical Deep Dive</h3>
                                    <p className='text-[#64748B] leading-relaxed'>
                                        Detailed analysis of your project requirements and technical challenges with actionable solutions
                                    </p>
                                </div>
                            </li>
                            <li className='flex items-start gap-3'>
                                <span className='text-[#EB5939] mt-1 text-lg'>•</span>
                                <div>
                                    <h3 className='text-[#1E293B] font-medium mb-1'>Strategic Planning</h3>
                                    <p className='text-[#64748B] leading-relaxed'>
                                        Tailored recommendations for technology choices, architecture, and scaling strategies
                                    </p>
                                </div>
                            </li>
                            <li className='flex items-start gap-3'>
                                <span className='text-[#EB5939] mt-1 text-lg'>•</span>
                                <div>
                                    <h3 className='text-[#1E293B] font-medium mb-1'>Implementation Guidance</h3>
                                    <p className='text-[#64748B] leading-relaxed'>
                                        Best practices, potential pitfalls to avoid, and practical implementation steps
                                    </p>
                                </div>
                            </li>
                            <li className='flex items-start gap-3'>
                                <span className='text-[#EB5939] mt-1 text-lg'>•</span>
                                <div>
                                    <h3 className='text-[#1E293B] font-medium mb-1'>Follow-up Support</h3>
                                    <p className='text-[#64748B] leading-relaxed'>
                                        Resource recommendations and action items to keep you moving forward
                                    </p>
                                </div>
                            </li>
                        </ul>
                        <p className='text-sm text-[#64748B] leading-[1.4em] font-normal font-Plus_Jakarta_Sans mt-4 bg-[#F4F7FE] p-4 rounded-lg'>
                            Note: To make our session more productive, please include a brief description of your project or consultation needs when filling out the form. This helps me prepare and ensure you get the most value from our time together.
                        </p>
                    </div>

                    {/* Social Media Section */}
                    <div className='flex flex-col gap-6 mt-12 max-w-[800px] border-t border-[#EB5939]/10 pt-8'>
                        <div className='flex flex-wrap items-center gap-6'>
                            <span className='text-[#1E293B] font-medium text-lg'>Connect with me:</span>
                            <div className='flex items-center gap-6'>
                                <a 
                                    href="https://twitter.com/_shivammaurya___" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className='group flex items-center gap-2 text-[#64748B] hover:text-[#EB5939] transition-all'
                                >
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                    </svg>
                                    <span className='group-hover:underline decoration-[#EB5939]/30 underline-offset-4'>Twitter</span>
                                </a>
                                <a 
                                    href="https://www.linkedin.com/in/shivam--maurya" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className='group flex items-center gap-2 text-[#64748B] hover:text-[#EB5939] transition-all'
                                >
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
                                    </svg>
                                    <span className='group-hover:underline decoration-[#EB5939]/30 underline-offset-4'>LinkedIn</span>
                                </a>
                                <a 
                                    href="https://www.instagram.com/shivam_maurya_28" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className='group flex items-center gap-2 text-[#64748B] hover:text-[#EB5939] transition-all'
                                >
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                        <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
                                    </svg>
                                    <span className='group-hover:underline decoration-[#EB5939]/30 underline-offset-4'>Instagram</span>
                                </a>
                                <a 
                                    href="mailto:connect@shivammaurya.com" 
                                    className='group flex items-center gap-2 text-[#64748B] hover:text-[#EB5939] transition-all'
                                >
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
                                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
                                    </svg>
                                    <span className='group-hover:underline decoration-[#EB5939]/30 underline-offset-4'>Email</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookingPage; 