'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface LinkItem {
  label: string
  url: string
}

interface SocialItem {
  platform: string
  url: string
}

interface FooterProps {
  data?: {
    logoPath?: string
    topLinks?: LinkItem[]
    socialLinks?: SocialItem[]
    bottomMenu?: LinkItem[]
    copyrightText?: string
    designedByText?: string
  }
}

export const Footer: React.FC<FooterProps> = ({ data }) => {
  const logoPath = data?.logoPath || '/images/logo.png'
  const topLinks = data?.topLinks || [
    { label: 'Nuestra Historia', url: '#historia' },
    { label: 'CONTACTANOS', url: '#contacto' },
  ]
  const socialLinks = data?.socialLinks || [
    { platform: 'facebook', url: '#' },
    { platform: 'instagram', url: '#' },
    { platform: 'tiktok', url: '#' },
    { platform: 'whatsapp', url: '#' },
  ]
  const bottomMenu = data?.bottomMenu || [
    { label: 'PRODUCTO', url: '#productos' },
    { label: 'HISTORIA', url: '#historia' },
    { label: 'FAMILIA MD', url: '#historia' },
    { label: 'DONDE ENCONTRARNOS', url: '#donde' },
  ]
  const copyrightText =
    data?.copyrightText !== undefined
      ? data.copyrightText
      : 'Copyright © 2026 MAISON DORÉE LIQUEUR. All Rights Reserved'
  const designedByText =
    data?.designedByText !== undefined ? data.designedByText : 'Designed By PILOW.'

  const renderSocialIcon = (platform: string) => {
    switch (platform) {
      case 'facebook':
        return (
          <svg className="w-14 h-14 fill-white" viewBox="0 0 24 24">
            <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H17V3.6c-.29-.04-1.3-.13-2.47-.13-2.44 0-4.11 1.49-4.11 4.23v2.36H7.7V13h2.72v8z" />
          </svg>
        )
      case 'whatsapp':
        return (
          <svg className="w-14 h-14 fill-white" viewBox="0 0 24 24">
            <path d="M12 2a9.9 9.9 0 00-8.5 15L2 22l5.2-1.4A10 10 0 1012 2m0 1.8a8.2 8.2 0 016.6 13L18 20l-3.3-.9-.4.2A8.2 8.2 0 1112 3.8m-3.1 4c-.15 0-.4.06-.6.28-.2.22-.8.78-.8 1.9s.82 2.2.93 2.35c.11.15 1.6 2.55 4 3.47 2 .77 2.4.62 2.83.58.43-.04 1.4-.57 1.6-1.13.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.46-.28-.24-.12-1.4-.7-1.62-.78-.22-.08-.38-.12-.54.12s-.62.78-.76.94c-.14.16-.28.18-.52.06a6.5 6.5 0 01-1.9-1.18 7.2 7.2 0 01-1.33-1.65c-.14-.24 0-.36.1-.48.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.53-1.3-.74-1.78-.18-.42-.37-.42-.53-.43z" />
          </svg>
        )
      case 'tiktok':
        return (
          <svg className="w-14 h-14 fill-white" viewBox="0 0 24 24">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29.04.59.08.88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
          </svg>
        )
      case 'instagram':
      default:
        return (
          <svg className="w-14 h-14 fill-white" viewBox="0 0 24 24">
            <path d="M12 2.9c3 0 3.3 0 4.5.07 1.08.05 1.67.23 2.06.38.52.2.9.44 1.29.83.4.4.64.77.84 1.29.15.39.33.98.38 2.06.06 1.2.07 1.5.07 4.47s0 3.27-.07 4.47c-.05 1.08-.23 1.67-.38 2.06a3.5 3.5 0 01-.84 1.29c-.4.4-.77.64-1.29.84-.39.15-.98.33-2.06.38-1.2.06-1.5.07-4.5.07s-3.3 0-4.5-.07c-1.08-.05-1.67-.23-2.06-.38a3.5 3.5 0 01-1.29-.84 3.5 3.5 0 01-.84-1.29c-.15-.39-.33-.98-.38-2.06C2.91 15.27 2.9 14.97 2.9 12s0-3.27.07-4.47c.05-1.08.23-1.67.38-2.06.2-.52.44-.9.84-1.29.4-.4.77-.63 1.29-.83.39-.15.98-.33 2.06-.38C8.74 2.91 9.04 2.9 12 2.9m0-1.9c-3.06 0-3.44.01-4.65.07-1.2.06-2.02.25-2.73.53a5.4 5.4 0 00-1.98 1.29A5.4 5.4 0 001.35 4.6c-.28.71-.47 1.53-.53 2.73C.76 8.56.75 8.94.75 12s.01 3.44.07 4.65c.06 1.2.25 2.02.53 2.73.28.75.68 1.4 1.29 1.98.58.61 1.23 1.01 1.98 1.29.71.28 1.53.47 2.73.53 1.21.06 1.59.07 4.65.07s3.44-.01 4.65-.07c1.2-.06 2.02-.25 2.73-.53a5.6 5.6 0 001.98-1.29 5.6 5.6 0 001.29-1.98c.28-.71.47-1.53.53-2.73.06-1.21.07-1.59.07-4.65s-.01-3.44-.07-4.65c-.06-1.2-.25-2.02-.53-2.73a5.6 5.6 0 00-1.29-1.98A5.6 5.6 0 0019.4 1.6c-.71-.28-1.53-.47-2.73-.53C15.46 1.01 15.08 1 12 1z" />
            <path d="M12 6.35A5.65 5.65 0 1017.65 12 5.65 5.65 0 0012 6.35m0 9.32A3.67 3.67 0 1115.67 12 3.67 3.67 0 0112 15.67m7.2-9.54a1.32 1.32 0 11-1.32-1.32 1.32 1.32 0 011.32 1.32z" />
          </svg>
        )
    }
  }

  return (
    <footer id="contacto" className="relative bg-[#240403] pt-12 md:pt-16 overflow-hidden">
      {/* Pattern background overlay */}
      <div className="absolute inset-0 bg-eagle-pattern opacity-40 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center gap-6 px-6 pb-8 md:pb-12 max-w-[1320px] mx-auto text-center">
        <div className="relative h-[96px] md:h-[140px] w-48 md:w-72">
          <Image
            src={logoPath}
            alt="Maison Dorée Logo"
            fill
            sizes="(max-width: 768px) 192px, 288px"
            className="object-contain"
          />
        </div>

        <div className="flex items-center gap-8 md:gap-16">
          {topLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.url}
              className="font-script text-lg md:text-2xl text-white hover:text-amber-200 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6">
          {socialLinks.map((item, idx) => (
            <a
              key={idx}
              href={item.url}
              aria-label={item.platform}
              className="w-18 h-18 grid place-items-center  rounded-full  transition-all"
            >
              {renderSocialIcon(item.platform)}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Footer Navigation */}
      <div className="relative z-10 border-t border-white/20">
        {/* <nav className="max-w-[1320px] mx-auto flex flex-wrap justify-between items-center gap-4 px-6 py-6 md:py-8 text-center text-white/90">
          {bottomMenu.map((link, idx) => (
            <Link
              key={idx}
              href={link.url}
              className="font-narrow font-bold italic tracking-wide text-xs md:text-sm uppercase hover:text-amber-200 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav> */}

        {copyrightText && (
          <p className="text-white text-center mb-3 mt-5">{copyrightText}</p>
        )}
        {designedByText && (
          <p className="text-white text-center">{designedByText}</p>
        )}
      </div>
    </footer>
  )
}
