import type { GlobalConfig } from 'payload'

export const FooterGlobal: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  hooks: {
    beforeValidate: [
      ({ data }) => {
        if (data) {
          const sanitizeArrayIds = (arr: any[]) => {
            if (!Array.isArray(arr)) return arr
            return arr.map((item) => {
              if (item && typeof item === 'object') {
                if ('id' in item && typeof item.id !== 'string' && item.id !== undefined && item.id !== null) {
                  return { ...item, id: String(item.id) }
                }
              }
              return item
            })
          }
          if (Array.isArray(data.topLinks)) {
            data.topLinks = sanitizeArrayIds(data.topLinks)
          }
          if (Array.isArray(data.socialLinks)) {
            data.socialLinks = sanitizeArrayIds(data.socialLinks)
          }
          if (Array.isArray(data.bottomMenu)) {
            data.bottomMenu = sanitizeArrayIds(data.bottomMenu)
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
