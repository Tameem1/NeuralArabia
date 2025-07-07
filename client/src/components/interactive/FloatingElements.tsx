import { useEffect, useState } from 'react';

export function FloatingElements() {
  const [elements, setElements] = useState<Array<{
    id: string;
    x: number;
    y: number;
    size: number;
    icon: string;
    color: string;
    delay: number;
  }>>([]);

  useEffect(() => {
    const icons = ['fa-brain', 'fa-robot', 'fa-microchip', 'fa-cogs', 'fa-chart-line', 'fa-lightbulb'];
    const colors = ['text-cyan-400', 'text-purple-400', 'text-yellow-400', 'text-pink-400', 'text-green-400', 'text-blue-400'];
    
    const newElements = Array.from({ length: 6 }, (_, i) => ({
      id: `floating-${i}`,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 15, // 15-35px
      icon: icons[i % icons.length],
      color: colors[i % colors.length],
      delay: Math.random() * 5
    }));
    
    setElements(newElements);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((element) => (
        <div
          key={element.id}
          className={`absolute opacity-20 ${element.color} icon-float`}
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            fontSize: `${element.size}px`,
            animationDelay: `${element.delay}s`
          }}
        >
          <i className={`fas ${element.icon}`}></i>
        </div>
      ))}
    </div>
  );
}