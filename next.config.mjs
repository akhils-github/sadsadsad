/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bhooshan-be.s3.ap-south-1.amazonaws.com",
        pathname: "/**", // allow all paths
      },
    ],
  },
};

export default nextConfig;
