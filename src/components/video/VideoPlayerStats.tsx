"use client";

import { useState, useEffect } from 'react';

export function VideoPlayerTargetStats() {
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
      title: "+34% Views"
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3s-4.5 4.03-4.5 9 2.015 9 4.5 9z" />
        </svg>
      ),
      title: "3x Sponsorships"
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
      title: "+85% Ad Revenue"
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


