'use client'

import React from 'react'
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
  { type: 'youtube', url: 'https://www.youtube.com/watch?v=sYLfw04ISQs' },
  { type: 'youtube', url: 'https://www.youtube.com/watch?v=NFPET4q37_I' },
  { type: 'youtube', url: 'https://www.youtube.com/watch?v=PHeMm2n8OG0' },
]

const sectionTitles = {
  en: 'Testimonials',
  es: 'Testimonios',
  pt: 'Depoimentos',
}

function getYoutubeId(url: string) {
  const match = url.match(/v=([\w-]+)/)
  return match ? match[1] : ''
}

export default function Testimonials() {
  const pathname = usePathname()
  const locale = pathname.split('/')[1] || 'en'
  const title = sectionTitles[locale as keyof typeof sectionTitles] || sectionTitles.en

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{title}</h2>
        <div className="grid justify-center mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg p-4 shadow-md flex flex-col items-center">
              <div className="w-full aspect-[16/9] max-w-xl rounded-lg overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${getYoutubeId(item.url)}`}
                  title="YouTube video testimonial"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="w-full h-full border-0 rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 