import type { Block } from 'payload'

export const HistoriaBlock: Block = {
  slug: 'historiaBlock',
  interfaceName: 'HistoriaBlock',
  fields: [
    {
      name: 'wordmarkImage',
      type: 'text',
      defaultValue: '/images/wordmark.png',
    },
    {
      name: 'scriptText',
      type: 'text',
      defaultValue: 'Ecuadorian & French cream licor',
    },
    {
      name: 'paragraph1',
      type: 'textarea',
      defaultValue:
        'En el año 2025, durante unas vacaciones en la costa ecuatoriana, compartí mi receta familiar de rompope manabita con unos amigos franceses, quienes insistieron en que más personas debían probarla. Inspirado por su motivación, decidí fundar la marca de licores crema de mayor calidad en el mercado ecuatoriano.',
    },
    {
      name: 'paragraph2',
      type: 'textarea',
      defaultValue: 'Así nació Maison Dorée.\nUniendo una tradición familiar',
    },
    {
      name: 'sinceText',
      type: 'text',
      defaultValue: 'desde 1862.',
    },
    {
      name: 'signText',
      type: 'text',
      defaultValue: '- Douglas Pazmiño, Fundador.',
    },
    {
      name: 'mediaImage',
      type: 'text',
      defaultValue: '/images/manabi.jpg',
    },
  ],
}
