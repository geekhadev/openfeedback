import Features from '@/components/Features'
import Hero from '@/components/Hero'
import Header from '@/components/Header'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'

import React from 'react'

export default function Home () {
  return (
    <main className="flex flex-col">
      <div className="bg-[url('/images/bg.png')] bg-cover relative h-screen">
        <div className="absolute bg-gradient-to-r to-gray-900 from-black opacity-80 w-full h-full z-0"></div>
        <div className="container m-auto z-10 relative h-full flex flex-col max-w-4xl">
          <Header />
          <Hero />
        </div>
      </div>
      <div className='container m-auto max-w-4xl'>
        <Features />
        <Projects />
        <Footer />
      </div>
    </main>
  )
}
