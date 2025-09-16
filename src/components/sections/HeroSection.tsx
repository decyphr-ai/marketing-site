"use client";

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { useHeroAnimation } from '@/hooks/useHeroAnimation';
import { useEmailSubmission } from '@/hooks/useEmailSubmission';
import { SocialMediaIcons } from '@/components/ui/SocialMediaIcons';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';
import { YouTubePlayer } from '@/components/video/YouTubePlayer';
import { HeroBackground } from '@/components/backgrounds/HeroBackground';
import { EmailStatus } from '@/types/forms';

export function HeroSection() {
  const [heroEmail, setHeroEmail] = useState('');
  const [heroEmailStatus, setHeroEmailStatus] = useState<EmailStatus>('idle');
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [scrollIndicatorOpacity, setScrollIndicatorOpacity] = useState(1);
  
  const {
    heroAnimationState,
    cornersVisible,
    contentVisible,
    isLoaded
  } = useHeroAnimation();
  
  const { handleEmailSubmit } = useEmailSubmission();

  // Update screen size and scroll indicator
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const updateScreen = () => setIsSmallScreen(window.innerWidth < 640);
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const fadeDistance = 100;
        const opacity = Math.max(1 - (scrollY / fadeDistance), 0);
        setScrollIndicatorOpacity(opacity);
      };

      updateScreen();
      window.addEventListener('resize', updateScreen);
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('resize', updateScreen);
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Hero form submitted with email:', heroEmail);
    handleEmailSubmit(heroEmail, setHeroEmailStatus, setHeroEmail);
  };

  return (
    <>
      <HeroBackground />
      
      {/* Hero Section - Full Viewport */}
      <section className="relative h-screen flex items-center justify-center pb-8 sm:pb-16 lg:pb-40">
        
        {/* Hero Content */}
        <div className="relative w-full px-4 sm:px-6 md:px-16 lg:px-36 z-20">
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
                          ? (isSmallScreen ? 'calc(50% - 48px)' : 'calc(50% - 80px)')
                          : '20px' // Closer positioning for text
                      ) : '50%',
                      left: (isLoaded && cornersVisible) ? (
                        heroAnimationState === 'social' || heroAnimationState === 'transition-to-social'
                          ? (isSmallScreen ? 'calc(50% - 140px)' : 'calc(50% - 200px)')
                          : '8px' // Keep inside container to provide padding from edge
                      ) : '50%',
                      transform: (isLoaded && cornersVisible) ? 'translate(0, 0)' : 'translate(-50%, -50%)',
                      opacity: (isLoaded && cornersVisible) ? 1 : 0
                    }}
                  >
                    <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10">
                      {/* Vertical line */}
                      <div 
                        className="absolute top-0 left-0 w-1 h-6 sm:h-8 lg:h-10 transition-all duration-500 ease-out"
                        style={{
                          background: 'linear-gradient(to bottom, #0d9488, #14b8a6)',
                          borderRadius: '0 0 2px 2px',
                          transform: (isLoaded && cornersVisible) ? 'scaleY(1)' : 'scaleY(0)',
                          transformOrigin: 'top'
                        }}
                      />
                      {/* Horizontal line */}
                      <div 
                        className="absolute top-0 left-0 w-6 sm:w-8 lg:w-10 h-1 transition-all duration-500 ease-out"
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
                          ? (isSmallScreen ? 'calc(50% - 48px)' : 'calc(50% - 80px)')
                          : '20px' // Closer positioning for text
                      ) : '50%',
                      right: (isLoaded && cornersVisible) ? (
                        heroAnimationState === 'social' || heroAnimationState === 'transition-to-social'
                          ? (isSmallScreen ? 'calc(50% - 140px)' : 'calc(50% - 200px)')
                          : '8px' // Keep inside container to provide padding from edge  
                      ) : '50%',
                      transform: (isLoaded && cornersVisible) ? 'translate(0, 0)' : 'translate(50%, 50%)',
                      opacity: (isLoaded && cornersVisible) ? 1 : 0
                    }}
                  >
                    <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10">
                      {/* Vertical line */}
                      <div 
                        className="absolute bottom-0 right-0 w-1 h-6 sm:h-8 lg:h-10 transition-all duration-500 ease-out"
                        style={{
                          background: 'linear-gradient(to top, #2E3038, #4a5568)',
                          borderRadius: '2px 2px 0 0',
                          transform: (isLoaded && cornersVisible) ? 'scaleY(1)' : 'scaleY(0)',
                          transformOrigin: 'bottom'
                        }}
                      />
                      {/* Horizontal line */}
                      <div 
                        className="absolute bottom-0 right-0 w-6 sm:w-8 lg:w-10 h-1 transition-all duration-500 ease-out"
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
                        className="text-4xl sm:text-6xl lg:text-8xl font-bold tracking-tight leading-tight break-words text-center transition-all duration-500 ease-out"
                        style={{
                          opacity: (isLoaded && contentVisible) ? 1 : 0,
                          transform: (isLoaded && contentVisible) ? 'translateY(0)' : 'translateY(20px)'
                        }}
                      >
                        <span 
                          className="block transition-all duration-1000 ease-out flex items-center justify-center text-center"
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
                              className="inline w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 mx-1 align-baseline" 
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
                      className="absolute inset-0 flex items-center justify-center px-4 transition-all duration-500 ease-out"
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
                <p className="mt-4 text-lg leading-8 text-gray-600 sm:text-xl lg:text-2xl max-w-2xl text-center mx-auto">
                  Decyphr is a content globalization platform that turns your content into perfectly localized videos for any audience, anywhere.
                </p>
                
                {/* CTA section with button and input - Always visible */}
                <form onSubmit={handleHeroSubmit} className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                  <Button 
                    type="submit"
                    disabled={heroEmailStatus === 'loading'}
                    className="w-full sm:w-48 order-2 sm:order-1 px-8 py-0.5 text-lg bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white shadow-lg flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
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
                    ) : heroEmailStatus === 'duplicate' ? (
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        Already Signed Up!
                      </div>
                    ) : heroEmailStatus === 'error' ? (
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        Try Again
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
                    className="order-1 sm:order-2 w-full sm:flex-1 h-10 px-8 py-2 text-lg text-black placeholder-gray-400 rounded-lg focus:outline-none shadow-sm bg-white border-0 disabled:opacity-50"
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
        
        {/* YouTube Player Component - hidden on small screens */}
        <div className="hidden sm:block">
          <YouTubePlayer />
        </div>
        
        <ScrollIndicator opacity={scrollIndicatorOpacity} />
      </section>
    </>
  );
}
