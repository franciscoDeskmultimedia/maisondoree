# Vercel Deployment & Migration Guide - Maison Dorée

This document outlines the step-by-step process required to deploy the **Maison Dorée** Next.js & Payload CMS 3.0 project to **Vercel**.

---

## Overview

In local development, the application runs on a local **SQLite** database (`payload.db`) and saves media files to local disk (`public/media`).

Because Vercel runs on a serverless infrastructure with ephemeral disk storage, moving to production on Vercel requires two main changes:
1. **Database Migration**: Switch from `@payloadcms/db-sqlite` to **PostgreSQL** (Vercel Postgres or Neon DB).
2. **Media Storage Migration**: Use **Vercel Blob** or **S3 Storage** for image uploads.

---

## Step-by-Step Migration Guide

### 1. Install Production Database & Storage Adapters

Install the Payload Postgres adapter and Vercel Blob storage adapter:

```bash
npm install @payloadcms/db-postgres @payloadcms/storage-vercel-blob
```

---

### 2. Update `payload.config.ts`

Modify `payload.config.ts` to switch database and media storage dynamically based on environment variables:

```typescript
import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import path from 'path'
import { fileURLToPath } from 'url'

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
  },
  collections: [Users, Media, Flavors, Pages],
  globals: [HeaderGlobal, FooterGlobal],
  secret: process.env.PAYLOAD_SECRET!,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URL || process.env.DATABASE_URI!,
    },
  }),
  plugins: [
    vercelBlobStorage({
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN!,
    }),
  ],
})
```

---

### 3. Provision Resources on Vercel

1. **Connect Vercel Project**:
   Push your repository to GitHub/GitLab/Bitbucket and import the repository into your Vercel Dashboard.

2. **Add Vercel Postgres / Neon**:
   - In the Vercel Dashboard, navigate to **Storage** -> **Create Database** -> **Postgres** (or Neon).
   - Click **Connect** to associate it with your Vercel project. This will automatically populate environment variables like `POSTGRES_URL`.

3. **Add Vercel Blob Storage**:
   - In Vercel Dashboard, go to **Storage** -> **Create Database** -> **Blob**.
   - Connect it to your project to automatically set `BLOB_READ_WRITE_TOKEN`.

---

### 4. Configure Production Environment Variables

In your Vercel Project Settings under **Environment Variables**, set the following:

| Variable Name | Value Description | Example |
| :--- | :--- | :--- |
| `PAYLOAD_SECRET` | A secure 32+ character secret key | `8f7b2c9e1a3d4f5b6c7d8e9f0a1b2c3d` |
| `POSTGRES_URL` | Vercel Postgres connection string | Auto-added by Vercel Storage |
| `BLOB_READ_WRITE_TOKEN` | Vercel Blob access token | Auto-added by Vercel Storage |
| `NEXT_PUBLIC_SERVER_URL` | Your production custom domain or Vercel URL | `https://maison-doree.vercel.app` |

---

### 5. Deploy to Production

Run the Vercel CLI deployment command or push to `main` branch:

```bash
# Option 1: Vercel CLI
npx vercel --prod

# Option 2: Git Push
git add .
git commit -m "Deploy to production"
git push origin main
```

After deployment, visit `https://your-domain.vercel.app/admin` to log into your production Payload CMS Admin panel!
