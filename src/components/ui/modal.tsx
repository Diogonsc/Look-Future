import { useEffect } from 'react'
import { X } from 'lucide-react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  icon?: string
  color?: string
}

export function Modal({ isOpen, onClose, title, children, icon, color = "from-primary to-primary/80" }: ModalProps) {
  // Fechar modal com ESC
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEsc)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full h-full md:w-11/12 md:h-5/6 lg:w-4/5 lg:h-4/5 bg-background rounded-none md:rounded-2xl shadow-2xl border border-border/50 overflow-hidden animate-in fade-in-0 zoom-in-95 duration-300">
        {/* Header */}
        <div className="relative p-6 border-b border-border/50 bg-gradient-to-r from-background to-background/95">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {icon && (
                <div className={`w-12 h-12 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center text-2xl shadow-lg`}>
                  {icon}
                </div>
              )}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h2>
              </div>
            </div>
            
            {/* Botão fechar */}
            <button
              onClick={onClose}
              className="p-2 hover:bg-muted rounded-lg transition-colors duration-200 group"
            >
              <X className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors duration-200" />
            </button>
          </div>
        </div>

        {/* Conteúdo */}
        <div className="h-full overflow-y-auto p-6">
          {children}
        </div>
      </div>
    </div>
  )
}
