/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/charging-locations",
        destination: "/contact",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
