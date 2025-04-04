export const translations = {
  en: {
    players: 'Players',
    tournaments: 'Tournaments',
    partners: 'Partners',
    about: 'About',
    contact: 'Contact'
  },
  es: {
    players: 'Jugadores',
    tournaments: 'Torneos',
    partners: 'Socios',
    about: 'Nosotros',
    contact: 'Contacto'
  },
  pt: {
    players: 'Jogadores',
    tournaments: 'Torneios',
    partners: 'Parceiros',
    about: 'Sobre',
    contact: 'Contato'
  }
} as const;

export type LanguageCode = keyof typeof translations; 