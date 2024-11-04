/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fwrawrtdsrrumgarhmds.supabase.co",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
