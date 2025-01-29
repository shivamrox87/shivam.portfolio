'use client';

import Header from '@/components/Header';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/motions';
import { Space_Grotesk, Plus_Jakarta_Sans } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] });

export default function Ventures() {
  const [textColor, setTextColor] = useState('#0d0d0d');

  useEffect(() => {
    const handleScroll = () => {
      const darkSection = document.querySelector('#dark-section');
      if (darkSection) {
        const rect = darkSection.getBoundingClientRect();
        if (rect.top <= 100) {
          setTextColor('#e9e9e7');
        } else {
          setTextColor('#0d0d0d');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const ventures = [
    {
      title: 'AI Product 1',
      description: 'Description of your first GenAI product/venture',
      role: 'Co-founder & Technical Lead',
      technologies: ['GPT-4', 'LangChain', 'Vector DB'],
      link: 'https://product1.com',
      image: '/summit.png'
    },
    {
      title: 'Startup Name',
      description: 'Description of the startup where you are a partner',
      role: 'Partner & AI Strategy Lead',
      technologies: ['Large Language Models', 'Neural Networks', 'Cloud Infrastructure'],
      link: 'https://startup.com',
      image: '/summit.png'
    },
  ];

  return (
    <div className={`min-h-screen ${spaceGrotesk.className} ${plusJakartaSans.className}`}>
      <div className="fixed w-full z-50 transition-all duration-300">
        <Header textColor={textColor} />
      </div>
      
      <section className="bg-white">
        <main className="container mx-auto px-4 pt-40 pb-20">
          <motion.div
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate="show"
            className="max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-5xl font-bold mb-6 text-[#0d0d0d] font-Plus_Jakarta_Sans">
              Ventures
            </h1>
            <p className="text-[#0d0d0d]/70 text-lg font-medium leading-relaxed font-Plus_Jakarta_Sans max-w-2xl">
              Exploring the frontiers of Generative AI through innovative products and partnerships.
            </p>
          </motion.div>
        </main>
      </section>

      <section id="dark-section" className="bg-[#0d0d0d]">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-3xl mx-auto space-y-24">
            {ventures.map((venture, index) => (
              <motion.div
                key={venture.title}
                variants={fadeIn('up', 0.2 * (index + 1))}
                initial="hidden"
                animate="show"
                className="group"
              >
                <Link 
                  href={venture.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block space-y-8 group cursor-pointer"
                >
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                    <Image
                      src={venture.image}
                      alt={venture.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h2 className="text-xl font-bold text-white group-hover:text-[#EB5939] transition-colors duration-300 font-Plus_Jakarta_Sans">
                        {venture.title}
                      </h2>
                      <p className="text-white/80 text-base leading-relaxed font-Plus_Jakarta_Sans">
                        {venture.description}
                      </p>
                    </div>
                    
                    <div className="flex items-center text-[#EB5939] text-base font-bold font-Plus_Jakarta_Sans">
                      {venture.role}
                    </div>
                    
                    <div className="flex flex-wrap gap-3 text-sm text-white/50 font-Plus_Jakarta_Sans">
                      {venture.technologies.map((tech, i) => (
                        <span key={tech} className="bg-white/5 px-3 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
                
                {index !== ventures.length - 1 && (
                  <div className="h-px w-full bg-white/5 mt-24" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 