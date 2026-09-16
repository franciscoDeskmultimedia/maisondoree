'use client'

import React from 'react'
import Image from 'next/image'

interface SaintManichoBlockProps {
  imagePath?: string
  altText?: string
}

export const SaintManichoBlock: React.FC<SaintManichoBlockProps> = ({
  imagePath = '/images/saint-manicho.jpg',
  altText = 'Prueba el nuevo sabor Saint Manicho',
}) => {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden bg-[#240403]">
      <div className="w-full h-full min-h-[300px] md:min-h-[450px] relative">
        <Image
          src={imagePath}
          alt={altText}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
      <div className="w-full h-full min-h-[300px] md:min-h-[450px] relative">
        <Image
          src={imagePath}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    </section>
  )
}
