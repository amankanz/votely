/*
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here =/
};

export default nextConfig;
*/

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React strict mode
  reactStrictMode: true,

  // Use the standalone output format for optimized chunking
  output: "standalone",

  // Add trailing slash if required by your server
  trailingSlash: false,

  // Ensure images load correctly if you are using the `next/image` component
  images: {
    domains: ["your-domain.com"], // Replace with your actual domains
  },

  // Add webpack configuration for better debugging or chunk optimization
  webpack(config, { isServer }) {
    if (!isServer) {
      // Resolve fallback for client-only libraries
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },

  // Experimental features for Next.js 15
  // experimental: {
  //   appDir: true, // Ensure you're enabling the App Router
  // },
};

export default nextConfig;
