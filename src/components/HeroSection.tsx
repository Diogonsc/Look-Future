import avatarSpace from "@/assets/avatarspace.webp"
import { Typewriter } from "@/components/ui/typewriter"

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-4">
      {/* Background com gradiente espacial animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/10 animate-pulse"></div>
      
      {/* Estrelas decorativas */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-1 h-1 bg-white rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-primary rounded-full animate-pulse opacity-80"></div>
        <div className="absolute bottom-40 left-1/4 w-1 h-1 bg-white rounded-full animate-bounce opacity-40"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-primary/60 rounded-full animate-pulse opacity-70"></div>
        
        {/* Novas estrelas adicionais */}
        <div className="absolute top-32 left-1/3 w-1 h-1 bg-white rounded-full animate-ping opacity-50"></div>
        <div className="absolute top-60 right-1/4 w-1 h-1 bg-primary/80 rounded-full animate-pulse opacity-90"></div>
        <div className="absolute bottom-60 left-1/2 w-1 h-1 bg-white rounded-full animate-bounce opacity-30"></div>
        <div className="absolute top-1/3 left-1/5 w-1 h-1 bg-primary/70 rounded-full animate-ping opacity-60"></div>
        <div className="absolute bottom-1/3 right-1/5 w-1 h-1 bg-white rounded-full animate-pulse opacity-40"></div>
        <div className="absolute top-2/3 left-2/3 w-1 h-1 bg-primary/50 rounded-full animate-bounce opacity-80"></div>
        <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-white rounded-full animate-ping opacity-70"></div>
        <div className="absolute top-1/4 right-1/6 w-1 h-1 bg-primary/90 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute bottom-2/3 left-1/6 w-1 h-1 bg-white rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-primary/60 rounded-full animate-ping opacity-40"></div>
        <div className="absolute bottom-1/3 left-3/4 w-1 h-1 bg-white rounded-full animate-pulse opacity-80"></div>
        <div className="absolute top-1/6 right-2/3 w-1 h-1 bg-primary/80 rounded-full animate-bounce opacity-30"></div>
        <div className="absolute bottom-1/6 left-2/3 w-1 h-1 bg-white rounded-full animate-ping opacity-90"></div>
        <div className="absolute top-5/6 right-1/2 w-1 h-1 bg-primary/70 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute bottom-5/6 left-1/2 w-1 h-1 bg-white rounded-full animate-bounce opacity-70"></div>
        
        {/* Estrelas com tamanhos variados */}
        <div className="absolute top-1/5 left-1/8 w-0.5 h-0.5 bg-primary/60 rounded-full animate-ping opacity-40"></div>
        <div className="absolute bottom-1/5 right-1/8 w-0.5 h-0.5 bg-white rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-4/5 left-7/8 w-1.5 h-1.5 bg-primary/80 rounded-full animate-bounce opacity-70"></div>
        <div className="absolute bottom-4/5 right-7/8 w-1.5 h-1.5 bg-white rounded-full animate-ping opacity-50"></div>
        <div className="absolute top-1/2 left-1/8 w-0.5 h-0.5 bg-primary/70 rounded-full animate-pulse opacity-80"></div>
        <div className="absolute bottom-1/2 right-1/8 w-0.5 h-0.5 bg-white rounded-full animate-bounce opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo textual */}
          <div className="text-left space-y-6 animate-fade-in-up">
            <div className="space-y-2">
              <h3 className="text-lg md:text-xl font-medium text-primary/80 tracking-wider uppercase">
                <Typewriter 
                  text="Olhe para o futuro" 
                  speed={120} 
                  delay={800}
                  className="inline-block text-foreground/90"
                  repeat={true}
                  repeatInterval={5000}
                />
              </h3>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
                <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
                  Agência Digital
                </span>
                <br />
                <span className="text-foreground/90">
                  Modernidade e
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary/80 to-primary bg-clip-text text-transparent">
                  Criatividade
                </span>
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
              Transformamos ideias em experiências digitais extraordinárias. 
              Inovação, design e tecnologia em harmonia para o seu sucesso.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Começar Projeto
              </button>
              <button className="px-8 py-4 border-2 border-primary/30 text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all duration-300 transform hover:scale-105">
                Ver Portfólio
              </button>
            </div>
          </div>

          {/* Imagem com animações espaciais */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Anel orbital externo - girando no sentido horário */}
              <div className="absolute inset-0 w-full h-full border-2 border-primary/30 rounded-full animate-spin-slow"></div>
              
              {/* Anel orbital interno - girando no sentido anti-horário */}
              <div className="absolute inset-4 w-[calc(100%-2rem)] h-[calc(100%-2rem)] border-2 border-primary/20 rounded-full animate-spin-reverse"></div>
              
              {/* Efeito de brilho orbital */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 rounded-full blur-3xl animate-spin-slow opacity-50"></div>
              
              {/* Container da imagem com animações */}
              <div className="relative animate-float-3d">
                <img 
                  src={avatarSpace} 
                  alt="Avatar no espaço - Representação da inovação digital" 
                  className="w-96 h-96 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] object-contain drop-shadow-2xl"
                />
                
                {/* Partículas orbitais */}
                <div className="absolute inset-0 animate-spin-slow">
                  <div className="absolute top-0 left-1/2 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-primary/60 rounded-full animate-pulse delay-300"></div>
                  <div className="absolute left-0 top-1/2 w-2 h-2 bg-primary/40 rounded-full animate-pulse delay-500"></div>
                  <div className="absolute right-0 top-1/2 w-2 h-2 bg-primary/80 rounded-full animate-pulse delay-700"></div>
                </div>
              </div>
              
              {/* Efeito de energia */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 rounded-full animate-pulse opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
