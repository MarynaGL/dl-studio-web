import '../globals.css'; // <-- ¡ESTA ES LA LÍNEA QUE DEVUELVE LOS COLORES!

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Inter, Montserrat } from 'next/font/google';
import Navbar from '@/components/Navbar'; 
import Footer from '@/components/Footer';

// 1. ESTO SÍ VA AFUERA (Las fuentes)
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });


// 2. TU FUNCIÓNd
export default async function RootLayout({ children, params }) {
  // ESTO VA ACÁ ADENTRO (Porque usamos el "params" que recibe la función)
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body 
        className={`${inter.variable} ${montserrat.variable} antialiased`} 
        suppressHydrationWarning
      >
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          
          <main className="w-full overflow-x-hidden">
            {children}
          </main>
          
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}