import Image from 'next/image'
import Breadcrumbs from '@/components/Breadcrumbs'

const tournaments = [
  {
    title: 'MICFootball',
    date: 'Abril',
    location: 'Costa Brava, España',
    image: '/tournaments/mic-football.jpg',
    description: 'El MICFootball es un torneo internacional de fútbol juvenil que reúne a algunas de las mejores canteras del mundo en la Costa Brava, España. Celebrado anualmente durante Semana Santa, ofrece a jóvenes jugadores de los cinco continentes la oportunidad de competir y vivir una experiencia similar a la de los profesionales.'
  },
  {
    title: 'Gothia Cup',
    date: 'Julio',
    location: 'Gotemburgo, Suecia',
    image: '/tournaments/gothia-cup.jpg',
    description: 'La Gothia Cup es el torneo de fútbol juvenil más grande y más internacional del mundo, que se celebra anualmente en Gotemburgo, Suecia. Desde 1975, participan aproximadamente 1.900 equipos de 75 naciones, jugando casi 5.000 partidos en 112 campos.'
  },
  {
    title: 'Pulcino d\'Oro',
    date: 'Junio',
    location: 'Levico Terme, Trentino, Italia',
    image: '/tournaments/pulcino-doro.jpg',
    description: 'El Pulcino d\'Oro es un torneo internacional de fútbol juvenil que se celebra en Levico Terme, en la región de Trentino, Italia. Dirigido a equipos sub-11, reúne a clubes amateurs y profesionales de diversos países, promoviendo no solo la competición, sino también el espíritu educativo del juego en equipo y el intercambio cultural entre los participantes.'
  },
  {
    title: 'Valencia Experience',
    date: 'Octubre',
    location: 'Valencia, España',
    image: '/tournaments/valencia-experience.jpg',
    description: 'La Valencia Experience es un programa de entrenamiento ofrecido por el Valencia CF, dirigido a equipos o grupos de jugadores de todo el mundo. Los participantes tienen la oportunidad de entrenar en las instalaciones del club con técnicos de la Academia VCF, además de disputar partidos amistosos contra equipos locales. El programa también incluye visitas al Estadio Mestalla y otras actividades culturales en Valencia.'
  }
]

export default function TournamentsPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs
          items={[
            { label: 'Inicio', href: '/es' },
            { label: 'Torneos', href: '/es/torneos' }
          ]}
        />

        <h1 className="text-4xl font-bold mb-12">Torneos</h1>

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