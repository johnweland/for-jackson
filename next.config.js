/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["scontent-msp1-1.xx.fbcdn.net", "imgs.search.brave.com"],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src, 'self'; script-src, 'none'; sandbox;",
    loader: "imgix",
    path: "https://johnweland.me/for-jackson",
  },
};

module.exports = nextConfig;
