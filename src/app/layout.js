import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'OpenFeedback',
  description: 'Potencia tu carrera como programador en OpenFeedback: Sube tus proyectos y construye un portafolio destacado. Obtén valiosas opiniones de la comunidad y acelera tu crecimiento profesional.'
}

export default function RootLayout ({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
