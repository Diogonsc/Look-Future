import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Github, Filter } from 'lucide-react'
import { Input } from '../components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'
import { Label } from '../components/ui/label'
import { Button } from '../components/ui/button'
import { projectImages } from '../assets/projectImages'

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  category: string
  liveUrl: string
  githubUrl?: string
  color: string
  year: number
  client?: string
  status: 'completed' | 'in-progress' | 'maintenance'
}

const allProjects: Project[] = [
  {
    id: 1,
    title: "E-commerce Moderno",
    description: "Plataforma completa de e-commerce com sistema de pagamentos, gestão de estoque e painel administrativo. Inclui integração com múltiplos gateways de pagamento, sistema de cupons, relatórios de vendas e dashboard analítico.",
    image: projectImages.ecommerce,
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis", "AWS"],
    category: "E-commerce",
    liveUrl: "https://exemplo-ecommerce.com",
    githubUrl: "https://github.com/lookfuture/ecommerce",
    color: "from-blue-500 to-cyan-500",
    year: 2024,
    client: "TechStore",
    status: "completed"
  },
  {
    id: 2,
    title: "App de Gestão Financeira",
    description: "Aplicativo mobile para controle de finanças pessoais com gráficos interativos, relatórios detalhados, categorização automática de gastos e integração com bancos. Inclui funcionalidades de planejamento orçamentário e metas financeiras.",
    image: projectImages.finance,
    technologies: ["React Native", "Firebase", "Chart.js", "TypeScript", "Redux"],
    category: "Mobile",
    liveUrl: "https://exemplo-financeiro.com",
    githubUrl: "https://github.com/lookfuture/finance-app",
    color: "from-green-500 to-emerald-500",
    year: 2024,
    client: "FinTech Solutions",
    status: "completed"
  },
  {
    id: 3,
    title: "Portal Corporativo",
    description: "Sistema completo para gestão interna de empresas com módulos de RH, financeiro e operacional. Inclui controle de ponto, gestão de benefícios, fluxo de aprovações e integração com sistemas externos.",
    image: projectImages.corporate,
    technologies: ["Vue.js", "Laravel", "MySQL", "Redis", "Docker", "Nginx"],
    category: "Sistema",
    liveUrl: "https://exemplo-portal.com",
    githubUrl: "https://github.com/lookfuture/corporate-portal",
    color: "from-purple-500 to-pink-500",
    year: 2023,
    client: "CorpTech",
    status: "completed"
  },
  {
    id: 4,
    title: "Plataforma de Cursos Online",
    description: "Sistema de ensino a distância com videoaulas, exercícios interativos, certificação e gamificação. Inclui sistema de progresso, fóruns de discussão e integração com ferramentas de videoconferência.",
    image: projectImages.courses,
    technologies: ["Next.js", "Prisma", "PostgreSQL", "AWS", "Vimeo API", "Stripe"],
    category: "Educação",
    liveUrl: "https://exemplo-cursos.com",
    githubUrl: "https://github.com/lookfuture/online-courses",
    color: "from-orange-500 to-red-500",
    year: 2023,
    client: "EduTech",
    status: "completed"
  },
  {
    id: 5,
    title: "Dashboard Analytics",
    description: "Painel de controle com métricas em tempo real e visualizações interativas de dados. Inclui integração com múltiplas fontes de dados, alertas personalizados e exportação de relatórios.",
    image: projectImages.analytics,
    technologies: ["React", "D3.js", "Node.js", "MongoDB", "Socket.io", "Chart.js"],
    category: "Analytics",
    liveUrl: "https://exemplo-dashboard.com",
    githubUrl: "https://github.com/lookfuture/analytics-dashboard",
    color: "from-indigo-500 to-purple-500",
    year: 2024,
    client: "DataCorp",
    status: "completed"
  },
  {
    id: 6,
    title: "App de Delivery",
    description: "Aplicativo completo de delivery com geolocalização, pagamentos e gestão de pedidos. Inclui sistema de avaliações, rastreamento em tempo real e integração com múltiplos restaurantes.",
    image: projectImages.delivery,
    technologies: ["React Native", "Node.js", "PostgreSQL", "Socket.io", "Google Maps API"],
    category: "Mobile",
    liveUrl: "https://exemplo-delivery.com",
    githubUrl: "https://github.com/lookfuture/delivery-app",
    color: "from-pink-500 to-rose-500",
    year: 2023,
    client: "FastFood Chain",
    status: "completed"
  },
  {
    id: 7,
    title: "Sistema de Gestão de Clínicas",
    description: "Sistema completo para gestão de clínicas médicas com agendamento, prontuário eletrônico, faturamento e integração com planos de saúde. Inclui módulo de telemedicina.",
    image: projectImages.analytics,
    technologies: ["Vue.js", "Laravel", "MySQL", "WebRTC", "HL7 FHIR"],
    category: "Sistema",
    liveUrl: "https://exemplo-clinica.com",
    githubUrl: "https://github.com/lookfuture/clinic-management",
    color: "from-teal-500 to-cyan-500",
    year: 2024,
    client: "MedClinic",
    status: "in-progress"
  },
  {
    id: 8,
    title: "Marketplace de Serviços",
    description: "Plataforma que conecta profissionais autônomos com clientes. Inclui sistema de busca, filtros avançados, chat integrado e sistema de pagamentos seguros.",
    image: projectImages.ecommerce,
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Stripe", "Socket.io", "Redis"],
    category: "Marketplace",
    liveUrl: "https://exemplo-marketplace.com",
    githubUrl: "https://github.com/lookfuture/services-marketplace",
    color: "from-yellow-500 to-orange-500",
    year: 2024,
    client: "ServiceHub",
    status: "completed"
  },
  {
    id: 9,
    title: "App de Fitness e Nutrição",
    description: "Aplicativo mobile para acompanhamento de treinos e nutrição. Inclui planos personalizados, tracking de progresso, integração com wearables e comunidade de usuários.",
    image: projectImages.finance,
    technologies: ["React Native", "Firebase", "HealthKit", "Google Fit API", "Redux"],
    category: "Mobile",
    liveUrl: "https://exemplo-fitness.com",
    githubUrl: "https://github.com/lookfuture/fitness-app",
    color: "from-red-500 to-pink-500",
    year: 2023,
    client: "FitLife",
    status: "completed"
  },
  {
    id: 10,
    title: "Sistema de Gestão Escolar",
    description: "Sistema completo para gestão de escolas com controle de matrículas, notas, frequência, comunicação com pais e portal do aluno.",
    image: projectImages.corporate,
    technologies: ["React", "Node.js", "PostgreSQL", "SendGrid", "PDF Generation"],
    category: "Educação",
    liveUrl: "https://exemplo-escola.com",
    githubUrl: "https://github.com/lookfuture/school-management",
    color: "from-blue-600 to-indigo-600",
    year: 2023,
    client: "EduSchool",
    status: "completed"
  },
  {
    id: 11,
    title: "Plataforma de Eventos",
    description: "Sistema para criação e gestão de eventos com vendas de ingressos, check-in digital, networking e analytics de engajamento.",
    image: projectImages.courses,
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Stripe", "QR Code API"],
    category: "Eventos",
    liveUrl: "https://exemplo-eventos.com",
    githubUrl: "https://github.com/lookfuture/events-platform",
    color: "from-purple-600 to-pink-600",
    year: 2024,
    client: "EventPro",
    status: "completed"
  },
  {
    id: 12,
    title: "Sistema de Gestão de Condomínios",
    description: "Sistema para administração de condomínios com controle de moradores, reservas de áreas comuns, comunicação e gestão financeira.",
    image: projectImages.corporate,
    technologies: ["Vue.js", "Laravel", "MySQL", "Pusher", "PDF Generation"],
    category: "Sistema",
    liveUrl: "https://exemplo-condominio.com",
    githubUrl: "https://github.com/lookfuture/condo-management",
    color: "from-green-600 to-teal-600",
    year: 2024,
    client: "CondoTech",
    status: "maintenance"
  }
]

