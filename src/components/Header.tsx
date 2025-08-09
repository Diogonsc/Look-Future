
import { Link, useLocation } from "react-router-dom"
import { MobileMenu } from "./MobileMenu"
import { cn } from "../lib/utils"

interface HeaderProps {
  className?: string
}

export function Header({ className }: HeaderProps) {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  const navigationItems = [
    { href: "/", label: "Início" },
    { href: "/projetos", label: "Projetos" },
    { href: isHomePage ? "#servicos" : "/#servicos", label: "Serviços" },
    { href: isHomePage ? "#metodologia" : "/#metodologia", label: "Metodologia" },
    { href: isHomePage ? "#precos" : "/#precos", label: "Preços" },
    { href: isHomePage ? "#contato" : "/#contato", label: "Contato" },
  ]

  const scrollToSection = (href: string) => {
    if (href.startsWith('/#')) {
      // Navegar para home e depois scroll
      const sectionId = href.substring(1)
      setTimeout(() => {
        const element = document.querySelector(sectionId)
        if (element) {
          const headerHeight = 64
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
          const offsetPosition = elementPosition - headerHeight

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }, 100)
    } else if (href.startsWith('#')) {
      // Scroll na página atual
      const element = document.querySelector(href)
      if (element) {
        const headerHeight = 64
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - headerHeight

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }
  }

  const handleNavigation = (href: string) => {
    if (href === '/') {
      // Navegar para home
      return
    } else if (href === '/projetos') {
      // Navegar para projetos
      return
    } else {
      // Scroll para seção
      scrollToSection(href)
    }
  }

  return (
    <header className={cn("sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              to="/"
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">LF</span>
              </div>
              <span className="font-bold text-xl">Look Future</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => {
              if (item.href === '/' || item.href === '/projetos') {
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:text-primary"
                  >
                    {item.label}
                  </Link>
                )
              } else {
                return (
                  <button
                    key={item.href}
                    onClick={() => handleNavigation(item.href)}
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:text-primary"
                  >
                    {item.label}
                  </button>
                )
              }
            })}
          </nav>

          {/* Mobile Menu */}
          <MobileMenu navigationItems={navigationItems} />
        </div>
      </div>
    </header>
  )
}
