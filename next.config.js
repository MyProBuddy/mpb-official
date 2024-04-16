const config = require("./src/config/config.json");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: config.base_path !== "/" ? config.base_path : "",
  trailingSlash: config.site.trailing_slash,
  output: 'standalone',
  async rewrites() {
    return [
        {
          source: '/grants',
          destination: 'https://mpb-form-iuhnubeuyce7ec677rc32786278b7z28nseven.vercel.app',
        }
    ]
}
};

module.exports = nextConfig;
