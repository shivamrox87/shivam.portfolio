import { NextResponse } from 'next/server';
import Parser from 'rss-parser';

// Cache the posts for 1 hour
let cachedPosts = null;
let lastFetchTime = null;
const CACHE_DURATION = 3600000; // 1 hour in milliseconds

export async function GET() {
  try {
    // Check if we have valid cached data
    if (cachedPosts && lastFetchTime && (Date.now() - lastFetchTime) < CACHE_DURATION) {
      return NextResponse.json({ posts: cachedPosts });
    }

    // If no cache or cache expired, fetch new data
    const parser = new Parser({
      customFields: {
        item: [['content:encoded', 'content']] // Parse content:encoded field
      }
    });
    
    const feed = await parser.parseURL('https://medium.com/feed/@shivam--maurya');
    
    const posts = feed.items.map(item => {
      // Extract the first image from content if available
      const imgMatch = item.content?.match(/<img[^>]+src="([^">]+)"/);
      const thumbnail = imgMatch ? imgMatch[1] : null;

      // Extract text content by removing HTML tags and getting first 200 characters
      const textContent = item.content
        ?.replace(/<figure>.*?<\/figure>/g, '') // Remove figure tags (usually contains images)
        ?.replace(/<[^>]*>/g, '') // Remove remaining HTML tags
        ?.replace(/&nbsp;/g, ' ') // Replace &nbsp; with spaces
        ?.replace(/\s+/g, ' ') // Replace multiple spaces with single space
        ?.trim()
        ?.slice(0, 200) || '';

      return {
        title: item.title,
        link: item.link,
        description: textContent + '...',
        thumbnail,
        pubDate: item.pubDate,
      };
    });

    // Update cache
    cachedPosts = posts;
    lastFetchTime = Date.now();

    return NextResponse.json({ posts });
  } catch (error) {
    console.error('Error fetching Medium posts:', error);
    // If there's an error but we have cached data, return it
    if (cachedPosts) {
      return NextResponse.json({ posts: cachedPosts });
    }
    return NextResponse.json({ error: 'Failed to fetch Medium posts' }, { status: 500 });
  }
} 