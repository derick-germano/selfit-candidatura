import Aprensetacao from '@/components/Aprensetacao'
import Conhecimentos from '@/components/Conhecimentos'
import Experiencia from '@/components/Experiencia'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

import React from 'react'

export default function page() {
  return (
    <div>
      <Header />
      <Aprensetacao />
      <Conhecimentos />
      <Experiencia />
      <Footer />
    </div>
  )
}
