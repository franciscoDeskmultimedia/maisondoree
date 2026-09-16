import React from 'react'
import { HeroBlock } from './blocks/HeroBlock'
import { SaboresCarouselBlock } from './blocks/SaboresCarouselBlock'
import { SaintManichoBlock } from './blocks/SaintManichoBlock'
import { HistoriaBlock } from './blocks/HistoriaBlock'
import { DondeEncontrarnosBlock } from './blocks/DondeEncontrarnosBlock'

interface BlockData {
  blockType: string
  id?: string
  [key: string]: any
}

interface BlockRendererProps {
  blocks?: BlockData[]
}

export const BlockRenderer: React.FC<BlockRendererProps> = ({ blocks }) => {
  if (!blocks || blocks.length === 0) return null

  return (
    <>
      {blocks.map((block, index) => {
        switch (block.blockType) {
          case 'heroBlock':
            return <HeroBlock key={block.id || index} {...block} />
          case 'saboresBlock':
            return <SaboresCarouselBlock key={block.id || index} {...block} />
          case 'saintManichoBlock':
            return <SaintManichoBlock key={block.id || index} {...block} />
          case 'historiaBlock':
            return <HistoriaBlock key={block.id || index} {...block} />
          case 'dondeEncontrarnosBlock':
            return <DondeEncontrarnosBlock key={block.id || index} {...block} />
          default:
            return null
        }
      })}
    </>
  )
}
