/** @type {import('next').NextConfig} */
const path = require('path');

const isDevEnv = process.env.NODE_ENV === 'development'

const nextConfig = {
  reactStrictMode: true,
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    return config
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    loader: 'cloudinary',
    path: isDevEnv ? 'http://localhost:3000/' : 'https://digitalhauss.com/',
    domains: ['images.pexels.com', 'digitalhauss.com'],
  },
}
module.exports = nextConfig;