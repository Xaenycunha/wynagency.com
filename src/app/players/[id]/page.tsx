import Image from 'next/image'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

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
    position: 'Forward',
    age: 24,
    nationality: 'Spanish',
    height: '1.85m',
    weight: '78kg',
    stats: {
      goals: 15,
      assists: 8,
      matches: 25
    },
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1000&auto=format&fit=crop',
    bio: 'A dynamic forward with exceptional speed and finishing ability. Known for his clinical finishing and ability to create chances for teammates.',
    trajectory: [
      {
        team: 'Real Madrid',
        period: '2022 - Present',
        role: 'Starting Forward',
        achievements: ['La Liga Top Scorer 2023', 'Champions League Winner 2023'],
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
        role: 'Forward',
        achievements: ['La Liga Winner 2021', 'Europa League Winner 2022'],
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
        role: 'Youth Team',
        achievements: ['Youth League Winner 2019'],
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
        caption: 'Match winning goal celebration'
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1000&auto=format&fit=crop',
        caption: 'Training session'
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=1000&auto=format&fit=crop',
        caption: 'Post-match interview'
      }
    ]
  },
  'player-2': {
    name: 'Marcus Johnson',
    position: 'Midfielder',
    age: 22,
    nationality: 'English',
    height: '1.78m',
    weight: '72kg',
    stats: {
      goals: 8,
      assists: 12,
      matches: 28
    },
    image: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=1000&auto=format&fit=crop',
    bio: 'A creative midfielder with excellent vision and passing range. Known for his ability to control the tempo of the game and create scoring opportunities.',
    trajectory: [
      {
        team: 'Manchester City',
        period: '2021 - Present',
        role: 'Central Midfielder',
        achievements: ['Premier League Winner 2022, 2023', 'FA Cup Winner 2023'],
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
        role: 'Midfielder',
        achievements: ['FA Cup Winner 2021'],
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
    position: 'Defender',
    age: 25,
    nationality: 'Brazilian',
    height: '1.92m',
    weight: '85kg',
    stats: {
      goals: 2,
      assists: 3,
      matches: 30
    },
    image: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=1000&auto=format&fit=crop',
    bio: 'A commanding center-back with excellent aerial ability and tackling. Known for his leadership qualities and ability to organize the defense.',
    trajectory: [
      {
        team: 'Paris Saint-Germain',
        period: '2022 - Present',
        role: 'Center Back',
        achievements: ['Ligue 1 Winner 2023', 'Coupe de France Winner 2023'],
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
        role: 'Defender',
        achievements: ['Brazilian League Winner 2020', 'Copa Libertadores Winner 2021'],
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
          <h1 className="text-4xl font-bold mb-4">Player Not Found</h1>
          <Link href="/players" className="text-blue-600 hover:underline">
            Back to Players
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Players', href: '/players' },
            { label: player.name, href: `/players/${params.id}` }
          ]}
        />
        
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
                <p className="text-gray-600">Position</p>
                <p className="font-semibold">{player.position}</p>
              </div>
              <div>
                <p className="text-gray-600">Age</p>
                <p className="font-semibold">{player.age}</p>
              </div>
              <div>
                <p className="text-gray-600">Nationality</p>
                <p className="font-semibold">{player.nationality}</p>
              </div>
              <div>
                <p className="text-gray-600">Height</p>
                <p className="font-semibold">{player.height}</p>
              </div>
              <div>
                <p className="text-gray-600">Weight</p>
                <p className="font-semibold">{player.weight}</p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl mb-8">
              <h2 className="text-xl font-bold mb-4">Season Stats</h2>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold">{player.stats.goals}</p>
                  <p className="text-gray-600">Goals</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold">{player.stats.assists}</p>
                  <p className="text-gray-600">Assists</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold">{player.stats.matches}</p>
                  <p className="text-gray-600">Matches</p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Bio</h2>
              <p className="text-gray-700">{player.bio}</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Career Trajectory</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-2xl shadow-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Period</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Matches</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Goals</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Assists</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Yellow Cards</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Red Cards</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {player.trajectory?.map((step, index) => (
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
              {player.media.map((item, index) => (
                <div
                  key={index}
                  className="group relative h-64 rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
                >
                  <Image
                    src={item.url}
                    alt={item.caption}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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