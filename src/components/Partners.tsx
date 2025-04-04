'use client'

import { usePathname } from 'next/navigation'
import Image from 'next/image'

const translations = {
  en: {
    title: 'Our Partners',
    description: 'We work with the best in the industry'
  },
  es: {
    title: 'Nuestros Socios',
    description: 'Trabajamos con los mejores de la industria'
  },
  pt: {
    title: 'Nossos Parceiros',
    description: 'Trabalhamos com os melhores da indústria'
  }
}

const partners = [
  {
    id: 1,
    name: 'Nike',
    logo: '/partners/nike.png'
  },
  {
    id: 2,
    name: 'Adidas',
    logo: '/partners/adidas.png'
  },
  {
    id: 3,
    name: 'Puma',
    logo: '/partners/puma.png'
  }
]

export default function Partners() {
  const pathname = usePathname()
  const locale = pathname.split('/')[1] || 'pt'
  const t = translations[locale as keyof typeof translations] || translations.pt

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">{t.title}</h2>
        <p className="text-center text-gray-600 mb-12">{t.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {partners.map((partner) => (
            <div key={partner.id} className="flex justify-center">
              <div className="relative w-48 h-24">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 