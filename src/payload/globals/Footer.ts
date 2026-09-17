import type { GlobalConfig } from 'payload'

export const FooterGlobal: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  hooks: {
    beforeChange: [
      ({ data }) => {
        if (data) {
          if (Array.isArray(data.topLinks)) {
            data.topLinks = data.topLinks.map(({ id: _id, ...rest }: any) => rest)
          }
          if (Array.isArray(data.socialLinks)) {
            data.socialLinks = data.socialLinks.map(({ id: _id, ...rest }: any) => rest)
          }
          if (Array.isArray(data.bottomMenu)) {
            data.bottomMenu = data.bottomMenu.map(({ id: _id, ...rest }: any) => rest)
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
      defaultValue: '/images/logo.png',
      label: 'Footer Logo Image Path',
    },
    {
      name: 'topLinks',
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
      name: 'socialLinks',
      type: 'array',
      fields: [
        {
          name: 'platform',
          type: 'select',
          options: ['facebook', 'whatsapp', 'instagram', 'tiktok'],
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
      name: 'bottomMenu',
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
      name: 'copyrightText',
      type: 'text',
      label: 'Copyright Text',
      defaultValue: 'Copyright © 2026 MAISON DORÉE LIQUEUR. All Rights Reserved',
    },
    {
      name: 'designedByText',
      type: 'text',
      label: 'Designed By Text',
      defaultValue: 'Designed By PILOW.',
    },
  ],
}
