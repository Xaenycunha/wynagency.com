import Image from 'next/image'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

const players = [
  {
    id: 'joao-victor',
    name: 'João Victor',
    position: 'Defender',
    age: 18,
    nationality: 'Brazil',
    category: 'Football',
    image: '/players/joao-victor.jpg',
    description: 'A promising defender with strong defensive skills and leadership qualities. Currently developing his skills at São Paulo.'
  },
  {
    id: 'wallace-falcao',
    name: 'Wallace Falcão',
    position: 'Goalkeeper',
    age: 0,
    nationality: 'Brazil',
    category: 'Football',
    image: '/players/wallace-falcao.jpg',
    description: 'A talented goalkeeper known for his agility and shot-stopping ability. Currently plays for IFK Åmål.'
  },
  {
    id: 'khalyan-pereira',
    name: 'Khalyan Pereira',
    position: 'Defender',
    age: 22,
    nationality: 'Brazil',
    category: 'Football',
    image: '/players/khalyan-pereira.jpg',
    description: 'An experienced defender with solid defensive capabilities. Brings strength and composure to the IFK Åmål backline.'
  }
]

export default function PlayersPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/en' },
            { label: 'Players', href: '/en/players' }
          ]}
        />

        <h1 className="text-4xl font-bold mb-8">Our Players</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {players.map((player) => (
            <Link
              key={player.id}
              href={`/en/players/${player.id}`}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src={player.image}
                  alt={player.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-semibold">{player.name}</h2>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {player.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{player.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="mr-4">{player.position}</span>
                  <span>{player.age} years old</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 