import React from 'react'
import { getPayload } from 'payload'
import { notFound } from 'next/navigation'
import configPromise from '@payload-config'
import { PageClient } from '@/components/PageClient'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export const revalidate = 0

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params
  const payload = await getPayload({ config: configPromise })

  try {
    const pages = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: slug,
        },
      },
    })

    if (!pages.docs || pages.docs.length === 0) {
      notFound()
    }

    const page = pages.docs[0]
    return <PageClient page={page} />
  } catch (err) {
    console.error(`Error fetching page for slug ${slug}:`, err)
    notFound()
  }
}
