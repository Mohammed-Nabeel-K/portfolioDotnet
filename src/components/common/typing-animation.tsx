
"use client";

import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface TypingAnimationProps {
  textToType: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseEnd?: number; 
  pauseStart?: number; 
  className?: string;
}

export function TypingAnimation({
  textToType,
  typingSpeed = 150,
  deletingSpeed = 75,
  pauseEnd = 2000, // Pause after typing full string
  pauseStart = 500,  // Pause after deleting full string before retyping
  className,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const indexRef = useRef(0); // Current character index in textToType
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const type = () => {
      if (!isDeleting) { // Typing
        if (indexRef.current < textToType.length) {
          setDisplayedText((prev) => prev + textToType.charAt(indexRef.current));
          indexRef.current++;
          timeoutRef.current = setTimeout(type, typingSpeed);
        } else { // Finished typing
          timeoutRef.current = setTimeout(() => setIsDeleting(true), pauseEnd);
        }
      } else { // Deleting
        if (indexRef.current > 0) {
          setDisplayedText((prev) => prev.substring(0, prev.length - 1));
          indexRef.current--;
          timeoutRef.current = setTimeout(type, deletingSpeed);
        } else { // Finished deleting
          setIsDeleting(false);
          // indexRef.current is already 0
          timeoutRef.current = setTimeout(type, pauseStart); // Pause before re-typing
        }
      }
    };

    // Initial call to start typing
    // Delay initial start slightly to ensure component is mounted
    timeoutRef.current = setTimeout(type, pauseStart);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  // Re-run effect if any of these core props change.
  // isDeleting is managed internally by the effect loop, so it's not a dependency here.
  }, [textToType, typingSpeed, deletingSpeed, pauseEnd, pauseStart]);


  // This secondary effect handles the change in isDeleting state to restart the typing process.
  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  
    const type = () => {
      if (!isDeleting) {
        if (indexRef.current < textToType.length) {
          setDisplayedText(textToType.substring(0, indexRef.current + 1));
          indexRef.current++;
          timeoutRef.current = setTimeout(type, typingSpeed);
        } else {
          timeoutRef.current = setTimeout(() => setIsDeleting(true), pauseEnd);
        }
      } else {
        if (indexRef.current > 0) {
          setDisplayedText(textToType.substring(0, indexRef.current -1));
          indexRef.current--;
          timeoutRef.current = setTimeout(type, deletingSpeed);
        } else {
          setIsDeleting(false);
          // No need to call type here, the other effect will handle restart based on isDeleting changing
           timeoutRef.current = setTimeout(type, pauseStart);
        }
      }
    };

    // Only restart type if isDeleting changed, or on initial mount
     timeoutRef.current = setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);


    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };

  }, [isDeleting, textToType, typingSpeed, deletingSpeed, pauseEnd, pauseStart]);


  return (
    <span className={cn(className, "inline-block min-h-[1.2em]")}> {/* min-h to prevent layout shift */}
      {displayedText}
      <span className="cursor-blink ml-0.5">|</span>
    </span>
  );
}
