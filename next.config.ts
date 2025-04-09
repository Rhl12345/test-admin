import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storagemedia.corporategear.com',
        pathname: '/storagemedia/**',
      },
      {
        protocol: 'https',
        hostname: 'another-domain.com',
        pathname: '/images/**',
      },
    ]
  },
};

export default nextConfig;
