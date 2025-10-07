// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true, // importante para gerar páginas /pt/, /es/ etc.
  experimental: {
    typedRoutes: false, // evita conflito com dynamic routes
  },
};

export default nextConfig;
