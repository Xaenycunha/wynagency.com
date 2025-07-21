'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

// Footer translations
const footerTranslations = {
  en: {
    about: 'About',
    aboutText: 'WYN Agency is dedicated to elevating soccer careers through professional management and development.',
    quickLinks: 'Quick Links',
    players: 'Players',
    tournaments: 'Tournaments',
    contact: 'Contact',
    email: 'Email: info@wynagency.com',
    phone: 'Phone: +34 663 836 731',
    location: 'Location: Madrid, Spain',
    followUs: 'Follow Us',
    allRightsReserved: 'All rights reserved.'
  },
  es: {
    about: 'Nosotros',
    aboutText: 'WYN Agency está dedicada a elevar las carreras del fútbol a través de la gestión y el desarrollo profesional.',
    quickLinks: 'Enlaces Rápidos',
    players: 'Jugadores',
    tournaments: 'Torneos',
    contact: 'Contacto',
    email: 'Email: info@wynagency.com',
    phone: 'Teléfono: +34 663 836 731',
    location: 'Ubicación: Madrid, España',
    followUs: 'Síguenos',
    allRightsReserved: 'Todos los derechos reservados.'
  },
  pt: {
    about: 'Sobre',
    aboutText: 'A WYN Agency é dedicada a elevar carreiras no futebol através de gestão e desenvolvimento profissional.',
    quickLinks: 'Links Rápidos',
    players: 'Jogadores',
    tournaments: 'Torneios',
    contact: 'Contato',
    email: 'Email: info@wynagency.com',
    phone: 'Telefone: +34 663 836 731',
    location: 'Localização: Madrid, Espanha',
    followUs: 'Siga-nos',
    allRightsReserved: 'Todos os direitos reservados.'
  }
}

export default function Footer() {
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState('pt')
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  const languages = [
    { code: 'en', name: 'English', flag: '/flags/us.png' },
    { code: 'es', name: 'Español', flag: '/flags/es.png' },
    { code: 'pt', name: 'Português', flag: '/flags/pt.png' }
  ]

  useEffect(() => {
    setMounted(true)
    // Get the saved language from localStorage or default to 'pt'
    const savedLang = localStorage.getItem('selectedLanguage') || 'pt'
    setCurrentLang(savedLang)
  }, [])

  // Mapping for main path segments between languages
  const pathMap: Record<string, Record<string, string>> = {
    players: { en: 'players', es: 'jugadores', pt: 'jogadores' },
    tournaments: { en: 'tournaments', es: 'torneos', pt: 'torneios' },
    jogadores: { en: 'players', es: 'jugadores', pt: 'jogadores' },
    jugadores: { en: 'players', es: 'jugadores', pt: 'jogadores' },
    torneios: { en: 'tournaments', es: 'torneos', pt: 'torneios' },
    torneos: { en: 'tournaments', es: 'torneos', pt: 'torneios' },
  }

  const handleLanguageChange = (langCode: string) => {
    setCurrentLang(langCode)
    setIsLangOpen(false)
    localStorage.setItem('selectedLanguage', langCode)
    const pathParts = pathname.split('/')
    if (pathParts[1] === langCode) return // already on selected lang
    pathParts[1] = langCode
    // Map the main segment if needed
    if (pathParts[2] && pathMap[pathParts[2]]) {
      pathParts[2] = pathMap[pathParts[2]][langCode] || pathParts[2]
    }
    const newPath = pathParts.join('/') || '/'
    window.location.href = newPath
  }

  // Get the current language from the pathname
  const locale = pathname.split('/')[1] || 'pt'
  const t = footerTranslations[locale as keyof typeof footerTranslations] || footerTranslations.pt

  if (!mounted) {
    return null
  }

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.about}</h3>
            <p className="text-gray-400">
              {t.aboutText}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/${locale === 'en' ? 'players' : locale === 'es' ? 'jugadores' : 'jogadores'}`} className="text-gray-400 hover:text-white transition-colors">
                  {t.players}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/${locale === 'en' ? 'tournaments' : locale === 'es' ? 'torneos' : 'torneios'}`} className="text-gray-400 hover:text-white transition-colors">
                  {t.tournaments}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.contact}</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">{t.email}</li>
              <li className="text-gray-400">{t.phone}</li>
              <li className="text-gray-400">{t.location}</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.followUs}</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/wynagency_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>

            {/* Language Selector */}
            <div className="mt-4">
              <div className="relative">
                <button
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Image
                    src={languages.find(lang => lang.code === currentLang)?.flag || '/flags/pt.png'}
                    alt={currentLang}
                    width={20}
                    height={15}
                    className="rounded-sm"
                  />
                  <span>{languages.find(lang => lang.code === currentLang)?.name}</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${isLangOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isLangOpen && (
                  <div className="absolute bottom-full left-0 mb-2 w-48 bg-gray-800 rounded-lg shadow-lg py-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className="flex items-center space-x-2 w-full px-4 py-2 text-left hover:bg-gray-700 transition-colors"
                      >
                        <Image
                          src={lang.flag}
                          alt={lang.code}
                          width={20}
                          height={15}
                          className="rounded-sm"
                        />
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} WYN Agency. {t.allRightsReserved}</p>
        </div>
      </div>
    </footer>
  )
} 