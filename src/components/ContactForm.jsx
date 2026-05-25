"use client";
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function ContactForm() {
  const t = useTranslations('Contacto.Formulario');

  // 1. Estados para guardar los datos del formulario y el estado del envío
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    servicio: '',
    presupuesto: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // 2. Función para actualizar los datos mientras el usuario escribe
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // 3. Función que se ejecuta al presionar "Enviar"
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

try {
      // ¡Acá estaba el cambio clave! El fetch ahora apunta a Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: "8a566cc0-bf22-4f6b-8508-593cc6b0e559", 
          Nombre: formData.nombre,
          Empresa: formData.empresa,
          Email: formData.email,
          Servicio: formData.servicio,
          Presupuesto: formData.presupuesto,
          Mensaje: formData.mensaje,
          subject: "¡Nuevo cliente desde la web DL!", 
          from_name: "Design & Logic Studio"
        })
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSuccess(true);
        // Limpiamos el formulario
        setFormData({
          nombre: '',
          empresa: '',
          email: '',
          servicio: '',
          presupuesto: '',
          mensaje: ''
        });
        
        // Ocultamos el mensaje de éxito después de 5 segundos
        setTimeout(() => {
          setIsSuccess(false);
        }, 5000);
      } else {
        alert("Hubo un problema al enviar el formulario. Por favor, intentá nuevamente.");
      }
    } catch (error) {
      console.error(error);
      alert("Error de conexión. Revisá tu internet y volvé a intentar.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full flex justify-center bg-[#F7F7F7]">
      <div className="w-full max-w-[1440px] px-8 lg:px-[60px] flex flex-col md:flex-row items-stretch border-l border-r border-[#D9D6D3] bg-[#f7f7f7]">
        {/* COLUMNA IZQUIERDA: FORMULARIO */}
        <div className="w-full md:w-1/2 md:pr-16 flex flex-col">
          
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[#939390] font-inter font-light text-[10px] tracking-[2px] uppercase">
              {t('tag')}
            </span>
            <div className="flex-1 h-[1px] bg-[#dddcda]"></div>
          </div>
          
          <h2 className="text-[32px] font-inter font-normal text-[#18181A] leading-[1.2] mb-10">
            {t.rich('titulo', {
              verde: (chunks) => <span className="text-[#6b9e7a] italic">{chunks}</span>,
              br: () => <br />
            })}
          </h2>

          {/* Formulario vinculado a handleSubmit */}
          {/* <form className="flex flex-col gap-6" onSubmit={handleSubmit}> */}
          {/* Poné esto: */}
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <input type="hidden" name="_captcha" value="false" />
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col flex-1 gap-2">
                <label className="text-[10px] font-inter text-[#939390] uppercase tracking-wider">{t('lbl_nombre')}</label>
                <input required type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder={t('ph_nombre')} className="w-full bg-[#f4f4f2] text-[13px] text-[#18181A] px-4 py-3 rounded-sm outline-none focus:ring-1 focus:ring-[#6b9e7a] transition-all" />
              </div>
              <div className="flex flex-col flex-1 gap-2">
                <label className="text-[10px] font-inter text-[#939390] uppercase tracking-wider">{t('lbl_empresa')}</label>
                <input type="text" name="empresa" value={formData.empresa} onChange={handleChange} placeholder={t('ph_empresa')} className="w-full bg-[#f4f4f2] text-[13px] text-[#18181A] px-4 py-3 rounded-sm outline-none focus:ring-1 focus:ring-[#6b9e7a] transition-all" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-inter text-[#939390] uppercase tracking-wider">{t('lbl_email')}</label>
              <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder={t('ph_email')} className="w-full bg-[#f4f4f2] text-[13px] text-[#18181A] px-4 py-3 rounded-sm outline-none focus:ring-1 focus:ring-[#6b9e7a] transition-all" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-inter text-[#939390] uppercase tracking-wider">{t('lbl_servicio')}</label>
              <select required name="servicio" value={formData.servicio} onChange={handleChange} className="w-full bg-[#f4f4f2] text-[13px] text-[#939390] px-4 py-3 rounded-sm outline-none focus:ring-1 focus:ring-[#6b9e7a] transition-all cursor-pointer appearance-none">
                <option value="" disabled>{t('ph_servicio')}</option>
                <option value={t('opt_1')}>{t('opt_1')}</option>
                <option value={t('opt_2')}>{t('opt_2')}</option>
                <option value={t('opt_3')}>{t('opt_3')}</option>
                <option value={t('opt_4')}>{t('opt_4')}</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-inter text-[#939390] uppercase tracking-wider">{t('lbl_presupuesto')}</label>
              <input type="text" name="presupuesto" value={formData.presupuesto} onChange={handleChange} placeholder={t('ph_presupuesto')} className="w-full bg-[#f4f4f2] text-[13px] text-[#18181A] px-4 py-3 rounded-sm outline-none focus:ring-1 focus:ring-[#6b9e7a] transition-all" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-inter text-[#939390] uppercase tracking-wider">{t('lbl_mensaje')}</label>
              <textarea required name="mensaje" value={formData.mensaje} onChange={handleChange} placeholder={t('ph_mensaje')} rows="4" className="w-full bg-[#f4f4f2] text-[13px] text-[#18181A] px-4 py-3 rounded-sm outline-none focus:ring-1 focus:ring-[#6b9e7a] transition-all resize-none"></textarea>
            </div>

            {/* Botón dinámico (Cambia de texto si está cargando o si tuvo éxito) */}
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`w-full text-white font-inter text-[14px] py-4 rounded-sm transition-colors mt-2 ${isSuccess ? 'bg-[#6b9e7a]' : 'bg-[#18181A] hover:bg-[#2c2c2f]'} ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Enviando...' : isSuccess ? '¡Mensaje Enviado!' : t('btn_enviar')}
            </button>

            <div className="flex items-center gap-2 mt-1">
              <div className="w-[6px] h-[6px] rounded-full border border-[#6b9e7a]"></div>
              <span className="text-[11px] font-inter text-[#939390]">{t('footer_form')}</span>
            </div>

          </form>
        </div>

        {/* COLUMNA DERECHA: BLOQUE OSCURO (Se mantiene igual) */}
        <div className="w-full md:w-1/2 bg-[#18181A] p-10 md:p-14 flex flex-col mt-12 md:mt-0 relative">
          
          <div className="flex flex-col mb-8 border-b border-[#333333] pb-6">
            <span className="text-[10px] font-inter text-[#939390] uppercase tracking-[2px] mb-2">{t('info_email_tit')}</span>
            <a href={`mailto:${t('info_email_val')}`} className="text-[14px] font-inter font-light text-white hover:text-[#6b9e7a] transition-colors">
              {t('info_email_val')}
            </a>
          </div>

          <div className="flex flex-col mb-12 border-b border-[#333333] pb-6">
            <span className="text-[10px] font-inter text-[#939390] uppercase tracking-[2px] mb-2">{t('info_wa_tit')}</span>
            <a href="https://wa.me/5491130583475" target="_blank" rel="noopener noreferrer" className="text-[14px] font-inter font-light text-white hover:text-[#6b9e7a] transition-colors">
              {t('info_wa_val')}
            </a>
          </div>

          <div className="flex flex-col mb-12">
            <span className="text-[10px] font-inter text-[#6b9e7a] uppercase tracking-[2px] mb-6">{t('info_serv_tit')}</span>
            <div className="flex flex-col gap-3">
              {[1, 2, 3, 4].map((num) => (
                <div key={num} className="bg-[#212124] px-6 py-4 flex justify-between items-center rounded-sm">
                  <span className="text-[13px] font-inter text-[#dddcda]">{t(`serv_${num}`)}</span>
                  <span className="text-[12px] font-inter text-[#555555]">0{num}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto bg-[#eef5f0] p-6 flex items-start gap-4 rounded-sm">
            <div className="w-2 h-2 rounded-full bg-[#6b9e7a] mt-1.5 shrink-0"></div>
            <div className="flex flex-col">
              <span className="text-[14px] font-inter font-medium text-[#18181A] mb-1">{t('status_tit')}</span>
              <span className="text-[12px] font-inter font-light text-[#6b9e7a]">{t('status_desc')}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}