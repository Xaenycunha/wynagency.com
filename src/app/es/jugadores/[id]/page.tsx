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
  instagram?: string
  category: string
}

interface Players {
  [key: string]: Player
}

const players: Players = {
  'player-1': {
    name: 'Alex Rodriguez',
    position: 'Delantero',
    age: 24,
    nationality: 'Español',
    height: '1.85m',
    weight: '78kg',
    stats: {
      goals: 15,
      assists: 8,
      matches: 25
    },
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1000&auto=format&fit=crop',
    bio: 'Un delantero dinámico con velocidad excepcional y capacidad de definición. Conocido por su precisión en el remate y su capacidad para crear oportunidades para sus compañeros.',
    trajectory: [
      {
        team: 'Real Madrid',
        period: '2022 - Presente',
        role: 'Delantero Titular',
        achievements: ['Pichichi de La Liga 2023', 'Campeón de la Champions League 2023'],
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
        role: 'Delantero',
        achievements: ['Campeón de La Liga 2021', 'Campeón de la Europa League 2022'],
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
        role: 'Equipo Juvenil',
        achievements: ['Campeón de la Liga Juvenil 2019'],
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
        caption: 'Celebración del gol de la victoria'
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1000&auto=format&fit=crop',
        caption: 'Sesión de entrenamiento'
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=1000&auto=format&fit=crop',
        caption: 'Entrevista post-partido'
      }
    ]
  },
  'player-2': {
    name: 'Marcus Johnson',
    position: 'Centrocampista',
    age: 22,
    nationality: 'Inglés',
    height: '1.78m',
    weight: '72kg',
    stats: {
      goals: 8,
      assists: 12,
      matches: 28
    },
    image: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=1000&auto=format&fit=crop',
    bio: 'Un centrocampista creativo con excelente visión y rango de pase. Conocido por su capacidad para controlar el tempo del juego y crear oportunidades de gol.',
    trajectory: [
      {
        team: 'Manchester City',
        period: '2021 - Presente',
        role: 'Centrocampista Central',
        achievements: ['Campeón de la Premier League 2022, 2023', 'Campeón de la FA Cup 2023'],
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
        role: 'Centrocampista',
        achievements: ['Campeón de la FA Cup 2021'],
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
    position: 'Defensa',
    age: 25,
    nationality: 'Brasileño',
    height: '1.92m',
    weight: '85kg',
    stats: {
      goals: 2,
      assists: 3,
      matches: 30
    },
    image: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=1000&auto=format&fit=crop',
    bio: 'Un defensa central con excelente capacidad aérea y entradas. Conocido por sus cualidades de liderazgo y su capacidad para organizar la defensa.',
    trajectory: [
      {
        team: 'Paris Saint-Germain',
        period: '2022 - Presente',
        role: 'Defensa Central',
        achievements: ['Campeón de la Ligue 1 2023', 'Campeón de la Coupe de France 2023'],
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
        role: 'Defensa',
        achievements: ['Campeón del Brasileirão 2020', 'Campeón de la Copa Libertadores 2021'],
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
    id: 'joao-victor',
    name: 'João Victor',
    position: 'Defensa',
    age: 18,
    nationality: 'Brasil',
    height: '1.85m',
    weight: '75kg',
    category: 'Fútbol',
    instagram: 'https://www.instagram.com/anjos_joaozinho/',
    stats: {
      goals: 0,
      assists: 0,
      matches: 0
    },
    bio: 'João Victor es un prometedor defensa de São Paulo, Brasil. Nacido en 2007, ha demostrado un gran potencial en sus habilidades defensivas y liderazgo en el campo.',
    trajectory: [
      {
        team: 'São Paulo',
        period: '2023 - Presente',
        role: 'Defensa',
        achievements: [],
        stats: {
          goals: 0,
          assists: 0,
          matches: 0
        }
      }
    ],
    media: [
      {
        type: 'image',
        url: '/players/player-1.jpg',
        caption: 'Acción de partido'
      },
      {
        type: 'image',
        url: '/players/player-1-2.jpg',
        caption: 'Sesión de entrenamiento'
      },
      {
        type: 'image',
        url: '/players/player-1-3.jpg',
        caption: 'Foto del equipo'
      }
    ]
  },
  'wallace-falcao': {
    id: 'wallace-falcao',
    name: 'Wallace Falcão',
    position: 'Portero',
    age: 0,
    nationality: 'Brasil',
    height: '1.90m',
    weight: '85kg',
    category: 'Fútbol',
    instagram: 'https://www.instagram.com/wallace_cf/',
    stats: {
      goals: 0,
      assists: 0,
      matches: 0
    },
    bio: 'Wallace Falcão es un talentoso portero que actualmente juega para IFK Åmål. Su agilidad y capacidad para detener tiros lo convierten en un activo valioso para su equipo.',
    trajectory: [
      {
        team: 'IFK Åmål',
        period: '2023 - Presente',
        role: 'Portero',
        achievements: [],
        stats: {
          goals: 0,
          assists: 0,
          matches: 0
        }
      }
    ],
    media: [
      {
        type: 'image',
        url: '/players/player-2.jpg',
        caption: 'Acción de partido'
      },
      {
        type: 'image',
        url: '/players/player-2-2.jpg',
        caption: 'Sesión de entrenamiento'
      },
      {
        type: 'image',
        url: '/players/player-2-3.jpg',
        caption: 'Foto del equipo'
      }
    ]
  },
  'khalyan-pereira': {
    id: 'khalyan-pereira',
    name: 'Khalyan Pereira',
    position: 'Defensa',
    age: 22,
    nationality: 'Brasil',
    height: '1.88m',
    weight: '80kg',
    category: 'Fútbol',
    instagram: 'https://www.instagram.com/khalyan02/',
    stats: {
      goals: 0,
      assists: 0,
      matches: 0
    },
    bio: 'Khalyan Pereira es un hábil defensa de Pernambuco, Brasil. A sus 22 años, aporta experiencia y sólidas capacidades defensivas a IFK Åmål.',
    trajectory: [
      {
        team: 'IFK Åmål',
        period: '2023 - Presente',
        role: 'Defensa',
        achievements: [],
        stats: {
          goals: 0,
          assists: 0,
          matches: 0
        }
      }
    ],
    media: [
      {
        type: 'image',
        url: '/players/player-3.jpg',
        caption: 'Acción de partido'
      },
      {
        type: 'image',
        url: '/players/player-3-2.jpg',
        caption: 'Sesión de entrenamiento'
      },
      {
        type: 'image',
        url: '/players/player-3-3.jpg',
        caption: 'Foto del equipo'
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
          <h1 className="text-4xl font-bold mb-4">Jugador No Encontrado</h1>
          <Link href="/es/jugadores" className="text-blue-600 hover:underline">
            Volver a Jugadores
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
            <Link href="/es" className="text-gray-500 hover:text-gray-700 transition-colors">
              Inicio
            </Link>
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 text-gray-400 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
            <Link href="/es/jugadores" className="text-gray-500 hover:text-gray-700 transition-colors">
              Jugadores
            </Link>
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 text-gray-400 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
            <Link href={`/es/jugadores/${params.id}`} className="text-gray-900 font-semibold">
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
                <p className="text-gray-600">Posición</p>
                <p className="font-semibold">{player.position}</p>
              </div>
              <div>
                <p className="text-gray-600">Edad</p>
                <p className="font-semibold">{player.age}</p>
              </div>
              <div>
                <p className="text-gray-600">Nacionalidad</p>
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
              <h2 className="text-xl font-bold mb-4">Estadísticas de Temporada</h2>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold">{player.stats.goals}</p>
                  <p className="text-gray-600">Goles</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold">{player.stats.assists}</p>
                  <p className="text-gray-600">Asistencias</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold">{player.stats.matches}</p>
                  <p className="text-gray-600">Partidos</p>
                </div>
              </div>
            </div>
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Biografía</h2>
              <p className="text-gray-700">{player.bio}</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Trayectoria Profesional</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-2xl shadow-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Equipo</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Período</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Posición</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Partidos</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Goles</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Asistencias</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Tarjetas Amarillas</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Tarjetas Rojas</th>
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
            <h2 className="text-2xl font-bold mb-8">Medios</h2>
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

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/3">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-4">
                <Image
                  src={player.media[0].url}
                  alt={player.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600">Posición</p>
                  <p className="font-medium">{player.position}</p>
                </div>
                <div>
                  <p className="text-gray-600">Edad</p>
                  <p className="font-medium">{player.age}</p>
                </div>
                <div>
                  <p className="text-gray-600">Nacionalidad</p>
                  <p className="font-medium">{player.nationality}</p>
                </div>
                <div>
                  <p className="text-gray-600">Altura</p>
                  <p className="font-medium">{player.height}</p>
                </div>
                <div>
                  <p className="text-gray-600">Peso</p>
                  <p className="font-medium">{player.weight}</p>
                </div>
                <div>
                  <p className="text-gray-600">Categoría</p>
                  <p className="font-medium">{player.category}</p>
                </div>
                <div>
                  <p className="text-gray-600">Instagram</p>
                  <p className="font-medium">
                    {player.instagram ? (
                      <a 
                        href={player.instagram} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800"
                      >
                        @{player.instagram.split('/').pop()}
                      </a>
                    ) : (
                      '-'
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 