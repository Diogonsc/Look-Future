import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Função para verificar se deve mostrar o botão
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Função para rolar para o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollToTop();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-32 right-6 z-50">
      <button
        onClick={scrollToTop}
        onKeyDown={handleKeyDown}
        className="bg-primary hover:bg-primary/90 text-white p-3 rounded-md shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
        aria-label="Voltar ao topo da página"
        aria-describedby="back-to-top-description"
      >
        <FaArrowUp className="w-5 h-5 group-hover:animate-bounce" aria-hidden="true" />
        <span id="back-to-top-description" className="sr-only">
          Clique para voltar ao início da página
        </span>
      </button>
    </div>
  );
};

export default BackToTop; 