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
          destination: 'https://mpbforms.vercel.app/',
        }
    ]
}

};

module.exports = nextConfig;
