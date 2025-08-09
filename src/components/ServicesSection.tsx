import { useState } from 'react'
import { Modal } from './ui/modal'
import { Button } from './ui/button'

interface Service {
  id: number
  title: string
  description: string
  icon: string
  color: string
  fullDescription: string
  features: string[]
  benefits: string[]
}

const services: Service[] = [
  {
    id: 1,
    title: "Marketing Digital",
    description: "Estratégias completas de marketing digital para aumentar sua presença online e converter visitantes em clientes.",
    icon: "📈",
    color: "from-blue-500 to-cyan-500",
    fullDescription: "Nossa abordagem de Marketing Digital é baseada em estratégias data-driven que combinam criatividade e análise para maximizar o retorno sobre investimento. Trabalhamos com uma metodologia completa que vai desde a análise de mercado até a otimização contínua das campanhas.",
    features: [
      "Estratégia de marketing personalizada",
      "SEO e otimização para mecanismos de busca",
      "Marketing de conteúdo e inbound",
      "Email marketing e automação",
      "Analytics e relatórios detalhados",
      "Otimização contínua de campanhas"
    ],
    benefits: [
      "Aumento significativo no tráfego orgânico",
      "Maior conversão de leads qualificados",
      "Redução no custo de aquisição de clientes",
      "Visibilidade aprimorada da marca",
      "Resultados mensuráveis e transparentes"
    ]
  },
  {
    id: 2,
    title: "Criação de Sites",
    description: "Sites modernos, responsivos e otimizados para conversão com foco em experiência do usuário.",
    icon: "💻",
    color: "from-purple-500 to-pink-500",
    fullDescription: "Desenvolvemos sites que não apenas impressionam visualmente, mas também convertem visitantes em clientes. Nossa abordagem combina design moderno, performance otimizada e estratégias de conversão para criar experiências digitais memoráveis.",
    features: [
      "Design responsivo e moderno",
      "Otimização para velocidade e performance",
      "SEO técnico integrado",
      "Sistemas de gestão de conteúdo",
      "Integração com ferramentas de marketing",
      "Suporte e manutenção contínua"
    ],
    benefits: [
      "Sites que carregam em menos de 3 segundos",
      "Experiência otimizada em todos os dispositivos",
      "Maior posicionamento nos mecanismos de busca",
      "Facilidade de gestão de conteúdo",
      "Conversões otimizadas e mensuráveis"
    ]
  },
  {
    id: 3,
    title: "Criação de Sistemas",
    description: "Sistemas personalizados e escaláveis para automatizar processos e otimizar operações.",
    icon: "⚙️",
    color: "from-green-500 to-emerald-500",
    fullDescription: "Criamos sistemas sob medida que automatizam processos, reduzem custos operacionais e aumentam a eficiência do seu negócio. Nossa equipe especializada desenvolve soluções escaláveis que crescem junto com sua empresa.",
    features: [
      "Análise e mapeamento de processos",
      "Desenvolvimento de sistemas personalizados",
      "Integração com sistemas existentes",
      "APIs e webhooks",
      "Dashboards e relatórios em tempo real",
      "Treinamento e documentação completa"
    ],
    benefits: [
      "Redução de até 70% em processos manuais",
      "Aumento na produtividade da equipe",
      "Dados centralizados e acessíveis",
      "Escalabilidade para crescimento futuro",
      "ROI mensurável em curto prazo"
    ]
  },
  {
    id: 4,
    title: "UX/UI Design",
    description: "Design de interfaces intuitivas e experiências memoráveis que encantam seus usuários.",
    icon: "🎨",
    color: "from-orange-500 to-red-500",
    fullDescription: "Nossa metodologia de UX/UI Design é centrada no usuário, combinando pesquisa, prototipagem e testes para criar interfaces que não apenas são bonitas, mas também funcionais e intuitivas. Cada pixel é pensado para melhorar a experiência do usuário.",
    features: [
      "Pesquisa de usuários e personas",
      "Wireframes e protótipos interativos",
      "Design system e componentes reutilizáveis",
      "Testes de usabilidade",
      "Design responsivo e acessível",
      "Handoff para desenvolvimento"
    ],
    benefits: [
      "Interfaces intuitivas e fáceis de usar",
      "Redução na taxa de abandono",
      "Aumento na satisfação do usuário",
      "Design consistente em todas as plataformas",
      "Acessibilidade para todos os usuários"
    ]
  },
  {
    id: 5,
    title: "Gestão de Tráfego",
    description: "Otimização de campanhas publicitárias para maximizar ROI e alcançar o público certo.",
    icon: "🚀",
    color: "from-indigo-500 to-purple-500",
    fullDescription: "Especialistas em gestão de tráfego pago, otimizamos suas campanhas publicitárias para maximizar o retorno sobre investimento. Trabalhamos com as principais plataformas do mercado para garantir que cada real investido gere resultados mensuráveis.",
    features: [
      "Gestão de campanhas Google Ads",
      "Campanhas no Facebook e Instagram",
      "Remarketing e campanhas de conversão",
      "Otimização de landing pages",
      "A/B testing e otimização contínua",
      "Relatórios detalhados de performance"
    ],
    benefits: [
      "Redução no custo por aquisição",
      "Aumento no volume de leads qualificados",
      "Maior conversão de campanhas",
      "Transparência total nos resultados",
      "ROI positivo e mensurável"
    ]
  },
  {
    id: 6,
    title: "Social Media",
    description: "Gestão completa de redes sociais com conteúdo estratégico e engajamento autêntico.",
    icon: "📱",
    color: "from-pink-500 to-rose-500",
    fullDescription: "Transformamos suas redes sociais em canais de conversão e engajamento. Nossa estratégia vai além de posts bonitos - criamos conteúdo que gera valor, constrói relacionamentos e impulsiona resultados para seu negócio.",
    features: [
      "Estratégia de conteúdo personalizada",
      "Gestão de todas as redes sociais",
      "Criação de conteúdo visual e escrito",
      "Community management",
      "Campanhas patrocinadas",
      "Relatórios de engajamento e crescimento"
    ],
    benefits: [
      "Aumento significativo no engajamento",
      "Construção de relacionamentos autênticos",
      "Maior visibilidade da marca",
      "Geração de leads qualificados",
      "Crescimento orgânico sustentável"
    ]
  },
  {
    id: 7,
    title: "Metodologias",
    description: "Implementação de metodologias ágeis e frameworks para otimizar processos e resultados.",
    icon: "🎯",
    color: "from-teal-500 to-cyan-500",
    fullDescription: "Implementamos metodologias ágeis e frameworks comprovados para otimizar seus processos internos e externos. Nossa abordagem garante maior eficiência, transparência e resultados previsíveis em todos os projetos.",
    features: [
      "Implementação de metodologias ágeis",
      "Scrum e Kanban",
      "Gestão de projetos e equipes",
      "Ferramentas de colaboração",
      "Métricas e KPIs",
      "Treinamento e capacitação de equipes"
    ],
    benefits: [
      "Maior eficiência nos processos",
      "Entrega mais rápida de projetos",
      "Melhor comunicação entre equipes",
      "Redução de retrabalhos",
      "Resultados previsíveis e mensuráveis"
    ]
  }
]

