import type { Block } from 'payload'

export const SaintManichoBlock: Block = {
  slug: 'saintManichoBlock',
  interfaceName: 'SaintManichoBlock',
  fields: [
    {
      name: 'imagePath',
      type: 'text',
      defaultValue: '/images/saint-manicho.jpg',
    },
    {
      name: 'altText',
      type: 'text',
      defaultValue: 'Prueba el nuevo sabor Saint Manicho',
    },
  ],
}
