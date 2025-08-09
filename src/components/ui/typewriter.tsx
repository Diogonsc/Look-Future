import { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
  repeat?: boolean;
  repeatInterval?: number;
}

export function Typewriter({ 
  text, 
  speed = 100, 
  delay = 0, 
  className = "",
  onComplete,
  repeat = false,
  repeatInterval = 5000
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const resetAnimation = () => {
    setDisplayText('');
    setCurrentIndex(0);
    setIsTyping(false);
    setShowCursor(true);
  };

  // Reset quando o texto muda
  useEffect(() => {
    resetAnimation();
  }, [text]);

  useEffect(() => {
    if (delay > 0) {
      const delayTimer = setTimeout(() => {
        setIsTyping(true);
      }, delay);
      return () => clearTimeout(delayTimer);
    } else {
      setIsTyping(true);
    }
  }, [delay]);

  useEffect(() => {
    if (!isTyping) return;

    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else {
      // Esconde o cursor quando terminar
      setTimeout(() => {
        setShowCursor(false);
        onComplete?.();
        
        // Se repeat estiver ativado, reinicia a animação após o intervalo
        if (repeat) {
          setTimeout(() => {
            resetAnimation();
            // Inicia a nova animação após o delay
            setTimeout(() => {
              setIsTyping(true);
            }, delay);
          }, repeatInterval - 1000); // Subtrai 1 segundo do intervalo para compensar o tempo do cursor
        }
      }, 1000);
    }
  }, [currentIndex, text, speed, isTyping, onComplete, repeat, repeatInterval, delay]);

  return (
    <span className={className}>
      {displayText}
      {showCursor && <span className="animate-pulse text-primary">|</span>}
    </span>
  );
}
