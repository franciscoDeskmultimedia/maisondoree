import { buildConfig } from 'payload'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './src/payload/collections/Users'
import { Media } from './src/payload/collections/Media'
import { Flavors } from './src/payload/collections/Flavors'
import { Pages } from './src/payload/collections/Pages'
import { HeaderGlobal } from './src/payload/globals/Header'
import { FooterGlobal } from './src/payload/globals/Footer'
import { SiteSettingsGlobal } from './src/payload/globals/SiteSettings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: '— Maison Dorée Admin',
      favicon: '/favicon.ico',
      icons: [
        {
          rel: 'icon',
          type: 'image/png',
          url: '/images/logo.png',
        },
      ],
    },
    importMap: {
      baseDir: path.resolve(dirname, 'src/app/(payload)/admin'),
    },
    livePreview: {
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  collections: [Users, Media, Flavors, Pages],
  globals: [HeaderGlobal, FooterGlobal, SiteSettingsGlobal],
  editor: lexicalEditor({}),
  sharp,
  secret: process.env.PAYLOAD_SECRET || '8f7b2c9e1a3d4f5b6c7d8e9f0a1b2c3d',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || 'file:./payload.db',
    },
  }),
})
