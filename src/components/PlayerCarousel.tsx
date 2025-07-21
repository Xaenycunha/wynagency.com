'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';

interface Player {
  id: string;
  name: string;
  image: string;
  description: string;
}

interface PlayerCarouselProps {
  players: Player[];
}

function getVisibleCount() {
  if (typeof window !== 'undefined') {
    if (window.innerWidth < 640) return 1; // mobile: show 1
    if (window.innerWidth < 1024) return 3; // tablet
  }
  return 5; // desktop
}

export default function PlayerCarousel({ players }: PlayerCarouselProps) {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(getVisibleCount());
  const transitionDuration = 600; // ms
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('left');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null);

  // Responsive visibleCount
  useEffect(() => {
    function handleResize() {
      setVisibleCount(getVisibleCount());
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-slide logic
  useEffect(() => {
    startAutoSlide();
    return () => {
      if (autoSlideRef.current) clearInterval(autoSlideRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [players.length, visibleCount]);

  const startAutoSlide = () => {
    if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    autoSlideRef.current = setInterval(() => {
      handleMove(1, true);
    }, 4000);
  };

  const pauseAutoSlide = () => {
    if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      startAutoSlide();
    }, 8000); // Resume auto-slide after 8s of inactivity
  };

  // Move carousel left or right
  const handleMove = (direction: number, isAuto = false) => {
    setSlideDirection(direction === 1 ? 'left' : 'right');
    setIsTransitioning(true);
    setTimeout(() => {
      setStartIndex((prev) => {
        let next = prev + direction;
        if (next < 0) next = players.length - 1;
        if (next >= players.length) next = 0;
        console.log('handleMove', { direction, prev, next });
        return next;
      });
      setIsTransitioning(false);
    }, transitionDuration);
    if (!isAuto) pauseAutoSlide();
  };

  // Get the N players to show, wrapping around if needed
  const visiblePlayers = Array.from({ length: visibleCount }, (_, i) => players[(startIndex + i) % players.length]);

  // Determine language and correct player path
  let lang = 'en';
  if (typeof window !== 'undefined') {
    if (window.location.pathname.startsWith('/pt')) lang = 'pt';
    else if (window.location.pathname.startsWith('/es')) lang = 'es';
  }
  const playerPath = lang === 'pt' ? 'jogadores' : lang === 'es' ? 'jugadores' : 'players';

  return (
    <div className="w-full flex flex-col items-center">
      <div className="overflow-hidden w-full flex justify-center">
        <div
          className="flex gap-4 sm:gap-8 transition-transform"
          style={{
            transform: isTransitioning
              ? slideDirection === 'left'
                ? `translateX(-${100 / visibleCount}%)`
                : `translateX(${100 / visibleCount}%)`
              : 'translateX(0)',
            transition: isTransitioning ? `transform ${transitionDuration}ms cubic-bezier(0.4,0,0.2,1)` : 'none',
            width: '100%',
          }}
        >
          {visiblePlayers.map((player, idx) => (
            <Link
              href={`/${lang}/${playerPath}/${player.id}`}
              key={player.id + idx}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 w-full max-w-xs flex-shrink-0${visibleCount === 1 ? ' mx-auto' : ''}`}
              style={{ minWidth: 0, flex: `0 0 ${100 / visibleCount}%` }}
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
      <div className="flex justify-center items-center gap-6 mt-6">
        <button
          aria-label="Previous"
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
          onClick={() => handleMove(-1)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          aria-label="Next"
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
          onClick={() => handleMove(1)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
} 