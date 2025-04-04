'use client'

import { usePathname } from 'next/navigation'

const translations = {
  en: {
    title: 'Welcome to WYN Agency',
    subtitle: 'Professional Football Agency',
    description: 'Dedicated to player development and career management',
    cta: 'Join Our Network'
  },
  es: {
    title: 'Bienvenido a WYN Agency',
    subtitle: 'Agencia de Fútbol Profesional',
    description: 'Dedicada al desarrollo de jugadores y gestión de carreras',
    cta: 'Únete a Nuestra Red'
  },
  pt: {
    title: 'Bem-vindo à WYN Agency',
    subtitle: 'Agência de Futebol Profissional',
    description: 'Dedicada ao desenvolvimento de jogadores e gestão de carreiras',
    cta: 'Junte-se à Nossa Rede'
  }
}

export default function Hero() {
  const pathname = usePathname()
  const locale = pathname.split('/')[1] || 'pt'
  const t = translations[locale as keyof typeof translations]

  return (
    <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          {t.title}
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
          {t.subtitle}
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          {t.description}
        </p>
        <button className="bg-white text-blue-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-100 transition-colors">
          {t.cta}
        </button>
      </div>
    </section>
  )
} 