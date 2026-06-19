import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-24 right-6 md:bottom-8 md:right-8 z-50 w-12 h-12 bg-black text-white rounded-full shadow-lg flex items-center justify-center hover:bg-neutral-800 transition-all duration-300 hover:scale-110"
      aria-label="Yukarı çık"
    >
      <ArrowUp className="w-6 h-6 text-white" />
    </button>
  );
};

export default ScrollToTop;
