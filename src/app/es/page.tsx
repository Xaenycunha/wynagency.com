import Image from "next/image";
import Link from "next/link";
import Carousel from '@/components/Carousel'
import PlayerCarousel from '@/components/PlayerCarousel';

const players = [
  {
    id: 'joao-victor',
    name: 'João Victor',
    image: '/players/joao-victor.jpg',
    description: 'Un prometedor defensor con fuertes habilidades defensivas y cualidades de liderazgo. Actualmente desarrollando sus habilidades en São Paulo.'
  },
  {
    id: 'wallace-falcao',
    name: 'Wallace Falcão',
    image: '/players/wallace-falcao.jpg',
    description: 'Un talentoso portero conocido por su agilidad y capacidad para detener disparos. Actualmente juega para el IFK Åmål.'
  },
  {
    id: 'khalyan-pereira',
    name: 'Khalyan Pereira',
    image: '/players/khalyan-pereira.jpg',
    description: 'Un experimentado defensor con sólidas capacidades defensivas. Aporta fuerza y compostura a la línea defensiva del IFK Åmål.'
  },
  {
    id: 'victor-sillos',
    name: 'Victor Sillos',
    image: '/players/victor-sillos.jpg',
    description: '',
  },
  {
    id: 'ryan-martins',
    name: 'Ryan Martins',
    image: '/players/ryan-martins.jpg',
    description: '',
  },
  {
    id: 'joao-daddario',
    name: 'Joao Daddario',
    image: '/players/joao-daddario.jpg',
    description: '',
  },
  {
    id: 'guilherme-garcia',
    name: 'Guilherme Garcia',
    image: '/players/guilherme-garcia.jpg',
    description: '',
  },
  {
    id: 'felipe-toneto',
    name: 'Felipe Toneto',
    image: '/players/felipe-toneto.jpg',
    description: '',
  },
  {
    id: 'steven-santos',
    name: 'Steven Santos',
    image: '/players/steven-santos.jpg',
    description: '',
  },
  {
    id: 'henrique-scholl',
    name: 'Henrique Scholl',
    image: '/players/henrique-scholl.jpg',
    description: '',
  },
  {
    id: 'adonay-silva',
    name: 'Adonay Silva',
    image: '/players/adonay-silva.jpg',
    description: '',
  },
  {
    id: 'davi-moura',
    name: 'Davi Moura',
    image: '/players/davi-moura.jpg',
    description: '',
  },
  {
    id: 'eduardo-lopes',
    name: 'Eduardo Lopes',
    image: '/players/eduardo-lopes.jpg',
    description: '',
  },
  {
    id: 'nicolas-casteluber',
    name: 'Nicolas Casteluber',
    image: '/players/nicolas-casteluber.jpg',
    description: '',
  },
  {
    id: 'ian-reis',
    name: 'Ian Reis',
    image: '/players/ian-reis.jpg',
    description: '',
  },
  {
    id: 'gustavo-castro',
    name: 'Gustavo Castro',
    image: '/players/gustavo-castro.jpg',
    description: '',
  },
  {
    id: 'adam-guzman',
    name: 'Adam Guzman',
    image: '/players/adam-guzman.jpg',
    description: '',
  },
  {
    id: 'luca-oliveira',
    name: 'Luca Oliveira',
    image: '/players/luca-oliveira.jpg',
    description: '',
  },
  {
    id: 'breno-simoes',
    name: 'Breno Simoes',
    image: '/players/breno-simoes.jpg',
    description: '',
  },
  {
    id: 'caio-alves',
    name: 'Caio Alves',
    image: '/players/caio-alves.jpg',
    description: '',
  },
  {
    id: 'claudiney-cardoso',
    name: 'Claudiney Cardoso',
    image: '/players/claudiney-cardoso.jpg',
    description: '',
  },
  {
    id: 'anthony-gomes',
    name: 'Anthony Gomes',
    image: '/players/anthony-gomes.jpg',
    description: '',
  },
];

players.sort((a, b) => a.name.localeCompare(b.name));

