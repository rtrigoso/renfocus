import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    loader: 'custom',
    loaderFile: './custom-image-loader.ts',
  },
};

export default nextConfig;
