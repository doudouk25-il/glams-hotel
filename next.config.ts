import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "webbox.imgix.net",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
