import type { CollectionConfig } from 'payload'

export const Flavors: CollectionConfig = {
  slug: 'flavors',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'order', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: {
        description: 'Order in which flavors appear in the carousel (ascending)',
      },
    },
    {
      name: 'bottle750',
      label: 'Image 750ml (Upload from Media Library)',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'bottle750Url',
      label: 'Image 750ml URL (Fallback)',
      type: 'text',
      defaultValue: '/images/bottle-brise.png',
      admin: {
        description: 'Optional fallback URL if no media file is selected above.',
      },
    },
    {
      name: 'bottle375',
      label: 'Image 375ml (Upload from Media Library)',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'bottle375Url',
      label: 'Image 375ml URL (Fallback)',
      type: 'text',
      defaultValue: '/images/ticket-brise.png',
      admin: {
        description: 'Optional fallback URL if no media file is selected above.',
      },
    },
    {
      name: 'bottle160',
      label: 'Image 160ml (Upload from Media Library)',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'bottle160Url',
      label: 'Image 160ml URL (Fallback)',
      type: 'text',
      defaultValue: '/images/mini-brise.png',
      admin: {
        description: 'Optional fallback URL if no media file is selected above.',
      },
    },
  ],
}
