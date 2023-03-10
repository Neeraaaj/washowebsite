/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'img.freepik.com', 'images.pexels.com', 'cdn.pixabay.com'],
  }
}

module.exports = nextConfig
