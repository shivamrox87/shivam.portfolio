import React from 'react';
import Image from 'next/image';

const NewsletterCard = ({ newsletter, className = '' }) => {
  return (
    <div className={`bg-white/5 rounded-lg overflow-hidden hover:bg-white/10 transition-all duration-300 w-full ${className}`}>
      {/* Image Section */}
      {newsletter.imagePath && (
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image 
            src={newsletter.imagePath}
            alt={newsletter.title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />
        </div>
      )}
      
      <div className="p-6">
        {/* Date */}
        <div className="text-sm text-[#eb5939] mb-3 font-Plus_Jakarta_Sans">
          {newsletter.date}
        </div>
        
        {/* Title */}
        <h2 className="text-xl font-semibold text-[#e9e9e7] mb-3 font-Plus_Jakarta_Sans line-clamp-2 hover:text-[#eb5939] transition-colors">
          {newsletter.title}
        </h2>
        
        {/* Description */}
        <div className="text-[#e9e9e7]/80 mb-4 font-Plus_Jakarta_Sans line-clamp-3">
          {newsletter.description}
        </div>
        
        {/* CTA Button */}
        <a 
          href={newsletter.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-[#eb5939] text-[#e9e9e7] rounded-lg hover:bg-[#eb5939]/90 transition-all duration-300 font-Plus_Jakarta_Sans text-sm font-medium"
        >
          {newsletter.ctaText}
        </a>
      </div>
    </div>
  );
};

export default NewsletterCard; 