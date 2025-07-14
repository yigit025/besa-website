import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    visible && (
      <button
          onClick={scrollToTop}
              className="fixed bottom-6 md:bottom-6 sm:bottom-20 right-6 z-50 p-3 rounded-full bg-besa-blue text-white shadow-lg hover:bg-besa-dark transition duration-300"
                aria-label="Yukarı çık"
      >
          <ArrowUp className="w-5 h-5" />
</button>

    )
  );
};

export default ScrollToTop;
