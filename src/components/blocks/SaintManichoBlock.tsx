'use client'

import React from 'react'
import { TwoColBlock, TwoColBlockProps } from './TwoColBlock'

export type SaintManichoBlockProps = TwoColBlockProps

export const SaintManichoBlock: React.FC<SaintManichoBlockProps> = (props) => {
  return <TwoColBlock {...props} />
}

export { TwoColBlock }
