import Image from "next/image";
import Link from "next/link";
import Carousel from '@/components/Carousel'

const players = [
  {
    id: 'joao-victor',
    name: 'João Victor',
    image: '/players/joao-victor.jpg',
    description: 'Um promissor zagueiro com fortes habilidades defensivas e qualidades de liderança. Atualmente desenvolvendo suas habilidades no São Paulo.'
  },
  {
    id: 'wallace-falcao',
    name: 'Wallace Falcão',
    image: '/players/wallace-falcao.jpg',
    description: 'Um talentoso goleiro conhecido por sua agilidade e capacidade de defesa. Atualmente joga pelo IFK Åmål.'
  },
  {
    id: 'khalyan-pereira',
    name: 'Khalyan Pereira',
    image: '/players/khalyan-pereira.jpg',
    description: 'Um experiente zagueiro com sólidas capacidades defensivas. Traz força e serenidade para a linha defensiva do IFK Åmål.'
  }
]

const tournaments = [
  {
    title: 'MICFootball',
    image: '/tournaments/mic-football.jpg',
    content: 'O MICFootball é um torneio internacional de futebol juvenil que reúne algumas das melhores academias do mundo na Costa Brava, Espanha.'
  },
  {
    title: 'Gothia Cup',
    image: '/tournaments/gothia-cup.jpg',
    content: 'A Gothia Cup é o maior e mais internacional torneio de futebol juvenil do mundo, realizado anualmente em Gotemburgo, Suécia.'
  },
  {
    title: 'Pulcino d\'Oro',
    image: '/tournaments/pulcino-doro.jpg',
    content: 'O Pulcino d\'Oro é um torneio internacional de futebol juvenil realizado em Levico Terme, na região de Trentino, Itália.'
  },
  {
    title: 'Valencia Experience',
    image: '/tournaments/valencia-experience.jpg',
    content: 'O Valencia Experience é um programa de treinamento oferecido pelo Valencia CF, destinado a equipes ou grupos de jogadores de todo o mundo.'
  }
]

const teamMembers = [
  {
    name: 'Kelvin Bruno',
    role: 'CEO e Fundador',
    image: '/founders/kelvin-bruno-new.jpg',
    bio: 'Com mais de 10 anos de experiência em gestão esportiva, Kelvin construiu uma reputação por identificar e desenvolver talentos de elite.'
  },
  {
    name: 'Victor Araújo',
    role: 'Diretor de Desenvolvimento de Jogadores',
    image: '/founders/victor-araujo.jpg',
    bio: 'Especialista na captação de talentos e na gestão estratégica de oportunidades no futebol, Victor já acumula mais de uma década de atuação no mercado esportivo.'
  },
  {
    name: 'Xay Cunha',
    role: 'Relações Internacionais',
    image: '/founders/xay-cunha.jpg',
    bio: 'Especializado em transferências internacionais e relações com clubes, Xay estabeleceu fortes redes nos mercados globais de futebol.'
  }
]

const services = [
  {
    title: 'Representação de Jogadores',
    description: 'Representação profissional e orientação para jogadores de futebol em todos os níveis.',
    icon: (
      <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  },
  {
    title: 'Desenvolvimento de Carreira',
    description: 'Planejamento integral de carreira e estratégias de desenvolvimento para sucesso a longo prazo.',
    icon: (
      <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    title: 'Negociação de Contratos',
    description: 'Serviços de negociação especializada para garantir os melhores termos possíveis para nossos clientes.',
    icon: (
      <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  }
]

const partners = [
  { name: 'Valencia CF', logo: '/partners/valencia-fc.jpg', country: 'Espanha' },
  { name: 'Next Academy', logo: '/partners/next-academy.jpg', country: 'Internacional' },
  { name: 'CF Safor Gandía', logo: '/partners/safor-fc.jpg', country: 'Espanha' },
  { name: 'Real Murcia CF', logo: '/partners/real-murcia-fc.jpg', country: 'Espanha' },
  { name: 'Portimonense SC', logo: '/partners/portimonense-fc.jpg', country: 'Portugal' },
  { name: 'CF Gandía', logo: '/partners/gandia-fc.jpg', country: 'Espanha' },
  { name: 'IFK Åmål', logo: '/partners/ifk-amal.jpg', country: 'Suécia' },
  { name: 'Olimpia Regium', logo: '/partners/olimpia-regium.jpg', country: 'Itália' },
  { name: 'Tubarão', logo: '/partners/tubarao.jpg', country: 'Brasil' },
  { name: 'Las Gabias CF', logo: '/partners/las-gabias.jpg', country: 'Espanha' },
  { name: 'São Raimundo EC', logo: '/partners/sao-raimundo-fc.jpg', country: 'Brasil' },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=1000&auto=format&fit=crop"
            alt="Estádio de Futebol"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        </div>
        <div className="container mx-auto px-4 z-20 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              WYN AGENCY
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay">
              Elevando Carreiras de Futebol através da Gestão Profissional
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=34663836731"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors animate-fade-in-delay-2"
            >
              Contate-nos
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Sobre Nós</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-gray-600 mb-4">{member.role}</p>
                  <p className="text-gray-700">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Players Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Nossos Jogadores</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {players.map((player) => (
              <Link 
                href={`/pt/jogadores/${player.id}`}
                key={player.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                <div className="relative h-64">
                  <Image
                    src={player.image}
                    alt={player.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{player.name}</h3>
                  <p className="text-gray-700">{player.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tournaments Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Carousel items={tournaments} title="Torneios" />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Nossos Serviços</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.title} 
                className="bg-white p-8 rounded-2xl shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl text-center group"
              >
                <div className="text-black group-hover:text-blue-600 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="parceiros" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Nossos Parceiros</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner) => (
              <div 
                key={partner.name}
                className="group relative flex flex-col items-center justify-center p-6 bg-gray-50 rounded-2xl transition-all duration-300 hover:bg-gray-100"
              >
                <div className="relative w-24 h-24 mb-4">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                    className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold">{partner.name}</h3>
                  <p className="text-sm text-gray-600">{partner.country}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600 max-w-2xl mx-auto">
              Mantemos relações sólidas com os melhores clubes do mundo, garantindo as melhores oportunidades para o desenvolvimento e progressão profissional dos nossos jogadores.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 