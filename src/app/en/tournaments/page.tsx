import Image from 'next/image'
import Breadcrumbs from '@/components/Breadcrumbs'

const tournaments = [
  {
    title: 'MICFootball',
    date: 'April',
    location: 'Costa Brava, Spain',
    image: '/tournaments/mic-football.jpg',
    description: 'MICFootball is an international youth football tournament that brings together some of the world\'s best academies on the Costa Brava, Spain. Held annually during Easter, it offers young players from five continents the opportunity to compete and experience something similar to professional football.'
  },
  {
    title: 'Gothia Cup',
    date: 'July',
    location: 'Gothenburg, Sweden',
    image: '/tournaments/gothia-cup.jpg',
    description: 'The Gothia Cup is the world\'s largest and most international youth football tournament, held annually in Gothenburg, Sweden. Since 1975, approximately 1,900 teams from 75 nations participate, playing nearly 5,000 matches on 112 fields.'
  },
  {
    title: 'Pulcino d\'Oro',
    date: 'June',
    location: 'Levico Terme, Trentino, Italy',
    image: '/tournaments/pulcino-doro.jpg',
    description: 'Pulcino d\'Oro is an international youth football tournament held in Levico Terme, in the Trentino region, Italy. Aimed at U-11 teams, it brings together amateur and professional clubs from various countries, promoting not only competition but also the educational spirit of teamwork and cultural exchange among participants.'
  },
  {
    title: 'Valencia Experience',
    date: 'October',
    location: 'Valencia, Spain',
    image: '/tournaments/valencia-experience.jpg',
    description: 'The Valencia Experience is a training program offered by Valencia CF, aimed at teams or groups of players from around the world. Participants have the opportunity to train at the club\'s facilities with VCF Academy coaches, as well as play friendly matches against local teams. The program also includes visits to the Mestalla Stadium and other cultural activities in Valencia.'
  }
]

export default function TournamentsPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/en' },
            { label: 'Tournaments', href: '/en/tournaments' }
          ]}
        />

        <h1 className="text-4xl font-bold mb-12">Tournaments</h1>

        <div className="space-y-12">
          {tournaments.map((tournament, index) => (
            <div 
              key={tournament.title}
              className={`flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="md:w-1/2">
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={tournament.image}
                    alt={tournament.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="md:w-1/2 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-4">{tournament.title}</h2>
                <div className="space-y-4 text-gray-600">
                  <p className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {tournament.date}
                  </p>
                  <p className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {tournament.location}
                  </p>
                  <p className="text-gray-700 mt-4">
                    {tournament.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 