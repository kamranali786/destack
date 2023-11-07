/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
// next.config.js

module.exports = {
  // Other configurations
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
};

module.exports = nextConfig
