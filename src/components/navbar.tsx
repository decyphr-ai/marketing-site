"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const [isOverGreenBanner, setIsOverGreenBanner] = useState(false);

  useEffect(() => {
    const updateNavbarStyle = () => {
      // Find the green banner section (TechCreativitySection)
      const greenBanner = document.querySelector('[data-section="tech-creativity"]');
      if (!greenBanner) return;

      const rect = greenBanner.getBoundingClientRect();
      const navbarHeight = 80; // Approximate navbar height
      
      // Check if navbar is significantly into the green banner
      // Switch only when the green banner has moved up past most of the navbar
      const isOverlapping = rect.top <= navbarHeight * 0.3 && rect.bottom >= navbarHeight * 0.7;
      setIsOverGreenBanner(isOverlapping);
    };

    const onScroll = () => {
      requestAnimationFrame(updateNavbarStyle);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateNavbarStyle);
    updateNavbarStyle(); // Initial check

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateNavbarStyle);
    };
  }, []);
  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 translate-y-0 opacity-100",
        className,
      )}
    >
      {/* Main navbar with dynamic background */}
      <div 
        className={`relative transition-all duration-300 ${
          isOverGreenBanner ? 'bg-white shadow-md' : ''
        }`}
        style={isOverGreenBanner ? {
          // White background when over green banner
          borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        } : {
          // Core glassmorphism: semi-transparent background + blur
          background: 'rgba(255, 255, 255, 0.25)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          
          // Subtle border for definition
          borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
          
          // The fade-out mask effect
          maskImage: 'linear-gradient(to bottom, black 70%, rgba(0,0,0,0.8) 85%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 70%, rgba(0,0,0,0.8) 85%, transparent 100%)',
        }}
      >
      <div className="flex h-16 w-full items-center px-16 pr-16 sm:h-18 sm:px-28 sm:pr-28 lg:px-36 lg:pr-36">
        <div className="flex h-12 items-center gap-3 sm:h-14">
          <Link href="/" className="flex h-12 w-auto items-center gap-2 sm:h-14">
            {/* Logo Image */}
            <Image
              src="/images/logo-1.png"
              alt="Decyphr Logo"
              width={160}
              height={160}
              className="h-8 w-auto sm:h-10"
              priority
            />
            {/* Company Name with hero styling */}
            <div className="flex items-center h-8 sm:h-10">
              <span 
                className="text-lg font-bold whitespace-nowrap sm:text-xl"
                style={{
                  background: `linear-gradient(to bottom, #2E3038, #4a5568)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
                }}
              >
                Decyphr
              </span>
              <span 
                className="text-lg font-bold whitespace-nowrap sm:text-xl ml-1"
                style={{
                  background: `linear-gradient(to bottom, #0d9488, #14b8a6)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
                }}
              >
                AI
              </span>
            </div>
          </Link>
        </div>

        <div className="flex-1" />

        {/* Navigation Links - Desktop (hidden as requested) */}
        <div className="hidden items-center gap-8 lg:flex" />

        {/* Mobile Navigation - hide links */}
        <div className="flex items-center gap-4 lg:hidden">
          <nav className="hidden">
            <Link href="/">Home</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          {/* <Button className="h-7 px-3 text-sm text-white bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800">
            Get Started
          </Button> */}
        </div>
      </div>
      </div>
    </nav>
  );
}
