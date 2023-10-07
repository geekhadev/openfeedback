import Features from '@/components/Features'
import Hero from '@/components/Hero'
import Header from '@/components/Header'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'

export default function Home () {
  return (
    <main className="flex flex-col px-12">
      <Header />
      <Hero />
      <Features />
      <Projects />
      <Footer />
    </main>
  )
}
