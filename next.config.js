/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['scontent-msp1-1.xx.fbcdn.net', 'imgs.search.brave.com'],
  }
}

module.exports = nextConfig
