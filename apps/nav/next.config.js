/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['components', 'common', 'mobile', 'funnel']);
const nextConfig = {
  reactStrictMode: true,
}

module.exports = withTM(nextConfig)
