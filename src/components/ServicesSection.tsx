import { useState } from 'react'

interface Service {
  id: number
  title: string
  description: string
  icon: string
  color: string
}

const services: Service[] = [
  {
    id: 1,
    title: "Marketing Digital",
    description: "Estratégias completas de marketing digital para aumentar sua presença online e converter visitantes em clientes.",
    icon: "📈",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "Criação de Sites",
    description: "Sites modernos, responsivos e otimizados para conversão com foco em experiência do usuário.",
    icon: "💻",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    title: "Criação de Sistemas",
    description: "Sistemas personalizados e escaláveis para automatizar processos e otimizar operações.",
    icon: "⚙️",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 4,
    title: "UX/UI Design",
    description: "Design de interfaces intuitivas e experiências memoráveis que encantam seus usuários.",
    icon: "🎨",
    color: "from-orange-500 to-red-500"
  },
  {
    id: 5,
    title: "Gestão de Tráfego",
    description: "Otimização de campanhas publicitárias para maximizar ROI e alcançar o público certo.",
    icon: "🚀",
    color: "from-indigo-500 to-purple-500"
  },
  {
    id: 6,
    title: "Social Media",
    description: "Gestão completa de redes sociais com conteúdo estratégico e engajamento autêntico.",
    icon: "📱",
    color: "from-pink-500 to-rose-500"
  },
  {
    id: 7,
    title: "Metodologias",
    description: "Implementação de metodologias ágeis e frameworks para otimizar processos e resultados.",
    icon: "🎯",
    color: "from-teal-500 to-cyan-500"
  }
]

export function ServicesSection() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  return (
    <section id="servicos" className="relative py-20 bg-gradient-to-b from-background to-background/95 overflow-hidden">
      {/* Background com elementos espaciais */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-1/3 w-1 h-1 bg-primary/50 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/3 w-1.5 h-1.5 bg-primary/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-10 right-1/4 w-1 h-1 bg-primary/60 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header da seção */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções completas em marketing digital e tecnologia para impulsionar seu negócio
          </p>
        </div>

        {/* Grid de serviços */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative p-8 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 transform hover:scale-105"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Efeito de brilho no hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
              
              {/* Ícone com efeito 3D */}
              <div className="relative z-10 mb-6">
                <div className={`relative w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-3xl shadow-2xl group-hover:scale-110 transition-all duration-500 transform group-hover:translate-y-[-8px] group-hover:rotate-3`}
                     style={{
                       boxShadow: `0 8px 32px rgba(0, 0, 0, 0.3), 0 4px 16px ${service.color.split(' ')[1].replace('to-', '')}40`,
                       transform: hoveredService === service.id ? 'translateY(-8px) rotate(3deg) scale(1.1)' : 'translateY(0) rotate(0deg) scale(1)'
                     }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                  <span className="relative z-10 drop-shadow-lg">{service.icon}</span>
                  
                  {/* Sombra projetada */}
                  <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-gradient-to-r ${service.color} opacity-20 blur-md rounded-full transition-all duration-500`}
                       style={{
                         transform: hoveredService === service.id ? 'translateX(-50%) scale(1.2)' : 'translateX(-50%) scale(1)'
                       }}></div>
                </div>
              </div>

              {/* Conteúdo */}
              <div className="relative z-10 space-y-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 transform group-hover:translate-y-[-2px]">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed transform group-hover:translate-y-[-1px] transition-transform duration-300">
                  {service.description}
                </p>
                
                {/* Botão "Saiba mais" com efeito 3D */}
                <button className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors duration-300 group/btn transform group-hover:translate-y-[-2px] hover:scale-105">
                  Saiba mais
                  <svg 
                    className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Efeito de borda animada */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              {/* Sombra do card */}
              <div className={`absolute -bottom-4 left-4 right-4 h-8 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 blur-xl rounded-2xl transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:translate-y-[-2px]">
            Solicitar Orçamento
          </button>
        </div>
      </div>
    </section>
  )
}
