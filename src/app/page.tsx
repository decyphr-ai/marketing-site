"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

// Social Media Icons Component
function SocialMediaIcons() {
  return (
    <div className="flex items-center justify-center gap-8">
      {/* LinkedIn - Pure Black */}
      <div 
        className="w-16 h-16 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
        style={{
          background: '#000000'
        }}
      >
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      </div>
      
      {/* Instagram - Dark Grey-Blue */}
      <div 
        className="w-16 h-16 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
        style={{
          background: '#334155'
        }}
      >
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.40z"/>
        </svg>
      </div>
      
      {/* X (Twitter) - Dark Teal */}
      <div 
        className="w-16 h-16 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
        style={{
          background: '#115e59'
        }}
      >
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </div>
      
      {/* YouTube - Bright Teal */}
      <div 
        className="w-16 h-16 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
        style={{
          background: '#0f766e'
        }}
      >
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      </div>
    </div>
  );
}

function YouTubePlayer() {
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

function VideoPlayerTarget() {
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [videoOpacity, setVideoOpacity] = useState(0);
  const [shouldShowVideo, setShouldShowVideo] = useState(false);
  const [indicatorOpacity, setIndicatorOpacity] = useState(1);
  const [containerOpacity, setContainerOpacity] = useState(0);
  const [glowOpacity, setGlowOpacity] = useState(0);
  const [videoKey, setVideoKey] = useState(0);
  const [playerPosition, setPlayerPosition] = useState('center'); // 'center' or 'left'

  // Black placeholder video (1x1 pixel black MP4 data URI)
  const blackVideoDataUri = "data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAF5tZGF0AAAA";
  
  const videos = [
    { src: blackVideoDataUri, lang: 'Spanish', color: 'bg-blue-500' },
    { src: blackVideoDataUri, lang: '中文', color: 'bg-red-500' },
    { src: blackVideoDataUri, lang: 'हिंदी', color: 'bg-orange-500' },
    { src: blackVideoDataUri, lang: 'Español', color: 'bg-green-500' },
    { src: blackVideoDataUri, lang: '普通话', color: 'bg-purple-500' }
  ];

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shouldShowTarget = () => {
    if (windowHeight === 0) return false;
    const targetSectionStart = windowHeight * 0.9;
    return scrollY >= targetSectionStart; // Show target as soon as we hit 90%
  };

  const getIndicatorOpacity = () => {
    if (windowHeight === 0) return 1;
    
    // Start fading indicator when scrolling begins, finish fading before player locks
    const fadeStartPoint = windowHeight * 0.3; // Start fading early in scroll
    const fadeEndPoint = windowHeight * 0.8;   // Finish fading before lock-in at 90%
    
    if (scrollY < fadeStartPoint) return 1;
    if (scrollY > fadeEndPoint) return 0;
    
    // Smooth fade between the two points
    const progress = (scrollY - fadeStartPoint) / (fadeEndPoint - fadeStartPoint);
    return 1 - progress;
  };

  useEffect(() => {
    const targetVisible = shouldShowTarget();
    if (targetVisible && !isVisible) {
      setIsVisible(true);
    } else if (!targetVisible) {
      setIsVisible(false);
    }
    
    // Video should show exactly when the target is visible (moving player has disappeared)
    const shouldShow = targetVisible;
    
    if (shouldShow !== shouldShowVideo) {
      setShouldShowVideo(shouldShow);
    }
    
    // Update indicator opacity based on scroll
    const newIndicatorOpacity = getIndicatorOpacity();
    setIndicatorOpacity(newIndicatorOpacity);
    
    // Container fades in smoothly when target becomes visible
    if (targetVisible) {
      // Gradual fade in when target becomes visible
      setTimeout(() => setContainerOpacity(1), 100); // Small delay for smooth transition
    } else {
      setContainerOpacity(0);
    }

    // Check if we should animate player to left
    if (windowHeight > 0 && targetVisible) {
      const additionalScrollThreshold = windowHeight * 0.95; // Only 5% more scroll after lock-in
      const shouldMoveLeft = scrollY >= additionalScrollThreshold;
      
      if (shouldMoveLeft && playerPosition === 'center') {
        setPlayerPosition('left');
      } else if (!shouldMoveLeft && playerPosition === 'left') {
        setPlayerPosition('center');
      }
    }
  }, [isVisible, scrollY, windowHeight, shouldShowVideo, playerPosition]);

  // Show video when target becomes visible (player has locked in)
  useEffect(() => {
    if (shouldShowVideo) {
      // Reset everything when player locks in with gradual fade-in
      setCurrentVideoIndex(0); // Always start with first video
      setVideoKey(prev => prev + 1); // Force video restart
      
      // Video fades in, but glow stays off until player moves left
      setTimeout(() => setVideoOpacity(1), 400); // Video fades in
    } else {
      // Reset video and glow opacity when target disappears
      setVideoOpacity(0);
      setGlowOpacity(0);
    }
  }, [shouldShowVideo]);

  // Control glow based on player position
  useEffect(() => {
    if (playerPosition === 'left') {
      // Glow fades in when player moves to left
      setTimeout(() => setGlowOpacity(1), 200);
    } else {
      // Glow fades out when player returns to center
      setGlowOpacity(0);
    }
  }, [playerPosition]);

  useEffect(() => {
    if (videoOpacity > 0.5) {
      // Auto-advance videos only when video is visible
      const interval = setInterval(() => {
        setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [videoOpacity, videos.length]);

  if (!shouldShowTarget()) return null;

  const currentVideo = videos[currentVideoIndex];

  return (
    <div 
      className="relative transition-all duration-700 ease-out"
      style={{ 
        opacity: containerOpacity,
        transform: playerPosition === 'left' 
          ? `translateX(-${window.innerWidth >= 1024 ? '200px' : window.innerWidth >= 640 ? '150px' : '100px'})`
          : 'translateX(0)',
        marginLeft: playerPosition === 'left' ? '0' : 'auto',
        marginRight: playerPosition === 'left' ? 'auto' : 'auto'
      }}
    >
      {/* Enhanced greenish glow behind player */}
      <div 
        className="absolute -bottom-12 -left-12 w-[500px] h-[400px] transition-opacity duration-700 ease-out"
        style={{ 
          opacity: glowOpacity,
          background: 'radial-gradient(ellipse, rgba(16, 185, 129, 1.0) 0%, rgba(52, 211, 153, 0.9) 25%, rgba(110, 231, 183, 0.7) 50%, rgba(167, 243, 208, 0.4) 75%, transparent 100%)',
          filter: 'blur(60px)',
          zIndex: -1
        }}
      />
      
      {/* Additional subtle glow - top right corner */}
      <div 
        className="absolute -top-8 -right-8 w-[300px] h-[200px] transition-opacity duration-700 ease-out"
        style={{ 
          opacity: glowOpacity * 0.7, // Brighter than before
          background: 'radial-gradient(ellipse, rgba(45, 212, 191, 0.6) 0%, rgba(16, 185, 129, 0.4) 40%, rgba(110, 231, 183, 0.2) 70%, transparent 100%)',
          filter: 'blur(40px)',
          zIndex: -2
        }}
      />
      
      <div 
        className="w-[768px] h-[432px] bg-black rounded-lg overflow-hidden relative z-10"
        style={{
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' // Custom shadow that matches the moving player's final state
        }}
      >
      {/* Always show the scroll indicator content as background */}
      <div 
        className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-br from-teal-50 to-white rounded-lg"
        style={{ 
          opacity: indicatorOpacity,
          transition: 'opacity 0.3s ease-out'
        }}
      >
        <div className="mb-3">
          <svg className="w-10 h-10 text-teal-600 mx-auto animate-bounce" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-1">Don&apos;t believe us?</h3>
        <p className="text-base font-semibold text-teal-600">See for yourself!</p>
        <div className="mt-2 text-xs text-gray-500">
          Scroll down to see our AI in action
        </div>
      </div>

      {/* YouTube-style Video Player UI */}
      <div 
        className="absolute inset-0 transition-opacity duration-500 ease-out"
        style={{ opacity: videoOpacity }}
      >
        {/* Top Navigation Bar */}
        <div className="absolute top-0 left-0 right-0 h-12 bg-black/90 backdrop-blur-sm flex items-center justify-between px-4 z-20">
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              {/* Dark video player background */}
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" fill="#374151"/>
              {/* White play button */}
              <path d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#FFFFFF"/>
            </svg>
            <span className="text-white font-medium text-sm">YouTube</span>
          </div>
          {/* <div className="flex items-center gap-2">
            <button className="p-1.5 hover:bg-white/20 rounded-full transition-colors">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div> */}
        </div>

        {/* Video Content */}
        <div className="absolute inset-0 pt-12 pb-16">
        <video
          key={`${currentVideo.src}-${videoKey}`}
          className="w-full h-full object-cover"
          autoPlay
          muted
          playsInline
        >
          <source src={currentVideo.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Language indicator */}
          <div className="absolute top-4 right-4">
            <div className={`${currentVideo.color} text-white px-2 py-1 rounded text-xs font-semibold shadow-lg`}>
            {currentVideo.lang}
            </div>
          </div>
        </div>
        
        {/* Video Controls Bar - Overlaid on video */}
        <div className="absolute bottom-16 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-30">
          {/* Progress bar at top */}
          <div className="px-4 pt-2 pb-1">
            <div className="h-0.5 bg-white/30 rounded-full cursor-pointer hover:h-1 transition-all duration-150">
              <div className="w-1/4 h-full bg-teal-500 rounded-full relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white rounded-full shadow-sm"></div>
              </div>
            </div>
          </div>
          
          {/* Controls row */}
          <div className="flex items-center justify-between px-4 pb-2">
            {/* Left controls */}
            <div className="flex items-center gap-1">
              {/* Play button */}
              <button className="flex items-center justify-center w-8 h-6 hover:bg-white/10 rounded-sm transition-colors">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </button>
              
              {/* Next button */}
              <button className="flex items-center justify-center w-8 h-6 hover:bg-white/10 rounded-sm transition-colors">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4l12 8-12 8V4zm2 2.5v11L16 12 8 6.5z"/>
                  <path d="M18 4v16h2V4h-2z"/>
                </svg>
              </button>
              
              {/* Volume button */}
              <button className="flex items-center justify-center w-8 h-6 hover:bg-white/10 rounded-sm transition-colors">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                </svg>
              </button>
              
              {/* Time display */}
              <div className="text-white text-xs font-medium ml-2">
                0:01 / 5:48
              </div>
            </div>
            
            {/* Right controls */}
            <div className="flex items-center gap-0">
              {/* Captions (CC) - smaller */}
              <button className="flex items-center justify-center w-6 h-5 bg-gray-600/80 hover:bg-gray-500/80 rounded-sm transition-colors mr-1">
                <span className="text-white text-[10px] font-bold">CC</span>
              </button>
              
              {/* Settings gear with HD badge */}
              <button className="relative flex items-center justify-center w-8 h-6 hover:bg-white/10 rounded-sm transition-colors mr-1">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
                </svg>
                {/* HD badge */}
                <div className="absolute -top-1 -right-1 bg-gray-600 text-white text-[8px] font-bold px-1 py-0.5 rounded-sm leading-none">
                  HD
                </div>
              </button>
              
              {/* Picture in picture */}
              <button className="flex items-center justify-center w-8 h-6 hover:bg-white/10 rounded-sm transition-colors mr-1">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 7h-8v6h8V7zm2-4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14z"/>
                </svg>
              </button>
              
              {/* Theater mode */}
              <button className="flex items-center justify-center w-8 h-6 hover:bg-white/10 rounded-sm transition-colors mr-1">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 6H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H5V8h14v8z"/>
                </svg>
              </button>
              
              {/* Fullscreen */}
              <button className="flex items-center justify-center w-8 h-6 hover:bg-white/10 rounded-sm transition-colors">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Video Title */}
        <div className="absolute bottom-9 left-4 z-20">
          <h3 className="text-white text-base font-semibold mb-0.5">Localized with Decyphr</h3>
        </div>

        {/* Channel Info Bar */}
        <div className="absolute bottom-1 left-0 right-0 h-8 bg-black/95 backdrop-blur-sm flex items-center justify-between px-4 z-20">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo-1.png"
              alt="Decyphr AI Logo"
              width={24}
              height={24}
              className="w-6 h-6 rounded-full"
            />
            <div>
              <div className="text-white font-medium text-xs">Decyphr AI</div>
              <div className="text-gray-400 text-[10px]">1.2M subscribers</div>
            </div>
            <button className="ml-3 px-3 py-1 bg-teal-600 hover:bg-teal-700 text-white text-xs font-medium rounded-full transition-colors">
              Subscribe
            </button>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1 px-2 py-1 bg-white/20 hover:bg-white/30 text-white text-xs rounded-full transition-colors">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-.97A5.25 5.25 0 016.75 18.25v-7.5z" />
              </svg>
              2.3K
            </button>
            <button className="p-1 hover:bg-white/20 rounded-full transition-colors">
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.935-2.186 2.25 2.25 0 00-3.935 2.186z" />
              </svg>
            </button>
          </div>
        </div>

      </div>
      </div>
    </div>
  );
}

function VideoPlayerTargetStats() {
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const targetSectionStart = windowHeight * 0.9;
  const additionalScrollThreshold = windowHeight * 0.95;
  const targetVisible = scrollY >= targetSectionStart;
  const shouldShowStats = windowHeight > 0 && scrollY >= additionalScrollThreshold && targetVisible;

  return (
    <div 
      className="hidden lg:block absolute pointer-events-none transition-all duration-700 ease-out"
      style={{
        top: '50%',
        left: '100%',
        transform: 'translateY(-50%)',
        opacity: shouldShowStats ? 1 : 0,
        transition: 'all 0.7s ease-out'
      }}
    >
      {/* Stats positioned relative to player */}
      <div className="absolute left-8 lg:left-12 xl:left-5 2xl:left-20 top-1/2 transform -translate-y-1/2">
        <AnimatedStats side="right" />
      </div>
    </div>
  );
}

function AnimatedStats({ side }: { side: 'left' | 'right' }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkPlayerState = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      if (windowHeight === 0) return;
      
      // Use the same logic as the video player to determine if player has reached target
      const targetSectionStart = windowHeight * 0.9;
      const hasReachedTarget = scrollY >= targetSectionStart;
      
      if (hasReachedTarget && !isVisible) {
        // Player has locked in - animate stats in immediately
        setIsVisible(true);
      } else if (!hasReachedTarget && isVisible) {
        // Player is moving back up - animate stats out immediately
        setIsVisible(false);
      }
    };

    // Check initial state
    checkPlayerState();
    
    // Listen to scroll changes
    window.addEventListener('scroll', checkPlayerState);
    return () => window.removeEventListener('scroll', checkPlayerState);
  }, [isVisible]);

  const leftStats = [
    {
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="m7.848 8.25 1.536.887M7.848 8.25a3 3 0 1 1-5.196-3 3 3 0 0 1 5.196 3Zm1.536.887a2.165 2.165 0 0 1 1.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 1 1-5.196 3 3 3 0 0 1 5.196-3Zm1.536-.887a2.165 2.165 0 0 0 1.083-1.838c.005-.352.054-.695.14-1.025m-1.223 2.863 2.077-1.199m0-3.328a4.323 4.323 0 0 1 2.068-1.379l5.325-1.628a4.5 4.5 0 0 1 2.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.33 4.33 0 0 0 10.607 12m3.736 0 7.794 4.5-.802.215a4.5 4.5 0 0 1-2.48-.043l-5.326-1.629a4.324 4.324 0 0 1-2.068-1.379M14.343 12l-2.882 1.664" />
        </svg>
      ),
      title: "Seamless Translation"
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
        </svg>
      ),
      title: "Authentic Voice"
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
        </svg>
      ),
      title: "One-Click Magic"
    }
  ];

  const rightStats = [
    {
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "+340% Views"
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3s-4.5 4.03-4.5 9 2.015 9 4.5 9z" />
        </svg>
      ),
      title: "127 Countries"
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
      title: "+850% Engagement"
    }
  ];

  const stats = side === 'left' ? leftStats : rightStats;

  return (
    <div className="space-y-6 w-48">
      {stats.map((stat, index) => {
        // Spread out vertically: move first up, keep middle centered, move last down
        let verticalOffset = 0;
        if (index === 0) verticalOffset = -48; // Move top stat up more
        if (index === 2) verticalOffset = 48;  // Move bottom stat down more
        
        return (
        <div
          key={index}
          className={`
            group relative flex items-center gap-4 px-5 py-4 min-h-16 
            bg-gradient-to-r from-white/95 via-white/90 to-white/85 
            backdrop-blur-md rounded-2xl shadow-lg border border-white/60
            transition-all duration-700 ease-out 
            hover:shadow-xl hover:scale-105 hover:-translate-y-1
            hover:bg-gradient-to-r hover:from-white hover:via-white/98 hover:to-white/95
            ${isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
            }
          `}
          style={{
            transitionDelay: isVisible ? `${(index + 1) * 200}ms` : `${(3 - index) * 150}ms`,
            transform: `translateY(${verticalOffset}px)`,
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)'
          }}
        >
          {/* Subtle gradient border effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-200/30 via-emerald-200/20 to-cyan-200/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          
          {/* Enhanced icon container */}
          <div className="relative flex-shrink-0 w-12 h-12 bg-gradient-to-br from-teal-500 via-teal-600 to-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
            {/* Glowing effect behind icon */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-xl blur-sm opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
            
            {/* Icon with slight glow */}
            <div className="relative z-10 group-hover:scale-110 transition-transform duration-300">
            {stat.icon}
          </div>
            
            {/* Subtle highlight */}
            <div className="absolute top-1 left-1 w-3 h-3 bg-white/30 rounded-full blur-sm" />
          </div>
          
          {/* Content with enhanced typography */}
          <div className="min-w-0 flex-1">
            <div className="font-bold text-gray-900 text-sm leading-snug group-hover:text-gray-800 transition-colors duration-300">
              {stat.title}
          </div>
            {/* Subtle accent line */}
            <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-teal-500 to-emerald-500 transition-all duration-500 mt-1 rounded-full" />
          </div>
          
          {/* Floating sparkle effect on hover */}
          <div className="absolute top-2 right-2 w-1 h-1 bg-teal-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-pulse" />
          <div className="absolute bottom-3 right-4 w-0.5 h-0.5 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 delay-150 group-hover:animate-pulse" />
        </div>
        );
      })}
    </div>
  );
}

