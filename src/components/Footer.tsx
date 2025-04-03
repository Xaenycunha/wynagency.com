'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Footer() {
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const languages = [
    { code: 'en', name: 'English', flag: '/flags/us.png' },
    { code: 'es', name: 'Español', flag: '/flags/es.png' },
    { code: 'pt', name: 'Português', flag: '/flags/pt.png' }
  ]

  const handleLanguageChange = (langCode: string) => {
    setCurrentLang(langCode)
    setIsLangOpen(false)
    // Add your language change logic here
  }

  if (!mounted) {
    return null
  }

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">WYN Agency</h3>
            <p className="text-gray-400">
              Professional soccer agency dedicated to player development and career management.
              We connect talent with opportunities worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/players" className="text-gray-400 hover:text-white transition-colors">
                  Players
                </Link>
              </li>
              <li>
                <Link href="/tournaments" className="text-gray-400 hover:text-white transition-colors">
                  Tournaments
                </Link>
              </li>
              <li>
                <Link href="/#partners" className="text-gray-400 hover:text-white transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Email: info@wynagency.com</li>
              <li className="text-gray-400">Phone: +34 663 836 731</li>
              <li className="text-gray-400">Address: Madrid, Spain</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex items-center space-x-4">
              <a
                href="https://instagram.com/wynagency"
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
            <div className="mt-8">
              <div className="relative inline-block">
                <button
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Image
                    src={languages.find(lang => lang.code === currentLang)?.flag || languages[0].flag}
                    alt={currentLang}
                    width={20}
                    height={20}
                    className="rounded-sm"
                  />
                  <span className="text-base">
                    {languages.find(lang => lang.code === currentLang)?.name || 'English'}
                  </span>
                </button>

                {isLangOpen && (
                  <div className="absolute left-0 mt-2 py-2 w-48 bg-black rounded-md shadow-lg ring-1 ring-white ring-opacity-5">
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => handleLanguageChange(language.code)}
                        className="flex items-center space-x-2 w-full px-4 py-2 text-base text-gray-400 hover:text-white hover:bg-gray-800"
                      >
                        <Image
                          src={language.flag}
                          alt={language.code}
                          width={20}
                          height={20}
                          className="rounded-sm"
                        />
                        <span>{language.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} WYN Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 