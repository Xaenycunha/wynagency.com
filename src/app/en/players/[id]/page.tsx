'use client';
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

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
    // id: 'player-1', // Ensure id is removed/commented out
    name: 'Alex Rodriguez',
    position: 'Forward',
    age: 24,
    nationality: 'Spanish',
    height: '1.85m',
    weight: '78kg',
    category: 'Football',
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
    // id: 'player-2', // Ensure id is removed/commented out
    name: 'Marcus Johnson',
    position: 'Midfielder',
    age: 22,
    nationality: 'English',
    height: '1.78m',
    weight: '72kg',
    category: 'Football',
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
    category: 'Football',
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
  },
  'joao-victor': {
    // id: 'joao-victor', // Ensure id is removed/commented out
    name: 'João Victor',
    position: 'Defender',
    age: 18,
    nationality: 'Brazil',
    height: '1.85m',
    weight: '75kg',
    category: 'Football',
    image: '/players/joao-victor.jpg',
    instagram: 'https://www.instagram.com/anjos_joaozinho/',
    stats: {
      goals: 0,
      assists: 0,
      matches: 0
    },
    bio: 'João Victor is a promising young defender from São Paulo, Brazil. Born in 2007, he has shown great potential in his defensive abilities and leadership on the field.',
    trajectory: [
      {
        team: 'São Paulo',
        period: '2023 - Present',
        role: 'Defender',
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
        url: '/players/joao-victor.jpg',
        caption: 'Game action'
      },
      {
        type: 'image',
        url: '/players/player-1-2.jpg',
        caption: 'Training session'
      },
      {
        type: 'image',
        url: '/players/player-1-3.jpg',
        caption: 'Team photo'
      }
    ]
  },
  'wallace-falcao': {
    // id: 'wallace-falcao', // Ensure id is removed/commented out
    name: 'Wallace Falcão',
    position: 'Goalkeeper',
    age: 0,
    nationality: 'Brazil',
    height: '1.90m',
    weight: '85kg',
    category: 'Football',
    image: '/players/wallace-falcao.jpg',
    instagram: 'https://www.instagram.com/wallace_cf/',
    stats: {
      goals: 0,
      assists: 0,
      matches: 0
    },
    bio: 'Wallace Falcão is a talented goalkeeper currently playing for IFK Åmål. His agility and shot-stopping abilities make him a valuable asset to his team.',
    trajectory: [
      {
        team: 'IFK Åmål',
        period: '2023 - Present',
        role: 'Goalkeeper',
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
        url: '/players/wallace-falcao.jpg',
        caption: 'Game action'
      },
      {
        type: 'image',
        url: '/players/player-2-2.jpg',
        caption: 'Training session'
      },
      {
        type: 'image',
        url: '/players/player-2-3.jpg',
        caption: 'Team photo'
      }
    ]
  },
  'khalyan-pereira': {
    // id: 'khalyan-pereira', // Ensure id is removed/commented out
    name: 'Khalyan Pereira',
    position: 'Defender',
    age: 22,
    nationality: 'Brazil',
    height: '1.88m',
    weight: '80kg',
    category: 'Football',
    image: '/players/khalyan-pereira.jpg',
    instagram: 'https://www.instagram.com/khalyan02/',
    stats: {
      goals: 0,
      assists: 0,
      matches: 0
    },
    bio: 'Khalyan Pereira is a skilled defender from Pernambuco, Brazil. At 22 years old, he brings experience and solid defensive capabilities to IFK Åmål.',
    trajectory: [
      {
        team: 'IFK Åmål',
        period: '2023 - Present',
        role: 'Defender',
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
        url: '/players/khalyan-pereira.jpg',
        caption: 'Action on the field'
      },
      {
        type: 'image',
        url: '/players/player-3-2.jpg',
        caption: 'Training session'
      },
      {
        type: 'image',
        url: '/players/player-3-3.jpg',
        caption: 'Team photo'
      }
    ]
  },
  'victor-sillos': {
    name: 'Victor Sillos',
    position: '',
    age: 0,
    nationality: '',
    height: '',
    weight: '',
    category: 'Football',
    image: '/players/victor-sillos.jpg',
    stats: {
      goals: 0,
      assists: 0,
      matches: 0
    },
    bio: '',
    trajectory: [],
    media: [
      { type: 'image', url: '/players/victor-sillos.jpg', caption: 'Profile photo' },
      { type: 'youtube', url: 'https://youtu.be/C88IdogdhTA?si=bWh36DJY95guVBrC', caption: 'Highlight video' }
    ]
  },
  'ryan-martins': {
    name: 'Ryan Martins',
    position: '',
    age: 0,
    nationality: '',
    height: '',
    weight: '',
    category: 'Football',
    image: '/players/ryan-martins.jpg',
    stats: { goals: 0, assists: 0, matches: 0 },
    bio: '',
    trajectory: [],
    media: [
      { type: 'image', url: '/players/ryan-martins.jpg', caption: 'Profile photo' },
      { type: 'youtube', url: 'https://youtu.be/R26T-2YIKqs?si=jrHXG4J5FU_HSzLQ', caption: 'Highlight video' }
    ]
  },
  'joao-daddario': {
    name: 'Joao Daddario',
    position: '',
    age: 0,
    nationality: '',
    height: '',
    weight: '',
    category: 'Football',
    image: '/players/joao-daddario.jpg',
    stats: { goals: 0, assists: 0, matches: 0 },
    bio: '',
    trajectory: [],
    media: [
      { type: 'image', url: '/players/joao-daddario.jpg', caption: 'Profile photo' },
      { type: 'youtube', url: 'https://youtu.be/qKSKpHHGLq4?si=M5Ao1QNBUEEOYUyR', caption: 'Highlight video' }
    ]
  },
  'guilherme-garcia': {
    name: 'Guilherme Garcia',
    position: '',
    age: 0,
    nationality: '',
    height: '',
    weight: '',
    category: 'Football',
    image: '/players/guilherme-garcia.jpg',
    stats: { goals: 0, assists: 0, matches: 0 },
    bio: '',
    trajectory: [],
    media: [
      { type: 'image', url: '/players/guilherme-garcia.jpg', caption: 'Profile photo' },
      { type: 'youtube', url: 'https://youtu.be/OtDVaEk1iEU', caption: 'Highlight video' }
    ]
  },
  'felipe-toneto': {
    name: 'Felipe Toneto',
    position: '',
    age: 0,
    nationality: '',
    height: '',
    weight: '',
    category: 'Football',
    image: '/players/felipe-toneto.jpg',
    stats: { goals: 0, assists: 0, matches: 0 },
    bio: '',
    trajectory: [],
    media: [
      { type: 'image', url: '/players/felipe-toneto.jpg', caption: 'Profile photo' },
      { type: 'youtube', url: 'https://youtu.be/fXFbfbQDRG4?si=f-VJzLPXOXZAwfU9', caption: 'Highlight video' }
    ]
  },
  'steven-santos': {
    name: 'Steven Santos',
    position: '',
    age: 0,
    nationality: '',
    height: '',
    weight: '',
    category: 'Football',
    image: '/players/steven-santos.jpg',
    stats: { goals: 0, assists: 0, matches: 0 },
    bio: '',
    trajectory: [],
    media: [
      { type: 'image', url: '/players/steven-santos.jpg', caption: 'Profile photo' },
      { type: 'youtube', url: 'https://youtu.be/qRkD0FLJKY8?si=-X5DJ-U9XCv8rU-D', caption: 'Highlight video' },
      { type: 'youtube', url: 'https://youtu.be/mbABdyHZaZU?si=rxfqdm5bKLUdbh-e', caption: 'Highlight video 2' }
    ]
  },
  'henrique-scholl': {
    name: 'Henrique Scholl',
    position: '',
    age: 0,
    nationality: '',
    height: '',
    weight: '',
    category: 'Football',
    image: '/players/henrique-scholl.jpg',
    stats: { goals: 0, assists: 0, matches: 0 },
    bio: '',
    trajectory: [],
    media: [
      { type: 'image', url: '/players/henrique-scholl.jpg', caption: 'Profile photo' },
      { type: 'youtube', url: 'https://youtu.be/aBOu5JYPy60?si=m5yDwHpG93yyv_To', caption: 'Highlight video' }
    ]
  },
  'adonay-silva': {
    name: 'Adonay Silva',
    position: '',
    age: 0,
    nationality: '',
    height: '',
    weight: '',
    category: 'Football',
    image: '/players/adonay-silva.jpg',
    stats: { goals: 0, assists: 0, matches: 0 },
    bio: '',
    trajectory: [],
    media: [
      { type: 'image', url: '/players/adonay-silva.jpg', caption: 'Profile photo' },
      { type: 'youtube', url: 'https://youtu.be/CKyjETCp5Mk?si=e5oVLIpNQwXgDiLa', caption: 'Highlight video' }
    ]
  },
  'davi-moura': {
    name: 'Davi Moura',
    position: '',
    age: 0,
    nationality: '',
    height: '',
    weight: '',
    category: 'Football',
    image: '/players/davi-moura.jpg',
    stats: { goals: 0, assists: 0, matches: 0 },
    bio: '',
    trajectory: [],
    media: [
      { type: 'image', url: '/players/davi-moura.jpg', caption: 'Profile photo' },
      { type: 'youtube', url: 'https://youtu.be/wNvpY89knU0?si=E9kBbKlNOaJUtCHy', caption: 'Highlight video' }
    ]
  },
  'eduardo-lopes': {
    name: 'Eduardo Lopes',
    position: '',
    age: 0,
    nationality: '',
    height: '',
    weight: '',
    category: 'Football',
    image: '/players/eduardo-lopes.jpg',
    stats: { goals: 0, assists: 0, matches: 0 },
    bio: '',
    trajectory: [],
    media: [
      { type: 'image', url: '/players/eduardo-lopes.jpg', caption: 'Profile photo' },
      { type: 'youtube', url: 'https://youtu.be/WjENbb3IXSI?si=zS-gPY1RdRYU0DgP', caption: 'Highlight video' }
    ]
  },
  'nicolas-casteluber': {
    name: 'Nicolas Casteluber',
    position: '',
    age: 0,
    nationality: '',
    height: '',
    weight: '',
    category: 'Football',
    image: '/players/nicolas-casteluber.jpg',
    stats: { goals: 0, assists: 0, matches: 0 },
    bio: '',
    trajectory: [],
    media: [ { type: 'image', url: '/players/nicolas-casteluber.jpg', caption: 'Profile photo' } ]
  },
  'ian-reis': {
    name: 'Ian Reis',
    position: '',
    age: 0,
    nationality: '',
    height: '',
    weight: '',
    category: 'Football',
    image: '/players/ian-reis.jpg',
    stats: { goals: 0, assists: 0, matches: 0 },
    bio: '',
    trajectory: [],
    media: [
      { type: 'image', url: '/players/ian-reis.jpg', caption: 'Profile photo' },
      { type: 'youtube', url: 'https://youtu.be/759cdu5lmhg?si=KQKhmBxG9sczvV9k', caption: 'Highlight video' }
    ]
  },
  'gustavo-castro': {
    name: 'Gustavo Castro',
    position: '',
    age: 0,
    nationality: '',
    height: '',
    weight: '',
    category: 'Football',
    image: '/players/gustavo-castro.jpg',
    stats: { goals: 0, assists: 0, matches: 0 },
    bio: '',
    trajectory: [],
    media: [ { type: 'image', url: '/players/gustavo-castro.jpg', caption: 'Profile photo' } ]
  },
  'adam-guzman': {
    name: 'Adam Guzman',
    position: '',
    age: 0,
    nationality: '',
    height: '',
    weight: '',
    category: 'Football',
    image: '/players/adam-guzman.jpg',
    stats: { goals: 0, assists: 0, matches: 0 },
    bio: '',
    trajectory: [],
    media: [ { type: 'image', url: '/players/adam-guzman.jpg', caption: 'Profile photo' } ]
  },
  'luca-oliveira': {
    name: 'Luca Oliveira',
    position: '',
    age: 0,
    nationality: '',
    height: '',
    weight: '',
    category: 'Football',
    image: '/players/luca-oliveira.jpg',
    stats: { goals: 0, assists: 0, matches: 0 },
    bio: '',
    trajectory: [],
    media: [ { type: 'image', url: '/players/luca-oliveira.jpg', caption: 'Profile photo' } ]
  },
  'breno-simoes': {
    name: 'Breno Simoes',
    position: '',
    age: 0,
    nationality: '',
    height: '',
    weight: '',
    category: 'Football',
    image: '/players/breno-simoes.jpg',
    stats: { goals: 0, assists: 0, matches: 0 },
    bio: '',
    trajectory: [],
    media: [ { type: 'image', url: '/players/breno-simoes.jpg', caption: 'Profile photo' } ]
  },
  'caio-alves': {
    name: 'Caio Alves',
    position: '',
    age: 0,
    nationality: '',
    height: '',
    weight: '',
    category: 'Football',
    image: '/players/caio-alves.jpg',
    stats: { goals: 0, assists: 0, matches: 0 },
    bio: '',
    trajectory: [],
    media: [ { type: 'image', url: '/players/caio-alves.jpg', caption: 'Profile photo' } ]
  },
  'claudiney-cardoso': {
    name: 'Claudiney Cardoso',
    position: '',
    age: 0,
    nationality: '',
    height: '',
    weight: '',
    category: 'Football',
    image: '/players/claudiney-cardoso.jpg',
    stats: { goals: 0, assists: 0, matches: 0 },
    bio: '',
    trajectory: [],
    media: [ { type: 'image', url: '/players/claudiney-cardoso.jpg', caption: 'Profile photo' } ]
  },
  'anthony-gomes': {
    name: 'Anthony Gomes',
    position: '',
    age: 0,
    nationality: '',
    height: '',
    weight: '',
    category: 'Football',
    image: '/players/anthony-gomes.jpg',
    stats: { goals: 0, assists: 0, matches: 0 },
    bio: '',
    trajectory: [],
    media: [ { type: 'image', url: '/players/anthony-gomes.jpg', caption: 'Profile photo' } ]
  }
}

