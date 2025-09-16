"use client";

import { useState, useEffect } from 'react';

export function AnimatedMissionStatement() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0); // 0 = mission statement, 1 = more reach
  const [isVisible, setIsVisible] = useState(true);
  const [animationStarted, setAnimationStarted] = useState(false);
  
  // Mission statement phrases to flash - continuous line
  const missionPhrases = [
    { words: ["Language", "Barriers"], highlight: true },
    { words: ["are", "a", "thing", "of", "the", "past", "for"], highlight: false },
    { words: ["Content", "Creators"], highlight: true }
  ];

  // More reach statement parts (0 = before equals, 1 = equals, 2 = after equals)
  const reachParts = [
    "More Out Reach",
    "=", 
    "More Views"
  ];

  const totalMissionPhrases = missionPhrases.length;

  useEffect(() => {
    const interval = setInterval(() => {
      if (!animationStarted) {
        // Start animation after initial delay
        setAnimationStarted(true);
        return;
      }

      if (currentPhase === 0) {
        // Mission statement phase - flash specific phrases
        if (currentPhraseIndex < totalMissionPhrases - 1) {
          setCurrentPhraseIndex(prev => prev + 1);
        } else if (currentPhraseIndex === totalMissionPhrases - 1) {
          // Last phrase is glowing, turn off glow
          setCurrentPhraseIndex(-1); // -1 means no glow
        } else if (currentPhraseIndex === -1) {
          // Finished mission statement (glow is off), start transition
          setIsVisible(false);
          setAnimationStarted(false); // Reset for next phase
          setTimeout(() => {
            setCurrentPhase(1);
            setCurrentPhraseIndex(0);
            setTimeout(() => setIsVisible(true), 200);
          }, 800);
        }
      } else if (currentPhase === 1) {
        // More reach phase - animate in parts
        if (currentPhraseIndex < reachParts.length - 1) {
          setCurrentPhraseIndex(prev => prev + 1);
        } else if (currentPhraseIndex === reachParts.length - 1) {
          // Last part is glowing, turn off glow
          setCurrentPhraseIndex(-1); // -1 means no glow
        } else if (currentPhraseIndex === -1) {
          // Finished reach statement (glow is off), start transition back
          setIsVisible(false);
          setAnimationStarted(false); // Reset for next phase
          setTimeout(() => {
            setCurrentPhase(0);
            setCurrentPhraseIndex(0);
            setTimeout(() => setIsVisible(true), 200);
          }, 800);
        }
      }
    }, 800); // Slower for better phrase visibility

    return () => clearInterval(interval);
  }, [currentPhraseIndex, currentPhase, totalMissionPhrases, reachParts.length, animationStarted]);

  if (currentPhase === 0) {
    // Mission statement - flash specific phrases
    return (
      <div className="w-full mx-auto">
        <div className={`text-left text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-bold tracking-tight mb-4 transition-opacity duration-700 ease-in-out h-[100px] md:h-[110px] lg:h-[200px] flex items-center max-w-none ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`} style={{ lineHeight: '1.1' }}>
          {/* Continuous Line */}
          <div>
            {missionPhrases.map((phrase, phraseIndex) => (
              phrase.words.map((word, wordIndex) => (
                <span
                  key={`${phraseIndex}-${wordIndex}`}
                  className={`inline-block mr-3 transition-all duration-300 ease-in-out text-gray-900 ${
                    phraseIndex === currentPhraseIndex && phrase.highlight
                      ? 'scale-105'
                      : ''
                  }`}
                  style={{
                    textShadow: phraseIndex === currentPhraseIndex && phrase.highlight && animationStarted
                      ? '0 0 20px rgba(20, 184, 166, 0.8), 0 0 40px rgba(20, 184, 166, 0.6), 0 0 60px rgba(20, 184, 166, 0.4)'
                      : 'none'
                  }}
                >
                  {word}
                </span>
              ))
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    // More reach statement - animate in three parts vertically centered
    return (
      <div className="w-full mx-auto">
        <div className={`text-center text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-bold tracking-tight mb-4 transition-opacity duration-700 ease-in-out h-[100px] md:h-[110px] lg:h-[200px] flex flex-col items-center justify-center max-w-none ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`} style={{ lineHeight: '1.1' }}>
          {/* More Out Reach */}
          <div className="mb-2">
            <span
              className={`transition-all duration-300 ease-in-out text-gray-900 ${
                currentPhraseIndex === 0
                  ? 'scale-105'
                  : ''
              }`}
              style={{
                textShadow: currentPhraseIndex === 0 && animationStarted
                  ? '0 0 20px rgba(20, 184, 166, 0.8), 0 0 40px rgba(20, 184, 166, 0.6), 0 0 60px rgba(20, 184, 166, 0.4)'
                  : 'none'
              }}
            >
              More Out Reach
            </span>
          </div>
          
          {/* Equals Sign */}
          <div className="mb-2">
            <span
              className={`transition-all duration-300 ease-in-out text-gray-900 ${
                currentPhraseIndex === 1
                  ? 'scale-105'
                  : ''
              }`}
              style={{
                textShadow: currentPhraseIndex === 1 && animationStarted
                  ? '0 0 20px rgba(20, 184, 166, 0.8), 0 0 40px rgba(20, 184, 166, 0.6), 0 0 60px rgba(20, 184, 166, 0.4)'
                  : 'none'
              }}
            >
              =
            </span>
          </div>
          
          {/* More Views */}
          <div>
            <span
              className={`transition-all duration-300 ease-in-out text-gray-900 ${
                currentPhraseIndex === 2
                  ? 'scale-105'
                  : ''
              }`}
              style={{
                textShadow: currentPhraseIndex === 2 && animationStarted
                  ? '0 0 20px rgba(20, 184, 166, 0.8), 0 0 40px rgba(20, 184, 166, 0.6), 0 0 60px rgba(20, 184, 166, 0.4)'
                  : 'none'
              }}
            >
              More Views
            </span>
          </div>
        </div>
      </div>
    );
  }
}