export function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos')
  const [selectedYear, setSelectedYear] = useState<string>('Todos')
  const [selectedStatus, setSelectedStatus] = useState<string>('Todos')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = ['Todos', ...Array.from(new Set(allProjects.map(p => p.category)))]
  const years = ['Todos', ...Array.from(new Set(allProjects.map(p => p.year.toString()))).sort((a, b) => parseInt(b) - parseInt(a))]
  const statuses = ['Todos', 'completed', 'in-progress', 'maintenance']

  const filteredProjects = allProjects.filter(project => {
    const matchesCategory = selectedCategory === 'Todos' || project.category === selectedCategory
    const matchesYear = selectedYear === 'Todos' || project.year.toString() === selectedYear
    const matchesStatus = selectedStatus === 'Todos' || project.status === selectedStatus
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))

    return matchesCategory && matchesYear && matchesStatus && matchesSearch
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500'
      case 'in-progress': return 'bg-yellow-500'
      case 'maintenance': return 'bg-blue-500'
      default: return 'bg-gray-500'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Concluído'
      case 'in-progress': return 'Em Desenvolvimento'
      case 'maintenance': return 'Em Manutenção'
      default: return status
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header da página */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 border-b border-border/50">
        <div className="container mx-auto px-4 py-12">
          {/* Botão de voltar */}
          <div className="mb-8">
            <Link 
              to="/"
              className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="font-medium">Voltar ao Início</span>
            </Link>
          </div>

          {/* Título e descrição */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent mb-4">
              Nossos Projetos
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Conheça todos os projetos desenvolvidos pela Look Future. 
              Cada projeto representa nossa dedicação em criar soluções inovadoras e de alta qualidade.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Filtros */}
        <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 mb-12">
          <div className="flex items-center space-x-3 mb-8">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Filter className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-foreground">Filtros</h2>
              <p className="text-sm text-muted-foreground">Encontre os projetos que você procura</p>
            </div>
          </div>
          
          {/* Barra de pesquisa */}
          <div className="mb-8">
            <Label htmlFor="search" className="block text-sm font-medium text-foreground mb-3">
              Buscar projetos
            </Label>
            <Input
              id="search"
              type="text"
              placeholder="Buscar por título, descrição ou tecnologias..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>

          {/* Filtros em linha */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Categoria */}
            <div className="space-y-3">
              <Label htmlFor="category" className="text-sm font-medium text-foreground">Categoria</Label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione uma categoria" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Ano */}
            <div className="space-y-3">
              <Label htmlFor="year" className="text-sm font-medium text-foreground">Ano</Label>
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um ano" />
                </SelectTrigger>
                <SelectContent>
                  {years.map((year) => (
                    <SelectItem key={year} value={year}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Status */}
            <div className="space-y-3">
              <Label htmlFor="status" className="text-sm font-medium text-foreground">Status</Label>
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um status" />
                </SelectTrigger>
                <SelectContent>
                  {statuses.map((status) => (
                    <SelectItem key={status} value={status}>
                      {status === 'Todos' ? 'Todos' : getStatusText(status)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Contador de resultados */}
          <div className="mt-6 pt-6 border-t border-border/50">
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">
                {filteredProjects.length} projeto{filteredProjects.length !== 1 ? 's' : ''} encontrado{filteredProjects.length !== 1 ? 's' : ''}
              </div>
              {(selectedCategory !== 'Todos' || selectedYear !== 'Todos' || selectedStatus !== 'Todos' || searchTerm) && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSelectedCategory('Todos')
                    setSelectedYear('Todos')
                    setSelectedStatus('Todos')
                    setSearchTerm('')
                  }}
                  className="text-xs"
                >
                  Limpar Filtros
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Grid de projetos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative p-6 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 transform hover:scale-105"
            >
              {/* Efeito de brilho no hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
              
              {/* Imagem do projeto */}
              <div className="relative z-10 mb-6">
                <div className={`relative w-full h-48 bg-gradient-to-br ${project.color} rounded-xl overflow-hidden shadow-lg group-hover:scale-105 transition-all duration-500 transform group-hover:translate-y-[-4px]`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
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

              {/* Categoria e Status */}
              <div className="relative z-10 mb-4 flex items-center justify-between">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                  {project.category}
                </span>
                <div className="flex items-center space-x-2">
                  <span className={`w-2 h-2 rounded-full ${getStatusColor(project.status)}`}></span>
                  <span className="text-xs text-muted-foreground">{getStatusText(project.status)}</span>
                </div>
              </div>

              {/* Ano e Cliente */}
              <div className="relative z-10 mb-4 flex items-center justify-between text-xs text-muted-foreground">
                <span>{project.year}</span>
                {project.client && <span>Cliente: {project.client}</span>}
              </div>

              {/* Conteúdo */}
              <div className="relative z-10 space-y-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm line-clamp-3">
                  {project.description}
                </p>
                
                {/* Tecnologias */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs bg-muted/50 text-muted-foreground rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 text-xs bg-muted/50 text-muted-foreground rounded-md">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Botões de ação */}
                <div className="flex gap-3 pt-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center p-3 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ver Projeto
                  </a>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-muted text-muted-foreground rounded-lg hover:bg-muted/80 transition-all duration-300 transform hover:scale-105"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Efeito de borda animada */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              {/* Sombra do card */}
              <div className={`absolute -bottom-4 left-4 right-4 h-8 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-10 blur-xl rounded-2xl transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Mensagem quando não há resultados */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="text-8xl mb-6">🔍</div>
            <h3 className="text-3xl font-semibold text-foreground mb-4">Nenhum projeto encontrado</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Não encontramos projetos com os filtros selecionados. 
              Tente ajustar os critérios de busca ou limpar os filtros para ver todos os projetos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                variant="outline"
                onClick={() => {
                  setSelectedCategory('Todos')
                  setSelectedYear('Todos')
                  setSelectedStatus('Todos')
                  setSearchTerm('')
                }}
                className="px-8 py-3"
              >
                Limpar Filtros
              </Button>
              <Link
                to="/"
                className="px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-all duration-300"
              >
                Voltar ao Início
              </Link>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-20 py-16 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl border border-primary/20">
          <div className="max-w-2xl mx-auto px-4">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Gostou dos nossos projetos?
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Vamos criar algo incrível juntos! Entre em contato e transforme sua ideia em realidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/#contato"
                className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:translate-y-[-2px]"
              >
                Solicitar Orçamento
              </Link>
              <Link
                to="/"
                className="px-8 py-4 bg-muted text-foreground font-semibold rounded-lg hover:bg-muted/80 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:translate-y-[-2px]"
              >
                Voltar ao Início
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