export default function PlayerPage({ params }: { params: { id: string } }) {
  const player = players[params.id as keyof typeof players]
  const [modalImage, setModalImage] = useState<string | null>(null);

  if (!player) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Player Not Found</h1>
          <Link href="/en/players" className="text-blue-600 hover:underline">
            Back to Players
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
            <Link href="/en" className="text-gray-500 hover:text-gray-700 transition-colors">
              Home
            </Link>
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 text-gray-400 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
            <Link href="/en/players" className="text-gray-500 hover:text-gray-700 transition-colors">
              Players
            </Link>
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 text-gray-400 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
            <Link href={`/en/players/${params.id}`} className="text-gray-900 font-semibold">
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
              {player.media.map((item, index) => (
                <div key={index} className="group relative h-64 rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                  {item.type === 'image' ? (
                    <>
                      <button
                        type="button"
                        className="w-full h-full cursor-zoom-in focus:outline-none"
                        onClick={() => setModalImage(item.url)}
                        style={{ display: 'block' }}
                        aria-label="Open image preview"
                      >
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
                      </button>
                    </>
                  ) : item.type === 'youtube' ? (
                    <iframe
                      src={item.url.replace('youtu.be/', 'www.youtube.com/embed/').replace('watch?v=', 'embed/').split('?')[0]}
                      title={item.caption}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full border-0 rounded-2xl bg-black"
                    />
                  ) : null}
                </div>
              ))}
            </div>
            {modalImage && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80" onClick={() => setModalImage(null)}>
                <div className="relative max-w-3xl w-full mx-4" onClick={e => e.stopPropagation()}>
                  <button
                    className="absolute top-2 right-2 text-white text-3xl font-bold bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-80 focus:outline-none"
                    onClick={() => setModalImage(null)}
                    aria-label="Close preview"
                  >
                    &times;
                  </button>
                  <div className="w-full h-[60vh] relative">
                    <Image
                      src={modalImage}
                      alt="Preview"
                      fill
                      className="object-contain rounded-2xl bg-black"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
} 