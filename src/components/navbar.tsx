"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);
  const isLandingPage = pathname === "/" || pathname === "/landing";

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <nav
      className={cn(
        "bg-transparent animate-in slide-in-from-top fixed top-0 left-0 right-0 z-50 duration-750",
        className,
      )}
      style={{
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0.4) 80%, rgba(0,0,0,0.2) 90%, rgba(0,0,0,0) 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0.4) 80%, rgba(0,0,0,0.2) 90%, rgba(0,0,0,0) 100%)'
      }}
    >
      <div className="flex h-16 min-w-screen items-center px-16 pr-16 sm:h-18 sm:px-28 sm:pr-28 lg:px-36 lg:pr-36">
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
                  background: `linear-gradient(to bottom, #0891b2, #06b6d4)`,
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

        <div className="hidden items-center gap-6 lg:flex">
          {!isClient ? (
            // Default server-side render (landing page style)
            <>
              <Link href="/info">
                <Button variant="ghost" size="sm" className="text-sm">
                  How It Works
                </Button>
              </Link>
              <Link href="/auth/login">
                <Button size="sm" className="text-sm text-white bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700">
                  Get Started
                </Button>
              </Link>
            </>
          ) : isLandingPage ? (
            <>
              <Link href="/info">
                <Button variant="ghost" size="sm" className="text-sm">
                  How It Works
                </Button>
              </Link>
              <Link href="/auth/login">
                <Button size="sm" className="text-sm text-white bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700">
                  Get Started
                </Button>
              </Link>
            </>
          ) : (
            <>
              <Link href="/">
                <Button variant="ghost" size="lg" className="text-base">
                  Home
                </Button>
              </Link>
              <Link href="/info">
                <Button variant="ghost" size="lg" className="text-base">
                  How It Works
                </Button>
              </Link>
              <Link href="/auth/login">
                <Button size="lg" className="text-base text-white bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700">
                  Get Started
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile buttons for landing page */}
        {(!isClient || isLandingPage) && (
          <div className="flex items-center gap-2 lg:hidden">
            <Link href="/auth/login">
              <Button size="sm" className="px-3 py-2 text-sm text-white bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700">
                Get Started
              </Button>
            </Link>
          </div>
        )}
      </div>

      {/* Gradient accent line */}
      <div className="via-primary/60 pointer-events-none absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent to-transparent" />
    </nav>
  );
}
