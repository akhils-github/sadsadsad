/** @type {import('next').NextConfig} */
const nextConfig = {
    output:"export",
    images: {
    unoptimized: true, // This disables Image Optimization API
  },
};

export default nextConfig;
