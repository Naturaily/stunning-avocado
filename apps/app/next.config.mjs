import '@natu/env/src/env/env.mjs';

/** @type {import("next").NextConfig} */
const config = {
  transpilePackages: ['@natu/env', '@natu/storyblok-page-compositions'],
  images: {
    domains: ['a.storyblok.com'],
  },
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: `/${process.env.NEXT_PUBLIC_STORYBLOK_APP_NAME}/:path*`,
        destination: '/:path*', // The :path parameter is used here so will not be automatically passed in the query
      },
    ];
  },
};

export default config;
