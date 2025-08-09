import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';
import { Card, CardContent } from '@/components/ui/card';

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isVisible] = useState(true);
  const [isOnline, setIsOnline] = useState(false);

  // Função para verificar se está no horário de atendimento
  const checkBusinessHours = () => {
    const now = new Date();
    const dayOfWeek = now.getDay(); // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const currentTime = hour + minutes / 60;

    // Segunda a sexta: 10:00 - 17:00
    if (dayOfWeek >= 1 && dayOfWeek <= 5) {
      return currentTime >= 10 && currentTime < 17;
    }
    
    // Domingo: fechado
    return false;
  };

  useEffect(() => {
    // Verificar status online ao carregar
    setIsOnline(checkBusinessHours());

    // Verificar status a cada minuto
    const interval = setInterval(() => {
      setIsOnline(checkBusinessHours());
    }, 60000); // 1 minuto

    // Show tooltip after 3 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);

    // Auto-hide tooltip after 10 seconds
    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 13000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
      clearInterval(interval);
    };
  }, []);

  const handleWhatsAppClick = () => {
    let message;
    
    if (isOnline) {
      message = 'Olá! Gostaria de saber mais sobre os serviços da Look Future. Pode me ajudar com um projeto digital?';
    } else {
      message = 'Olá! Gostaria de saber mais sobre os serviços da Look Future. Aguardo seu retorno para conversarmos sobre meu projeto digital.';
    }
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/+5521999999999?text=${encodedMessage}`, '_blank');
    setShowTooltip(false);
  };

  const handleCloseTooltip = () => {
    setShowTooltip(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  };

  if (!isVisible) return null;

  return (
    <>
      {/* WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleWhatsAppClick}
          onKeyDown={(e) => handleKeyDown(e, handleWhatsAppClick)}
          className={`whatsapp-btn ${
            isOnline 
              ? 'bg-green-500 hover:bg-green-600' 
              : 'bg-gray-500 hover:bg-gray-600'
          } text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center relative focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-500`}
          aria-label={`Falar no WhatsApp com a Look Future. ${isOnline ? 'Online agora' : 'Fora do horário de atendimento'}`}
          aria-describedby="whatsapp-status"
        >
          <FaWhatsapp className="w-8 h-8" aria-hidden="true" />
          <span id="whatsapp-status" className="sr-only">
            {isOnline ? 'Online agora' : 'Fora do horário de atendimento'}
          </span>
        </button>
      </div>

      {/* Tooltip */}
      {showTooltip && (
        <div 
          className="fixed bottom-24 right-6 z-40 animate-slide-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="tooltip-title"
          aria-describedby="tooltip-description"
        >
          <Card className="bg-white shadow-2xl border-0 max-w-sm">
            <CardContent className="p-4 relative">
              <button
                onClick={handleCloseTooltip}
                onKeyDown={(e) => handleKeyDown(e, handleCloseTooltip)}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 rounded"
                aria-label="Fechar mensagem"
              >
                <FaTimes className="w-4 h-4" aria-hidden="true" />
              </button>
              
              <div className="pr-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 ${
                    isOnline ? 'bg-green-500' : 'bg-gray-500'
                  } rounded-full flex items-center justify-center`}>
                    <FaWhatsapp className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <div id="tooltip-title" className="font-semibold text-navy-800">Look Future</div>
                    <div className="text-sm text-gray-600">
                      {isOnline ? 'Online agora' : 'Fora do horário de atendimento'}
                    </div>
                  </div>
                </div>
                
                <p id="tooltip-description" className="text-gray-700 text-sm mb-3">
                  {isOnline ? (
                    '👋 Olá! Precisa de um site moderno ou aplicativo? Vamos transformar sua ideia em realidade digital!'
                  ) : (
                    '📝 Olá! Tem um projeto digital em mente? Deixe sua mensagem que retornarei assim que possível para conversarmos sobre sua ideia.'
                  )}
                </p>
                
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                  <div className={`w-2 h-2 ${
                    isOnline ? 'bg-green-400' : 'bg-gray-400'
                  } rounded-full`} aria-hidden="true"></div>
                  <span>
                    {isOnline 
                      ? 'Consultoria gratuita para projetos' 
                      : 'Horário de atendimento: Seg-Sex 10h-17h'
                    }
                  </span>
                </div>
                
                <button
                  onClick={handleWhatsAppClick}
                  onKeyDown={(e) => handleKeyDown(e, handleWhatsAppClick)}
                  className={`w-full ${
                    isOnline 
                      ? 'bg-green-500 hover:bg-green-600' 
                      : 'bg-gray-500 hover:bg-gray-600'
                  } text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-500`}
                  aria-label={isOnline ? 'Conversar sobre meu projeto digital' : 'Deixar mensagem no WhatsApp'}
                >
                  {isOnline ? 'Conversar sobre Projeto' : 'Deixar Mensagem'}
                </button>
              </div>
              
              {/* Tooltip Arrow */}
              <div className="absolute bottom-0 right-8 transform translate-y-full" aria-hidden="true">
                <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default WhatsAppButton;
