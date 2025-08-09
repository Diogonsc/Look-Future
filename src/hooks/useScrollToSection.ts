import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function useScrollToSection() {
  const location = useLocation()

  useEffect(() => {
    // Verifica se há um hash na URL (ex: /#servicos)
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        // Aguarda um pouco para garantir que a página carregou
        setTimeout(() => {
          const headerHeight = 64
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
          const offsetPosition = elementPosition - headerHeight

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }, 100)
      }
    }
  }, [location.hash])
}
