import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // Una lista de todos los locales soportados
  locales: ['es', 'en', 'ru', 'uk'],

  // Si el usuario entra a tudominio.com, lo manda directo acá
  defaultLocale: 'es'
});

export const config = {
  // Le dice al middleware que intercepte todas las páginas, excepto los archivos estáticos e imágenes
  matcher: ['/((?!api|_next|.*\\..*).*)']
};