export function ServicesSection() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

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
                <Button 
                  variant="ghost"
                  onClick={() => {
                    setSelectedService(service)
                    setIsModalOpen(true)
                  }}
                  className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors duration-300 group/btn transform group-hover:translate-y-[-2px] hover:scale-105 p-0 h-auto"
                >
                  Saiba mais
                  <svg 
                    className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
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
          <Button className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:translate-y-[-2px]">
            Solicitar Orçamento
          </Button>
        </div>
      </div>

      {/* Modal de Serviço */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setSelectedService(null)
        }}
        title={selectedService?.title || ''}
        icon={selectedService?.icon}
        color={selectedService?.color}
      >
        {selectedService && (
          <div className="space-y-8">
            {/* Descrição completa */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Sobre este serviço</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {selectedService.fullDescription}
              </p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">O que incluímos</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {selectedService.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-muted/30 rounded-lg">
                    <div className={`w-2 h-2 bg-gradient-to-r ${selectedService.color} rounded-full mt-2 flex-shrink-0`}></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefícios */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Benefícios para seu negócio</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {selectedService.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <div className={`w-2 h-2 bg-gradient-to-r ${selectedService.color} rounded-full mt-2 flex-shrink-0`}></div>
                    <span className="text-foreground font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center pt-8 border-t border-border/50">
              <Button className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:translate-y-[-2px]">
                Solicitar Orçamento para {selectedService.title}
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}
