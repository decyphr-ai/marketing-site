"use client";

import { useState, useEffect } from 'react';

export function GlobeWithVideos() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  
  const videos = [
    "https://fxyqvekxgrilminh.public.blob.vercel-storage.com/videos/4612176-uhd_4096_2160_25fps%281%29.mp4",
    "https://fxyqvekxgrilminh.public.blob.vercel-storage.com/videos/14351118_3840_2160_60fps.mp4"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex(prev => (prev + 1) % videos.length);
    }, 5000); // Switch every 5 seconds

    return () => clearInterval(interval);
  }, [videos.length]);

  const globeMask = `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 420 420'%3E%3Cpath stroke='white' stroke-width='26' fill='none' d='M209,15a195,195 0 1,0 2,0z'/%3E%3Cpath stroke='white' stroke-width='18' fill='none' d='m210,15v390m195-195H15'/%3E%3Cpath stroke='white' stroke-width='18' fill='none' d='M59,90a260,260 0 0,0 302,0 m0,240 a260,260 0 0,0-302,0'/%3E%3Cpath stroke='white' stroke-width='18' fill='none' d='M195,20a250,250 0 0,0 0,382 m30,0 a250,250 0 0,0 0-382'/%3E%3C/svg%3E")`;

  return (
    <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] xl:w-[30rem] xl:h-[30rem] opacity-75" id="globe-section">
      <video
        key={currentVideoIndex}
        className="w-full h-full object-cover transition-opacity duration-500"
        autoPlay
        muted
        loop
        playsInline
        style={{
          WebkitMask: globeMask,
          mask: globeMask,
          maskSize: 'contain',
          maskRepeat: 'no-repeat',
          maskPosition: 'center'
        }}
      >
        <source src={videos[currentVideoIndex]} type="video/mp4" />
      </video>
    </div>
  );
}


