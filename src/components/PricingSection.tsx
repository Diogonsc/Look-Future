interface Plan {
  id: number
  name: string
  price: string
  period: string
  description: string
  features: string[]
  popular?: boolean
  color: string
}

const plans: Plan[] = [
  {
    id: 1,
    name: "Starter",
    price: "R$ 997",
    period: "/mês",
    description: "Ideal para pequenas empresas que estão começando",
    color: "from-blue-500 to-cyan-500",
    features: [
      "Site responsivo básico",
      "SEO básico",
      "Gestão de redes sociais",
      "Relatórios mensais",
      "Suporte por email",
      "Atualizações mensais"
    ]
  },
  {
    id: 2,
    name: "Professional",
    price: "R$ 1.997",
    period: "/mês",
    description: "Perfeito para empresas em crescimento",
    popular: true,
    color: "from-purple-500 to-pink-500",
    features: [
      "Tudo do plano Starter",
      "Marketing digital completo",
      "Gestão de tráfego pago",
      "Design personalizado",
      "Suporte prioritário",
      "Relatórios semanais",
      "Consultoria estratégica",
      "A/B testing"
    ]
  },
  {
    id: 3,
    name: "Enterprise",
    price: "R$ 3.997",
    period: "/mês",
    description: "Para grandes empresas que querem resultados excepcionais",
    color: "from-green-500 to-emerald-500",
    features: [
      "Tudo do plano Professional",
      "Sistema personalizado",
      "UX/UI design completo",
      "Suporte 24/7",
      "Relatórios diários",
      "Consultoria dedicada",
      "Implementação de metodologias",
      "Otimização contínua",
      "Treinamento da equipe"
    ]
  }
]

export function PricingSection() {
  return (
    <section id="precos" className="relative py-20 bg-gradient-to-b from-background to-background/95 overflow-hidden">
      {/* Background com elementos espaciais */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-primary/40 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-primary/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-primary/50 rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-primary/60 rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header da seção */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            Nossos Planos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Escolha o plano ideal para impulsionar seu negócio
          </p>
        </div>

        {/* Grid de planos */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`group relative p-8 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 transform hover:scale-105 ${
                plan.popular 
                  ? 'border-primary/50 shadow-xl shadow-primary/20 scale-105' 
                  : 'hover:border-primary/30'
              }`}
            >
              {/* Badge "Mais Popular" com efeito 3D */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-xl transform group-hover:scale-110 group-hover:translate-y-[-2px] transition-all duration-300"
                       style={{
                         boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(124, 58, 237, 0.4)'
                       }}>
                    Mais Popular
                  </div>
                </div>
              )}

              {/* Efeito de brilho no hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>

              {/* Header do plano */}
              <div className="relative z-10 mb-8">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-2 transform group-hover:translate-y-[-2px]">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground mb-6 transform group-hover:translate-y-[-1px] transition-transform duration-300">
                  {plan.description}
                </p>
                
                {/* Preço com efeito 3D */}
                <div className="mb-6 transform group-hover:translate-y-[-2px] transition-transform duration-300">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-foreground drop-shadow-lg">{plan.price}</span>
                    <span className="text-muted-foreground ml-1">{plan.period}</span>
                  </div>
                </div>
              </div>

              {/* Lista de features com efeito 3D */}
              <div className="relative z-10 space-y-4 mb-8">
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3 transform group-hover:translate-y-[-1px] transition-transform duration-300"
                        style={{ transitionDelay: `${index * 30}ms` }}>
                      <div className={`w-3 h-3 bg-gradient-to-r ${plan.color} rounded-full flex-shrink-0 shadow-md`}
                           style={{
                             boxShadow: `0 2px 8px ${plan.color.split(' ')[1].replace('to-', '')}40`
                           }}></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Botão CTA com efeito 3D */}
              <div className="relative z-10">
                <button className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:translate-y-[-2px] ${
                  plan.popular
                    ? 'bg-primary text-white hover:bg-primary/90 shadow-xl hover:shadow-2xl'
                    : 'bg-gradient-to-r from-primary/10 to-primary/5 text-primary border border-primary/20 hover:bg-primary/20 shadow-lg hover:shadow-xl'
                }`}
                style={{
                  boxShadow: plan.popular 
                    ? '0 8px 32px rgba(0, 0, 0, 0.3), 0 4px 16px rgba(124, 58, 237, 0.4)'
                    : '0 4px 16px rgba(0, 0, 0, 0.1)'
                }}>
                  {plan.popular ? 'Começar Agora' : 'Escolher Plano'}
                </button>
              </div>

              {/* Efeito de borda animada */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${plan.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              {/* Sombra do card */}
              <div className={`absolute -bottom-4 left-4 right-4 h-8 bg-gradient-to-r ${plan.color} opacity-0 group-hover:opacity-10 blur-xl rounded-2xl transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Informações adicionais */}
        <div className="text-center mt-16 space-y-6">
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 max-w-4xl mx-auto transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-foreground mb-4 transform hover:translate-y-[-1px] transition-transform duration-300">
              Todos os planos incluem:
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2 transform hover:translate-y-[-1px] transition-transform duration-300">
                <div className="w-2 h-2 bg-primary rounded-full shadow-md"></div>
                <span>Suporte técnico</span>
              </div>
              <div className="flex items-center space-x-2 transform hover:translate-y-[-1px] transition-transform duration-300">
                <div className="w-2 h-2 bg-primary rounded-full shadow-md"></div>
                <span>Certificado SSL</span>
              </div>
              <div className="flex items-center space-x-2 transform hover:translate-y-[-1px] transition-transform duration-300">
                <div className="w-2 h-2 bg-primary rounded-full shadow-md"></div>
                <span>Backup automático</span>
              </div>
            </div>
          </div>
          
          <p className="text-muted-foreground">
            Precisa de um plano personalizado? <button className="text-primary hover:text-primary/80 font-medium transform hover:translate-y-[-1px] transition-transform duration-300">Entre em contato</button>
          </p>
        </div>
      </div>
    </section>
  )
}
