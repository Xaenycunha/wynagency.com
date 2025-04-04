import Image from 'next/image'
import Breadcrumbs from '@/components/Breadcrumbs'

const tournaments = [
  {
    title: 'Copa Internacional 2024',
    date: '10 de Junho - 12 de Julho, 2024',
    location: 'Múltiplas Sedes, Europa',
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1000&auto=format&fit=crop',
    description: 'O torneio internacional mais prestigioso com os melhores times do mundo. A edição deste ano promete ser a maior até agora, com 24 times competindo pela glória.'
  },
  {
    title: 'Liga dos Campeões',
    date: 'Setembro 2024 - Maio 2025',
    location: 'Várias Cidades, Europa',
    image: 'https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=1000&auto=format&fit=crop',
    description: 'A principal competição de clubes da Europa com os melhores times do continente. O torneio representa o ápice do futebol de clubes.'
  },
  {
    title: 'Copa de Desenvolvimento Juvenil',
    date: '15-30 de Agosto, 2024',
    location: 'Madrid, Espanha',
    image: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?q=80&w=1000&auto=format&fit=crop',
    description: 'Um torneio focado em desenvolver talento jovem e mostrar futuras estrelas. Esta competição lançou muitas carreiras bem-sucedidas.'
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