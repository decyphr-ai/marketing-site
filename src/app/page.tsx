"use client";

import { HeroSection } from '@/components/sections/HeroSection';
import { VideoTranslationDemo } from '@/components/sections/VideoTranslationDemo';
import { MissionStatementSection } from '@/components/sections/MissionStatementSection';
import { TechCreativitySection } from '@/components/sections/TechCreativitySection';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <VideoTranslationDemo />
      <MissionStatementSection />
      <TechCreativitySection />
      <Footer />
    </div>
  );
}


