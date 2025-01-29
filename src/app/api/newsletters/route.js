import { NextResponse } from 'next/server';
import * as cheerio from 'cheerio';
import fs from 'fs/promises';
import path from 'path';

const CACHE_DIR = path.join(process.cwd(), 'public', 'cache');
const NEWSLETTERS_FILE = path.join(CACHE_DIR, 'newsletters.json');
const IMAGES_DIR = path.join(CACHE_DIR, 'newsletter-images');

// Ensure directories exist
async function ensureDirectories() {
  try {
    await fs.mkdir(CACHE_DIR, { recursive: true });
    await fs.mkdir(IMAGES_DIR, { recursive: true });
  } catch (error) {
    console.error('Error creating directories:', error);
  }
}

// Download and save image
async function downloadImage(imageUrl, title) {
  try {
    // Create a safe filename from the title
    const safeTitle = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric chars with hyphens
      .replace(/-+/g, '-')         // Replace multiple hyphens with single hyphen
      .replace(/^-|-$/g, '');      // Remove leading/trailing hyphens
    
    const filename = `${safeTitle}.jpg`;
    const imagePath = path.join(IMAGES_DIR, filename);

    // Check if image already exists
    try {
      await fs.access(imagePath);
      console.log(`Image already exists for: ${title}`);
      return `/cache/newsletter-images/${filename}`;
    } catch {
      // Image doesn't exist, download it
      const response = await fetch(imageUrl, {
        timeout: 5000,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': 'image/webp,image/jpeg,image/png,image/*;q=0.8',
          'Cache-Control': 'no-cache'
        }
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch image: ${response.status}`);
      }

      const buffer = Buffer.from(await response.arrayBuffer());
      await fs.writeFile(imagePath, buffer);
      return `/cache/newsletter-images/${filename}`;
    }
  } catch (error) {
    console.error('Error downloading image:', error);
    return null;
  }
}

// Clean old images
async function cleanOldImages(currentTitles) {
  try {
    const files = await fs.readdir(IMAGES_DIR);
    for (const file of files) {
      // Check if the file corresponds to any current post title
      const fileWithoutExt = file.replace('.jpg', '');
      const isCurrentImage = currentTitles.some(title => {
        const safeTitle = title
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/-+/g, '-')
          .replace(/^-|-$/g, '');
        return safeTitle === fileWithoutExt;
      });

      if (!isCurrentImage) {
        await fs.unlink(path.join(IMAGES_DIR, file));
        console.log(`Removed old image: ${file}`);
      }
    }
  } catch (error) {
    console.error('Error cleaning old images:', error);
  }
}

// Ensure cache directory exists
async function ensureCacheDir() {
  try {
    await fs.mkdir(CACHE_DIR, { recursive: true });
  } catch (error) {
    console.error('Error creating cache directory:', error);
  }
}

// Save newsletters to JSON file
async function saveNewsletters(newsletters) {
  try {
    await ensureCacheDir();
    await fs.writeFile(
      NEWSLETTERS_FILE,
      JSON.stringify({ newsletters, lastUpdated: new Date().toISOString() }, null, 2)
    );
  } catch (error) {
    console.error('Error saving newsletters:', error);
  }
}

// Read newsletters from JSON file
async function readNewsletters() {
  try {
    const data = await fs.readFile(NEWSLETTERS_FILE, 'utf-8');
    return JSON.parse(data).newsletters;
  } catch {
    return null;
  }
}

// Add this helper function to clean and validate dates
function extractValidDate($post) {
  // First try to find a single clean date
  const singleDateMatch = $post.find('time, [class*="date"]').text().trim()
    .match(/(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+\d{1,2},\s+\d{4}/i);
  
  if (singleDateMatch) {
    return singleDateMatch[0];
  }

  // If no clean date found, look in the text but avoid concatenated dates
  const allDates = $post.text().match(/(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+\d{1,2},\s+\d{4}/gi) || [];
  
  // Return the most recent date if multiple found
  if (allDates.length > 0) {
    const validDates = allDates.map(date => new Date(date));
    const mostRecent = new Date(Math.max(...validDates));
    return mostRecent.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  }

  return 'Date not available';
}

// Add this helper function at the top with other helper functions
async function getPostImage(href) {
  try {
    const response = await fetch(href, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      }
    });

    if (!response.ok) return null;

    const html = await response.text();
    const $ = cheerio.load(html);
    
    // Try to find the main post image
    const $image = $('meta[property="og:image"]').first() || 
                  $('meta[name="twitter:image"]').first() ||
                  $('article img, .post-content img').first();

    let imageUrl = $image.attr('content') || $image.attr('src');
    
    if (!imageUrl) return null;
    
    // Ensure absolute URL
    if (!imageUrl.startsWith('http')) {
      imageUrl = imageUrl.startsWith('//') ? `https:${imageUrl}` : `https://thepipelinepost.beehiiv.com${imageUrl}`;
    }

    return imageUrl;
  } catch (error) {
    console.error('Error fetching post image:', error);
    return null;
  }
}

export async function GET() {
  try {
    const siteUrl = 'https://thepipelinepost.beehiiv.com';
    const cachedData = await readNewsletters();
    
    const response = await fetch(siteUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
      },
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`);
    }

    const html = await response.text();
    const $ = cheerio.load(html);

    // First try to get posts from the archive page
    let posts = $('div[class*="archive-grid"] > div')
      .filter((_, el) => {
        const $el = $(el);
        return $el.find('a[href*="/p/"]').length > 0;
      });

    // If no posts found in archive grid, try the main content area
    if (posts.length === 0) {
      posts = $('main div[class*="content"]').find('div').filter((_, el) => {
        const $el = $(el);
        const hasLink = $el.find('a[href*="/p/"]').length > 0;
        const hasTitle = $el.find('h2, h3, [class*="title"]').length > 0;
        return hasLink && hasTitle;
      });
    }

    // If still no posts, try a broader selector
    if (posts.length === 0) {
      posts = $('div').filter((_, el) => {
        const $el = $(el);
        const hasLink = $el.find('a[href*="/p/"]').length > 0;
        const hasTitle = $el.find('h2, h3, [class*="title"]').length > 0;
        const isContainer = $el.find('img').length > 0 || $el.find('p').length > 0;
        return hasLink && hasTitle && isContainer;
      });
    }

    console.log('Initial posts found:', posts.length);

    // Store unique posts with their complete data
    const uniquePosts = new Map();
    posts.each((_, element) => {
      const $post = $(element);
      const $link = $post.find('a[href*="/p/"]').first();
      const href = $link.attr('href');
      
      if (href && !uniquePosts.has(href)) {
        // Get title
        const title = $post.find('h2, h3, [class*="title"]').first().text().trim() ||
                     $link.text().trim();

        // Only add if we have both href and title
        if (title && title.length > 0) {
          uniquePosts.set(href, {
            element,
            title, // Store title to help with debugging
            href
          });
        }
      }
    });

    console.log('Unique posts found:', uniquePosts.size);

    // Take only the first 6 unique posts
    const selectedPosts = Array.from(uniquePosts.values())
      .slice(0, 6)
      .map(({ element }) => element);

    console.log('Selected posts for processing:', selectedPosts.length);

    const newsletterPromises = selectedPosts.map(async (element) => {
      const $post = $(element);
      const $link = $post.find('a[href*="/p/"]').first();
      const href = $link.attr('href');
      
      if (!href) return null;

      // Get clean date first
      const dateText = extractValidDate($post);
      if (dateText === 'Date not available') return null;

      // Rest of the title and description extraction...
      const title = $post.find('h2, h3').first().text().trim() ||
                    $post.find('div[class*="title"]').first().text().trim() ||
                    $link.text().trim();

      // Improved description extraction
      let description;
      if (href.includes('warning-this-email-may-change-your-business-forever')) {
        description = "Or, you know, you could just unsubscribe and miss out on all the fun. Your call. 😉";
      } else {
        description = $post.find('p').filter((_, el) => {
          const text = $(el).text().trim();
          return text.length > 30 && 
                 !text.includes(dateText) && 
                 !text.includes('Welcome to') &&
                 !text.includes('Subscribe');
        }).first().text().trim() || 'No description available';
      }

      // Get image with better error handling
      let finalImagePath = null;
      try {
        const $image = $post.find('img[src*="post"], img[data-src*="post"]').first() || 
                      $post.find('img').first();
        
        let imageUrl;
        if ($image.length) {
          imageUrl = $image.attr('src') || $image.attr('data-src');
        }

        // If no image found in preview, fetch from post page
        if (!imageUrl) {
          const fullUrl = href.startsWith('http') ? href : `${siteUrl}${href}`;
          imageUrl = await getPostImage(fullUrl);
        }

        if (imageUrl) {
          if (!imageUrl.startsWith('http')) {
            imageUrl = imageUrl.startsWith('//') ? `https:${imageUrl}` : `${siteUrl}${imageUrl}`;
          }
          finalImagePath = await downloadImage(imageUrl, title);
        }
      } catch (error) {
        console.error('Error processing image:', error);
      }

      // Only return if we have valid data
      if (title && dateText !== 'Date not available') {
        return {
          title,
          description,
          date: dateText,
          url: href.startsWith('http') ? href : `${siteUrl}${href}`,
          imagePath: finalImagePath,
          ctaText: 'Read Full Post →'
        };
      }
      return null;
    });

    // Add better error handling for the promises
    const newsletterResults = await Promise.all(
      newsletterPromises.map(p => p.catch(error => {
        console.error('Error processing newsletter:', error);
        return null;
      }))
    );

    const newsletters = newsletterResults.filter(Boolean);

    console.log('Final newsletters count:', newsletters.length); // Debug log

    if (newsletters.length > 0) {
      await ensureDirectories();
      await saveNewsletters(newsletters);
      
      // Clean old images based on current post titles
      const currentTitles = newsletters.map(n => n.title);
      await cleanOldImages(currentTitles);
      
      return NextResponse.json({ success: true, newsletters });
    }

    return NextResponse.json({ 
      success: false, 
      error: 'No newsletters found. Please try again later.',
      newsletters: []
    });

  } catch (error) {
    console.error('Error:', error);
    
    // Return cached data on error
    try {
      const cachedNewsletters = await readNewsletters();
      if (cachedNewsletters) {
        return NextResponse.json({ 
          success: true, 
          newsletters: cachedNewsletters,
          fromCache: true 
        });
      }
    } catch (cacheError) {
      console.error('Cache error:', cacheError);
    }

    return NextResponse.json({ 
      success: false, 
      error: error.message,
      newsletters: []
    });
  }
} 