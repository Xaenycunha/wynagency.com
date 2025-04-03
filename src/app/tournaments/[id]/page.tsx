import Image from 'next/image'
import Link from 'next/link'

const tournaments = {
  'tournament-1': {
    name: 'International Cup 2024',
    location: 'Madrid, Spain',
    date: 'June 15-30, 2024',
    prize: '$5,000,000',
    teams: 32,
    format: 'Group Stage + Knockout',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1000&auto=format&fit=crop',
    description: 'The most prestigious international tournament featuring top teams from around the world.',
    details: 'The International Cup 2024 will bring together the best teams from across the globe for two weeks of intense competition. The tournament will feature a group stage followed by knockout rounds, culminating in a grand final at the iconic Santiago Bernabéu Stadium.',
    gallery: [
      'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1000&auto=format&fit=crop'
    ]
  },
  'tournament-2': {
    name: 'Champions League',
    location: 'Various European Cities',
    date: 'September 2024 - May 2025',
    prize: '$10,000,000',
    teams: 32,
    format: 'Group Stage + Knockout',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1000&auto=format&fit=crop',
    description: 'Europe\'s premier club competition featuring the continent\'s best teams.',
    details: 'The UEFA Champions League is the most prestigious club competition in European football. The tournament runs throughout the season, with matches played across Europe\'s most iconic stadiums.',
    gallery: [
      'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1000&auto=format&fit=crop'
    ]
  },
  'tournament-3': {
    name: 'Youth Development Cup',
    location: 'London, UK',
    date: 'July 10-20, 2024',
    prize: '$1,000,000',
    teams: 16,
    format: 'Group Stage + Knockout',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1000&auto=format&fit=crop',
    description: 'A tournament focused on developing young talent and showcasing future stars.',
    details: 'The Youth Development Cup is designed to provide young players with international experience and exposure. The tournament features teams from top academies around the world, with scouts from major clubs in attendance.',
    gallery: [
      'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1000&auto=format&fit=crop'
    ]
  }
}

export default function TournamentPage({ params }: { params: { id: string } }) {
  const tournament = tournaments[params.id as keyof typeof tournaments]

  if (!tournament) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Tournament Not Found</h1>
          <Link href="/tournaments" className="text-blue-600 hover:underline">
            Back to Tournaments
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <Link href="/tournaments" className="text-blue-600 hover:underline mb-8 inline-block">
          ← Back to Tournaments
        </Link>
        
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src={tournament.image}
              alt={tournament.name}
              fill
              className="object-cover"
            />
          </div>
          
          <div>
            <h1 className="text-4xl font-bold mb-4">{tournament.name}</h1>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <p className="text-gray-600">Location</p>
                <p className="font-semibold">{tournament.location}</p>
              </div>
              <div>
                <p className="text-gray-600">Date</p>
                <p className="font-semibold">{tournament.date}</p>
              </div>
              <div>
                <p className="text-gray-600">Prize Pool</p>
                <p className="font-semibold">{tournament.prize}</p>
              </div>
              <div>
                <p className="text-gray-600">Teams</p>
                <p className="font-semibold">{tournament.teams}</p>
              </div>
              <div>
                <p className="text-gray-600">Format</p>
                <p className="font-semibold">{tournament.format}</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Description</h2>
              <p className="text-gray-700">{tournament.description}</p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">Details</h2>
              <p className="text-gray-700">{tournament.details}</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tournament.gallery.map((image, index) => (
              <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src={image}
                  alt={`${tournament.name} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 