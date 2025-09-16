"use client";

import { useState, useEffect } from 'react';

export function YouTubePlayer() {
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    // Set initial window height
    setWindowHeight(window.innerHeight);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
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

  // Keep hooks order consistent; parent section handles layout for small screens

  const getPlayerState = () => {
    if (windowHeight === 0) {
      // Return default state during SSR
      return {
        isStatic: true,
        isFixed: false,
        hasReached: false,
        scale: 0.7,
        progress: 0,
        topPosition: 'calc(100vh - 150px)',
        opacity: 0
      };
    }
    
    // Calculate the player's current position if it were static
    const heroHeight = windowHeight;
    const playerStaticTop = heroHeight - 150; // Where player sits in hero
    const playerCurrentTop = playerStaticTop - scrollY; // Current position relative to viewport
    
    const viewportMiddle = windowHeight / 2;
    
    // Calculate the exact scroll position where player's center reaches viewport middle
    const triggerScrollPosition = playerStaticTop - viewportMiddle;
    
    // Check if we've scrolled far enough to reach target section
    const targetSectionStart = windowHeight * 0.9;
    const hasReachedTarget = scrollY >= targetSectionStart;
    
    // For the moving phase, only unlock when player's natural position would be below middle
    const shouldBeStatic = playerCurrentTop > viewportMiddle;
    
    if (shouldBeStatic && scrollY < targetSectionStart) {
      // Static phase - player follows natural scroll position (invisible)
      const currentTop = Math.max(playerCurrentTop, 0); // Don't go above viewport
      
      return {
        isStatic: true,
        isFixed: true, // Always use fixed to avoid positioning jumps
        hasReached: false,
        scale: 0.7,
        progress: 0,
        topPosition: `${currentTop}px`,
        opacity: 0
      };
    } else if (!shouldBeStatic && !hasReachedTarget) {
      // Moving phase - player locks at middle and scales (fades in as it grows)
      const movingDistance = targetSectionStart - triggerScrollPosition;
      const currentProgress = (scrollY - triggerScrollPosition) / movingDistance;
      const progress = Math.min(Math.max(currentProgress, 0), 1);
      
      // Calculate opacity based on progress - fade in as player scales up, then fade out near target
      let opacity = Math.min(progress * 1.5, 1); // Fade in faster than scaling
      
      // Fade out in the final 15% of progress before lock-in
      const fadeOutStart = 0.85;
      if (progress > fadeOutStart) {
        const fadeOutProgress = (progress - fadeOutStart) / (1 - fadeOutStart);
        opacity = opacity * (1 - fadeOutProgress); // Fade from current opacity to 0
      }
      
      // In the final 10% of movement, start moving toward target position
      const targetElement = document.getElementById('youtube-target');
      let finalTop = viewportMiddle;
      
      if (targetElement && progress > 0.8) {
        const targetRect = targetElement.getBoundingClientRect();
        const targetCenter = targetRect.top + (targetRect.height / 2);
        const transitionProgress = (progress - 0.8) / 0.2; // 0 to 1 in final 20%
        finalTop = viewportMiddle + ((targetCenter - viewportMiddle) * transitionProgress);
      }
      
      return {
        isStatic: false,
        isFixed: true,
        hasReached: false,
        scale: 0.7 + (1.3 * progress), // Scale from 0.7 to 2.0 (much bigger)
        progress: progress,
        topPosition: `${finalTop}px`,
        opacity: opacity
      };
    } else {
      // Final phase - settled in target section (moving player should disappear)
      return {
        isStatic: false,
        isFixed: false,
        hasReached: true, // Immediately reached when we hit target
        scale: 1.3,
        progress: 1,
        topPosition: 'auto',
        opacity: 1
      };
    }
  };

  const playerState = getPlayerState();

  // Hide the moving player when it reaches target (target component takes over)
  if (playerState.hasReached) {
    return null;
  }

  const getShadowIntensity = () => {
    if (playerState.isStatic) return '0 8px 15px -3px rgba(0, 0, 0, 0.15)'; // Enhanced subtle shadow
    if (playerState.isFixed && !playerState.hasReached) {
      // Much more pronounced shadow during the "pop out" phase, but fade out near target
      const baseIntensity = 0.25 + (playerState.progress * 0.2); // 0.25 to 0.45
      const blur = 30 + (playerState.progress * 40); // 30px to 70px blur
      const spread = 15 + (playerState.progress * 15); // 15px to 30px spread
      const offset = 12 + (playerState.progress * 20); // 12px to 32px offset
      
      // Fade out shadow in the final 20% of progress to match target shadow
      const fadeOutStart = 0.8;
      let intensity = baseIntensity;
      if (playerState.progress > fadeOutStart) {
        const fadeProgress = (playerState.progress - fadeOutStart) / (1 - fadeOutStart);
        // Fade from current intensity to target shadow intensity (0.25 for shadow-2xl equivalent)
        intensity = baseIntensity + (0.25 - baseIntensity) * fadeProgress;
      }
      
      return `0 ${offset}px ${blur}px -${spread}px rgba(0, 0, 0, ${intensity})`;
    }
    return '0 4px 6px -1px rgba(0, 0, 0, 0.1)'; // Default
  };

  return (
    <div 
      className={`youtube-player ${
        playerState.hasReached
          ? 'relative mx-auto z-10'
          : 'fixed left-1/2 z-10'
      }`}
      style={{
        top: playerState.hasReached ? 'auto' : playerState.topPosition,
        transform: playerState.hasReached
          ? `scale(${playerState.scale})` 
          : `translate(-50%, -50%) scale(${playerState.scale})`,
        transformOrigin: 'center',
        transition: playerState.isFixed && !playerState.hasReached 
          ? 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease-out, opacity 0.3s ease-out' 
          : 'none',
        boxShadow: getShadowIntensity(),
        opacity: playerState.opacity || 0
      }}
    >
       {/* Clean player box with YouTube logo */}
       <div className="w-96 h-56 bg-gray-300 rounded-lg overflow-hidden shadow-2xl relative flex items-center justify-center">
         {/* Centered YouTube logo */}
         <svg className="w-20 h-14" viewBox="0 0 24 24" fill="none">
           {/* Green video player background */}
           <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" fill="#14b8a6"/>
           {/* White play button */}
           <path d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#FFFFFF"/>
         </svg>
       </div>
    </div>
  );
}


