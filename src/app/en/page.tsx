import Image from "next/image";
import Link from "next/link";
import Carousel from '@/components/Carousel'

const players = [
  {
    id: 'player-1',
    title: 'Alex Rodriguez',
    content: 'A dynamic forward with exceptional speed and finishing ability. Known for his clinical finishing and ability to create chances for teammates.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'player-2',
    title: 'Marcus Johnson',
    content: 'A creative midfielder with excellent vision and passing range. Known for his ability to control the tempo of the game and create scoring opportunities.',
    image: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'player-3',
    title: 'Lucas Silva',
    content: 'A commanding center-back with excellent aerial ability and tackling. Known for his leadership qualities and ability to organize the defense.',
    image: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=1000&auto=format&fit=crop'
  }
]

const tournaments = [
  {
    title: 'International Cup 2024',
    content: 'The most prestigious international tournament featuring top teams from around the world.',
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1000&auto=format&fit=crop'
  },
  {
    title: 'Champions League',
    content: 'Europe\'s premier club competition featuring the continent\'s best teams.',
    image: 'https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=1000&auto=format&fit=crop'
  },
  {
    title: 'Youth Development Cup',
    content: 'A tournament focused on developing young talent and showcasing future stars.',
    image: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?q=80&w=1000&auto=format&fit=crop'
  }
]

const teamMembers = [
  {
    name: 'Kelvin Bruno',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop',
    bio: 'With over 15 years of experience in sports management, Kelvin has built a reputation for identifying and developing top talent.'
  },
  {
    name: 'Victor Araújo',
    role: 'Head of Player Development',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop',
    bio: 'Former professional player turned talent scout, Victor brings a unique perspective to player development and career management.'
  },
  {
    name: 'Xay Cunha',
    role: 'International Relations',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop',
    bio: 'Specializing in international player transfers and club relations, Xay has established strong networks across global football markets.'
  }
]

const services = [
  {
    title: 'Player Representation',
    description: 'Professional representation and guidance for soccer players at all levels.',
    icon: (
      <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  },
  {
    title: 'Career Development',
    description: 'Comprehensive career planning and development strategies for long-term success.',
    icon: (
      <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    title: 'Contract Negotiation',
    description: 'Expert negotiation services to secure the best possible terms for our clients.',
    icon: (
      <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  }
]

const partners = [
  {
    name: 'Real Madrid',
    logo: '/partners/real-madrid.png',
    country: 'Spain'
  },
  {
    name: 'Manchester City',
    logo: '/partners/man-city.png',
    country: 'England'
  },
  {
    name: 'Paris Saint-Germain',
    logo: '/partners/psg.png',
    country: 'France'
  },
  {
    name: 'Bayern Munich',
    logo: '/partners/bayern.png',
    country: 'Germany'
  },
  {
    name: 'Ajax',
    logo: '/partners/ajax.png',
    country: 'Netherlands'
  },
  {
    name: 'Porto',
    logo: '/partners/porto.png',
    country: 'Portugal'
  }
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=1000&auto=format&fit=crop"
            alt="Soccer Stadium"
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
              Elevating Soccer Careers Through Professional Management
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=34663836731"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors animate-fade-in-delay-2"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Us</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Players</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {players.map((player) => (
              <Link 
                href={`/players/${player.id}`} 
                key={player.title}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                <div className="relative h-64">
                  <Image
                    src={player.image}
                    alt={player.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{player.title}</h3>
                  <p className="text-gray-700">{player.content}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tournaments Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Carousel items={tournaments} title="Tournaments" />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
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
      <section id="partners" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Partners</h2>
          
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
              We maintain strong relationships with top clubs worldwide, ensuring the best opportunities for our players' development and career progression.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 