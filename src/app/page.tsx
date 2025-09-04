import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 lg:pt-24 lg:pb-20">
        {/* Background gradient effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 via-white to-slate-50/80" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-100/40 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-slate-100/60 to-transparent rounded-full blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            {/* Main headline */}
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              <span className="block">Unlock the Power of</span>
              <span className="block bg-gradient-to-r from-cyan-500 to-cyan-600 bg-clip-text text-transparent">
                AI-Driven Insights
              </span>
            </h1>
            
            {/* Subheadline */}
            <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl lg:text-2xl max-w-3xl mx-auto">
              Transform your data into actionable intelligence with Decyphr AI. 
              Our cutting-edge platform makes complex analytics simple, fast, and accessible.
            </p>
            
            {/* CTA buttons */}
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/auth/login">
                <Button size="lg" className="px-8 py-4 text-lg bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white shadow-lg">
                  Get Started Free
                </Button>
              </Link>
              <Link href="/info">
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-gray-300 text-gray-700 hover:bg-gray-50">
                  Learn More
                </Button>
              </Link>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-12 text-center">
              <p className="text-sm text-gray-500 mb-4">Trusted by innovative teams worldwide</p>
              <div className="flex items-center justify-center gap-8 opacity-60">
                <div className="text-gray-400 font-semibold">Company A</div>
                <div className="text-gray-400 font-semibold">Company B</div>
                <div className="text-gray-400 font-semibold">Company C</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to succeed
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Powerful features designed to accelerate your data-driven decisions
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-cyan-100">
                  <svg className="h-8 w-8 text-cyan-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <dt className="text-xl font-semibold leading-7 text-gray-900">Lightning Fast</dt>
                <dd className="mt-1 text-base leading-6 text-gray-600">
                  Process and analyze data in real-time with our optimized infrastructure
                </dd>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-cyan-100">
                  <svg className="h-8 w-8 text-cyan-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                </div>
                <dt className="text-xl font-semibold leading-7 text-gray-900">AI-Powered</dt>
                <dd className="mt-1 text-base leading-6 text-gray-600">
                  Advanced machine learning algorithms uncover insights you never knew existed
                </dd>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-cyan-100">
                  <svg className="h-8 w-8 text-cyan-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <dt className="text-xl font-semibold leading-7 text-gray-900">Secure & Reliable</dt>
                <dd className="mt-1 text-base leading-6 text-gray-600">
                  Enterprise-grade security with 99.9% uptime guarantee
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-cyan-500 to-cyan-600 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to transform your data?
            </h2>
            <p className="mt-4 text-lg text-cyan-100">
              Join thousands of teams already using Decyphr AI to drive better decisions
            </p>
            <div className="mt-8">
              <Link href="/auth/login">
                <Button size="lg" className="px-8 py-4 text-lg bg-white text-cyan-700 hover:bg-gray-50 shadow-lg">
                  Start Your Free Trial
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/images/logo-1.png"
                alt="Decyphr Logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                Decyphr
              </span>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-500 to-cyan-600 bg-clip-text text-transparent">
                AI
              </span>
            </div>
            <p className="text-center text-sm text-gray-500">
              © 2024 Decyphr AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
