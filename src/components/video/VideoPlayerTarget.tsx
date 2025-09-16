"use client";

import { useState, useEffect, useRef, useCallback } from 'react';

export function VideoPlayerTarget() {
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [videoOpacity, setVideoOpacity] = useState(0);
  const [shouldShowVideo, setShouldShowVideo] = useState(false);
  const [indicatorOpacity, setIndicatorOpacity] = useState(1);
  const [containerOpacity, setContainerOpacity] = useState(0);
  const [glowOpacity, setGlowOpacity] = useState(0);
  const [videoKey, setVideoKey] = useState(0);
  const [playerPosition, setPlayerPosition] = useState('center'); // 'center' or 'left'
  
  // Video player state
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Black placeholder video (1x1 pixel black MP4 data URI)
  const YashVideoDataUri = "https://fxyqvekxgrilminh.public.blob.vercel-storage.com/videos/My%20Movie%2069.mp4";
  
  const videos = [
    { src: YashVideoDataUri, lang: 'Spanish', color: 'bg-blue-500' },
    { src: YashVideoDataUri, lang: '中文', color: 'bg-red-500' },
    { src: YashVideoDataUri, lang: 'हिंदी', color: 'bg-orange-500' },
    { src: YashVideoDataUri, lang: 'Español', color: 'bg-green-500' },
    { src: YashVideoDataUri, lang: '普通话', color: 'bg-purple-500' }
  ];

  // Video player control functions
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
      // Auto-play from start when video loads
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {
        // Handle autoplay policy restrictions gracefully
        console.log('Autoplay prevented by browser policy');
      });
    }
  };

  const handleVideoEnded = () => {
    if (videoRef.current) {
      // Restart video from the beginning
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {
        console.log('Auto-restart prevented by browser policy');
      });
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    setWindowHeight(window.innerHeight);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Small screens are handled by a simplified player in the parent; keep hooks order consistent here

  // Auto-play when the player becomes visible
  useEffect(() => {
    if (shouldShowVideo && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {
        console.log('Autoplay prevented by browser policy');
      });
    }
  }, [shouldShowVideo]);

  const shouldShowTarget = useCallback(() => {
    if (windowHeight === 0) return false;
    const targetSectionStart = windowHeight * 0.9;
    return scrollY >= targetSectionStart; // Show target as soon as we hit 90%
  }, [windowHeight, scrollY]);

  const getIndicatorOpacity = useCallback(() => {
    if (windowHeight === 0) return 1;
    
    // Start fading indicator when scrolling begins, finish fading before player locks
    const fadeStartPoint = windowHeight * 0.3; // Start fading early in scroll
    const fadeEndPoint = windowHeight * 0.8;   // Finish fading before lock-in at 90%
    
    if (scrollY < fadeStartPoint) return 1;
    if (scrollY > fadeEndPoint) return 0;
    
    // Smooth fade between the two points
    const progress = (scrollY - fadeStartPoint) / (fadeEndPoint - fadeStartPoint);
    return 1 - progress;
  }, [windowHeight, scrollY]);

  useEffect(() => {
    const targetVisible = shouldShowTarget();
    if (targetVisible && !isVisible) {
      setIsVisible(true);
    } else if (!targetVisible) {
      setIsVisible(false);
    }
    
    // Video should show exactly when the target is visible (moving player has disappeared)
    const shouldShow = targetVisible;
    
    if (shouldShow !== shouldShowVideo) {
      setShouldShowVideo(shouldShow);
    }
    
    // Update indicator opacity based on scroll
    const newIndicatorOpacity = getIndicatorOpacity();
    setIndicatorOpacity(newIndicatorOpacity);
    
    // Container fades in smoothly when target becomes visible
    if (targetVisible) {
      // Gradual fade in when target becomes visible
      setTimeout(() => setContainerOpacity(1), 100); // Small delay for smooth transition
    } else {
      setContainerOpacity(0);
    }

    // Check if we should animate player to left
    if (windowHeight > 0 && targetVisible) {
      const additionalScrollThreshold = windowHeight * 0.95; // Only 5% more scroll after lock-in
      const shouldMoveLeft = scrollY >= additionalScrollThreshold;
      
      if (shouldMoveLeft && playerPosition === 'center') {
        setPlayerPosition('left');
      } else if (!shouldMoveLeft && playerPosition === 'left') {
        setPlayerPosition('center');
      }
    }
  }, [isVisible, scrollY, windowHeight, shouldShowVideo, playerPosition, getIndicatorOpacity, shouldShowTarget]);

  // Show video when target becomes visible (player has locked in)
  useEffect(() => {
    if (shouldShowVideo) {
      // Reset everything when player locks in with gradual fade-in
      setCurrentVideoIndex(0); // Always start with first video
      setVideoKey(prev => prev + 1); // Force video restart
      
      // Video fades in, but glow stays off until player moves left
      setTimeout(() => setVideoOpacity(1), 400); // Video fades in
    } else {
      // Reset video and glow opacity when target disappears
      setVideoOpacity(0);
      setGlowOpacity(0);
    }
  }, [shouldShowVideo]);

  // Control glow based on player position
  useEffect(() => {
    if (playerPosition === 'left') {
      // Glow fades in when player moves to left
      setTimeout(() => setGlowOpacity(1), 200);
    } else {
      // Glow fades out when player returns to center
      setGlowOpacity(0);
    }
  }, [playerPosition]);

  useEffect(() => {
    if (videoOpacity > 0.5) {
      // Auto-advance videos only when video is visible
      const interval = setInterval(() => {
        setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [videoOpacity, videos.length]);

  if (!shouldShowTarget()) return null;

  const currentVideo = videos[currentVideoIndex];

  return (
    <div 
      className="relative transition-all duration-700 ease-out"
      style={{ 
        opacity: containerOpacity,
        transform: playerPosition === 'left' 
          ? `translateX(-${window.innerWidth >= 1024 ? '200px' : window.innerWidth >= 640 ? '150px' : '100px'})`
          : 'translateX(0)',
        marginLeft: playerPosition === 'left' ? '0' : 'auto',
        marginRight: playerPosition === 'left' ? 'auto' : 'auto'
      }}
    >
      {/* Enhanced greenish glow behind player */}
      <div 
        className="absolute -bottom-12 -left-12 w-[500px] h-[400px] transition-opacity duration-700 ease-out"
        style={{ 
          opacity: glowOpacity,
          background: 'radial-gradient(ellipse, rgba(16, 185, 129, 1.0) 0%, rgba(52, 211, 153, 0.9) 25%, rgba(110, 231, 183, 0.7) 50%, rgba(167, 243, 208, 0.4) 75%, transparent 100%)',
          filter: 'blur(60px)',
          zIndex: -1
        }}
      />
      
      {/* Additional subtle glow - top right corner */}
      <div 
        className="absolute -top-8 -right-8 w-[300px] h-[200px] transition-opacity duration-700 ease-out"
        style={{ 
          opacity: glowOpacity * 0.7, // Brighter than before
          background: 'radial-gradient(ellipse, rgba(45, 212, 191, 0.6) 0%, rgba(16, 185, 129, 0.4) 40%, rgba(110, 231, 183, 0.2) 70%, transparent 100%)',
          filter: 'blur(40px)',
          zIndex: -2
        }}
      />
      
      <div 
        className="w-[768px] h-[432px] bg-black rounded-lg overflow-hidden relative z-10"
        style={{
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' // Custom shadow that matches the moving player's final state
        }}
      >
      {/* Always show the scroll indicator content as background */}
      <div 
        className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-br from-teal-50 to-white rounded-lg"
        style={{ 
          opacity: indicatorOpacity,
          transition: 'opacity 0.3s ease-out'
        }}
      >
        <div className="mb-3">
          <svg className="w-10 h-10 text-teal-600 mx-auto animate-bounce" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-1">Don&apos;t believe us?</h3>
        <p className="text-base font-semibold text-teal-600">See for yourself!</p>
        <div className="mt-2 text-xs text-gray-500">
          Scroll down to see our AI in action
        </div>
      </div>

      {/* YouTube-style Video Player UI */}
      <div 
        className="absolute inset-0 transition-opacity duration-500 ease-out"
        style={{ opacity: videoOpacity }}
      >
        {/* Video Content */}
        <div className="absolute inset-0">
        <video
          ref={videoRef}
          key={`${currentVideo.src}-${videoKey}`}
          className="w-full h-full object-cover"
          autoPlay
          muted={isMuted}
          playsInline
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={handleVideoEnded}
        >
          <source src={currentVideo.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>
        
        {/* Video Controls Bar - Overlaid on video */}
        <div className="absolute bottom-0 left-0 right-0 h-11 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-30">
          {/* Progress bar at top */}
          <div className="px-4 pt-2 pb-1">
            <div className="h-0.5 bg-white/30 rounded-full transition-all duration-150">
              <div 
                className="h-full bg-teal-500 rounded-full relative"
                style={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white rounded-full shadow-sm"></div>
              </div>
            </div>
          </div>
          
          {/* Controls row */}
          <div className="flex items-center justify-between px-4">
            {/* Left controls */}
            <div className="flex items-center gap-1">
              {/* Play/Pause button */}
              <button 
                onClick={togglePlayPause}
                className="flex items-center justify-center w-8 h-6 hover:bg-white/10 rounded-sm transition-colors"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  {isPlaying ? (
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                  ) : (
                    <path d="M8 5v14l11-7z"/>
                  )}
                </svg>
              </button>
              
              {/* Volume/Mute button */}
              <button 
                onClick={toggleMute}
                className="flex items-center justify-center w-8 h-6 hover:bg-white/10 rounded-sm transition-colors"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  {isMuted ? (
                    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                  ) : (
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                  )}
                </svg>
              </button>
              
              {/* Time display */}
              <div className="text-white text-xs font-medium ml-2">
                {formatTime(currentTime)} / {formatTime(duration)}
              </div>
            </div>
            
            {/* Right controls */}
            <div className="flex items-center gap-0">
              {/* Additional controls commented out for cleaner look */}
            </div>
          </div>
        </div>


      </div>
      </div>
    </div>
  );
}
