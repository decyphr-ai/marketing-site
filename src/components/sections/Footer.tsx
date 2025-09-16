"use client";

import Image from "next/image";
import { FooterSocialIcons } from '@/components/ui/SocialMediaIcons';

export function Footer() {
  return (
    <footer className="relative py-16 bg-gray-50">
      <div className="relative w-full px-16 pr-16 sm:px-28 sm:pr-28 lg:px-36 lg:pr-36">
        <div className="max-w-6xl mx-auto">
          
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            
            {/* Company Info */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
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
                <span className="text-xl font-bold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">
                  AI
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Breaking down language barriers with AI-powered content localization. 
                Reach every corner of the world with your message.
              </p>
            </div>

            {/* Quick Links */}
            <div></div>

            {/* Connect */}
            <div className="text-center md:text-left">
              <h3 className="font-semibold text-gray-900 mb-4">Connect With Us</h3>
              <p className="text-gray-600 text-sm mb-4">
                Follow us for updates and behind-the-scenes content
              </p>
              <FooterSocialIcons />
            </div>

          </div>

          {/* Bottom Border */}
          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              
              {/* Copyright */}
              <p className="text-sm text-gray-500">
                © 2024 Decyphr AI. All rights reserved.
              </p>

            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}


