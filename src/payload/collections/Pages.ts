import type { CollectionConfig } from 'payload'
import { HeroBlock } from '../blocks/HeroBlock'
import { SaboresBlock } from '../blocks/SaboresBlock'
import { SaintManichoBlock } from '../blocks/SaintManichoBlock'
import { HistoriaBlock } from '../blocks/HistoriaBlock'
import { DondeEncontrarnosBlock } from '../blocks/DondeEncontrarnosBlock'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data }) => {
        const slug = data?.slug
        const path = !slug || slug === 'home' || slug === 'index' ? '' : slug
        return `${process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'}/${path}`
      },
    },
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      defaultValue: 'home',
    },
    {
      name: 'layout',
      type: 'blocks',
      blocks: [
        HeroBlock,
        SaboresBlock,
        SaintManichoBlock,
        HistoriaBlock,
        DondeEncontrarnosBlock,
      ],
    },
  ],
}
