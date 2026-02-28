/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.leoamerico.me' }],
        destination: 'https://leoamerico.me/:path*',
        permanent: true,
      },
    ]
  },
}
module.exports = nextConfig
