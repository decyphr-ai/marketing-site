import { useState, useEffect } from 'react';

type HeroAnimationState = 'text' | 'transition-to-social' | 'social' | 'transition-to-text';

export function useHeroAnimation() {
  const [heroAnimationState, setHeroAnimationState] = useState<HeroAnimationState>('text');
  const [cornersVisible, setCornersVisible] = useState(true);
  const [contentVisible, setContentVisible] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger load animation on mount
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100); // Small delay to ensure smooth animation
    
    return () => clearTimeout(timer);
  }, []);

  // Hero animation loop
  useEffect(() => {
    if (!isLoaded) return;

    const runAnimationCycle = () => {
      // Start with text for 9 seconds
      setTimeout(() => {
        // Begin transition to social
        setHeroAnimationState('transition-to-social');
        setCornersVisible(false);
        setContentVisible(false);
        
        setTimeout(() => {
          // Show social icons
          setHeroAnimationState('social');
          setCornersVisible(true);
          setContentVisible(true);
          
          setTimeout(() => {
            // Begin transition back to text
            setHeroAnimationState('transition-to-text');
            setCornersVisible(false);
            setContentVisible(false);
            
            setTimeout(() => {
              // Show text again
              setHeroAnimationState('text');
              setCornersVisible(true);
              setContentVisible(true);
            }, 500); // 0.5s transition
          }, 5000); // 5s of social icons
        }, 500); // 0.5s transition
      }, 9000); // 9s of text
    };

    // Start the first cycle after initial load
    const initialDelay = setTimeout(runAnimationCycle, 2000); // Wait 2s after load

    // Set up recurring cycles
    const interval = setInterval(runAnimationCycle, 15000); // 9s + 0.5s + 5s + 0.5s = 15s total

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, [isLoaded]);

  return {
    heroAnimationState,
    cornersVisible,
    contentVisible,
    isLoaded
  };
}


