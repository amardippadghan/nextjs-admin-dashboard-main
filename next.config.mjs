/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
  unoptimized: true
  },
  output: "export", // Static site export
  distDir: "build",
};

export default nextConfig;
