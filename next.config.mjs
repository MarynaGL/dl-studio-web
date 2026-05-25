import createNextIntlPlugin from 'next-intl/plugin';

// Le indicamos la ruta EXACTA al archivo request.js
const withNextIntl = createNextIntlPlugin('./src/i18n/request.js');

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextIntl(nextConfig);
