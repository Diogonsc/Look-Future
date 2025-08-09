import React from "react"
import { Home, Info, Settings, Mail, FolderOpen } from "lucide-react"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { cn } from "../lib/utils"
import { Link } from "react-router-dom"

interface NavigationItem {
  href: string
  label: string
}

interface MobileMenuProps {
  className?: string
  navigationItems: NavigationItem[]
}

export function MobileMenu({ className, navigationItems }: MobileMenuProps) {
  const [isOpen, setIsOpen] = React.useState(false)

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
    
    // Fecha o menu mobile após clicar
    setIsOpen(false)
  }

  const handleNavigation = (href: string) => {
    if (href === '/' || href === '/projetos') {
      // Navegação entre páginas
      return
    } else {
      // Scroll para seção
      scrollToSection(href)
    }
  }

  const getIconForSection = (href: string) => {
    switch (href) {
      case '/':
        return Home
      case '/projetos':
        return FolderOpen
      case '#servicos':
        return Settings
      case '#metodologia':
        return Info
      case '#precos':
        return Settings
      case '#contato':
        return Mail
      default:
        return Home
    }
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className={cn("md:hidden", className)}>
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <span className="sr-only">Abrir menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <Link 
              to="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">LF</span>
              </div>
              <span className="font-bold text-lg">Look Future</span>
            </Link>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-6">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Navegação
              </h3>
              <nav className="space-y-2">
                {navigationItems.map((item) => {
                  const Icon = getIconForSection(item.href)
                  
                  if (item.href === '/' || item.href === '/projetos') {
                    return (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-accent w-full text-left"
                      >
                        <Icon className="h-4 w-4" />
                        <span>{item.label}</span>
                      </Link>
                    )
                  } else {
                    return (
                      <button
                        key={item.href}
                        onClick={() => handleNavigation(item.href)}
                        className="flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-accent w-full text-left"
                      >
                        <Icon className="h-4 w-4" />
                        <span>{item.label}</span>
                      </button>
                    )
                  }
                })}
              </nav>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t p-6">
            <Button className="w-full mb-3 text-white">
              Entrar
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              © 2024 Look Future. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
