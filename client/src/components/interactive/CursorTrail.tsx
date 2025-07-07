import { useState, useEffect } from 'react';

interface CursorPosition {
  x: number;
  y: number;
}

export function CursorTrail() {
  const [cursorPos, setCursorPos] = useState<CursorPosition>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateCursorPos = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const hideCursor = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', updateCursorPos);
    window.addEventListener('mouseleave', hideCursor);

    return () => {
      window.removeEventListener('mousemove', updateCursorPos);
      window.removeEventListener('mouseleave', hideCursor);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className="cursor-trail pointer-events-none fixed z-50 mix-blend-mode-difference"
      style={{
        left: cursorPos.x - 10,
        top: cursorPos.y - 10,
        background: 'radial-gradient(circle, rgba(106, 212, 226, 0.6), transparent)',
      }}
    />
  );
}