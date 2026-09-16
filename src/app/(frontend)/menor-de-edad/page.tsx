import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { UnderageClientReset } from './UnderageClientReset'

export const revalidate = 0

export default async function MenorDeEdadPage() {
  let title = 'ACCESO RESTRINGIDO'
  let message =
    'Lo sentimos, debes ser mayor de 18 años para acceder y consumir nuestros productos. Maison Dorée promueve el consumo responsable de bebidas alcohólicas.'

  try {
    const payload = await getPayload({ config: configPromise })
    const siteSettings = await payload.findGlobal({ slug: 'site-settings' })
    if (siteSettings?.underageTitle) {
      title = siteSettings.underageTitle
    }
    if (siteSettings?.underageMessage) {
      message = siteSettings.underageMessage
    }
  } catch (err) {
    console.error('Error loading underage page settings:', err)
  }

  return (
    <div className="relative min-h-[75vh] flex items-center justify-center py-20 px-6 overflow-hidden bg-[#240403] text-center">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 bg-eagle-pattern opacity-25 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
        {/* Logo */}
        <div className="relative w-24 h-24 mb-6 opacity-90">
          <Image
            src="/images/logo.png"
            alt="Maison Dorée"
            fill
            sizes="96px"
            className="object-contain"
          />
        </div>

        <p className="font-script text-amber-200/90 text-sm sm:text-base tracking-[0.2em] uppercase mb-3">
          Maison Dorée Liqueurs
        </p>

        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-white font-normal leading-tight mb-6">
          {title}
        </h1>

        <div className="w-24 h-[1px] bg-white/30 mb-6" />

        <p className="font-serif text-base sm:text-lg text-white/85 leading-relaxed mb-10 max-w-lg">
          {message}
        </p>

        <UnderageClientReset />
      </div>
    </div>
  )
}
