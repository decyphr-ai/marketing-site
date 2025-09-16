"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useEmailSubmission } from '@/hooks/useEmailSubmission';
import { EmailStatus } from '@/types/forms';

export function TechCreativitySection() {
  const [ctaEmail, setCtaEmail] = useState('');
  const [ctaEmailStatus, setCtaEmailStatus] = useState<EmailStatus>('idle');
  const { handleEmailSubmit } = useEmailSubmission();

  const handleCtaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('CTA form submitted with email:', ctaEmail);
    handleEmailSubmit(ctaEmail, setCtaEmailStatus, setCtaEmail);
  };

  return (
    <section data-section="tech-creativity" className="relative py-20 lg:py-60 bg-gradient-to-br from-teal-600 via-teal-700 to-emerald-800">
      {/* Subtle animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 via-transparent to-emerald-600/20"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-cyan-600/10 via-transparent to-teal-800/15"></div>
      {/* Top fade gradient overlay */}
      <div className="absolute top-0 left-0 right-0 h-50 bg-gradient-to-b from-white via-white/60 to-transparent"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
        
        {/* Clean Typography Hook */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mt-8 mb-8">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/40"></div>
            <span className="text-sm uppercase tracking-wider text-teal-100 font-medium">The Perfect Balance</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/40"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight break-words">
            Let us handle the <span className="inline-block bg-white px-4 py-1 rounded-lg font-bold text-teal-600 shadow-lg mb-4">tech</span>
            <br />
            You handle the <span className="inline-block bg-white px-4 py-1 rounded-lg font-bold text-teal-600 shadow-lg mt-4">creativity</span>
          </h2>
        </div>
        
        {/* Simple Two-Column Layout */}
        <div className="grid md:grid-cols-2 gap-16 lg:gap-20 xl:gap-24 mb-16 items-start justify-center">
          
          {/* Tech Column */}
          <div className="space-y-8 w-full max-w-md mx-0 sm:mx-10 lg:mx-20 break-words">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-cyan-300"></div>
              </div>
              <h3 className="text-2xl font-semibold text-white">We Handle</h3>
            </div>
            
            <div className="space-y-6">
              {[
                'AI Translation & Voice Synthesis',
                'Global Distribution & Optimization'
              ].map((item, index) => (
                <div key={index} className="border-l-3 border-white/40 pl-8 py-3">
                  <h4 className="text-lg font-medium text-white break-words">{item}</h4>
                </div>
              ))}
            </div>
          </div>
          
          {/* Creativity Column */}
          <div className="space-y-8 w-full max-w-md mx-0 sm:mx-10 lg:mx-20 break-words">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-emerald-300"></div>
              </div>
              <h3 className="text-2xl font-semibold text-white">You Focus On</h3>
            </div>
            
            <div className="space-y-6">
              {[
                'Storytelling & Creative Vision',
                'Content Strategy & Audience'
              ].map((item, index) => (
                <div key={index} className="border-l-3 border-white/40 pl-8 py-3">
                  <h4 className="text-lg font-medium text-white break-words">{item}</h4>
                </div>
              ))}
            </div>
          </div>
          
        </div>
        
        {/* Simple CTA */}
        <div className="relative z-20 text-center">
          <p className="text-lg text-teal-100 mt-25 mb-8 max-w-xl mx-auto">
            Stop worrying about technical barriers. Start creating content that reaches every corner of the world.
          </p>
          
          <form onSubmit={handleCtaSubmit} className="relative z-30 flex flex-col sm:flex-row gap-4 -mb-25 max-w-md mx-auto items-center">
            <div className="flex-1 w-full">
              <input
                type="email"
                value={ctaEmail}
                onChange={(e) => setCtaEmail(e.target.value)}
                placeholder="Enter your email"
                required
                disabled={ctaEmailStatus === 'loading'}
                className="w-full h-10 px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none disabled:opacity-50"
              />
            </div>
            <Button 
              type="submit"
              disabled={ctaEmailStatus === 'loading'}
              className="h-10 px-8 py-2 bg-white text-teal-700 hover:bg-gray-50 font-medium shadow-lg whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {ctaEmailStatus === 'loading' ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-teal-700 border-t-transparent rounded-full animate-spin"></div>
                  Joining...
                </div>
              ) : ctaEmailStatus === 'error' ? (
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  Try Again
                </div>
              ) : (
                'Join Waitlist'
              )}
            </Button>
          </form>
          
          {ctaEmailStatus === 'success' && (
            <p className="mt-4 text-sm text-teal-100">
              Thanks! We&apos;ll be in touch soon.
            </p>
          )}
          
          {ctaEmailStatus === 'duplicate' && (
            <p className="mt-4 text-sm text-yellow-200">
              Already signed up! You&apos;re all set.
            </p>
          )}
          
          {ctaEmailStatus === 'error' && (
            <p className="mt-4 text-sm text-red-300">
              Something went wrong. Please try again.
            </p>
          )}
        </div>
        
      </div>
    </section>
  );
}
