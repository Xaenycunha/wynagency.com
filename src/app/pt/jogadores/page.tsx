import Image from 'next/image'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

const players = [
  {
    id: 'joao-victor',
    name: 'João Victor',
    position: 'Zagueiro',
    age: 18,
    nationality: 'Brasil',
    category: 'Futebol',
    image: '/players/player-1.jpg',
    description: 'Um promissor zagueiro com fortes habilidades defensivas e qualidades de liderança. Atualmente desenvolvendo suas habilidades no São Paulo.'
  },
  {
    id: 'wallace-falcao',
    name: 'Wallace Falcão',
    position: 'Goleiro',
    age: 0,
    nationality: 'Brasil',
    category: 'Futebol',
    image: '/players/player-2.jpg',
    description: 'Um talentoso goleiro conhecido por sua agilidade e capacidade de defesa. Atualmente joga pelo IFK Åmål.'
  },
  {
    id: 'khalyan-pereira',
    name: 'Khalyan Pereira',
    position: 'Zagueiro',
    age: 22,
    nationality: 'Brasil',
    category: 'Futebol',
    image: '/players/player-3.jpg',
    description: 'Um experiente zagueiro com sólidas capacidades defensivas. Traz força e serenidade para a linha defensiva do IFK Åmål.'
  }
]

export default function JogadoresPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs
          items={[
            { label: 'Início', href: '/pt' },
            { label: 'Jogadores', href: '/pt/jogadores' }
          ]}
        />

        <h1 className="text-4xl font-bold mb-8">Nossos Jogadores</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {players.map((player) => (
            <Link
              key={player.id}
              href={`/pt/jogadores/${player.id}`}
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
                  <span>{player.age} anos</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
} 