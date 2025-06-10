import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      bodySizeLimit: "5mb",
    },
  },
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://stbjednzxgdtnixthvyt.supabase.co/storage/v1/object/public/landmark",
      },
    ],
  },
};

export default nextConfig;
