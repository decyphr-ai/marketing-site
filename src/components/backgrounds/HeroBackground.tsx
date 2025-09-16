"use client";

export function HeroBackground() {
  return (
    <>
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
    </>
  );
}


