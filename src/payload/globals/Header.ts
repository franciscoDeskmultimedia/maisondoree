import type { GlobalConfig } from 'payload'

export const HeaderGlobal: GlobalConfig = {
  slug: 'header',
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
          if (Array.isArray(data.navLinksLeft)) {
            data.navLinksLeft = sanitizeArrayIds(data.navLinksLeft)
          }
          if (Array.isArray(data.navLinksRight)) {
            data.navLinksRight = sanitizeArrayIds(data.navLinksRight)
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
