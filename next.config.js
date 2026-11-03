/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mikegwalker.com',
        pathname: '/assets/**',
      },
    ],
  },
}

module.exports = nextConfig
