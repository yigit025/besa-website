import { useEffect } from 'react';

export const useTheme = () => {
  useEffect(() => {
    // Remove dark mode classes since this is a light-themed website
    document.documentElement.classList.remove('dark');
  }, []);

  return {};
};