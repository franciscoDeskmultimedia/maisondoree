import type { GlobalConfig } from 'payload'

export const FooterGlobal: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
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