const tournaments = [
  {
    title: 'MICFootball',
    image: '/tournaments/mic-football.jpg',
    content: 'El MICFootball es un torneo internacional de fútbol juvenil que reúne a algunas de las mejores canteras del mundo en la Costa Brava, España.'
  },
  {
    title: 'Gothia Cup',
    image: '/tournaments/gothia-cup.jpg',
    content: 'La Gothia Cup es el torneo de fútbol juvenil más grande y más internacional del mundo, que se celebra anualmente en Gotemburgo, Suecia.'
  },
  {
    title: 'Pulcino d\'Oro',
    image: '/tournaments/pulcino-doro.jpg',
    content: 'El Pulcino d\'Oro es un torneo internacional de fútbol juvenil que se celebra en Levico Terme, en la región de Trentino, Italia.'
  },
  {
    title: 'Valencia Experience',
    image: '/tournaments/valencia-experience.jpg',
    content: 'La Valencia Experience es un programa de entrenamiento ofrecido por el Valencia CF, dirigido a equipos o grupos de jugadores de todo el mundo.'
  }
]

const teamMembers = [
  {
    name: 'Kelvin Bruno',
    role: 'CEO y Fundador',
    image: '/founders/kelvin-bruno-new.jpg',
    bio: 'Con más de 10 años de experiencia en gestión deportiva, Kelvin ha construido una reputación por identificar y desarrollar talento de élite.'
  },
  {
    name: 'Victor Araújo',
    role: 'Director de Desarrollo de Jugadores',
    image: '/founders/victor-araujo.jpg',
    bio: 'Especialista en la captación de talentos y en la gestión estratégica de oportunidades en el fútbol, Victor ya suma más de una década de trayectoria en el sector deportivo.'
  },
  {
    name: 'Xay Cunha',
    role: 'Relaciones Internacionales',
    image: '/founders/xay-cunha.jpg',
    bio: 'Especializado en transferencias internacionales y relaciones con clubes, Xay ha establecido fuertes redes en los mercados globales del fútbol.'
  }
]

const services = [
  {
    title: 'Representación de Jugadores',
    description: 'Representación profesional y orientación para jugadores de fútbol de todos los niveles.',
    icon: (
      <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  },
  {
    title: 'Desarrollo de Carrera',
    description: 'Planificación integral de carrera y estrategias de desarrollo para el éxito a largo plazo.',
    icon: (
      <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    title: 'Negociación de Contratos',
    description: 'Servicios de negociación experta para asegurar los mejores términos posibles para nuestros clientes.',
    icon: (
      <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  }
]

const partners = [
  { name: 'Valencia CF', logo: '/partners/valencia-fc.jpg', country: 'España' },
  { name: 'Next Academy', logo: '/partners/next-academy.jpg', country: 'Internacional' },
  { name: 'CF Safor Gandía', logo: '/partners/safor-fc.jpg', country: 'España' },
  { name: 'Real Murcia CF', logo: '/partners/real-murcia-fc.jpg', country: 'España' },
  { name: 'Portimonense SC', logo: '/partners/portimonense-fc.jpg', country: 'Portugal' },
  { name: 'CF Gandía', logo: '/partners/gandia-fc.jpg', country: 'España' },
  { name: 'IFK Åmål', logo: '/partners/ifk-amal.jpg', country: 'Suecia' },
  { name: 'Olimpia Regium', logo: '/partners/olimpia-regium.jpg', country: 'Italia' },
  { name: 'Tubarão', logo: '/partners/tubarao.jpg', country: 'Brasil' },
  { name: 'Las Gabias CF', logo: '/partners/las-gabias.jpg', country: 'España' },
  { name: 'São Raimundo EC', logo: '/partners/sao-raimundo-fc.jpg', country: 'Brasil' },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] sm:h-[60vh] lg:h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=1000&auto=format&fit=crop"
            alt="Estadio de Fútbol"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        </div>
        <div className="container mx-auto px-2 sm:px-4 z-20 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-3 sm:mb-6 animate-fade-in">
              WYN AGENCY
            </h1>
            <p className="text-base sm:text-xl md:text-2xl mb-4 sm:mb-8 animate-fade-in-delay">
              Elevando Carreras de Fútbol a través de la Gestión Profesional
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=34663836731"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black px-4 sm:px-8 py-2 sm:py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors animate-fade-in-delay-2"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Sobre Nosotros</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Nuestros Jugadores</h2>
          <PlayerCarousel players={players} />
        </div>
      </section>

      {/* Tournaments Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Carousel items={tournaments} title="Torneos" />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Nuestros Servicios</h2>
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
      <section id="socios" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Nuestros Socios</h2>
          
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
              Mantenemos relaciones sólidas con los mejores clubes del mundo, asegurando las mejores oportunidades para el desarrollo y progresión profesional de nuestros jugadores.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 