/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/about', destination: '/#about', permanent: true },
      { source: '/building', destination: '/#featured-work', permanent: true },
      { source: '/work', destination: '/#featured-work', permanent: true },
      { source: '/work/:slug*', destination: '/#featured-work', permanent: true },
      { source: '/research', destination: '/#research', permanent: true },
      { source: '/blog', destination: '/#writing', permanent: true },
      { source: '/blog/:slug', destination: '/writing/:slug', permanent: true },
      { source: '/sessions', destination: '/#speaking', permanent: true },
      { source: '/connect', destination: '/#contact', permanent: true },
      { source: '/ebooks', destination: '/#writing', permanent: true },
      { source: '/newsletters', destination: '/#writing', permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*'
      }
    ]
  },
  serverExternalPackages: ['cheerio']
}

module.exports = nextConfig
