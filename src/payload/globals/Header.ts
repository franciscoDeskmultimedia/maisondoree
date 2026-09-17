import type { GlobalConfig } from 'payload'

export const HeaderGlobal: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  hooks: {
    beforeChange: [
      ({ data }) => {
        if (data) {
          if (Array.isArray(data.navLinksLeft)) {
            data.navLinksLeft = data.navLinksLeft.map(({ id: _id, ...rest }: any) => rest)
          }
          if (Array.isArray(data.navLinksRight)) {
            data.navLinksRight = data.navLinksRight.map(({ id: _id, ...rest }: any) => rest)
          }
        }
        return data
      },
    ],
  },
  fields: [
    {
      name: 'logoPath',
      type: 'text',
      defaultValue: '/images/wordmark.png',
      label: 'Logo Image Path',
    },
    {
      name: 'subtitle',
      type: 'text',
      defaultValue: 'Ecuadorian & French cream licor',
    },
    {
      name: 'navLinksLeft',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'navLinksRight',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
