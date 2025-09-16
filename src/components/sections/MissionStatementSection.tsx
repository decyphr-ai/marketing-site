"use client";

import { useState } from 'react';
import { useEmailSubmission } from '@/hooks/useEmailSubmission';
import { EmailStatus } from '@/types/forms';
import { WaitlistForm } from '@/components/forms/WaitlistForm';
import { AnimatedMissionStatement } from '@/components/animations/AnimatedMissionStatement';
import { GlobeWithVideos } from '@/components/animations/GlobeWithVideos';

export function MissionStatementSection() {
  const [ctaEmail, setCtaEmail] = useState('');
  const [ctaEmailStatus, setCtaEmailStatus] = useState<EmailStatus>('idle');
  const { handleEmailSubmit } = useEmailSubmission();

  const handleCtaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('CTA form submitted with email:', ctaEmail);
    handleEmailSubmit(ctaEmail, setCtaEmailStatus, setCtaEmail);
  };

  return (
    <>
      {/* Mission Statement Section */}
      <section className="relative py-16 lg:py-20 bg-white">
        {/* Top fade gradient overlay */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white via-white/80 to-transparent z-10"></div>
        
        {/* Decorative Elements in the blank space */}
        <div className="absolute top-8 left-1/4 w-2 h-2 bg-teal-200 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute top-16 right-1/3 w-1 h-1 bg-emerald-300 rounded-full animate-ping opacity-30"></div>
        <div className="absolute top-12 left-1/2 w-1.5 h-1.5 bg-teal-300 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute top-20 right-1/4 w-1 h-1 bg-cyan-200 rounded-full animate-ping opacity-35"></div>
        <div className="absolute top-6 left-2/3 w-2 h-2 bg-teal-100 rounded-full animate-pulse opacity-25"></div>
        
        {/* Subtle floating geometric shapes */}
        <div className="absolute top-10 right-1/5 w-8 h-8 border border-teal-200/30 rounded-lg rotate-12 animate-pulse opacity-20"></div>
        <div className="absolute top-18 left-1/6 w-6 h-6 border border-emerald-200/25 rounded-full opacity-15"></div>
        
        {/* Soft gradient orbs */}
        <div className="absolute top-4 right-1/2 w-16 h-16 bg-gradient-to-br from-teal-100/20 to-emerald-100/10 rounded-full blur-sm opacity-30"></div>
        <div className="absolute top-14 left-1/3 w-12 h-12 bg-gradient-to-br from-cyan-100/15 to-teal-100/10 rounded-full blur-sm opacity-25"></div>
        <div className="relative z-20 w-full px-6 md:px-8 lg:px-16 xl:px-24">
          <div className="max-w-7xl mx-auto">
            
            
            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column - Mission Text */}
              <div className="lg:col-span-7 order-2 lg:order-1">
                <div className="space-y-8">
                  {/* Mission Statement */}
                  <div>
                    {/* Our Mission Label */}
                    <div className="flex justify-start -mb-2 sm:-mb-6 lg:-mb-10">
                      <div className="inline-flex items-center gap-3">
                        <div className="h-px w-12 bg-gradient-to-r from-transparent to-teal-500/60"></div>
                        <span className="text-sm uppercase tracking-wider text-teal-600 font-medium">Our Mission</span>
                        <div className="h-px w-12 bg-gradient-to-l from-transparent to-teal-500/60"></div>
                      </div>
                    </div>
                    <AnimatedMissionStatement />
                  </div>
                  
                  {/* Call to Action */}
                  <div className="max-w-lg">
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      Join our waitlist and be among the first to experience the future of Content Globalization.
                    </p>
                    
                    <WaitlistForm
                      email={ctaEmail}
                      setEmail={setCtaEmail}
                      status={ctaEmailStatus}
                      onSubmit={handleCtaSubmit}
                      className="relative z-40"
                      inputClassName="rounded-xl"
                      buttonClassName="rounded-xl"
                    />
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
                  <div className="text-2xl font-bold text-gray-900 mb-1">50%+</div>
                  <div className="text-sm text-gray-600">Revenue Growth</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">$250B+</div>
                  <div className="text-sm text-gray-600">Spent on Influencer Partnerships</div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}
