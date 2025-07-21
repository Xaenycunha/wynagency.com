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
    image: '/players/joao-victor.jpg',
    description: 'Um promissor zagueiro com fortes habilidades defensivas e qualidades de liderança. Atualmente desenvolvendo suas habilidades no São Paulo.'
  },
  {
    id: 'wallace-falcao',
    name: 'Wallace Falcão',
    position: 'Goleiro',
    age: 0,
    nationality: 'Brasil',
    category: 'Futebol',
    image: '/players/wallace-falcao.jpg',
    description: 'Um talentoso goleiro conhecido por sua agilidade e capacidade de defesa. Atualmente joga pelo IFK Åmål.'
  },
  {
    id: 'khalyan-pereira',
    name: 'Khalyan Pereira',
    position: 'Zagueiro',
    age: 22,
    nationality: 'Brasil',
    category: 'Futebol',
    image: '/players/khalyan-pereira.jpg',
    description: 'Um experiente zagueiro com sólidas capacidades defensivas. Traz força e serenidade para a linha defensiva do IFK Åmål.'
  },
  {
    id: 'victor-sillos',
    name: 'Victor Sillos',
    position: '',
    age: 0,
    nationality: '',
    category: 'Futebol',
    image: '/players/victor-sillos.jpg',
    description: '',
  },
  {
    id: 'ryan-martins',
    name: 'Ryan Martins',
    position: '',
    age: 0,
    nationality: '',
    category: 'Futebol',
    image: '/players/ryan-martins.jpg',
    description: '',
  },
  {
    id: 'joao-daddario',
    name: 'Joao Daddario',
    position: '',
    age: 0,
    nationality: '',
    category: 'Futebol',
    image: '/players/joao-daddario.jpg',
    description: '',
  },
  {
    id: 'guilherme-garcia',
    name: 'Guilherme Garcia',
    position: '',
    age: 0,
    nationality: '',
    category: 'Futebol',
    image: '/players/guilherme-garcia.jpg',
    description: '',
  },
  {
    id: 'felipe-toneto',
    name: 'Felipe Toneto',
    position: '',
    age: 0,
    nationality: '',
    category: 'Futebol',
    image: '/players/felipe-toneto.jpg',
    description: '',
  },
  {
    id: 'steven-santos',
    name: 'Steven Santos',
    position: '',
    age: 0,
    nationality: '',
    category: 'Futebol',
    image: '/players/steven-santos.jpg',
    description: '',
  },
  {
    id: 'henrique-scholl',
    name: 'Henrique Scholl',
    position: '',
    age: 0,
    nationality: '',
    category: 'Futebol',
    image: '/players/henrique-scholl.jpg',
    description: '',
  },
  {
    id: 'adonay-silva',
    name: 'Adonay Silva',
    position: '',
    age: 0,
    nationality: '',
    category: 'Futebol',
    image: '/players/adonay-silva.jpg',
    description: '',
  },
  {
    id: 'davi-moura',
    name: 'Davi Moura',
    position: '',
    age: 0,
    nationality: '',
    category: 'Futebol',
    image: '/players/davi-moura.jpg',
    description: '',
  },
  {
    id: 'eduardo-lopes',
    name: 'Eduardo Lopes',
    position: '',
    age: 0,
    nationality: '',
    category: 'Futebol',
    image: '/players/eduardo-lopes.jpg',
    description: '',
  },
  {
    id: 'nicolas-casteluber',
    name: 'Nicolas Casteluber',
    position: '',
    age: 0,
    nationality: '',
    category: 'Futebol',
    image: '/players/nicolas-casteluber.jpg',
    description: '',
  },
  {
    id: 'ian-reis',
    name: 'Ian Reis',
    position: '',
    age: 0,
    nationality: '',
    category: 'Futebol',
    image: '/players/ian-reis.jpg',
    description: '',
  },
  {
    id: 'gustavo-castro',
    name: 'Gustavo Castro',
    position: '',
    age: 0,
    nationality: '',
    category: 'Futebol',
    image: '/players/gustavo-castro.jpg',
    description: '',
  },
  {
    id: 'adam-guzman',
    name: 'Adam Guzman',
    position: '',
    age: 0,
    nationality: '',
    category: 'Futebol',
    image: '/players/adam-guzman.jpg',
    description: '',
  },
  {
    id: 'luca-oliveira',
    name: 'Luca Oliveira',
    position: '',
    age: 0,
    nationality: '',
    category: 'Futebol',
    image: '/players/luca-oliveira.jpg',
    description: '',
  },
  {
    id: 'breno-simoes',
    name: 'Breno Simoes',
    position: '',
    age: 0,
    nationality: '',
    category: 'Futebol',
    image: '/players/breno-simoes.jpg',
    description: '',
  },
  {
    id: 'caio-alves',
    name: 'Caio Alves',
    position: '',
    age: 0,
    nationality: '',
    category: 'Futebol',
    image: '/players/caio-alves.jpg',
    description: '',
  },
  {
    id: 'claudiney-cardoso',
    name: 'Claudiney Cardoso',
    position: '',
    age: 0,
    nationality: '',
    category: 'Futebol',
    image: '/players/claudiney-cardoso.jpg',
    description: '',
  },
  {
    id: 'anthony-gomes',
    name: 'Anthony Gomes',
    position: '',
    age: 0,
    nationality: '',
    category: 'Futebol',
    image: '/players/anthony-gomes.jpg',
    description: '',
  },
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