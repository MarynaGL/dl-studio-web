import React from 'react';
import ContactHero from '@/components/ContactHero';
import ContactForm from '@/components/ContactForm'; // 1. Importamos el formulario
import ContactSteps from '@/components/ContactSteps';
import ContactFooter from '@/components/ContactFooter';

export const metadata = {
  title: 'Contacto | Design & Logic',
  description: 'Hablemos de tu próximo proyecto. En menos de 24 horas te respondemos con un diagnóstico inicial.',
};

export default function ContactPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      
      <ContactHero />
      
      <ContactForm />

      <ContactSteps />
      
      <ContactFooter />

    </main>
  );
}