function GlobeWithVideos() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  
  // Black placeholder video (1x1 pixel black MP4 data URI)
  const blackVideoDataUri = "data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAF5tZGF0AAAA";
  
  const videos = [
    blackVideoDataUri,
    blackVideoDataUri
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex(prev => (prev + 1) % videos.length);
    }, 5000); // Switch every 5 seconds

    return () => clearInterval(interval);
  }, [videos.length]);

  const globeMask = `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 420 420'%3E%3Cpath stroke='white' stroke-width='26' fill='none' d='M209,15a195,195 0 1,0 2,0z'/%3E%3Cpath stroke='white' stroke-width='18' fill='none' d='m210,15v390m195-195H15'/%3E%3Cpath stroke='white' stroke-width='18' fill='none' d='M59,90a260,260 0 0,0 302,0 m0,240 a260,260 0 0,0-302,0'/%3E%3Cpath stroke='white' stroke-width='18' fill='none' d='M195,20a250,250 0 0,0 0,382 m30,0 a250,250 0 0,0 0-382'/%3E%3C/svg%3E")`;

  return (
    <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] xl:w-[30rem] xl:h-[30rem] opacity-75" id="globe-section">
      <video
        key={currentVideoIndex}
        className="w-full h-full object-cover transition-opacity duration-500"
        autoPlay
        muted
        loop
        playsInline
        style={{
          WebkitMask: globeMask,
          mask: globeMask,
          maskSize: 'contain',
          maskRepeat: 'no-repeat',
          maskPosition: 'center'
        }}
      >
        <source src={videos[currentVideoIndex]} type="video/mp4" />
      </video>
    </div>
  );
}

