const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    scrollRestoration: true,
    optimizeCss: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.digitalax.xyz",
        pathname: "/ipfs/**",
      },
    ],
    unoptimized: true,
  },
  trailingSlash: true,
  async headers() {
    let headersConfig = [];

    const allowedOrigins = ["https://cdn.digitalax.xyz"];
    allowedOrigins.forEach((origin) => {
      headersConfig.push({
        source: "/(.*)",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: origin,
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "Origin, X-Requested-With, Content-Type, Accept, Authorization",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },
        ],
      });
    });

    return headersConfig;
  },
};

module.exports = nextConfig;
