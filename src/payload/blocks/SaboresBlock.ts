import type { Block } from 'payload'

export const SaboresBlock: Block = {
  slug: 'saboresBlock',
  interfaceName: 'SaboresBlock',
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      defaultValue: 'DESCUBRE LOS SABORES',
    },
    {
      name: 'autoPlayMs',
      type: 'number',
      defaultValue: 2000,
    },
  ],
}