function AnimatedMissionStatement() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0); // 0 = mission statement, 1 = more reach
  const [isVisible, setIsVisible] = useState(true);
  const [animationStarted, setAnimationStarted] = useState(false);
  
  // Mission statement phrases to flash - continuous line
  const missionPhrases = [
    { words: ["We", "are", "on", "a"], highlight: false },
    { words: ["mission"], highlight: true },
    { words: ["to", "make"], highlight: false },
    { words: ["Language", "Barriers"], highlight: true },
    { words: ["a", "thing", "of", "the", "past", "for"], highlight: false },
    { words: ["Content", "Creators"], highlight: true }
  ];

  // More reach statement parts (0 = before equals, 1 = equals, 2 = after equals)
  const reachParts = [
    "More Out Reach",
    "=", 
    "More Views"
  ];

  const totalMissionPhrases = missionPhrases.length;

  useEffect(() => {
    const interval = setInterval(() => {
      if (!animationStarted) {
        // Start animation after initial delay
        setAnimationStarted(true);
        return;
      }

      if (currentPhase === 0) {
        // Mission statement phase - flash specific phrases
        if (currentPhraseIndex < totalMissionPhrases - 1) {
          setCurrentPhraseIndex(prev => prev + 1);
        } else if (currentPhraseIndex === totalMissionPhrases - 1) {
          // Last phrase is glowing, turn off glow
          setCurrentPhraseIndex(-1); // -1 means no glow
        } else if (currentPhraseIndex === -1) {
          // Finished mission statement (glow is off), start transition
          setIsVisible(false);
          setAnimationStarted(false); // Reset for next phase
          setTimeout(() => {
            setCurrentPhase(1);
            setCurrentPhraseIndex(0);
            setTimeout(() => setIsVisible(true), 200);
          }, 800);
        }
      } else if (currentPhase === 1) {
        // More reach phase - animate in parts
        if (currentPhraseIndex < reachParts.length - 1) {
          setCurrentPhraseIndex(prev => prev + 1);
        } else if (currentPhraseIndex === reachParts.length - 1) {
          // Last part is glowing, turn off glow
          setCurrentPhraseIndex(-1); // -1 means no glow
        } else if (currentPhraseIndex === -1) {
          // Finished reach statement (glow is off), start transition back
          setIsVisible(false);
          setAnimationStarted(false); // Reset for next phase
          setTimeout(() => {
            setCurrentPhase(0);
            setCurrentPhraseIndex(0);
            setTimeout(() => setIsVisible(true), 200);
          }, 800);
        }
      }
    }, 800); // Slower for better phrase visibility

    return () => clearInterval(interval);
  }, [currentPhraseIndex, currentPhase, totalMissionPhrases, reachParts.length, animationStarted]);

  if (currentPhase === 0) {
    // Mission statement - flash specific phrases
    return (
      <div className="w-full mx-auto">
        <div className={`text-left text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-bold tracking-tight mb-4 transition-opacity duration-700 ease-in-out h-[100px] md:h-[110px] lg:h-[200px] flex items-center max-w-none ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`} style={{ lineHeight: '1.1' }}>
          {/* Continuous Line */}
          <div>
            {missionPhrases.map((phrase, phraseIndex) => (
              phrase.words.map((word, wordIndex) => (
                <span
                  key={`${phraseIndex}-${wordIndex}`}
                  className={`inline-block mr-3 transition-all duration-300 ease-in-out text-gray-900 ${
                    phraseIndex === currentPhraseIndex && phrase.highlight
                      ? 'scale-105'
                      : ''
                  }`}
                  style={{
                    textShadow: phraseIndex === currentPhraseIndex && phrase.highlight && animationStarted
                      ? '0 0 20px rgba(20, 184, 166, 0.8), 0 0 40px rgba(20, 184, 166, 0.6), 0 0 60px rgba(20, 184, 166, 0.4)'
                      : 'none'
                  }}
                >
                  {word}
                </span>
              ))
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    // More reach statement - animate in three parts vertically centered
    return (
      <div className="w-full mx-auto">
        <div className={`text-center text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-bold tracking-tight mb-4 transition-opacity duration-700 ease-in-out h-[100px] md:h-[110px] lg:h-[200px] flex flex-col items-center justify-center max-w-none ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`} style={{ lineHeight: '1.1' }}>
          {/* More Out Reach */}
          <div className="mb-2">
            <span
              className={`transition-all duration-300 ease-in-out text-gray-900 ${
                currentPhraseIndex === 0
                  ? 'scale-105'
                  : ''
              }`}
              style={{
                textShadow: currentPhraseIndex === 0 && animationStarted
                  ? '0 0 20px rgba(20, 184, 166, 0.8), 0 0 40px rgba(20, 184, 166, 0.6), 0 0 60px rgba(20, 184, 166, 0.4)'
                  : 'none'
              }}
            >
              More Out Reach
            </span>
          </div>
          
          {/* Equals Sign */}
          <div className="mb-2">
            <span
              className={`transition-all duration-300 ease-in-out text-gray-900 ${
                currentPhraseIndex === 1
                  ? 'scale-105'
                  : ''
              }`}
              style={{
                textShadow: currentPhraseIndex === 1 && animationStarted
                  ? '0 0 20px rgba(20, 184, 166, 0.8), 0 0 40px rgba(20, 184, 166, 0.6), 0 0 60px rgba(20, 184, 166, 0.4)'
                  : 'none'
              }}
            >
              =
            </span>
          </div>
          
          {/* More Views */}
          <div>
            <span
              className={`transition-all duration-300 ease-in-out text-gray-900 ${
                currentPhraseIndex === 2
                  ? 'scale-105'
                  : ''
              }`}
              style={{
                textShadow: currentPhraseIndex === 2 && animationStarted
                  ? '0 0 20px rgba(20, 184, 166, 0.8), 0 0 40px rgba(20, 184, 166, 0.6), 0 0 60px rgba(20, 184, 166, 0.4)'
                  : 'none'
              }}
            >
              More Views
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollIndicatorOpacity, setScrollIndicatorOpacity] = useState(1);
  const [heroEmail, setHeroEmail] = useState('');
  const [heroEmailStatus, setHeroEmailStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  
  // Hero animation states
  const [heroAnimationState, setHeroAnimationState] = useState<'text' | 'transition-to-social' | 'social' | 'transition-to-text'>('text');
  const [cornersVisible, setCornersVisible] = useState(true);
  const [contentVisible, setContentVisible] = useState(true);
  const [ctaEmail, setCtaEmail] = useState('');
  const [ctaEmailStatus, setCtaEmailStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

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

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Fade out scroll indicator over the first 100px of scroll
      const fadeDistance = 100;
      const opacity = Math.max(1 - (scrollY / fadeDistance), 0);
      setScrollIndicatorOpacity(opacity);
      
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleEmailSubmit = async (email: string, type: 'hero' | 'cta') => {
    console.log('Form submitted:', { email, type }); // Debug log
    
    if (!email.trim()) {
      console.log('Empty email, returning early');
      return;
    }

    const setStatus = type === 'hero' ? setHeroEmailStatus : setCtaEmailStatus;
    const setEmailValue = type === 'hero' ? setHeroEmail : setCtaEmail;

    setStatus('loading');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim() }),
      });

      const result = await response.json();
      console.log('API Response:', { status: response.status, result });

      if (response.ok) {
        setStatus('success');
        setEmailValue(''); // Clear the input
        // Reset status after 3 seconds
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        console.error('API Error:', result);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Hero form submitted with email:', heroEmail);
    handleEmailSubmit(heroEmail, 'hero');
  };

  const handleCtaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('CTA form submitted with email:', ctaEmail);
    handleEmailSubmit(ctaEmail, 'cta');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Background System - Only for hero section */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none z-0 h-screen">
        
        {/* Base Cluely-Style Tinted Background */}
        <div className="absolute inset-0">
          {/* Primary sophisticated grey tint - like Cluely */}
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 20%, #e2e8f0 40%, #cbd5e1 60%, #94a3b8 75%, rgba(148, 163, 184, 0.6) 85%, rgba(148, 163, 184, 0.3) 92%, rgba(255, 255, 255, 0.8) 96%, white 100%)'
          }} />
          
          {/* Subtle warm undertone for depth */}
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(135deg, rgba(248, 250, 252, 0.8) 0%, rgba(241, 245, 249, 0.6) 30%, rgba(226, 232, 240, 0.4) 60%, rgba(203, 213, 225, 0.2) 80%, rgba(255, 255, 255, 0.5) 90%, white 100%)'
          }} />
        </div>

        {/* Professional Green Glow Accent System */}
        <div className="absolute inset-0">
          
          {/* Primary Hero Glow - Top Right Quadrant */}
          <div className="absolute -top-32 -right-32 w-[700px] h-[700px]">
            {/* Main emerald glow */}
            <div className="absolute inset-0 w-full h-full rounded-full" style={{
              background: 'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, rgba(52, 211, 153, 0.06) 30%, rgba(110, 231, 183, 0.04) 60%, rgba(167, 243, 208, 0.02) 80%, transparent 100%)',
              filter: 'blur(60px)'
            }} />
            {/* Concentrated center */}
            <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full" style={{
              background: 'radial-gradient(circle, rgba(5, 150, 105, 0.12) 0%, rgba(16, 185, 129, 0.08) 50%, transparent 100%)',
              filter: 'blur(40px)'
            }} />
          </div>

          {/* Secondary Accent - Left Side */}
          <div className="absolute top-1/3 -left-20 w-[500px] h-[500px]">
            <div className="w-full h-full rounded-full" style={{
              background: 'radial-gradient(circle, rgba(6, 182, 212, 0.06) 0%, rgba(34, 197, 94, 0.04) 40%, rgba(52, 211, 153, 0.02) 70%, transparent 100%)',
              filter: 'blur(50px)'
            }} />
          </div>

          {/* Tertiary Accent - Bottom Center */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px]">
            <div className="w-full h-full rounded-full" style={{
              background: 'radial-gradient(ellipse, rgba(45, 212, 191, 0.05) 0%, rgba(94, 234, 212, 0.03) 50%, rgba(153, 246, 228, 0.01) 80%, transparent 100%)',
              filter: 'blur(45px)'
            }} />
          </div>

          {/* Floating Sophisticated Orbs */}
          <div className="absolute top-1/4 right-1/3 w-32 h-32">
            <div className="w-full h-full rounded-full" style={{
              background: 'radial-gradient(circle, rgba(34, 197, 94, 0.08) 0%, rgba(52, 211, 153, 0.04) 60%, transparent 100%)',
              filter: 'blur(25px)'
            }} />
          </div>

          <div className="absolute top-2/3 left-1/4 w-24 h-24">
            <div className="w-full h-full rounded-full" style={{
              background: 'radial-gradient(circle, rgba(16, 185, 129, 0.06) 0%, rgba(45, 212, 191, 0.03) 60%, transparent 100%)',
              filter: 'blur(20px)'
            }} />
          </div>

          <div className="absolute top-1/2 right-1/5 w-20 h-20">
            <div className="w-full h-full rounded-full" style={{
              background: 'radial-gradient(circle, rgba(6, 182, 212, 0.05) 0%, rgba(34, 197, 94, 0.02) 60%, transparent 100%)',
              filter: 'blur(18px)'
            }} />
          </div>

          {/* Ultra-subtle micro accents for richness */}
          <div className="absolute top-1/5 left-1/2 w-16 h-16">
            <div className="w-full h-full rounded-full" style={{
              background: 'radial-gradient(circle, rgba(52, 211, 153, 0.06) 0%, transparent 100%)',
              filter: 'blur(15px)'
            }} />
          </div>

          <div className="absolute bottom-1/3 right-2/5 w-14 h-14">
            <div className="w-full h-full rounded-full" style={{
              background: 'radial-gradient(circle, rgba(45, 212, 191, 0.04) 0%, transparent 100%)',
              filter: 'blur(12px)'
            }} />
          </div>
        </div>

        {/* Refined Geometric Accents */}
        <div className="absolute inset-0">
          {/* Delicate geometric elements */}
          <div className="absolute top-1/6 right-1/4 w-48 h-48 rotate-45" style={{ opacity: '0.012' }}>
            <div className="w-full h-full border border-emerald-400/50 rounded-2xl" />
          </div>
          
          <div className="absolute bottom-1/4 left-1/5 w-36 h-36 rotate-12" style={{ opacity: '0.008' }}>
            <div className="w-full h-full border border-teal-400/40 rounded-xl" />
          </div>
          
          {/* Subtle intersecting lines */}
          <div className="absolute top-1/3 left-0 right-0 h-px" style={{ opacity: '0.015' }}>
            <div className="w-full h-full bg-gradient-to-r from-transparent via-emerald-400/30 via-teal-400/20 to-transparent" />
          </div>
          
          <div className="absolute top-2/3 left-0 right-0 h-px" style={{ opacity: '0.01' }}>
            <div className="w-full h-full bg-gradient-to-r from-transparent via-green-400/25 to-transparent" />
          </div>
        </div>

        {/* Premium Texture Overlays */}
        <div className="absolute inset-0">
          {/* Ultra-fine noise texture */}
          <div className="absolute inset-0" style={{
            opacity: '0.006',
            mixBlendMode: 'overlay',
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }} />
          
          {/* Subtle radial vignette for depth */}
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, transparent 60%, rgba(0, 0, 0, 0.008) 80%, rgba(0, 0, 0, 0.015) 95%, rgba(0, 0, 0, 0.02) 100%)'
          }} />
        </div>

      </div>

      {/* Bottom Fade - In Front of BG, Behind Content */}
      <div className="absolute top-1/2 left-0 right-0 bottom-0 pointer-events-none z-5" style={{
        background: 'linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.5) 40%, rgba(255, 255, 255, 0.8) 65%, white 85%)'
      }} />

      {/* Ensure rest of page has white background */}
      <div className="relative z-10">
        {/* Hero Section - Full Viewport */}
        <section className="relative h-screen flex items-center justify-center pb-40">
        
        {/* Hero Content */}
        <div className="relative w-full px-16 pr-16 sm:px-28 sm:pr-28 lg:px-36 lg:pr-36 z-20">
          <div className="mx-auto max-w-4xl flex justify-center">
            <div className="max-w-2xl">
              {/* Main headline */}
              <div className="relative">
                {/* Fixed height container to prevent layout shifts */}
                <div className="h-48 sm:h-56 lg:h-64 xl:h-72 relative flex items-center justify-center">
                  {/* Corners - Always present when content is visible */}
                  {/* Top-left green corner */}
                  <div 
                    className="absolute transition-all duration-500 ease-out z-10"
                    style={{
                      top: (isLoaded && cornersVisible) ? (
                        heroAnimationState === 'social' || heroAnimationState === 'transition-to-social' 
                          ? 'calc(50% - 80px)' // Closer positioning for social icons
                          : '20px' // Closer positioning for text
                      ) : '50%',
                      left: (isLoaded && cornersVisible) ? (
                        heroAnimationState === 'social' || heroAnimationState === 'transition-to-social'
                          ? 'calc(50% - 200px)' // Further out positioning for social icons  
                          : '-16px' // Full positioning for text
                      ) : '50%',
                      transform: (isLoaded && cornersVisible) ? 'translate(0, 0)' : 'translate(-50%, -50%)',
                      opacity: (isLoaded && cornersVisible) ? 1 : 0
                    }}
                  >
                    <div className="w-8 h-8">
                      {/* Vertical line */}
                      <div 
                        className="absolute top-0 left-0 w-1 h-8 transition-all duration-500 ease-out"
                        style={{
                          background: 'linear-gradient(to bottom, #0d9488, #14b8a6)',
                          borderRadius: '0 0 2px 2px',
                          transform: (isLoaded && cornersVisible) ? 'scaleY(1)' : 'scaleY(0)',
                          transformOrigin: 'top'
                        }}
                      />
                      {/* Horizontal line */}
                      <div 
                        className="absolute top-0 left-0 w-8 h-1 transition-all duration-500 ease-out"
                        style={{
                          background: 'linear-gradient(to right, #0d9488, #14b8a6)',
                          borderRadius: '0 2px 2px 0',
                          transform: (isLoaded && cornersVisible) ? 'scaleX(1)' : 'scaleX(0)',
                          transformOrigin: 'left'
                        }}
                      />
                    </div>
                  </div>

                  {/* Bottom-right black corner */}
                  <div 
                    className="absolute transition-all duration-500 ease-out z-10"
                    style={{
                      bottom: (isLoaded && cornersVisible) ? (
                        heroAnimationState === 'social' || heroAnimationState === 'transition-to-social'
                          ? 'calc(50% - 80px)' // Closer positioning for social icons
                          : '20px' // Closer positioning for text
                      ) : '50%',
                      right: (isLoaded && cornersVisible) ? (
                        heroAnimationState === 'social' || heroAnimationState === 'transition-to-social'
                          ? 'calc(50% - 200px)' // Further out positioning for social icons
                          : '-16px' // Full positioning for text  
                      ) : '50%',
                      transform: (isLoaded && cornersVisible) ? 'translate(0, 0)' : 'translate(50%, 50%)',
                      opacity: (isLoaded && cornersVisible) ? 1 : 0
                    }}
                  >
                    <div className="w-8 h-8">
                      {/* Vertical line */}
                      <div 
                        className="absolute bottom-0 right-0 w-1 h-8 transition-all duration-500 ease-out"
                        style={{
                          background: 'linear-gradient(to top, #2E3038, #4a5568)',
                          borderRadius: '2px 2px 0 0',
                          transform: (isLoaded && cornersVisible) ? 'scaleY(1)' : 'scaleY(0)',
                          transformOrigin: 'bottom'
                        }}
                      />
                      {/* Horizontal line */}
                      <div 
                        className="absolute bottom-0 right-0 w-8 h-1 transition-all duration-500 ease-out"
                        style={{
                          background: 'linear-gradient(to left, #2E3038, #4a5568)',
                          borderRadius: '2px 0 0 2px',
                          transform: (isLoaded && cornersVisible) ? 'scaleX(1)' : 'scaleX(0)',
                          transformOrigin: 'right'
                        }}
                      />
                    </div>
                  </div>

                  {/* Conditional Content Based on Animation State */}
                  {(heroAnimationState === 'text' || heroAnimationState === 'transition-to-text') && (
                    <div className="relative w-full">

                      <h1 
                        className="text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl transition-all duration-500 ease-out"
                        style={{
                          opacity: (isLoaded && contentVisible) ? 1 : 0,
                          transform: (isLoaded && contentVisible) ? 'translateY(0)' : 'translateY(20px)'
                        }}
                      >
                  <span 
                    className="block transition-all duration-1000 ease-out flex items-center"
                    style={{
                      transform: (isLoaded && contentVisible) ? 'translateX(0)' : 'translateX(-30px)',
                      opacity: (isLoaded && contentVisible) ? 1 : 0,
                      transitionDelay: '0.3s'
                    }}
                  >
                    <span
                      style={{
                        background: `linear-gradient(to bottom, #2E3038, #4a5568)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
                      }}
                    >
                      {/* "O" replaced with globe icon */}
                      <svg 
                        className="inline w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-1 align-baseline" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 420 420" 
                        fill="none"
                        style={{
                          verticalAlign: 'baseline',
                          transform: 'translateY(0.05em)',
                          filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))'
                        }}
                      >
                        <defs>
                          <linearGradient id="textGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#2E3038" />
                            <stop offset="100%" stopColor="#4a5568" />
                          </linearGradient>
                        </defs>
                        <path strokeWidth="26" stroke="url(#textGradient)" d="M209,15a195,195 0 1,0 2,0z"/>
                        <path strokeWidth="18" stroke="url(#textGradient)" d="m210,15v390m195-195H15M59,90a260,260 0 0,0 302,0 m0,240 a260,260 0 0,0-302,0M195,20a250,250 0 0,0 0,382 m30,0 a250,250 0 0,0 0-382"/>
                      </svg>ur World,
                    </span>
                  </span>
                  <span 
                    className="block transition-all duration-1000 ease-out"
                    style={{
                      background: `linear-gradient(to bottom, #0d9488, #14b8a6)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
                      transform: (isLoaded && contentVisible) ? 'translateX(0)' : 'translateX(30px)',
                      opacity: (isLoaded && contentVisible) ? 1 : 0,
                      transitionDelay: '0.5s'
                    }}
                  >
                    Your Audience
                  </span>
                    </h1>
                  </div>
                )}

                  {/* Social Media Icons View */}
                  {(heroAnimationState === 'social' || heroAnimationState === 'transition-to-social') && (
                    <div 
                      className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out"
                      style={{
                        opacity: (isLoaded && contentVisible) ? 1 : 0,
                        transform: (isLoaded && contentVisible) ? 'translateY(0)' : 'translateY(20px)'
                      }}
                    >
                      <SocialMediaIcons />
                    </div>
                  )}
                </div>
                
                {/* Subtle dividing line - Always visible */}
                <div className="mt-5 w-24 h-px bg-teal-500"></div>
                
                {/* Subheadline - Always visible */}
                <p className="mt-4 text-lg leading-8 text-gray-600 sm:text-xl lg:text-2xl max-w-2xl">
                  Decyphr is an AI video translation tool that turns your content into perfectly localized videos for any audience, anywhere.
                </p>
                
                {/* CTA section with button and input - Always visible */}
                <form onSubmit={handleHeroSubmit} className="mt-10 flex items-center gap-x-6">
                  <Button 
                    type="submit"
                    disabled={heroEmailStatus === 'loading'}
                    className="w-48 px-8 py-0.5 text-lg bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white shadow-lg flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {heroEmailStatus === 'loading' ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Joining...
                      </div>
                    ) : heroEmailStatus === 'success' ? (
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Success!
                      </div>
                    ) : (
                      'Join the Future'
                    )}
                  </Button>
                  <input 
                    type="email" 
                    value={heroEmail}
                    onChange={(e) => setHeroEmail(e.target.value)}
                    placeholder="Enter your email"
                    disabled={heroEmailStatus === 'loading'}
                    className="flex-1 h-10 px-8 py-2 text-lg text-black placeholder-gray-400 rounded-lg focus:outline-none shadow-sm bg-white border-0 disabled:opacity-50"
                    required
                  />
                </form>
                
                {heroEmailStatus === 'error' && (
                  <p className="mt-2 text-sm text-red-600">
                    Something went wrong. Please try again.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* YouTube Player Component */}
        <YouTubePlayer />
        
        {/* Modern Scroll Indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center transition-opacity duration-300 ease-out z-20"
          style={{ opacity: scrollIndicatorOpacity }}
        >
          {/* Scroll text */}
          <div className="text-sm text-gray-600 mb-3 font-medium">Scroll to explore</div>
          
          {/* Animated scroll line */}
          <div className="w-px h-16 bg-gradient-to-b from-gray-400 via-gray-300 to-transparent relative overflow-hidden">
            <div 
              className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-teal-500 to-teal-400 animate-pulse"
              style={{
                animation: 'scroll-line 2s ease-in-out infinite'
              }}
            />
          </div>
          
          {/* Bottom dot */}
          <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 animate-bounce" />
        </div>
        
        {/* Add scroll animation keyframes */}
        <style jsx>{`
          @keyframes scroll-line {
            0% {
              transform: translateY(-100%);
              opacity: 0;
            }
            50% {
              opacity: 1;
            }
            100% {
              transform: translateY(400%);
              opacity: 0;
            }
          }
        `}</style>
      </section>

      {/* Video Translation Demo Section */}
      <section className="relative py-20 lg:py-24 bg-white" id="demo-section">
        {/* Full-screen blur container for heading and subheading */}
        <div className="absolute inset-0 z-20 flex items-start justify-center pt-20 lg:pt-24 pointer-events-none">
          <div 
            className="w-full h-64 flex items-center justify-center relative pointer-events-auto"
            style={{
              background: 'rgba(255, 255, 255, 0.3)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
            }}
          >
            <div className="text-center px-16 pr-16 sm:px-28 sm:pr-28 lg:px-36 lg:pr-36">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl mb-6">
                Watch Your Content 
                <span className="block text-teal-600">Speak Every Language</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                See how Decyphr transforms a single video into multiple language versions, 
                each with authentic voice translation that matches the original speaker&apos;s tone and style.
              </p>
            </div>
          </div>
        </div>

          <div className="relative w-full px-16 pr-16 sm:px-28 sm:pr-28 lg:px-36 lg:pr-36 z-30">
          
          <div className="mx-auto max-w-4xl text-center relative">
            {/* Invisible spacing to maintain layout - moved slightly higher */}
            <div className="h-64 mb-14"></div>
            
            {/* Target container for YouTube player - now behind the blur */}
            <div className="flex justify-center mb-12 relative" id="youtube-target">
              <div className="w-[768px] h-[432px] relative">
                {/* Always reserve space for the bigger player (w-96 * 2.0 = 768px, h-56 * 2.0 = 432px) */}
                <div className="w-full h-full bg-transparent"></div>
                {/* Player appears on top when ready */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <VideoPlayerTarget />
                </div>
                {/* Animated Stats - Show when player moves left - positioned relative to player */}
                <VideoPlayerTargetStats />
              </div>
            </div>
          </div>
            
          {/* 3 Minimalistic boxes below video player */}
          <div className="flex justify-between gap-8 mt-40 mb-16">
              <div className="flex-1 bg-gray-50/80 rounded-lg p-8 text-center">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Voice Cloning</h3>
                <p className="text-gray-600 text-sm">AI preserves the original speaker&apos;s unique voice characteristics</p>
              </div>
              
              <div className="flex-1 bg-gray-100/80 rounded-lg p-8 text-center">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">29 Languages</h3>
                <p className="text-gray-600 text-sm">Support for major world languages with cultural nuances</p>
              </div>
              
              <div className="flex-1 bg-gray-50/80 rounded-lg p-8 text-center">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-teal-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">One Click Magic</h3>
                <p className="text-gray-600 text-sm">Globalize your content with the click of a button</p>
              </div>
            </div>
            
            {/* Dividing Line */}
            <div className="w-full px-2 md:px-4 lg:px-15 lg:pr-15 mt-16 mb-16">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            </div>
            
            {/* Mission Statement Section */}
            <section className="relative py-16 lg:py-20 bg-gradient-to-br from-gray-50/50 via-white to-teal-50/30">
              <div className="w-full px-6 md:px-8 lg:px-16 xl:px-24">
                <div className="max-w-7xl mx-auto">
                  
                  {/* Main Content Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* Left Column - Mission Text */}
                    <div className="lg:col-span-7 order-2 lg:order-1">
                      <div className="space-y-8">
                        {/* Mission Statement */}
                        <div>
                          <AnimatedMissionStatement />
                        </div>
                        
                        {/* Call to Action */}
                        <div className="max-w-lg">
                          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            Join our waitlist and be among the first to experience the future of Content Globalization.
                          </p>
                          
                          <form onSubmit={handleCtaSubmit} className="flex flex-col sm:flex-row gap-4 relative z-40">
                            <input 
                              type="email" 
                              value={ctaEmail}
                              onChange={(e) => setCtaEmail(e.target.value)}
                              placeholder="Enter your email"
                              disabled={ctaEmailStatus === 'loading'}
                              className="flex-1 h-10 px-4 py-2 text-base text-black placeholder-gray-400 rounded-xl border border-gray-200 focus:outline-none shadow-sm bg-white hover:border-gray-300 transition-all duration-200 disabled:opacity-50"
                              required
                            />
                            <Button 
                              type="submit"
                              disabled={ctaEmailStatus === 'loading'}
                              className="px-8 py-2 h-10 text-base bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white shadow-lg rounded-xl font-semibold whitespace-nowrap transition-all duration-200 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                              {ctaEmailStatus === 'loading' ? (
                                <div className="flex items-center gap-2">
                                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                  Joining...
                                </div>
                              ) : ctaEmailStatus === 'success' ? (
                                <div className="flex items-center gap-2">
                                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                                  Success!
                                </div>
                              ) : (
                                'Join Waitlist'
                              )}
                            </Button>
                          </form>
                          
                          {ctaEmailStatus === 'error' && (
                            <p className="mt-2 text-sm text-red-600">
                              Something went wrong. Please try again.
                            </p>
                          )}
                          
        
                        </div>
                      </div>
                    </div>
                    
                    {/* Right Column - Interactive Globe */}
                    <div className="lg:col-span-5 order-1 lg:order-2">
                      <div className="relative flex justify-center lg:justify-end">
                        {/* Background Accent */}
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-100/40 via-emerald-50/30 to-transparent rounded-3xl blur-3xl transform scale-150"></div>
                        
                        {/* Globe Container */}
                        <div className="relative z-10 p-8 transform translate-x-4 lg:translate-x-8">
                          <GlobeWithVideos />
                        </div>
                        
                        {/* Floating Elements */}
                        <div className="absolute top-4 right-4 w-3 h-3 bg-teal-400 rounded-full animate-pulse opacity-60"></div>
                        <div className="absolute bottom-8 left-8 w-2 h-2 bg-emerald-400 rounded-full animate-ping opacity-40"></div>
                        <div className="absolute top-1/2 left-0 w-1 h-1 bg-teal-300 rounded-full animate-pulse opacity-50"></div>
                      </div>
                    </div>
                    
                  </div>
                  
                  {/* Bottom Stats Bar */}
                  <div className="mt-16 pt-8 border-t border-gray-200/60">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                      <div>
                        <div className="text-2xl font-bold text-gray-900 mb-1">29</div>
                        <div className="text-sm text-gray-600">Languages Supported</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900 mb-1">10M+</div>
                        <div className="text-sm text-gray-600">Minutes Translated</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900 mb-1">99.9%</div>
                        <div className="text-sm text-gray-600">Accuracy Rate</div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </section>
          </div>
      </section>

      

      {/* Clean Minimalist Tech vs Creativity Section */}
      <section className="relative py-20 lg:py-60 bg-gradient-to-br from-teal-600 via-teal-700 to-emerald-800">
        {/* Top fade gradient overlay */}
        <div className="absolute top-0 left-0 right-0 h-50 bg-gradient-to-b from-white via-white/60 to-transparent"></div>
        
        <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
          
          {/* Clean Typography Hook */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/40"></div>
              <span className="text-sm uppercase tracking-wider text-teal-100 font-medium">The Perfect Balance</span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/40"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
              Let us handle the <span className="font-bold text-yellow-300">tech</span>
              <br />
              You handle the <span className="font-bold text-pink-300">creativity</span>
            </h2>
          </div>
          
          {/* Simple Two-Column Layout */}
          <div className="grid md:grid-cols-2 gap-16 lg:gap-20 xl:gap-24 mb-16 items-start justify-center">
            
            {/* Tech Column */}
            <div className="space-y-6 w-full max-w-md mx-20">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-yellow-300"></div>
                </div>
                <h3 className="text-xl font-semibold text-white">We Handle</h3>
              </div>
              
              <div className="space-y-4">
                {[
                  { title: 'AI Translation Engine', desc: 'Advanced neural networks for natural translations' },
                  { title: 'Voice Synthesis', desc: 'Preserve your unique voice across languages' },
                  { title: 'Global Distribution', desc: 'Seamless delivery to worldwide platforms' },
                  { title: 'Format Optimization', desc: 'Perfect quality across all devices and formats' }
                ].map((item, index) => (
                  <div key={index} className="border-l-2 border-white/30 pl-6 py-2">
                    <h4 className="font-medium text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-teal-100">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Creativity Column */}
            <div className="space-y-6 w-full max-w-md mx-20">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-pink-300"></div>
                </div>
                <h3 className="text-xl font-semibold text-white">You Focus On</h3>
              </div>
              
              <div className="space-y-4">
                {[
                  { title: 'Storytelling', desc: 'Craft compelling narratives that resonate' },
                  { title: 'Creative Vision', desc: 'Express your unique perspective and style' },
                  { title: 'Content Strategy', desc: 'Plan content that engages your audience' },
                  { title: 'Audience Connection', desc: 'Build authentic relationships with viewers' }
                ].map((item, index) => (
                  <div key={index} className="border-l-2 border-white/30 pl-6 py-2">
                    <h4 className="font-medium text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-teal-100">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
          
          {/* Simple CTA */}
          <div className="text-center">
            <p className="text-lg text-teal-100 mb-8 max-w-xl mx-auto">
              Stop worrying about technical barriers. Start creating content that reaches every corner of the world.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="px-8 py-3 bg-white text-teal-700 hover:bg-gray-50 font-medium shadow-lg">
                Join the Waitlist
              </Button>
              <Button size="lg" variant="outline" className="px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-teal-700 font-medium">
                See Examples
              </Button>
            </div>
          </div>
          
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 bg-white">
        <div className="relative w-full px-16 pr-16 sm:px-28 sm:pr-28 lg:px-36 lg:pr-36">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex items-center gap-2">
            <Image
                src="/images/logo-1.png"
                alt="Decyphr Logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                Decyphr
              </span>
              <span className="text-xl font-bold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">
                AI
              </span>
            </div>
            <p className="text-center text-sm text-gray-500">
              © 2024 Decyphr AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}
