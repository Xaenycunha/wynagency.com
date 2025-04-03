'use client'

import { usePathname } from 'next/navigation'

const translations = {
  en: {
    title: 'What Our Players Say',
    testimonial1: 'WYN Agency helped me take my career to the next level. Their support and guidance have been invaluable.',
    testimonial2: 'The professionalism and dedication of the WYN team is unmatched. They truly care about their players.',
    testimonial3: 'Thanks to WYN Agency, I found the perfect club for my development. Couldn\'t be happier with their services.'
  },
  es: {
    title: 'Lo que Dicen Nuestros Jugadores',
    testimonial1: 'WYN Agency me ayudó a llevar mi carrera al siguiente nivel. Su apoyo y orientación han sido invaluables.',
    testimonial2: 'El profesionalismo y dedicación del equipo WYN no tiene igual. Realmente se preocupan por sus jugadores.',
    testimonial3: 'Gracias a WYN Agency, encontré el club perfecto para mi desarrollo. No podría estar más contento con sus servicios.'
  },
  pt: {
    title: 'O que Nossos Jogadores Dizem',
    testimonial1: 'A WYN Agency me ajudou a levar minha carreira para o próximo nível. Seu apoio e orientação foram inestimáveis.',
    testimonial2: 'O profissionalismo e dedicação da equipe WYN é incomparável. Eles realmente se importam com seus jogadores.',
    testimonial3: 'Graças à WYN Agency, encontrei o clube perfeito para meu desenvolvimento. Não poderia estar mais feliz com seus serviços.'
  }
}

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    position: 'Forward',
    image: '/testimonials/player1.jpg'
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'Midfielder',
    image: '/testimonials/player2.jpg'
  },
  {
    id: 3,
    name: 'Mike Johnson',
    position: 'Defender',
    image: '/testimonials/player3.jpg'
  }
]

export default function Testimonials() {
  const pathname = usePathname()
  const locale = pathname.split('/')[1] || 'en'
  const t = translations[locale as keyof typeof translations]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="bg-gray-50 rounded-lg p-6 shadow-md">
              <p className="text-gray-600 mb-6">
                {t[`testimonial${index + 1}` as keyof typeof t]}
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-4" />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 