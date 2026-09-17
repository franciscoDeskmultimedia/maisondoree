'use client'

import React from 'react'
import { useLivePreview } from '@payloadcms/live-preview-react'
import { BlockRenderer } from './BlockRenderer'

interface PageClientProps {
  page?: any
  defaultBlocks?: any[]
}

export const PageClient: React.FC<PageClientProps> = ({ page, defaultBlocks = [] }) => {
  const serverURL =
    typeof window !== 'undefined'
      ? window.location.origin
      : process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

  const { data } = useLivePreview({
    initialData: page,
    serverURL,
    depth: 2,
  })

  const layout =
    data?.layout && Array.isArray(data.layout) && data.layout.length > 0
      ? data.layout
      : page?.layout && Array.isArray(page.layout) && page.layout.length > 0
      ? page.layout
      : defaultBlocks

  return <BlockRenderer blocks={layout as any} />
}
