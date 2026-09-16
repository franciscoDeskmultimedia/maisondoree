import React from 'react'
import type { Metadata } from 'next'
import {
  Caprasimo,
  Quintessential,
  Charis_SIL,
  Montserrat,
  Archivo_Narrow,
} from 'next/font/google'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { seed } from '@/payload/seed'
import './globals.css'

const caprasimo = Caprasimo({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const quintessential = Quintessential({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-script',
  display: 'swap',
})

const charisSIL = Charis_SIL({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const montserrat = Montserrat({
  weight: ['200', '300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const archivoNarrow = Archivo_Narrow({
  weight: ['600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-narrow',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Maison Dorée — Ecuadorian & French cream licor',
  description: 'Uniendo una tradición familiar desde 1862.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  let headerData = null
  let footerData = null

  try {
    const payload = await getPayload({ config: configPromise })

    const users = await payload.find({ collection: 'users' })
    if (users.docs.length === 0) {
      await seed()
    }

    headerData = await payload.findGlobal({ slug: 'header' })
    footerData = await payload.findGlobal({ slug: 'footer' })
  } catch (error) {
    console.error('Error fetching global layout data from Payload:', error)
  }

  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${caprasimo.variable} ${quintessential.variable} ${charisSIL.variable} ${montserrat.variable} ${archivoNarrow.variable}`}
    >
      <body suppressHydrationWarning className="antialiased min-h-screen flex flex-col bg-[#240403] text-white">
        <Header data={headerData ? (headerData as any) : undefined} />
        <main className="flex-grow">{children}</main>
        <Footer data={footerData ? (footerData as any) : undefined} />
      </body>
    </html>
  )
}
