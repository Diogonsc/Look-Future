import { useState } from 'react'
import { Modal } from './ui/modal'

interface Methodology {
  id: number
  title: string
  description: string
  icon: string
  color: string
  features: string[]
  fullDescription: string
  process: string[]
  benefits: string[]
}

export function MethodologySection() {
  const [selectedMethodology, setSelectedMethodology] = useState<Methodology | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const methodologies: Methodology[] = [
    {
      id: 1,
      title: "UX acima de tudo",
      description: "Design centrado no usuário para criar experiências memoráveis e intuitivas.",
      icon: "🎯",
      color: "from-purple-500 to-pink-500",
      features: [
        "Pesquisa de usuários",
        "Wireframes e protótipos",
        "Testes de usabilidade",
        "Design centrado no usuário"
      ],
      fullDescription: "Nossa metodologia UX coloca o usuário no centro de todas as decisões de design. Através de pesquisas profundas, prototipagem iterativa e testes contínuos, criamos experiências que não apenas são bonitas, mas também funcionais e intuitivas. Cada elemento é pensado para facilitar a jornada do usuário e maximizar a conversão.",
      process: [
        "Pesquisa e análise de usuários",
        "Criação de personas e jornadas",
        "Wireframes e protótipos",
        "Testes de usabilidade",
        "Iteração e refinamento",
        "Implementação e monitoramento"
      ],
      benefits: [
        "Interfaces mais intuitivas e fáceis de usar",
        "Redução significativa na taxa de abandono",
        "Maior satisfação e engajamento dos usuários",
        "Conversões otimizadas e mensuráveis",
        "Redução de suporte e treinamento"
      ]
    },
    {
      id: 2,
      title: "Ágil e Iterativo",
      description: "Desenvolvimento rápido e flexível com entregas contínuas de valor.",
      icon: "⚡",
      color: "from-blue-500 to-cyan-500",
      features: [
        "Sprints de desenvolvimento",
        "Feedback contínuo",
        "Melhorias iterativas",
        "Entrega rápida de valor"
      ],
      fullDescription: "Adotamos metodologias ágeis para garantir que seu projeto seja entregue rapidamente e com qualidade. Trabalhamos em sprints curtos, com feedback contínuo e melhorias iterativas, permitindo que você veja resultados desde o início e possa ajustar a direção conforme necessário.",
      process: [
        "Planejamento e definição de sprints",
        "Desenvolvimento incremental",
        "Revisões e feedback semanais",
        "Testes contínuos",
        "Deploy e monitoramento",
        "Retrospectivas e melhorias"
      ],
      benefits: [
        "Entrega mais rápida de funcionalidades",
        "Maior flexibilidade para mudanças",
        "Redução de riscos e incertezas",
        "Melhor comunicação e transparência",
        "Valor entregue desde o primeiro sprint"
      ]
    },
    {
      id: 3,
      title: "Foco na Conversão",
      description: "Otimização contínua para maximizar resultados e ROI.",
      icon: "📈",
      color: "from-green-500 to-emerald-500",
      features: [
        "Otimização de conversão",
        "A/B testing",
        "Análise de dados",
        "Resultados mensuráveis"
      ],
      fullDescription: "Nossa metodologia de conversão é baseada em dados e testes contínuos. Analisamos cada etapa da jornada do usuário, identificamos pontos de fricção e implementamos melhorias baseadas em evidências. O resultado é um aumento consistente na conversão e no retorno sobre investimento.",
      process: [
        "Análise da jornada atual do usuário",
        "Identificação de pontos de fricção",
        "Criação de hipóteses de melhoria",
        "Implementação de testes A/B",
        "Análise de resultados",
        "Implementação das melhorias vencedoras"
      ],
      benefits: [
        "Aumento significativo na taxa de conversão",
        "ROI mensurável e transparente",
        "Decisões baseadas em dados reais",
        "Melhorias contínuas e sustentáveis",
        "Redução no custo de aquisição"
      ]
    }
  ]

  return (
    <section id="metodologia" className="relative py-20 bg-gradient-to-b from-background/95 to-background overflow-hidden">
      {/* Background com elementos espaciais */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-1 h-1 bg-primary/40 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-20 w-1.5 h-1.5 bg-primary/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-primary/50 rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-primary/60 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header da seção */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            Nossa Metodologia
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Saiba mais sobre nossa metodologia
          </p>
          <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting.
          </p>
        </div>

        {/* Grid de metodologias */}
        <div className="grid lg:grid-cols-3 gap-8">
          {methodologies.map((methodology, index) => (
            <div
              key={methodology.id}
              className="group relative p-8 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 transform hover:scale-105"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Efeito de brilho no hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${methodology.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
              
              {/* Número do card com efeito 3D */}
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm shadow-xl transform group-hover:scale-110 group-hover:translate-y-[-2px] transition-all duration-300"
                   style={{
                     boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(124, 58, 237, 0.4)'
                   }}>
                {methodology.id}
              </div>

              {/* Ícone com efeito 3D */}
              <div className="relative z-10 mb-6">
                <div className={`relative w-24 h-24 bg-gradient-to-br ${methodology.color} rounded-2xl flex items-center justify-center text-4xl shadow-2xl group-hover:scale-110 transition-all duration-500 transform group-hover:translate-y-[-8px] group-hover:rotate-3`}
                     style={{
                       boxShadow: `0 12px 40px rgba(0, 0, 0, 0.3), 0 6px 20px ${methodology.color.split(' ')[1].replace('to-', '')}40`
                     }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                  <span className="relative z-10 drop-shadow-lg">{methodology.icon}</span>
                  
                  {/* Sombra projetada */}
                  <div className={`absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-5 bg-gradient-to-r ${methodology.color} opacity-20 blur-md rounded-full transition-all duration-500`}></div>
                </div>
              </div>

              {/* Conteúdo */}
              <div className="relative z-10 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-3 transform group-hover:translate-y-[-2px]">
                    {methodology.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed transform group-hover:translate-y-[-1px] transition-transform duration-300">
                    {methodology.description}
                  </p>
                </div>

                {/* Lista de features com efeito 3D */}
                <ul className="space-y-3">
                  {methodology.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3 transform group-hover:translate-y-[-1px] transition-transform duration-300"
                        style={{ transitionDelay: `${featureIndex * 50}ms` }}>
                      <div className={`w-3 h-3 bg-gradient-to-r ${methodology.color} rounded-full flex-shrink-0 shadow-md`}
                           style={{
                             boxShadow: `0 2px 8px ${methodology.color.split(' ')[1].replace('to-', '')}40`
                           }}></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Botão "Saiba mais" com efeito 3D */}
                <button 
                  onClick={() => {
                    setSelectedMethodology(methodology)
                    setIsModalOpen(true)
                  }}
                  className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors duration-300 group/btn transform group-hover:translate-y-[-2px] hover:scale-105"
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
                </button>
              </div>

              {/* Efeito de borda animada */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${methodology.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              {/* Sombra do card */}
              <div className={`absolute -bottom-4 left-4 right-4 h-8 bg-gradient-to-r ${methodology.color} opacity-0 group-hover:opacity-10 blur-xl rounded-2xl transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:translate-y-[-2px]">
            Conheça Nosso Processo
          </button>
        </div>
      </div>

      {/* Modal de Metodologia */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setSelectedMethodology(null)
        }}
        title={selectedMethodology?.title || ''}
        icon={selectedMethodology?.icon}
        color={selectedMethodology?.color}
      >
        {selectedMethodology && (
          <div className="space-y-8">
            {/* Descrição completa */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Sobre nossa metodologia</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {selectedMethodology.fullDescription}
              </p>
            </div>

            {/* Processo */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Nosso processo</h3>
              <div className="space-y-4">
                {selectedMethodology.process.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-muted/30 rounded-lg">
                    <div className={`w-8 h-8 bg-gradient-to-r ${selectedMethodology.color} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                      {index + 1}
                    </div>
                    <span className="text-muted-foreground">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Principais características</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {selectedMethodology.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-muted/30 rounded-lg">
                    <div className={`w-2 h-2 bg-gradient-to-r ${selectedMethodology.color} rounded-full mt-2 flex-shrink-0`}></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefícios */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Benefícios desta abordagem</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {selectedMethodology.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <div className={`w-2 h-2 bg-gradient-to-r ${selectedMethodology.color} rounded-full mt-2 flex-shrink-0`}></div>
                    <span className="text-foreground font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center pt-8 border-t border-border/50">
              <button className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:translate-y-[-2px]">
                Aplicar esta metodologia no meu projeto
              </button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}
