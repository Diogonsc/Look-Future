import React, { useState } from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa"
import { Button } from "./ui/button"
import { GoogleMap } from "./GoogleMap"

interface ContactForm {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export function ContactSection() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const socialLinks = [
    { name: "Instagram", href: "#", icon: <FaInstagram />, color: "from-pink-500 to-purple-500" },
    { name: "LinkedIn", href: "#", icon: <FaLinkedin />, color: "from-blue-600 to-blue-700" },
    { name: "Facebook", href: "#", icon: <FaFacebook />, color: "from-blue-500 to-blue-600" },
    { name: "YouTube", href: "#", icon: <FaYoutube />, color: "from-red-500 to-red-600" },
    { name: "WhatsApp", href: "#", icon: <FaWhatsapp />, color: "from-green-500 to-green-600" }
  ]

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Endereço",
      content: "Rua das Inovações, 123 - Centro\nSão Paulo, SP - 01234-567",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: <FaPhone />,
      title: "Telefone",
      content: "+55 (11) 99999-9999\n+55 (11) 88888-8888",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      content: "contato@lookfuture.com\nsuporte@lookfuture.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaClock />,
      title: "Horário",
      content: "Segunda a Sexta: 9h às 18h\nSábado: 9h às 14h",
      color: "from-purple-500 to-pink-500"
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envio do formulário
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset do formulário
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
    
    setIsSubmitting(false)
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.')
  }

  return (
    <section id="contato" className="relative py-20 bg-gradient-to-b from-background to-background/95 overflow-hidden min-h-screen">
      {/* Background com elementos espaciais */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-1 h-1 bg-primary/30 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-1/3 w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/3 w-1 h-1 bg-primary/50 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-primary/60 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-primary/40 rounded-full animate-bounce"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 w-full">
        {/* Header da seção */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Vamos transformar sua ideia em realidade. Entre em contato conosco!
          </p>
        </div>

        {/* Grid principal */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 w-full">
          {/* Formulário de Contato */}
          <div className="space-y-8">
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Envie sua Mensagem
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    placeholder="Seu nome completo"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Assunto *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-lg text-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="orcamento">Orçamento</option>
                    <option value="parceria">Parceria</option>
                    <option value="duvida">Dúvida</option>
                    <option value="sugestao">Sugestão</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-background/50 border border-border/50 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                    placeholder="Conte-nos sobre seu projeto..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </Button>
              </form>
            </div>
          </div>

          {/* Informações de Contato e Mapa */}
          <div className="space-y-8">
            {/* Informações de Contato */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-all duration-300`}>
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                      <p className="text-muted-foreground text-sm whitespace-pre-line">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Redes Sociais */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Redes Sociais
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`group relative p-4 bg-gradient-to-br ${social.color} rounded-xl flex flex-col items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1`}
                    aria-label={social.name}
                  >
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </div>
                    <span className="text-xs font-medium">{social.name}</span>
                    
                    {/* Efeito de brilho */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mapa do Google */}
        <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Nossa Localização
          </h3>
          
          <GoogleMap 
            address="Rua das Inovações, 123 - Centro, São Paulo, SP"
          />
        </div>
      </div>
    </section>
  )
}
