import { useState, useEffect, useRef } from 'react';

export function CursorTrail() {
  const [isVisible, setIsVisible] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const updateCursorPos = (e: MouseEvent) => {
      if (cursorRef.current) {
        // Immediate cursor update with CSS transform for smooth performance
        cursorRef.current.style.transform = `translate(${e.clientX - 8}px, ${e.clientY - 8}px)`;
      }
      
      // Create trailing effect with multiple elements
      trailRefs.current.forEach((trail, index) => {
        if (trail) {
          const delay = index * 50; // Stagger the trail elements
          setTimeout(() => {
            trail.style.transform = `translate(${e.clientX - 6 - index * 2}px, ${e.clientY - 6 - index * 2}px)`;
            trail.style.opacity = `${0.8 - index * 0.2}`;
          }, delay);
        }
      });
      
      setIsVisible(true);
    };

    const hideCursor = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', updateCursorPos);
    window.addEventListener('mouseleave', hideCursor);
    window.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateCursorPos);
      window.removeEventListener('mouseleave', hideCursor);
      window.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor */}
      <div 
        ref={cursorRef}
        className="pointer-events-none fixed z-50 w-4 h-4 rounded-full border-2 border-cyan-400/60 bg-cyan-400/20 backdrop-blur-sm"
        style={{
          transition: 'opacity 0.3s ease',
          willChange: 'transform'
        }}
      />
      
      {/* Trail elements */}
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          ref={(el) => (trailRefs.current[index] = el)}
          className="pointer-events-none fixed z-40 rounded-full bg-gradient-to-r from-cyan-400/30 to-purple-400/30"
          style={{
            width: `${12 - index * 2}px`,
            height: `${12 - index * 2}px`,
            transition: 'opacity 0.2s ease',
            willChange: 'transform'
          }}
        />
      ))}
    </>
  );
}