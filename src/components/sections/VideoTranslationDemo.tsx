"use client";

import { useState } from 'react';
import { VideoPlayerTarget } from '@/components/video/VideoPlayerTarget';
import { VideoPlayerTargetStats } from '@/components/video/VideoPlayerStats';

export function VideoTranslationDemo() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
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
          </div>
        </div>
      </div>

      <div className="relative w-full px-4 sm:px-28 lg:px-36 z-30">
        <div className="mx-auto max-w-4xl text-center relative">
          {/* Invisible spacing to maintain layout - moved slightly higher */}
          <div className="h-64 mb-14"></div>
          
          {/* Target container for YouTube player - now behind the blur */}
          <div className="flex justify-center mb-12 relative" id="youtube-target">
            <div className="w-full max-w-[768px] aspect-video relative">
              {/* Always reserve space for the bigger player (w-96 * 2.0 = 768px, h-56 * 2.0 = 432px) */}
              <div className="w-full h-full bg-transparent"></div>
              {/* Player appears on top when ready */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* On small screens, render a simple video directly */}
                <div className="block sm:hidden w-full h-full">
                  <video
                    className="w-full h-full object-cover rounded-xl shadow-2xl"
                    src="https://fxyqvekxgrilminh.public.blob.vercel-storage.com/videos/My%20Movie%2069.mp4"
                    muted
                    autoPlay
                    loop
                    playsInline
                    controls
                  />
                </div>
                {/* On larger screens, render the animated target */}
                <div className="hidden sm:block w-full h-full">
                  <VideoPlayerTarget />
                </div>
              </div>
              {/* Animated Stats - Show when player moves left - positioned relative to player */}
              <VideoPlayerTargetStats />
            </div>
          </div>
        </div>
        
        {/* 3 Minimalistic boxes below video player */}
        <div className="hidden md:flex justify-between gap-8 mt-40 mb-16">
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
        
        {/* FAQ Accordion Section */}
        <div className="space-y-1 mt-16 -mb-12">
                  {/* Question 1 */}
                  <div className={`transition-all duration-300 ease-in-out ${
                    openFaq === 1 ? 'mb-0' : 'mb-1'
                  }`}>
                    <button
                      className="w-full px-8 py-6 text-left bg-transparent hover:bg-gray-50/50 transition-colors duration-300 flex items-center justify-between border-b border-gray-200/60"
                      onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
                    >
                      <span className="text-lg font-medium text-gray-900">Why choose Decyphr?</span>
                      <svg
                        className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                          openFaq === 1 ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      openFaq === 1 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="px-8 py-6 bg-gray-50/30">
                        <p className="text-gray-600 leading-relaxed text-base">
                          Decyphr is built specifically for content creators, by creators who understand your challenges. 
                          Unlike generic translation tools, we focus exclusively on the unique needs of content creators - 
                          preserving your authentic voice, maintaining cultural nuances, and ensuring your personality 
                          shines through in every language. We&apos;re the only platform designed from the ground up for creators.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Question 2 */}
                  <div className={`transition-all duration-300 ease-in-out ${
                    openFaq === 2 ? 'mb-0' : 'mb-1'
                  } ${openFaq === 1 ? 'mt-6' : 'mt-1'}`}>
                    <button
                      className="w-full px-8 py-6 text-left bg-transparent hover:bg-gray-50/50 transition-colors duration-300 flex items-center justify-between border-b border-gray-200/60"
                      onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
                    >
                      <span className="text-lg font-medium text-gray-900">How will it benefit me?</span>
                      <svg
                        className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                          openFaq === 2 ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      openFaq === 2 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="px-8 py-6 bg-gray-50/30">
                        <p className="text-gray-600 leading-relaxed text-base">
                          With Decyphr, you&apos;ll dramatically expand your reach by making your content accessible to 
                          global audiences in 29+ languages. This means more outreach, significantly more views, and 
                          ultimately more revenue streams. Transform your single-language content into a global brand 
                          and unlock new monetization opportunities across different markets and cultures.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Question 3 */}
                  <div className={`transition-all duration-300 ease-in-out ${
                    openFaq === 3 ? 'mb-0' : 'mb-1'
                  } ${(openFaq === 1 || openFaq === 2) ? 'mt-6' : 'mt-1'}`}>
                    <button
                      className="w-full px-8 py-6 text-left bg-transparent hover:bg-gray-50/50 transition-colors duration-300 flex items-center justify-between border-b border-gray-200/60"
                      onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
                    >
                      <span className="text-lg font-medium text-gray-900">When will Decyphr go live?</span>
                      <svg
                        className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
                          openFaq === 3 ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      openFaq === 3 ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="px-8 py-6 bg-gray-50/30">
                        <p className="text-gray-600 leading-relaxed text-base">
                          We&apos;re working hard to bring Decyphr to you as soon as possible! Our team is in the final 
                          stages of development and testing to ensure we deliver the best possible experience. 
                          As a waitlist member, you&apos;ll be among the first to know when we launch and get early 
                          access to the platform. Stay tuned for updates!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
      </div>
    </section>
  );
}
