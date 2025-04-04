import Image from 'next/image'
import Link from 'next/link'

interface MediaItem {
  type: string
  url: string
  caption: string
}

interface TrajectoryStep {
  team: string
  period: string
  role: string
  achievements: string[]
  logo?: string
  stats: {
    goals: number
    assists: number
    matches: number
    yellowCards?: number
    redCards?: number
  }
}

interface PlayerStats {
  goals: number
  assists: number
  matches: number
}

interface Player {
  name: string
  position: string
  age: number
  nationality: string
  height: string
  weight: string
  stats: PlayerStats
  image: string
  bio: string
  trajectory: TrajectoryStep[]
  media?: MediaItem[]
}

interface Players {
  [key: string]: Player
}

const players: Players = {
  'player-1': {
    name: 'Alex Rodriguez',
    position: 'Atacante',
    age: 24,
    nationality: 'Espanhol',
    height: '1.85m',
    weight: '78kg',
    stats: {
      goals: 15,
      assists: 8,
      matches: 25
    },
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1000&auto=format&fit=crop',
    bio: 'Um atacante dinâmico com velocidade excepcional e capacidade de finalização. Conhecido por sua precisão no chute e sua capacidade de criar oportunidades para seus companheiros.',
    trajectory: [
      {
        team: 'Real Madrid',
        period: '2022 - Presente',
        role: 'Atacante Titular',
        achievements: ['Artilheiro da La Liga 2023', 'Campeão da Champions League 2023'],
        logo: '/partners/real-madrid.png',
        stats: {
          goals: 15,
          assists: 8,
          matches: 25,
          yellowCards: 2,
          redCards: 0
        }
      },
      {
        team: 'Atlético de Madrid',
        period: '2020 - 2022',
        role: 'Atacante',
        achievements: ['Campeão da La Liga 2021', 'Campeão da Europa League 2022'],
        logo: '/partners/atletico.png',
        stats: {
          goals: 28,
          assists: 12,
          matches: 45,
          yellowCards: 3,
          redCards: 1
        }
      },
      {
        team: 'Sevilla FC',
        period: '2018 - 2020',
        role: 'Equipe Juvenil',
        achievements: ['Campeão da Liga Juvenil 2019'],
        logo: '/partners/sevilla.png',
        stats: {
          goals: 35,
          assists: 15,
          matches: 50,
          yellowCards: 1,
          redCards: 0
        }
      }
    ],
    media: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=1000&auto=format&fit=crop',
        caption: 'Celebração do gol da vitória'
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1000&auto=format&fit=crop',
        caption: 'Sessão de treino'
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=1000&auto=format&fit=crop',
        caption: 'Entrevista pós-jogo'
      }
    ]
  },
  'player-2': {
    name: 'Marcus Johnson',
    position: 'Meio-campo',
    age: 22,
    nationality: 'Inglês',
    height: '1.78m',
    weight: '72kg',
    stats: {
      goals: 8,
      assists: 12,
      matches: 28
    },
    image: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=1000&auto=format&fit=crop',
    bio: 'Um meio-campista criativo com excelente visão e passe. Conhecido por sua capacidade de controlar o ritmo do jogo e criar oportunidades de gol.',
    trajectory: [
      {
        team: 'Manchester City',
        period: '2021 - Presente',
        role: 'Meio-campo Central',
        achievements: ['Campeão da Premier League 2022, 2023', 'Campeão da FA Cup 2023'],
        logo: '/partners/man-city.png',
        stats: {
          goals: 8,
          assists: 12,
          matches: 28,
          yellowCards: 1,
          redCards: 0
        }
      },
      {
        team: 'Leicester City',
        period: '2019 - 2021',
        role: 'Meio-campo',
        achievements: ['Campeão da FA Cup 2021'],
        logo: '/partners/leicester.png',
        stats: {
          goals: 12,
          assists: 18,
          matches: 40,
          yellowCards: 2,
          redCards: 0
        }
      }
    ]
  },
  'player-3': {
    name: 'Lucas Silva',
    position: 'Zagueiro',
    age: 25,
    nationality: 'Brasileiro',
    height: '1.92m',
    weight: '85kg',
    stats: {
      goals: 2,
      assists: 3,
      matches: 30
    },
    image: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=1000&auto=format&fit=crop',
    bio: 'Um zagueiro com excelente capacidade aérea e entrada. Conhecido por suas qualidades de liderança e sua capacidade de organizar a defesa.',
    trajectory: [
      {
        team: 'Paris Saint-Germain',
        period: '2022 - Presente',
        role: 'Zagueiro Central',
        achievements: ['Campeão da Ligue 1 2023', 'Campeão da Coupe de France 2023'],
        logo: '/partners/psg.png',
        stats: {
          goals: 2,
          assists: 3,
          matches: 30,
          yellowCards: 4,
          redCards: 0
        }
      },
      {
        team: 'Flamengo',
        period: '2019 - 2022',
        role: 'Zagueiro',
        achievements: ['Campeão do Brasileirão 2020', 'Campeão da Copa Libertadores 2021'],
        logo: '/partners/flamengo.png',
        stats: {
          goals: 1,
          assists: 2,
          matches: 45,
          yellowCards: 5,
          redCards: 1
        }
      }
    ]
  }
}

