'use client';
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';

const SessionsPage = () => {
  const [headerColor, setHeaderColor] = useState("#0d0d0d");

  const sections = [
    { id: "partOne", color: "#0d0d0d" },
    { id: "partTwo", color: "#e9e9e7" },
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

  const sessions = [
    {
      id: 1,
      title: "React.js Deep Dive",
      description: "Advanced React concepts including hooks, state management, and performance optimization. Real-world examples and best practices were discussed.",
      imageUrl: "/summit.png",
      link: "https://yourplatform.com/session-recording-2",
    },
    {
      id: 2,
      title: "Web Development Fundamentals",
      description: "A comprehensive session covering HTML, CSS, and JavaScript basics for beginners. Participants learned how to structure web pages, style them effectively, and add basic interactivity.",
      imageUrl: "/GHANA.jpg",
      link: "https://yourplatform.com/session-recording-1",
    },
    {
      id: 3,
      title: "React.js Deep Dive",
      description: "Advanced React concepts including hooks, state management, and performance optimization. Real-world examples and best practices were discussed.",
      imageUrl: "/summit.png",
      link: "https://yourplatform.com/session-recording-2",
    },
  ];

  return (
    <div className="">
      <Header textColor={headerColor} />
      
      {/* Light Section */}
      <div id="partOne" className="relative bg-[#e9e9e7]">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-40">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-[#0d0d0d] sm:text-6xl">
                Live Learning Sessions
              </h1>
              <p className="mt-6 text-lg leading-8 text-[#0d0d0d]">
                Explore recorded sessions covering various topics in technology, AI, and programming.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Dark Section */}
      <div id="partTwo" className="bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="flex flex-col space-y-8">
            {sessions.map((session) => (
              <div 
                key={session.id}
                className="bg-[#1A1A1A] rounded-lg overflow-hidden border border-[#333333] hover:border-[#666666] transition-colors h-[500px]"
              >
                <div className="flex flex-col md:flex-row h-full">
                  {/* Text Content */}
                  <div className="p-8 flex flex-col justify-between md:w-1/2 h-full">
                    <div>
                      <h2 className="text-3xl font-semibold text-[#e9e9e7] mb-4">
                        {session.title}
                      </h2>
                      <p className="text-gray-400 mb-6 text-lg">
                        {session.description}
                      </p>
                    </div>
                    <div>
                      <a
                        href={session.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#EB5939] hover:bg-[#EB5939]/90 text-white px-8 py-3 rounded-lg transition-colors font-medium"
                      >
                        Watch Session
                      </a>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="md:w-1/2 h-full bg-[#262626] flex items-center justify-center">
                    <img
                      src={session.imageUrl}
                      alt={session.title}
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionsPage; 