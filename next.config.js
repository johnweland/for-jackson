/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: "/for-jackson",
  images: {
    domains: [
      "scontent-msp1-1.xx.fbcdn.net",
      "imgs.search.brave.com",
      "www.facebook.com",
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src, 'self'; script-src, 'none'; sandbox;",
    loader: "imgix",
    path: "",
  },
};

module.exports = nextConfig;
