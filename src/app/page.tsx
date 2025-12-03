"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const EARLY_ACCESS_TOTAL = 200;
const MIN_DISPLAYED_COUNT = 73;

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(true);
  const [email, setEmail] = useState('');
  const [emailStatus, setEmailStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [waitlistCount, setWaitlistCount] = useState<number | null>(null);
  const [hasSignedUp, setHasSignedUp] = useState(false);
  const [usingFallback, setUsingFallback] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    async function fetchCount() {
      try {
        const res = await fetch('/api/waitlist/count');
        const data = await res.json();
        if (data.isFallback) {
          setUsingFallback(true);
        }
        setWaitlistCount(data.count);
      } catch {
        setUsingFallback(true);
        setWaitlistCount(MIN_DISPLAYED_COUNT);
      }
    }
    fetchCount();
  }, []);

  const getDisplayedCount = () => {
    if (waitlistCount === null) return null;
    let count = waitlistCount;
    if (count < MIN_DISPLAYED_COUNT) {
      count = MIN_DISPLAYED_COUNT;
    }
    if (usingFallback && hasSignedUp) {
      count += 1;
    }
    return count;
  };

  const displayedCount = getDisplayedCount();
  const spotsRemaining = displayedCount !== null ? Math.max(EARLY_ACCESS_TOTAL - displayedCount, 12) : null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim() || hasSignedUp) return;

    setEmailStatus('loading');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });

      if (response.ok) {
        const data = await response.json();
        setEmailStatus('success');
        setEmail('');
        setHasSignedUp(true);
        if (data.isNew && waitlistCount !== null) {
          setWaitlistCount(waitlistCount + 1);
        }
      } else {
        setEmailStatus('error');
        setTimeout(() => setEmailStatus('idle'), 4000);
      }
    } catch {
      setEmailStatus('error');
      setTimeout(() => setEmailStatus('idle'), 4000);
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 20%, #e2e8f0 50%, #cbd5e1 70%, #94a3b8 85%, #64748b 100%)'
        }} />
        
          <div className="absolute -top-32 -right-32 w-[700px] h-[700px]">
            <div className="absolute inset-0 w-full h-full rounded-full" style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, rgba(52, 211, 153, 0.08) 30%, rgba(110, 231, 183, 0.04) 60%, transparent 100%)',
              filter: 'blur(60px)'
            }} />
          </div>

          <div className="absolute top-1/3 -left-20 w-[500px] h-[500px]">
            <div className="w-full h-full rounded-full" style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, rgba(34, 197, 94, 0.05) 40%, transparent 100%)',
              filter: 'blur(50px)'
            }} />
          </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
          </div>

      {/* Floating Logo */}
      <div className="fixed top-6 left-6 z-50">
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo-1.png"
            alt="Decyphr Logo"
            width={36}
            height={36}
            className="h-9 w-9"
          />
          <span className="text-xl font-bold text-gray-800">Decyphr</span>
          </div>
          </div>

      {/* Main Content */}
      <div className="relative z-10">
        
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-12">
          <div className="max-w-3xl mx-auto text-center">
            
            {/* Headline */}
            <h1 
              className={`text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6 transition-all duration-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="flex items-center justify-center flex-wrap">
                <svg 
                  className="inline w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mr-2" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 420 420" 
                        fill="none"
                  style={{ transform: 'translateY(0.05em)' }}
                      >
                        <defs>
                    <linearGradient id="globeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#2E3038" />
                            <stop offset="100%" stopColor="#4a5568" />
                          </linearGradient>
                        </defs>
                  <path strokeWidth="26" stroke="url(#globeGradient)" d="M209,15a195,195 0 1,0 2,0z"/>
                  <path strokeWidth="18" stroke="url(#globeGradient)" d="m210,15v390m195-195H15M59,90a260,260 0 0,0 302,0 m0,240 a260,260 0 0,0-302,0M195,20a250,250 0 0,0 0,382 m30,0 a250,250 0 0,0 0-382"/>
                </svg>
                <span className="text-gray-800">ur World,</span>
                    </span>
              <span className="block bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
                    Your Audience
                  </span>
                    </h1>

            {/* Subheadline */}
            <p 
              className={`text-xl sm:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto transition-all duration-700 delay-150 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              AI-powered dubbing and lip-sync that sounds like you. Reach billions of new viewers with one click.
            </p>

            {/* Signup Form or Success State */}
            <div 
              className={`transition-all duration-700 delay-300 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {hasSignedUp ? (
                <div className="bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-200 rounded-2xl p-8 max-w-md mx-auto">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-teal-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">You&apos;re on the list!</h3>
                  <p className="text-gray-600">Check your inbox for confirmation. We&apos;ll be in touch soon.</p>
                      </div>
                    ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    disabled={emailStatus === 'loading'}
                    className="flex-1 h-14 px-6 text-lg text-gray-900 placeholder-gray-400 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none bg-white/90 backdrop-blur-sm shadow-lg disabled:opacity-50 transition-colors"
                    required
                  />
                            <Button 
                              type="submit"
                    disabled={emailStatus === 'loading'}
                    className="h-14 px-8 text-lg font-semibold bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 text-white rounded-xl shadow-lg shadow-teal-500/25 disabled:opacity-50 transition-all"
                            >
                    {emailStatus === 'loading' ? (
                                <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Joining...</span>
                                </div>
                              ) : (
                      'Get Early Access'
                              )}
                            </Button>
                </form>
                          )}
                          
              {emailStatus === 'error' && (
                <p className="mt-4 text-red-600 text-sm">Something went wrong. Please try again.</p>
                )}
              </div>
            </div>
        </section>

        {/* Waitlist Hype Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div 
              className={`bg-white/80 backdrop-blur-lg rounded-xl shadow-2xl shadow-gray-900/10 p-8 sm:p-12 transition-all duration-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '400ms', border: '0.5px solid #e5e7eb' }}
            >
              <div className="grid md:grid-cols-3 gap-8 text-center">
                {/* Waitlist Count */}
                <div className="space-y-2">
                  <div className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-teal-600 to-emerald-500 bg-clip-text text-transparent">
                    {displayedCount !== null ? displayedCount.toLocaleString() : '—'}
          </div>
                  <p className="text-gray-600 font-medium">People on the waitlist</p>
        </div>
        
                {/* Spots Remaining */}
                <div className="space-y-2">
                  <div className="text-5xl sm:text-6xl font-bold text-gray-900">
                    {spotsRemaining !== null ? spotsRemaining : '—'}
            </div>
                  <p className="text-gray-600 font-medium">Early access spots left</p>
        </div>

                {/* First Month Free */}
                <div className="space-y-2">
                  <div className="text-5xl sm:text-6xl font-bold text-amber-500">
                    FREE
                  </div>
                  <p className="text-gray-600 font-medium">First month for early adopters</p>
            </div>
          </div>
            
              {/* Urgency Bar */}
              <div className="mt-10">
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>Early access progress</span>
                  <span>{displayedCount !== null ? Math.round((displayedCount / EARLY_ACCESS_TOTAL) * 100) : 0}% claimed</span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-teal-500 to-emerald-400 rounded-full transition-all duration-1000"
                    style={{ width: `${displayedCount !== null ? Math.min((displayedCount / EARLY_ACCESS_TOTAL) * 100, 100) : 0}%` }}
                  />
              </div>
                </div>
              </div>
                </div>
      </section>

        {/* Use Cases Section */}
        <section className="py-24 px-6 bg-gradient-to-b from-transparent via-white/50 to-white">
                <div className="max-w-7xl mx-auto">
                  
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-100 rounded-full px-4 py-1.5 mb-6">
                <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-teal-700">Built for Scale</span>
                        </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                One platform. Every industry.
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Reach 5+ billion people. Turn your content into 29+ languages. All with one upload.
              </p>
                                </div>

            {/* Use Case Cards - 2x2 Grid */}
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
              
              {/* Education */}
              <div className="group relative bg-white rounded-xl overflow-hidden" style={{ border: '0.5px solid #e5e7eb' }}>
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full blur-3xl opacity-40 -translate-y-1/2 translate-x-1/2 group-hover:opacity-60 transition-opacity" />
                <div className="relative p-8 lg:p-10">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                                  </svg>
                                </div>
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">EdTech</span>
                                </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Education & E-Learning</h3>
                  <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                    Transform courses into multi-language experiences. Reach international students while preserving instructor authenticity. No voice actors needed.
                  </p>
                  <div className="mb-5 py-4 border-y border-gray-100">
                    <div className="text-sm text-gray-700 font-medium mb-2">Perfect for:</div>
                    <div className="text-xs text-gray-600 leading-relaxed">Online course creators, universities, and corporate training teams expanding to new markets without multiplying production costs.</div>
                        </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">Course Creators</span>
                    <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">Universities</span>
                    <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">Corporate L&D</span>
                      </div>
                    </div>
                        </div>
                        
              {/* Entertainment */}
              <div className="group relative bg-white rounded-xl overflow-hidden" style={{ border: '0.5px solid #e5e7eb' }}>
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-red-50 to-orange-50 rounded-full blur-3xl opacity-40 -translate-y-1/2 translate-x-1/2 group-hover:opacity-60 transition-opacity" />
                <div className="relative p-8 lg:p-10">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-red-500/20">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                      </svg>
                      </div>
                    <span className="text-xs font-semibold text-red-600 bg-red-50 px-3 py-1 rounded-full">Creators</span>
                    </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Media & Entertainment</h3>
                  <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                    The MrBeast playbook: one upload, 29 languages, billions of new viewers. Keep your authentic voice across every market.
                  </p>
                  <div className="mb-5 py-4 border-y border-gray-100">
                    <div className="text-sm text-gray-700 font-medium mb-2">Perfect for:</div>
                    <div className="text-xs text-gray-600 leading-relaxed">YouTubers, podcasters, and streamers looking to break into international markets without losing their personality or hiring dubbing studios.</div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">YouTube</span>
                    <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">Podcasts</span>
                    <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">Streaming</span>
                      </div>
                      </div>
                      </div>
                  
              {/* Marketing */}
              <div className="group relative bg-white rounded-xl overflow-hidden" style={{ border: '0.5px solid #e5e7eb' }}>
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-50 to-pink-50 rounded-full blur-3xl opacity-40 -translate-y-1/2 translate-x-1/2 group-hover:opacity-60 transition-opacity" />
                <div className="relative p-8 lg:p-10">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-purple-500/20">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46" />
                      </svg>
                    </div>
                    <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">MarTech</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Marketing & Advertising</h3>
                  <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                    Launch global video campaigns in days, not months. Localize testimonials, demos, and UGC at a fraction of traditional costs.
                  </p>
                  <div className="mb-5 py-4 border-y border-gray-100">
                    <div className="text-sm text-gray-700 font-medium mb-2">Perfect for:</div>
                    <div className="text-xs text-gray-600 leading-relaxed">Ad agencies, D2C brands, and e-commerce companies that need to scale video content across markets without hiring separate production teams for each region.</div>
                </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">Agencies</span>
                    <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">D2C Brands</span>
                    <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">E-commerce</span>
              </div>
          </div>
            </div>
            
              {/* Enterprise */}
              <div className="group relative bg-white rounded-xl overflow-hidden" style={{ border: '0.5px solid #e5e7eb' }}>
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-full blur-3xl opacity-40 -translate-y-1/2 translate-x-1/2 group-hover:opacity-60 transition-opacity" />
                <div className="relative p-8 lg:p-10">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-teal-500/20">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                      </svg>
          </div>
                    <span className="text-xs font-semibold text-teal-600 bg-teal-50 px-3 py-1 rounded-full">Enterprise</span>
                </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Corporate & Enterprise</h3>
                  <p className="text-gray-600 text-sm mb-5 leading-relaxed">
                    Scale executive communications and training globally. Enterprise-ready security. Deploy to 50+ countries from a single upload.
                  </p>
                  <div className="mb-5 py-4 border-y border-gray-100">
                    <div className="text-sm text-gray-700 font-medium mb-2">Perfect for:</div>
                    <div className="text-xs text-gray-600 leading-relaxed">Global organizations needing to deliver consistent training, onboarding, and internal communications across distributed teams in multiple languages.</div>
              </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">HR & L&D</span>
                    <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">Internal Comms</span>
                    <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">Global Teams</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stats Bar */}
            <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-xl p-8 lg:p-10" style={{ border: '0.5px solid #374151' }}>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                <div className="text-center lg:border-r lg:border-gray-700">
                  <div className="text-3xl lg:text-4xl font-bold text-teal-400 mb-1">29+</div>
                  <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">Languages</div>
                </div>
                <div className="text-center lg:border-r lg:border-gray-700">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-1">5B+</div>
                  <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">Potential Reach</div>
              </div>
                <div className="text-center lg:border-r lg:border-gray-700">
                  <div className="text-3xl lg:text-4xl font-bold text-emerald-400 mb-1">1 Click</div>
                  <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">To Go Global</div>
                  </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-1">AI-Powered</div>
                  <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">Voice & Lip-Sync</div>
                </div>
              </div>
            </div>
            
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 px-6 bg-gradient-to-br from-teal-600 via-teal-700 to-emerald-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 via-transparent to-emerald-600/20" />
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to go global?
            </h2>
            <p className="text-xl text-teal-100 mb-10 max-w-xl mx-auto">
              Join {displayedCount !== null ? displayedCount.toLocaleString() : 'hundreds of'} others who are already on the waitlist.
            </p>

            {hasSignedUp ? (
              <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-8 py-4 text-white">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="text-lg font-medium">You&apos;re already on the list!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  disabled={emailStatus === 'loading'}
                  className="flex-1 h-14 px-6 text-lg text-gray-900 placeholder-gray-400 rounded-xl border-0 focus:ring-2 focus:ring-white/50 focus:outline-none bg-white shadow-lg disabled:opacity-50"
                  required
                />
              <Button 
                type="submit"
                  disabled={emailStatus === 'loading'}
                  className="h-14 px-8 text-lg font-semibold bg-white text-teal-700 hover:bg-gray-50 rounded-xl shadow-lg disabled:opacity-50 transition-all"
                >
                  {emailStatus === 'loading' ? 'Joining...' : 'Join Waitlist'}
              </Button>
            </form>
            )}

            <p className="mt-6 text-teal-200 text-sm">
              First month free for early access members
            </p>
        </div>
      </section>
      </div>
    </div>
  );
}


