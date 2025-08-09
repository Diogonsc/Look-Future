import './index.css'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { ServicesSection } from './components/ServicesSection'
import { MethodologySection } from './components/MethodologySection'
import { PricingSection } from './components/PricingSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import BackToTop from './components/BackToTop'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesSection />
      <MethodologySection />
      <PricingSection />
      <ContactSection />
      <BackToTop />
      <WhatsAppButton />
      <Footer />
    </div>
  )
}

export default App
