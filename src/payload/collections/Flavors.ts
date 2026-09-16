import type { CollectionConfig } from 'payload'

export const Flavors: CollectionConfig = {
  slug: 'flavors',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'order'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
    },
    {
      name: 'bottle750',
      type: 'text',
      label: 'Image 750ml (URL or relative path)',
      defaultValue: '/images/bottle-brise.png',
    },
    {
      name: 'bottle375',
      type: 'text',
      label: 'Image 375ml (URL or relative path)',
      defaultValue: '/images/ticket-brise.png',
    },
    {
      name: 'bottle160',
      type: 'text',
      label: 'Image 160ml (URL or relative path)',
      defaultValue: '/images/mini-brise.png',
    },
  ],
}
