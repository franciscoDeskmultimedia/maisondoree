import type { Block } from 'payload'

export const DondeEncontrarnosBlock: Block = {
  slug: 'dondeEncontrarnosBlock',
  interfaceName: 'DondeEncontrarnosBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'DONDE\nENCONTRANOS',
    },
    {
      name: 'places',
      type: 'array',
      fields: [
        {
          name: 'city',
          type: 'text',
          required: true,
        },
        {
          name: 'logo1',
          type: 'text',
          defaultValue: 'LOGO 1',
        },
        {
          name: 'logo2',
          type: 'text',
          defaultValue: 'LOGO 2',
        },
      ],
    },
  ],
}
