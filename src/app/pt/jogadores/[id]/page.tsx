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
  id?: string
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
  instagram?: string
  category: string
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
    category: 'Futebol',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1000&auto=format&fit=crop',
    stats: {
      goals: 15,
      assists: 8,
      matches: 25
    },
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
        team: 'Atletico Madrid',
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
    category: 'Futebol',
    image: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=1000&auto=format&fit=crop',
    stats: {
      goals: 8,
      assists: 12,
      matches: 28
    },
    bio: 'Um meio-campista criativo com excelente visão e passe. Conhecido por sua capacidade de controlar o ritmo do jogo e criar oportunidades de gol.',
    trajectory: [
      {
        team: 'Manchester City',
        period: '2021 - Presente',
        role: 'Meio-campista Central',
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
        role: 'Meio-campista',
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
    ],
    media: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=1000&auto=format&fit=crop',
        caption: 'Comemoração do gol da vitória'
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1000&auto=format&fit=crop',
        caption: 'Sessão de treino'
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
    category: 'Futebol',
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
  },
  'joao-victor': {
    name: 'João Victor',
    position: 'Zagueiro',
    age: 18,
    nationality: 'Brasil',
    height: '1.85m',
    weight: '75kg',
    category: 'Futebol',
    image: '/players/joao-victor.jpg',
    instagram: 'https://www.instagram.com/anjos_joaozinho/',
    stats: {
      goals: 0,
      assists: 0,
      matches: 0
    },
    bio: 'João Victor é um promissor zagueiro de São Paulo, Brasil. Nascido em 2007, demonstrou grande potencial em suas habilidades defensivas e liderança em campo.',
    trajectory: [
      {
        team: 'São Paulo',
        period: '2023 - Presente',
        role: 'Zagueiro',
        achievements: [],
        stats: {
          goals: 0,
          assists: 0,
          matches: 0,
          yellowCards: 0,
          redCards: 0
        }
      }
    ],
    media: [
      {
        type: 'image',
        url: '/players/joao-victor.jpg',
        caption: 'Ação de jogo'
      },
      {
        type: 'image',
        url: '/players/player-1-2.jpg',
        caption: 'Sessão de treino'
      },
      {
        type: 'image',
        url: '/players/player-1-3.jpg',
        caption: 'Foto do time'
      }
    ]
  },
  'wallace-falcao': {
    name: 'Wallace Falcão',
    position: 'Goleiro',
    age: 0,
    nationality: 'Brasil',
    height: '1.90m',
    weight: '85kg',
    category: 'Futebol',
    image: '/players/wallace-falcao.jpg',
    instagram: 'https://www.instagram.com/wallace_cf/',
    stats: {
      goals: 0,
      assists: 0,
      matches: 0
    },
    bio: 'Wallace Falcão é um talentoso goleiro que atualmente joga pelo IFK Åmål. Sua agilidade e capacidade de defesa o tornam um ativo valioso para sua equipe.',
    trajectory: [
      {
        team: 'IFK Åmål',
        period: '2023 - Presente',
        role: 'Goleiro',
        achievements: [],
        stats: {
          goals: 0,
          assists: 0,
          matches: 0,
          yellowCards: 0,
          redCards: 0
        }
      }
    ],
    media: [
      {
        type: 'image',
        url: '/players/wallace-falcao.jpg',
        caption: 'Ação de jogo'
      },
      {
        type: 'image',
        url: '/players/player-2-2.jpg',
        caption: 'Sessão de treino'
      },
      {
        type: 'image',
        url: '/players/player-2-3.jpg',
        caption: 'Foto do time'
      }
    ]
  },
  'khalyan-pereira': {
    name: 'Khalyan Pereira',
    position: 'Defensor',
    age: 22,
    nationality: 'Brasil',
    height: '1.88m',
    weight: '80kg',
    category: 'Futebol',
    image: '/players/khalyan-pereira.jpg',
    instagram: 'https://www.instagram.com/khalyan02/',
    stats: {
      goals: 0,
      assists: 0,
      matches: 0
    },
    bio: 'Khalyan Pereira é um habilidoso defensor de Pernambuco, Brasil. Aos 22 anos, traz experiência e sólidas capacidades defensivas ao IFK Åmål.',
    trajectory: [
      {
        team: 'IFK Åmål',
        period: '2023 - Presente',
        role: 'Defensor',
        achievements: [],
        logo: '/partners/ifk-amal.png',
        stats: {
          goals: 0,
          assists: 0,
          matches: 0,
          yellowCards: 0,
          redCards: 0
        }
      }
    ],
    media: [
      {
        type: 'image',
        url: '/players/khalyan-pereira.jpg',
        caption: 'Ação em campo'
      },
      {
        type: 'image',
        url: '/players/player-3-2.jpg',
        caption: 'Sessão de treino'
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
              {player.instagram && (
                <div>
                  <p className="text-gray-600">Instagram</p>
                  <a href={player.instagram} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                    {player.instagram.split('/').pop()}
                  </a>
                </div>
              )}
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
            <h2 className="text-2xl font-bold mb-8">Media</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(player.media || []).map((item, index) => (
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