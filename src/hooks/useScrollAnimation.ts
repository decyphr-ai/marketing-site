import { useState, useEffect } from 'react';

export function useScrollAnimation() {
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [scrollIndicatorOpacity, setScrollIndicatorOpacity] = useState(1);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Fade out scroll indicator over the first 100px of scroll
      const fadeDistance = 100;
      const opacity = Math.max(1 - (currentScrollY / fadeDistance), 0);
      setScrollIndicatorOpacity(opacity);
    };

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    scrollY,
    windowHeight,
    scrollIndicatorOpacity
  };
}


