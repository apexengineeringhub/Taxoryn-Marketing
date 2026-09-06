/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["lucide-react"],
  reactStrictMode: true,
  devIndicators: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: "/our-story",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/solutions/small-firm",
        destination: "/solutions/small-tax-firm",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

