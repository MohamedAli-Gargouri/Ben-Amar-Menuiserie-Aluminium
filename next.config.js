/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    RECEIVER_MAIL: process.env.RECEIVER_MAIL,
    EMAILJS_PUBLIC_KEY: process.env.EMAILJS_PUBLIC_KEY,
    EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID,
    EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID
  },
  images: {
    unoptimized: true,
    domains: [],
  },
  experimental: {
    appDir: false,
  },
};

module.exports = nextConfig;
