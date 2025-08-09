import { HeroSection } from '../components/HeroSection'
import { ServicesSection } from '../components/ServicesSection'
import { ProjectsSection } from '../components/ProjectsSection'
import { MethodologySection } from '../components/MethodologySection'
import { PricingSection } from '../components/PricingSection'
import { ContactSection } from '../components/ContactSection'
import { Footer } from '../components/Footer'
import BackToTop from '../components/BackToTop'
import WhatsAppButton from '../components/WhatsAppButton'
import { useScrollToSection } from '../hooks/useScrollToSection'

export function HomePage() {
  useScrollToSection()

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <MethodologySection />
      <PricingSection />
      <ContactSection />
      <BackToTop />
      <WhatsAppButton />
      <Footer />
    </div>
  )
}
