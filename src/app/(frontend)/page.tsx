import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { PageClient } from '@/components/PageClient'
import { seed } from '@/payload/seed'

export const revalidate = 0

const defaultBlocks = [
  {
    blockType: 'heroBlock',
    title: 'El secreto más dulce\nse sirve con hielo.',
    subtitle: 'Prueba sus diferentes sabores.',
    ctaLabel: 'COMPRA AHORA',
    ctaUrl: 'https://wa.me/593985504731',
    videoSrc: '/video/hero.mp4',
    posterUrl: '/images/hero.png',
  },
  {
    blockType: 'saboresBlock',
    eyebrow: 'DESCUBRE LOS SABORES',
    autoPlayMs: 2000,
  },
  {
    blockType: 'saintManichoBlock',
    imagePath: '/images/saint-manicho.jpg',
    altText: 'Prueba el nuevo sabor Saint Manicho',
  },
  {
    blockType: 'historiaBlock',
    wordmarkImage: '/images/wordmark.png',
    scriptText: 'Ecuadorian & French cream licor',
    paragraph1:
      'En el año 2025, durante unas vacaciones en la costa ecuatoriana, compartí mi receta familiar de rompope manabita con unos amigos franceses, quienes insistieron en que más personas debían probarla. Inspirado por su motivación, decidí fundar la marca de licores crema de mayor calidad en el mercado ecuatoriano.',
    paragraph2:
      'Así nació Maison Dorée.\nUniendo una tradición familiar',
    sinceText: 'desde 1862.',
    signText: '- Douglas Pazmiño, Fundador.',
    mediaImage: '/images/manabi.jpg',
  },
  {
    blockType: 'dondeEncontrarnosBlock',
    title: 'DONDE\nENCONTRANOS',
    places: [
      { city: 'QUEVEDO', logo1: 'LOGO 1', logo2: 'LOGO 2' },
      { city: 'GYE', logo1: 'LOGO 1', logo2: 'LOGO 2' },
      { city: 'SANTELENA', logo1: 'LOGO 1', logo2: 'LOGO 2' },
      { city: 'MANTA', logo1: 'LOGO 1', logo2: 'LOGO 2' },
      { city: 'QUEVEDO', logo1: 'LOGO 1', logo2: 'LOGO 2' },
    ],
  },
  {
    blockType: 'contactoBlock',
    eyebrow: 'TRABAJEMOS JUNTOS',
    title: '¿QUIERES VENDER\nNUESTROS PRODUCTOS?',
    sub: 'Déjanos tus datos y nos pondremos en contacto contigo.',
    formAction: 'https://formsubmit.co/maisondoreeliqueur@gmail.com',
    subject: 'Nuevo interesado en distribuir Maison Dorée',
    submitText: 'ENVIAR',
  },
]

export default async function HomePage() {
  let homePage = null
  let flavorsList: any[] = []

  try {
    const payload = await getPayload({ config: configPromise })
    const pages = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: 'home',
        },
      },
    })

    if (
      pages.docs.length > 0 &&
      pages.docs[0].layout &&
      Array.isArray(pages.docs[0].layout) &&
      pages.docs[0].layout.length > 0
    ) {
      homePage = pages.docs[0]
    } else {
      await seed()
      const reFetched = await payload.find({
        collection: 'pages',
        where: {
          slug: {
            equals: 'home',
          },
        },
      })
      if (reFetched.docs.length > 0) {
        homePage = reFetched.docs[0]
      }
    }

    const flavorsResult = await payload.find({
      collection: 'flavors',
      sort: 'order',
      limit: 100,
      depth: 2,
    })
    if (flavorsResult.docs && flavorsResult.docs.length > 0) {
      flavorsList = flavorsResult.docs
    }
  } catch (err) {
    console.error('Failed to fetch home page data:', err)
  }

  return <PageClient page={homePage} defaultBlocks={defaultBlocks} flavors={flavorsList} />
}
