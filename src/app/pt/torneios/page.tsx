import Image from 'next/image'
import Breadcrumbs from '@/components/Breadcrumbs'

const tournaments = [
  {
    title: 'MICFootball',
    date: 'Abril',
    location: 'Costa Brava, Espanha',
    image: '/tournaments/mic-football.jpg',
    description: 'O MICFootball é um torneio internacional de futebol juvenil que reúne algumas das melhores academias do mundo na Costa Brava, Espanha. Realizado anualmente durante a Páscoa, oferece a jovens jogadores de cinco continentes a oportunidade de competir e viver uma experiência semelhante à de profissionais.'
  },
  {
    title: 'Gothia Cup',
    date: 'Julho',
    location: 'Gotemburgo, Suécia',
    image: '/tournaments/gothia-cup.jpg',
    description: 'A Gothia Cup é o maior e mais internacional torneio de futebol juvenil do mundo, realizado anualmente em Gotemburgo, Suécia. Desde 1975, aproximadamente 1.900 equipes de 75 nações participam, jogando quase 5.000 partidas em 112 campos.'
  },
  {
    title: 'Pulcino d\'Oro',
    date: 'Junho',
    location: 'Levico Terme, Trentino, Itália',
    image: '/tournaments/pulcino-doro.jpg',
    description: 'O Pulcino d\'Oro é um torneio internacional de futebol juvenil realizado em Levico Terme, na região de Trentino, Itália. Destinado a equipes sub-11, reúne clubes amadores e profissionais de diversos países, promovendo não apenas a competição, mas também o espírito educacional do jogo em equipe e a troca cultural entre os participantes.'
  },
  {
    title: 'Valencia Experience',
    date: 'Outubro',
    location: 'Valência, Espanha.',
    image: '/tournaments/valencia-experience.jpg',
    description: 'O Valencia Experience é um programa de treinamento oferecido pelo Valencia CF, destinado a equipes ou grupos de jogadores de todo o mundo. Os participantes têm a oportunidade de treinar nas instalações do clube com técnicos da Academia VCF, além de disputar partidas amistosas contra equipes locais. O programa também inclui visitas ao Estádio Mestalla e outras atividades culturais em Valência.'
  }
]

export default function TournamentsPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <Breadcrumbs
          items={[
            { label: 'Início', href: '/pt' },
            { label: 'Torneios', href: '/pt/torneios' }
          ]}
        />

        <h1 className="text-4xl font-bold mb-12">Torneios</h1>

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