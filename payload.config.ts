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

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname, 'src/app/(payload)/admin'),
    },
  },
  collections: [Users, Media, Flavors, Pages],
  globals: [HeaderGlobal, FooterGlobal],
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
