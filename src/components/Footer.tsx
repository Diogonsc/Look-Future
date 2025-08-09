import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa6";
import { Button } from "./ui/button"
import { Input } from "./ui/input"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: "Marketing Digital", href: "#" },
      { name: "Criação de Sites", href: "#" },
      { name: "Criação de Sistemas", href: "#" },
      { name: "UX/UI Design", href: "#" },
      { name: "Gestão de Tráfego", href: "#" },
      { name: "Social Media", href: "#" }
    ],
    company: [
      { name: "Sobre Nós", href: "#" },
      { name: "Nossa Metodologia", href: "#" },
      { name: "Portfólio", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Carreiras", href: "#" },
      { name: "Contato", href: "#" }
    ],
    support: [
      { name: "Central de Ajuda", href: "#" },
      { name: "Documentação", href: "#" },
      { name: "Status do Sistema", href: "#" },
      { name: "Suporte Técnico", href: "#" },
      { name: "FAQ", href: "#" }
    ],
    legal: [
      { name: "Termos de Uso", href: "#" },
      { name: "Política de Privacidade", href: "#" },
      { name: "Cookies", href: "#" },
      { name: "LGPD", href: "#" }
    ]
  }

  const socialLinks = [
    { name: "Instagram", href: "#", icon: <FaInstagram /> },
    { name: "LinkedIn", href: "#", icon: <FaLinkedin /> },
    { name: "Facebook", href: "#", icon: <FaFacebook /> },
    { name: "YouTube", href: "#", icon: <FaYoutube /> },
    { name: "WhatsApp", href: "#", icon: <FaWhatsapp /> }
  ]

  return (
    <footer className="relative bg-gradient-to-b from-background to-background/95 border-t border-border/50">
      {/* Background com elementos espaciais */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-1 h-1 bg-primary/30 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-1/3 w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/3 w-1 h-1 bg-primary/50 rounded-full animate-ping"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Seção principal do footer */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Logo e descrição */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Look Future
                </h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Agência Digital
                </p>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Transformamos ideias em experiências digitais extraordinárias. 
                Inovação, design e tecnologia em harmonia para o seu sucesso.
              </p>
              
              {/* Redes sociais */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-card/50 border border-border/50 rounded-lg flex items-center justify-center text-lg hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group"
                    aria-label={social.name}
                  >
                    <span className="group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Links de serviços */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Serviços</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links da empresa */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Empresa</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links de suporte */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Suporte</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="py-8 border-t border-border/50">
          <div className="max-w-md">
            <h4 className="font-semibold text-foreground mb-3">Fique por dentro das novidades</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Receba insights sobre marketing digital e tecnologia
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Seu email"
                className="flex-1"
              />
              <Button className="px-6 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors duration-300">
                Inscrever
              </Button>
            </div>
          </div>
        </div>

        {/* Linha inferior */}
        <div className="py-6 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground">
              © {currentYear} Look Future. Todos os direitos reservados.
            </div>

            {/* Links legais */}
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Elemento decorativo */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
    </footer>
  )
}
