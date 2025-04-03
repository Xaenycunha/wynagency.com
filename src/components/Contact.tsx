'use client'

import { usePathname } from 'next/navigation'

const translations = {
  en: {
    title: 'Get in Touch',
    description: 'Have questions? We\'d love to hear from you.',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send Message'
  },
  es: {
    title: 'Contáctanos',
    description: '¿Tienes preguntas? Nos encantaría saber de ti.',
    name: 'Nombre',
    email: 'Correo electrónico',
    message: 'Mensaje',
    send: 'Enviar Mensaje'
  },
  pt: {
    title: 'Entre em Contato',
    description: 'Tem perguntas? Adoraríamos ouvir de você.',
    name: 'Nome',
    email: 'E-mail',
    message: 'Mensagem',
    send: 'Enviar Mensagem'
  }
}

export default function Contact() {
  const pathname = usePathname()
  const locale = pathname.split('/')[1] || 'en'
  const t = translations[locale as keyof typeof translations]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">{t.title}</h2>
        <p className="text-center text-gray-600 mb-12">{t.description}</p>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                {t.name}
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                {t.email}
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                {t.message}
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-900 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition-colors"
              >
                {t.send}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
} 