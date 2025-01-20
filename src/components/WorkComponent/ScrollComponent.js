'use client';
import { useEffect, useState } from 'react';

const ScrollComponent = ({ project }) => {
    const [transformStyle, setTransformStyle] = useState({
        opacity: 1,
        transform: "perspective(1200px) scale(1)",
      });
    
      useEffect(() => {
        const handleScroll = () => {
          const headerHeight = window.innerHeight * 0.01;;
          const scrollPosition = window.scrollY;
          const windowHeight = window.innerHeight;
    
          const element = document.getElementById("scrolling-element");
    
          if (element) {
            const sectionTop = element.offsetTop;
            const sectionHeight = element.offsetHeight;
    
            if (scrollPosition + windowHeight > sectionTop + headerHeight && scrollPosition < sectionTop + sectionHeight) {
              const elementTop = sectionTop - scrollPosition;
              const scrollPercent = Math.min(1, Math.max(0, (elementTop / windowHeight)));
    
              const scale = Math.min(1, 0.7 + scrollPercent * 0.1);
              const opacity = Math.min(1, 0.8 + scrollPercent * 0.2);
    
              setTransformStyle({
                opacity: opacity,
                transform: `perspective(1200px) scale(${scale})`,
              });
            }
          }
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
  
    return (
        <div id="scrolling-element" className='place-content-center items-center aspect-[2.35294/1] flex flex-none flex-row gap-2.5 h-[510px] overflow-hidden p-0 relative w-full'>
            <div
                className="flex justify-center items-center flex-[1_0_0px] h-full w-full transition-all duration-500 ease-out"
                style={{
                ...transformStyle,
                transition: "opacity 0s ease, transform 0s ease",
                }}
            >
                    <div className='absolute inset-0'>
                        <img className='block w-full h-full rounded-inherit object-center object-cover' src={project} />
                    </div>
                </div>
        </div>
    );
};

export default ScrollComponent;