import Image from 'next/image'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

const players = [
  {
    id: 'player-1',
    name: 'Alex Rodriguez',
    position: 'Delantero',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1000&auto=format&fit=crop',
    bio: 'Un delantero dinámico con velocidad excepcional y capacidad de definición.'
  },
  {
    id: 'player-2',
    name: 'Marcus Johnson',
    position: 'Centrocampista',
    image: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=1000&auto=format&fit=crop',
    bio: 'Un centrocampista creativo con excelente visión y rango de pase.'
  },
  {
    id: 'player-3',
    name: 'Lucas Silva',
    position: 'Defensa',
    image: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=1000&auto=format&fit=crop',
    bio: 'Un defensa central dominante con excelente capacidad aérea y entrada.'
  }
]

export default function PlayersPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs
          items={[
            { label: 'Inicio', href: '/es' },
            { label: 'Jugadores', href: '/es/jugadores' }
          ]}
        />

        <h1 className="text-4xl font-bold mb-8">Nuestros Jugadores</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {players.map((player) => (
            <Link
              href={`/es/jugadores/${player.id}`}
              key={player.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="relative h-64">
                <Image
                  src={player.image}
                  alt={player.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h2 className="text-2xl font-bold mb-2">{player.name}</h2>
                  <p className="text-sm bg-white/20 px-3 py-1 rounded-full inline-block">
                    {player.position}
                  </p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700">{player.bio}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 