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
          destination: 'https://mpb-form-y524.vercel.app/',
        }
    ]
}

};

module.exports = nextConfig;
