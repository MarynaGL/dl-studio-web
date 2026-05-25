import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
import "../globals.css";

// 1. Recibimos 'params' completo, sin desestructurar todavía
export default async function RootLayout({ children, params }) {
  
  // 2. Desempaquetamos el locale usando 'await' (El estándar de Next.js 15)
  const { locale } = await params;
  
  // 3. Obtenemos los diccionarios
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        {/* Todo, absolutamente todo, debe ir adentro del body */}
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          
          <main>
            {children}
          </main>
          
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}