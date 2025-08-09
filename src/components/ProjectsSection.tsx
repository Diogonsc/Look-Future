import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { projectImages } from '../assets/projectImages'

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  category: string
  liveUrl: string
  color: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Moderno",
    description: "Plataforma completa de e-commerce com sistema de pagamentos, gestão de estoque e painel administrativo.",
    image: projectImages.ecommerce,
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    category: "E-commerce",
    liveUrl: "https://exemplo-ecommerce.com",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "App de Gestão Financeira",
    description: "Aplicativo mobile para controle de finanças pessoais com gráficos e relatórios detalhados.",
    image: projectImages.finance,
    technologies: ["React Native", "Firebase", "Chart.js"],
    category: "Mobile",
    liveUrl: "https://exemplo-financeiro.com",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 3,
    title: "Portal Corporativo",
    description: "Sistema completo para gestão interna de empresas com módulos de RH, financeiro e operacional.",
    image: projectImages.corporate,
    technologies: ["Vue.js", "Laravel", "MySQL", "Redis"],
    category: "Sistema",
    liveUrl: "https://exemplo-portal.com",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 4,
    title: "Plataforma de Cursos Online",
    description: "Sistema de ensino a distância com videoaulas, exercícios interativos e certificação.",
    image: projectImages.courses,
    technologies: ["Next.js", "Prisma", "PostgreSQL", "AWS"],
    category: "Educação",
    liveUrl: "https://exemplo-cursos.com",
    color: "from-orange-500 to-red-500"
  },
  {
    id: 5,
    title: "Dashboard Analytics",
    description: "Painel de controle com métricas em tempo real e visualizações interativas de dados.",
    image: projectImages.analytics,
    technologies: ["React", "D3.js", "Node.js", "MongoDB"],
    category: "Analytics",
    liveUrl: "https://exemplo-dashboard.com",
    color: "from-indigo-500 to-purple-500"
  },
  {
    id: 6,
    title: "App de Delivery",
    description: "Aplicativo completo de delivery com geolocalização, pagamentos e gestão de pedidos.",
    image: projectImages.delivery,
    technologies: ["React Native", "Node.js", "PostgreSQL", "Socket.io"],
    category: "Mobile",
    liveUrl: "https://exemplo-delivery.com",
    color: "from-pink-500 to-rose-500"
  }
]

export function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos')

  const categories = ['Todos', ...Array.from(new Set(projects.map(p => p.category)))]
  
  const filteredProjects = selectedCategory === 'Todos' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="projetos" className="relative py-20 bg-gradient-to-b from-background to-background/95 overflow-hidden">
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
            Projetos Realizados
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos e que estão no ar
          </p>
        </div>

        {/* Filtros por categoria */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-card/50 text-muted-foreground hover:bg-card hover:text-foreground border border-border/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid de projetos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 transform hover:scale-105"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Efeito de brilho no hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
              
              {/* Imagem do projeto */}
              <div className="relative z-10 mb-6">
                <div className={`relative w-full h-48 bg-gradient-to-br ${project.color} rounded-xl overflow-hidden shadow-lg group-hover:scale-105 transition-all duration-500 transform group-hover:translate-y-[-4px]`}
                     style={{
                       transform: hoveredProject === project.id ? 'translateY(-4px) scale(1.05)' : 'translateY(0) scale(1)'
                     }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback para emoji caso a imagem não carregue
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = document.createElement('div');
                      fallback.className = 'w-full h-full flex items-center justify-center text-4xl bg-gradient-to-br from-gray-100 to-gray-200';
                      fallback.textContent = '🛒';
                      target.parentNode?.appendChild(fallback);
                    }}
                  />
                </div>
              </div>

              {/* Categoria */}
              <div className="relative z-10 mb-4">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                  {project.category}
                </span>
              </div>

              {/* Conteúdo */}
              <div className="relative z-10 space-y-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {project.description}
                </p>
                
                {/* Tecnologias */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs bg-muted/50 text-muted-foreground rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Botões de ação */}
                <div className="flex gap-3 pt-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center p-4 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 group/btn"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Ver Projeto
                  </a>
                </div>
              </div>

              {/* Efeito de borda animada */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              {/* Sombra do card */}
              <div className={`absolute -bottom-4 left-4 right-4 h-8 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-10 blur-xl rounded-2xl transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Gostou dos nossos projetos? Vamos criar algo incrível juntos!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/projetos"
              className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:translate-y-[-2px]"
            >
              Ver Todos os Projetos
            </Link>
            <Button className="px-8 py-4 bg-muted text-foreground font-semibold rounded-lg hover:bg-muted/80 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:translate-y-[-2px]">
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
