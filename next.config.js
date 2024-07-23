/** @type {import('next').NextConfig} */
// reactStrictMode: true, distDir: 'build'
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;