'use client';
import React, { useEffect, useState } from 'react';
import NewsletterCard from '@/components/NewsletterCard';
import Header from '@/components/Header';
import ReactMarkdown from 'react-markdown';

const NewslettersPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [newsletters, setNewsletters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mediumPosts, setMediumPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroSection = document.getElementById('hero-section');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setIsScrolled(scrollPosition >= heroBottom - 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const fetchNewsletters = async () => {
      try {
        const response = await fetch('/api/newsletters', {
          cache: 'no-store',
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Fetched newsletters:', data.newsletters);
        setNewsletters(data.newsletters || []);
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsletters();
  }, []);

  useEffect(() => {
    const fetchMediumPosts = async () => {
      try {
        setLoadingPosts(true);
        const response = await fetch('/api/medium-posts');
        if (!response.ok) {
          throw new Error('Failed to fetch Medium posts');
        }
        const data = await response.json();
        setMediumPosts(data.posts.slice(0, 3));
      } catch (error) {
        console.error('Error fetching Medium posts:', error);
      } finally {
        setLoadingPosts(false);
      }
    };

    fetchMediumPosts();
  }, []);

  useEffect(() => {
    // Load Fillout script
    const script = document.createElement('script');
    script.src = 'https://server.fillout.com/embed/v1/';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#e9e9e7]">
      <Header textColor={isScrolled ? '#e9e9e7' : '#0d0d0d'} />
      
      {/* Hero Section with Light Background */}
      <div id="hero-section" className="pt-[120px] bg-[#e9e9e7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-Plus_Jakarta_Sans text-[#0d0d0d]">
              AI & Automation Insights Newsletter
            </h1>
            <p className="text-xl md:text-2xl text-[#0d0d0d]/80 max-w-3xl mx-auto font-Plus_Jakarta_Sans">
              Your weekly guide to AI innovation, automation strategies, and ethical tech implementation. From business processes to personal productivity, stay ahead in the AI revolution.
            </p>
          </div>
        </div>
      </div>

      {/* Dark Background Section for Newsletter Cards */}
      <div className="bg-[#0d0d0d] relative min-h-screen">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#eb593908] via-[#0d0d0d] to-[#0d0d0d]" />
          <div className="absolute inset-0 bg-[url('/grain.png')] opacity-[0.07] mix-blend-overlay" />
        </div>
        
        {/* Content Section */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {loading ? (
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#eb5939]"></div>
            </div>
          ) : error ? (
            <div className="text-center text-[#eb5939] py-8">
              <p>Error: {error}</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full auto-rows-fr">
                {newsletters.slice(0, 6).map((newsletter, index) => (
                  <div 
                    key={`${newsletter.url}-${index}`}
                    className="w-full min-h-[400px] flex"
                  >
                    <NewsletterCard newsletter={newsletter} className="w-full" />
                  </div>
                ))}
              </div>
              {newsletters.length === 0 && (
                <div className="text-center text-[#e9e9e7] py-8">
                  <p>No newsletters found</p>
                </div>
              )}
            </>
          )}
        </div>

        {/* New Medium Posts Section */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#e9e9e7] mb-4 font-Plus_Jakarta_Sans">
              Deep Dives into AI & Automation
            </h2>
            <p className="text-[#e9e9e7]/80 font-Plus_Jakarta_Sans">
              Explore our latest insights on AI implementation, automation strategies, and ethical tech considerations
            </p>
          </div>
          
          {loadingPosts ? (
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#eb5939]"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mediumPosts.map((post, index) => (
                <div 
                  key={index}
                  className="bg-[#1a1a1a] rounded-2xl overflow-hidden transition-transform hover:scale-[1.02]"
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img 
                      src={post.thumbnail || '/images/default-post.jpg'} 
                      alt={post.title} 
                      className="object-cover w-full h-48"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-[#e9e9e7] mb-3 font-Plus_Jakarta_Sans">
                      {post.title}
                    </h3>
                    <p className="text-[#e9e9e7]/70 mb-4 line-clamp-3">
                      {post.description}
                    </p>
                    <a 
                      href={post.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#eb5939] hover:text-[#eb5939]/80 transition-colors"
                    >
                      Read More
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Newsletter Subscription Section */}
        <div className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-[#1a1a1a] rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#e9e9e7] mb-4 font-Plus_Jakarta_Sans">
                Join the Newsletter – Be the Person Who Knows What's Coming Next!
              </h2>
              <p className="text-[#e9e9e7]/80 font-Plus_Jakarta_Sans mb-4">
                Get the freshest insights on AI and automation sent right to your inbox. This isn't just any newsletter – it's a collection of trends, tips, and insider knowledge that'll keep you ahead of the pack (and make you sound ridiculously smart in any tech conversation).
              </p>
              <p className="text-[#e9e9e7]/80 font-Plus_Jakarta_Sans text-lg font-semibold">
                Ready to level up?
              </p>
            </div>
            <div 
              style={{width:'100%', height:'500px'}} 
              data-fillout-id="ee2Ko2jmWnus" 
              data-fillout-embed-type="standard" 
              data-fillout-inherit-parameters="true"
              data-fillout-dynamic-resize="true"
            ></div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="relative z-10 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-[#e9e9e7]/80 font-Plus_Jakarta_Sans">
              Want to stay in the loop? Follow us on social media for more updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewslettersPage; 