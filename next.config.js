/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  skipTrailingSlashRedirect: true,
  experimental: {
    esmExternal: false,
    serverActions: true,
  },
};

module.exports = nextConfig;
