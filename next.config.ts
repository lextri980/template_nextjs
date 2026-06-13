import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  /* config options here */
  // env: {
  //   BASE_URL: process.env.BASE_URL,
  // },
  // eslint: {
  //   // Treat warnings as errors during builds
  //   ignoreDuringBuilds: false,
  // },
};

const withNextIntl = createNextIntlPlugin('./src/configs/i18n-request.ts');

export default withNextIntl(nextConfig);
