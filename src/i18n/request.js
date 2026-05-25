import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

const locales = ['es', 'en', 'ru', 'uk'];

export default getRequestConfig(async ({ requestLocale }) => {
  // 1. Recibimos la promesa correcta (requestLocale) y la esperamos
  let locale = await requestLocale;
  
  // 2. Si viene vacío o es un idioma que no tenemos, recién ahí da 404
  if (!locale || !locales.includes(locale)) {
    notFound();
  }

  // 3. Leemos tu archivo JSON
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});