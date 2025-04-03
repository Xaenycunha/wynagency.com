'use client'

import { usePathname } from 'next/navigation'

const translations = {
  en: {
    title: 'Upcoming Tournaments',
    viewAll: 'View All Tournaments'
  },
  es: {
    title: 'Próximos Torneos',
    viewAll: 'Ver Todos los Torneos'
  },
  pt: {
    title: 'Próximos Torneios',
    viewAll: 'Ver Todos os Torneios'
  }
}

const tournaments = [
  {
    id: 1,
    name: 'Summer Cup 2024',
    date: 'July 15-20, 2024',
    location: 'Madrid, Spain'
  },
  {
    id: 2,
    name: 'Winter Championship',
    date: 'December 10-15, 2024',
    location: 'Lisbon, Portugal'
  },
  {
    id: 3,
    name: 'Spring League',
    date: 'March 5-10, 2025',
    location: 'Barcelona, Spain'
  }
]

export default function Tournaments() {
  const pathname = usePathname()
  const locale = pathname.split('/')[1] || 'en'
  const t = translations[locale as keyof typeof translations]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tournaments.map((tournament) => (
            <div key={tournament.id} className="bg-gray-50 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2">{tournament.name}</h3>
              <p className="text-gray-600 mb-2">{tournament.date}</p>
              <p className="text-gray-600">{tournament.location}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-blue-900 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition-colors">
            {t.viewAll}
          </button>
        </div>
      </div>
    </section>
  )
} 