/** @type {import('next').NextConfig} */
const nextConfig = { 
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '[버킷이름].s3.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig
