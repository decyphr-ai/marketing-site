"use client";

import { Button } from "@/components/ui/button";
import { EmailStatus } from "@/types/forms";

interface WaitlistFormProps {
  email: string;
  setEmail: (email: string) => void;
  status: EmailStatus;
  onSubmit: (e: React.FormEvent) => void;
  placeholder?: string;
  buttonText?: string;
  className?: string;
  inputClassName?: string;
  buttonClassName?: string;
  layout?: 'horizontal' | 'vertical';
  showStatusMessages?: boolean;
}

export function WaitlistForm({
  email,
  setEmail,
  status,
  onSubmit,
  placeholder = "Enter your email",
  buttonText = "Join Waitlist",
  className = "",
  inputClassName = "",
  buttonClassName = "",
  layout = 'horizontal',
  showStatusMessages = true
}: WaitlistFormProps) {
  const layoutClasses = layout === 'vertical' 
    ? "flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
    : "flex flex-col sm:flex-row gap-4";

  const getButtonContent = () => {
    switch (status) {
      case 'loading':
        return (
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            Joining...
          </div>
        );
      case 'success':
        return (
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Success!
          </div>
        );
      case 'duplicate':
        return (
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            Already Signed Up!
          </div>
        );
      case 'error':
        return (
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            Try Again
          </div>
        );
      default:
        return buttonText;
    }
  };

  return (
    <div className={className}>
      <form onSubmit={onSubmit} className={layoutClasses}>
        <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          disabled={status === 'loading'}
          className={`flex-1 h-10 px-4 py-2 text-base text-black placeholder-gray-400 rounded-lg border border-gray-200 focus:outline-none shadow-sm bg-white hover:border-gray-300 transition-all duration-200 disabled:opacity-50 ${inputClassName}`}
          required
        />
        <Button 
          type="submit"
          disabled={status === 'loading'}
          className={`px-8 py-2 h-10 text-base bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white shadow-lg rounded-lg font-medium whitespace-nowrap transition-all duration-200 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed ${buttonClassName}`}
        >
          {getButtonContent()}
        </Button>
      </form>
      
      {showStatusMessages && (
        <>
          {status === 'error' && (
            <p className="mt-2 text-sm text-red-600">
              Something went wrong. Please try again.
            </p>
          )}
        </>
      )}
    </div>
  );
}


