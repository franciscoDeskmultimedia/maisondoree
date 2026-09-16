import type { Block } from 'payload'

export const HeroBlock: Block = {
  slug: 'heroBlock',
  interfaceName: 'HeroBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'El secreto más dulce\nse sirve con hielo.',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
      defaultValue: 'Prueba sus diferentes sabores.',
    },
    {
      name: 'ctaLabel',
      type: 'text',
      defaultValue: 'COMPRA AHORA',
    },
    {
      name: 'ctaUrl',
      type: 'text',
      defaultValue: 'https://wa.me/593985504731',
    },
    {
      name: 'videoSrc',
      type: 'text',
      defaultValue: '/video/hero.mp4',
    },
    {
      name: 'posterUrl',
      type: 'text',
      defaultValue: '/images/hero.png',
    },
  ],
}

