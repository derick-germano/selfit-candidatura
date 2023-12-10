import Aprensetacao from '@/components/Aprensetacao'
import Conhecimentos from '@/components/Conhecimentos'
import Experiencia from '@/components/Experiencia'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function Home() {
  return (
    <main>
      <Header />
      <Aprensetacao />
      <Conhecimentos />
      <Experiencia />
      <Footer />
    </main>
  )
}
