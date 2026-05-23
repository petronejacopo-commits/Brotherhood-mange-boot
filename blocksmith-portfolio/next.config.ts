import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Enable View Transitions API
    viewTransition: true,
  },
};

export default nextConfig;