export default function PlayerPage({ params }: { params: { id: string } }) {
  const player = players[params.id as keyof typeof players]

  if (!player) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Jogador Não Encontrado</h1>
          <Link href="/pt/jogadores" className="text-blue-600 hover:underline">
            Voltar para Jogadores
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <nav className="flex items-center space-x-2 text-sm mb-8">
          <div className="flex items-center">
            <Link href="/pt" className="text-gray-500 hover:text-gray-700 transition-colors">
              Início
            </Link>
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 text-gray-400 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
            <Link href="/pt/jogadores" className="text-gray-500 hover:text-gray-700 transition-colors">
              Jogadores
            </Link>
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 text-gray-400 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
            <Link href={`/pt/jogadores/${params.id}`} className="text-gray-900 font-semibold">
              {player.name}
            </Link>
          </div>
        </nav>
        
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="relative h-[500px] rounded-2xl overflow-hidden">
            <Image
              src={player.image}
              alt={player.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold mb-4">{player.name}</h1>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <p className="text-gray-600">Posição</p>
                <p className="font-semibold">{player.position}</p>
              </div>
              <div>
                <p className="text-gray-600">Idade</p>
                <p className="font-semibold">{player.age}</p>
              </div>
              <div>
                <p className="text-gray-600">Nacionalidade</p>
                <p className="font-semibold">{player.nationality}</p>
              </div>
              <div>
                <p className="text-gray-600">Altura</p>
                <p className="font-semibold">{player.height}</p>
              </div>
              <div>
                <p className="text-gray-600">Peso</p>
                <p className="font-semibold">{player.weight}</p>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl mb-8">
              <h2 className="text-xl font-bold mb-4">Estatísticas da Temporada</h2>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold">{player.stats.goals}</p>
                  <p className="text-gray-600">Gols</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold">{player.stats.assists}</p>
                  <p className="text-gray-600">Assistências</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold">{player.stats.matches}</p>
                  <p className="text-gray-600">Jogos</p>
                </div>
              </div>
            </div>
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Biografia</h2>
              <p className="text-gray-700">{player.bio}</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Carreira Profissional</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-2xl shadow-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Equipe</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Período</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Posição</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Jogos</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Gols</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Assistências</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Cartões Amarelos</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Cartões Vermelhos</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {player.trajectory.map((step, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {step.logo && (
                          <div className="flex-shrink-0 h-10 w-10 mr-3">
                            <Image
                              src={step.logo}
                              alt={step.team}
                              width={40}
                              height={40}
                              className="rounded-full"
                            />
                          </div>
                        )}
                        <div>
                          <div className="text-sm font-medium text-gray-900">{step.team}</div>
                          <div className="text-sm text-gray-500">
                            {step.achievements.map((achievement, i) => (
                              <span key={i} className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-1 mb-1">
                                {achievement}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{step.period}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{step.role}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{step.stats.matches}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{step.stats.goals}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{step.stats.assists}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{step.stats.yellowCards || 0}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{step.stats.redCards || 0}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {player.media && player.media.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-8">Mídia</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {player.media.map((item, index) => (
                <div key={index} className="group relative h-64 rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                  <Image
                    src={item.url}
                    alt={item.caption}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm">{item.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 