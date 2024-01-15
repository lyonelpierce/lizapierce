const million = require('million/compiler');
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wj1rvpnez8ohtqok.public.blob.vercel-storage.com",
        port: "",
      },
    ],
  },
};

module.exports = million.next(
  nextConfig, { auto: { rsc: true } }
);
