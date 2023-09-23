/** @type {import('next').NextConfig} */
const nextConfig = {
  esmExternals: false,
  images: {
    domains: ["cdn.sanity.io"],
  },
};

module.exports = nextConfig;
