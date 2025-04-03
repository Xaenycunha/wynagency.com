'use client'

import { usePathname } from 'next/navigation'
import Image from 'next/image'

const translations = {
  en: {
    title: 'Featured Players',
    viewAll: 'View All Players'
  },
  es: {
    title: 'Jugadores Destacados',
    viewAll: 'Ver Todos los Jugadores'
  },
  pt: {
    title: 'Jogadores em Destaque',
    viewAll: 'Ver Todos os Jogadores'
  }
}

const players = [
  {
    id: 1,
    name: 'John Doe',
    position: 'Forward',
    image: '/players/player1.jpg'
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'Midfielder',
    image: '/players/player2.jpg'
  },
  {
    id: 3,
    name: 'Mike Johnson',
    position: 'Defender',
    image: '/players/player3.jpg'
  }
]

export default function FeaturedPlayers() {
  const pathname = usePathname()
  const locale = pathname.split('/')[1] || 'en'
  const t = translations[locale as keyof typeof translations]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {players.map((player) => (
            <div key={player.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={player.image}
                  alt={player.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{player.name}</h3>
                <p className="text-gray-600">{player.position}</p>
              </div>
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