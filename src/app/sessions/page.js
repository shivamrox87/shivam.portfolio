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
      title: "Ladies in Tech Summit ",
      description: "AI had an amazing time speaking at the Ladies in Tech Summit hosted by the University of Energy and Natural Resources. Huge thanks to Tiffany Ofori for organizing the event and Kanin Osei-Poku for the invitation and support from past sessions. The summit brought together motivated individuals to explore tech innovations, career opportunities, and the benefits of a tech career. I discussed topics like programming languages for women, AI in civil engineering, and how ChatGPT can support career development. The feedback was fantastic, and I’m excited to keep sharing insights and connecting with passionate tech professionals!",
      imageUrl: "/summit.png",
      link: "https://www.linkedin.com/posts/shivam--maurya_summit-by-shivam-maurya-activity-7219559035400855553-Ra7s",
    },
    {
      id: 2,
      title: "'Get Started with AI Workshop' Using OpenAI and GPT-3",
      description: "The 'Get Started with AI Workshop' (20-22 Sep 2023), led by Shivam Maurya, provided an in-depth exploration of AI, including its fundamentals and real-world applications. Participants engaged in live demonstrations of GPT-3, learned how to create AI-generated content through hands-on coding exercises, and discovered how AI is transforming industries like marketing, healthcare, and education. With over 60 participants, the workshop offered valuable insights into AI, chatbot development, and its practical uses, leaving attendees with a deeper understanding of the potential of AI technologies.",
      imageUrl: "https://thingqbator.s3.ap-south-1.amazonaws.com/programdetail-1695399026712.jpeg",
      link: "https://thingqbator.nasscomfoundation.org/main/eventdetail/650813ee3afae5376461e330",
    },
    {
      id: 3,
      title: "Python 101 Live Course for College Students in Ghana",
      description: "The Python 101 Live Course for college students in Ghana has now been completed! Over the past 3 months, we learned Python from basics to intermediate levels, with two major projects along the way. After completing the Python course, we also covered the basics of Machine Learning. It was an amazing experience, and I’m grateful for the opportunity to guide these enthusiastic students through their learning journey.",
      imageUrl: "/GHANA.jpg",
      link: "https://www.linkedin.com/posts/shivam--maurya_python-101-live-session-activity-6987844195424088064-KeGV",
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