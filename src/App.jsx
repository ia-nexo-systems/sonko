import { useState, useEffect } from 'react'
import NavBar from './components/sonko/NavBar'
import HeroSection from './components/sonko/HeroSection'
import ProblemasSection from './components/sonko/ProblemasSection'
import SonkoSection from './components/sonko/SonkoSection'
import ServiciosSection from './components/sonko/ServiciosSection'
import UbicacionSection from './components/sonko/UbicacionSection'
import ComoFuncionaSection from './components/sonko/ComoFuncionaSection'
import TestimoniosSection from './components/sonko/TestimoniosSection'
import FAQSection from './components/sonko/FAQSection'
import ContactoSection from './components/sonko/ContactoSection'
import AvisoLegalSection from './components/sonko/AvisoLegalSection'
import FooterSection from './components/sonko/FooterSection'
import PoliticaPrivacidadSection from './components/sonko/PoliticaPrivacidadSection'

function useRoute() {
  const [path, setPath] = useState(window.location.pathname)
  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname)
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])
  return path
}

export default function App() {
  const path = useRoute()

  if (path === '/privacidad') {
    return (
      <>
        <NavBar />
        <main>
          <PoliticaPrivacidadSection />
        </main>
        <FooterSection />
      </>
    )
  }

  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <ProblemasSection />
        <SonkoSection />
        <ServiciosSection />
        <UbicacionSection />
        <ComoFuncionaSection />
        <TestimoniosSection />
        <FAQSection />
        <ContactoSection />
        <AvisoLegalSection />
      </main>
      <FooterSection />
    </>
  )
}
