/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: '/Porfolio',
  assetPrefix: '/Porfolio',
};

module.exports = nextConfig;