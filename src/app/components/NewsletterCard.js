import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const NewsletterCard = ({ newsletter }) => {
  const [imageError, setImageError] = useState(false);
  const defaultImage = 'https://placehold.co/600x400/e2e8f0/1e293b?text=Pipeline+Post';

  // Ensure we have a valid href
  const href = newsletter?.link || '#';

  return (
    <Link 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative w-full h-48">
        <Image
          src={imageError ? defaultImage : (newsletter?.image || defaultImage)}
          alt={newsletter?.title || 'Newsletter'}
          fill
          className="object-cover"
          onError={() => setImageError(true)}
          unoptimized={true}
          priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <p className="text-gray-500 text-sm mb-2">{newsletter?.date || 'Recent'}</p>
        <h2 className="text-xl font-semibold mb-3 line-clamp-2">
          {newsletter?.title || 'Loading...'}
        </h2>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {newsletter?.description || 'Click to read more...'}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">
            By {newsletter?.author || 'Shivam Maurya'}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default NewsletterCard; 