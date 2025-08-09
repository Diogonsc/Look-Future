export function TypographyDemo() {
  return (
    <div className="container mx-auto px-4 py-16 space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-foreground mb-4 font-heading">
          Sistema Tipográfico
        </h2>
        <p className="text-lg text-muted-foreground font-sans">
          Demonstração das fontes configuradas para a Look Future
        </p>
      </div>

      {/* Headings */}
      <div className="space-y-6">
        <h1 className="text-6xl font-black text-primary font-heading">Heading 1 - Poppins Black</h1>
        <h2 className="text-5xl font-bold text-foreground font-heading">Heading 2 - Poppins Bold</h2>
        <h3 className="text-4xl font-semibold text-foreground font-heading">Heading 3 - Poppins Semibold</h3>
        <h4 className="text-3xl font-medium text-foreground font-heading">Heading 4 - Poppins Medium</h4>
        <h5 className="text-2xl font-normal text-foreground font-heading">Heading 5 - Poppins Normal</h5>
        <h6 className="text-xl font-light text-foreground font-heading">Heading 6 - Poppins Light</h6>
      </div>

      {/* Body Text */}
      <div className="space-y-4">
        <p className="text-lg font-normal text-foreground font-sans leading-relaxed">
          Este é um parágrafo de exemplo usando Inter Normal. A fonte Inter é perfeita para textos longos 
          e oferece excelente legibilidade em diferentes tamanhos de tela.
        </p>
        <p className="text-base font-medium text-foreground font-sans leading-relaxed">
          Parágrafo com Inter Medium - ideal para textos de destaque e call-to-actions.
        </p>
        <p className="text-sm font-light text-muted-foreground font-sans leading-relaxed">
          Texto menor com Inter Light - perfeito para informações secundárias e legendas.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {[
          { title: "Design", desc: "Criação de identidades visuais únicas" },
          { title: "Marketing Digital", desc: "Estratégias de crescimento online" },
          { title: "Desenvolvimento Web", desc: "Sites e sistemas modernos" },
          { title: "Gestão de Tráfego", desc: "Otimização de campanhas" },
          { title: "Social Media", desc: "Gestão de redes sociais" },
          { title: "Sistemas", desc: "Desenvolvimento de software" }
        ].map((service, index) => (
          <div key={index} className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-primary mb-2 font-heading">
              {service.title}
            </h3>
            <p className="text-muted-foreground font-sans">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
