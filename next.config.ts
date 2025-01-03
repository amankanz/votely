/*
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here =/
};

export default nextConfig;
*/

/*
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
*/

import type { NextConfig } from "next";
import webpack from "webpack";

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
      // Add fallback for Node.js modules in client-side code
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        stream: require.resolve("stream-browserify"), // Add this line
        buffer: require.resolve("buffer"), // Add this line
      };

      // Provide Node.js polyfills for client-side code
      config.plugins.push(
        new webpack.ProvidePlugin({
          process: "process/browser",
          Buffer: ["buffer", "Buffer"],
        })
      );
    }
    return config;
  },
};

export default nextConfig;
