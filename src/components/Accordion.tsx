'use client'

import { useState } from 'react'
import Image from 'next/image'

interface AccordionItem {
  title: string
  content: string
  image?: string
}

interface AccordionProps {
  items: AccordionItem[]
  title: string
}

export default function Accordion({ items, title }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="w-full">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{title}</h2>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="text-xl font-semibold">{item.title}</span>
              <svg
                className={`w-6 h-6 transform transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`grid md:grid-cols-2 gap-6 overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-[500px] p-6' : 'max-h-0 p-0'
              }`}
            >
              <div>
                <p className="text-gray-700">{item.content}</p>
              </div>
              {item.image && (
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 