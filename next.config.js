/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_OPENAI_APIKEY: process.env.NEXT_PUBLIC_OPENAI_APIKEY
  }
}

module.exports = nextConfig
