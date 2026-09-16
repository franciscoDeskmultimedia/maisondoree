import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function seed() {
  const payload = await getPayload({ config: configPromise })

  console.log('Seeding Payload CMS data...')

  // 1. Seed Admin User (admin/admin)
  const existingUsers = await payload.find({
    collection: 'users',
    where: {
      email: {
        equals: 'admin@maisondoree.com',
      },
    },
  })

  if (existingUsers.docs.length === 0) {
    try {
      await payload.create({
        collection: 'users',
        data: {
          email: 'admin@maisondoree.com',
          password: 'admin',
          name: 'Admin User',
        },
      })
      console.log('Created admin user: admin@maisondoree.com / admin')
    } catch {
      // User created in concurrent request
    }
  }

  // 2. Seed Header Global
  await payload.updateGlobal({
    slug: 'header',
    data: {
      logoPath: '/images/wordmark.png',
      subtitle: 'Ecuadorian & French cream licor',
      navLinksLeft: [
        { label: 'PRODUCTO', url: '#productos' },
        { label: 'HISTORIA', url: '#historia' },
      ],
      navLinksRight: [
        { label: 'DONDE ENCONTRARNOS', url: '#donde' },
        { label: 'CONTACTANOS', url: '#contacto' },
      ],
    },
  })

  // 3. Seed Footer Global
  await payload.updateGlobal({
    slug: 'footer',
    data: {
      logoPath: '/images/logo.png',
      topLinks: [
        { label: 'Nuestra Historia', url: '#historia' },
        { label: 'CONTACTANOS', url: '#contacto' },
      ],
      socialLinks: [
        { platform: 'facebook', url: '#' },
        { platform: 'whatsapp', url: '#' },
        { platform: 'instagram', url: '#' },
      ],
      bottomMenu: [
        { label: 'PRODUCTO', url: '#productos' },
        { label: 'HISTORIA', url: '#historia' },
        { label: 'FAMILIA MD', url: '#historia' },
        { label: 'DONDE ENCONTRARNOS', url: '#donde' },
      ],
    },
  })

  // 4. Seed Flavors
  const flavorsData = [
    {
      name: 'BRISE MENTHOLÉE',
      order: 1,
      bottle750: '/images/bottle-brise.png',
      bottle375: '/images/ticket-brise.png',
      bottle160: '/images/mini-brise.png',
    },
    {
      name: 'CRÉME CAPPUCCINO',
      order: 2,
      bottle750: '/images/bottle-creme.png',
      bottle375: '/images/ticket-creme.png',
      bottle160: '/images/mini-creme.png',
    },
    {
      name: 'VANILLE CLASSIQUE',
      order: 3,
      bottle750: '/images/bottle-vanille.png',
      bottle375: '/images/ticket-vanille.png',
      bottle160: '/images/mini-vanille.png',
    },
    {
      name: 'NUIT DE CACAO',
      order: 4,
      bottle750: '/images/bottle-cacao.png',
      bottle375: '/images/ticket-cacao.png',
      bottle160: '/images/mini-cacao.png',
    },
  ]

  for (const flavor of flavorsData) {
    const existing = await payload.find({
      collection: 'flavors',
      where: {
        name: {
          equals: flavor.name,
        },
      },
    })
    if (existing.docs.length === 0) {
      await payload.create({
        collection: 'flavors',
        data: flavor,
      })
    }
  }

  // 5. Seed Home Page
  const existingPages = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: 'home',
      },
    },
  })

  const defaultHomeLayout: any[] = [
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
  ]

  if (existingPages.docs.length === 0) {
    await payload.create({
      collection: 'pages',
      data: {
        title: 'Maison Dorée — Home',
        slug: 'home',
        layout: defaultHomeLayout,
      },
    })
    console.log('Seeded Home Page with blocks!')
  } else if (!existingPages.docs[0].layout || (existingPages.docs[0].layout as any[]).length === 0) {
    await payload.update({
      collection: 'pages',
      id: existingPages.docs[0].id,
      data: {
        layout: defaultHomeLayout,
      },
    })
    console.log('Updated Home Page layout with default blocks!')
  }

  console.log('Seeding completed successfully!')
}
