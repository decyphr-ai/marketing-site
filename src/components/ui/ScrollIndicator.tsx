"use client";

interface ScrollIndicatorProps {
  opacity: number;
}

export function ScrollIndicator({ opacity }: ScrollIndicatorProps) {
  return (
    <div 
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center transition-opacity duration-300 ease-out z-20"
      style={{ opacity }}
    >
      {/* Scroll text */}
      <div className="text-sm text-gray-600 mb-3 font-medium">Scroll to explore</div>
      
      {/* Animated scroll line */}
      <div className="w-px h-16 bg-gradient-to-b from-gray-400 via-gray-300 to-transparent relative overflow-hidden">
        <div 
          className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-teal-500 to-teal-400 animate-pulse"
          style={{
            animation: 'scroll-line 2s ease-in-out infinite'
          }}
        />
      </div>
      
      {/* Bottom dot */}
      <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 animate-bounce" />
      
      {/* Add scroll animation keyframes */}
      <style jsx>{`
        @keyframes scroll-line {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(400%);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}


