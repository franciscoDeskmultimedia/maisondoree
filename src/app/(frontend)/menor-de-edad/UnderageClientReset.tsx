'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

export const UnderageClientReset: React.FC = () => {
  const router = useRouter()

  const handleRetry = () => {
    localStorage.removeItem('maison_doree_age_verified')
    router.push('/')
  }

  return (
    <button
      type="button"
      onClick={handleRetry}
      className="btn-outline font-script text-base sm:text-lg px-10 py-3 rounded-full cursor-pointer bg-white/10 hover:bg-white/20 border-white/80 text-white transition-all duration-200 active:scale-95"
    >
      VOLVER A VERIFICAR
    </button>
  )
}
