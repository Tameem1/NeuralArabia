import { useEffect, useRef, useState } from "react";

type NeuralAnimationProps = {
  nodesCount?: number;
  connectionsCount?: number;
  className?: string;
};

export default function NeuralAnimation({ 
  nodesCount = 15, 
  connectionsCount = 2,
  className = ""
}: NeuralAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [nodes, setNodes] = useState<{id: number, x: number, y: number}[]>([]);
  const [connections, setConnections] = useState<{from: number, to: number}[]>([]);
  
  // Create nodes and connections on mount
  useEffect(() => {
    // Create random nodes
    const newNodes = Array.from({ length: nodesCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100
    }));
    
    // Create random connections
    const newConnections = [];
    for (let i = 0; i < nodesCount; i++) {
      const connectionsPerNode = Math.max(1, Math.floor(connectionsCount / nodesCount));
      for (let j = 0; j < connectionsPerNode; j++) {
        const targetIndex = Math.floor(Math.random() * nodesCount);
        if (targetIndex !== i) {
          newConnections.push({
            from: i,
            to: targetIndex
          });
        }
      }
    }
    
    setNodes(newNodes);
    setConnections(newConnections);
  }, [nodesCount, connectionsCount]);
  
  return (
    <div 
      ref={containerRef}
      className={`absolute top-0 left-0 w-full h-full ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg width="100%" height="100%" className="neural-svg">
        {/* Draw connections */}
        {connections.map((connection, i) => {
          const fromNode = nodes[connection.from];
          const toNode = nodes[connection.to];
          
          if (!fromNode || !toNode) return null;
          
          return (
            <line 
              key={`connection-${i}`}
              x1={`${fromNode.x}%`} 
              y1={`${fromNode.y}%`} 
              x2={`${toNode.x}%`} 
              y2={`${toNode.y}%`}
              className={`connection ${isHovered ? 'connection-hover' : ''}`}
              strokeWidth="1"
              stroke="rgba(255, 255, 255, 0.3)"
            />
          );
        })}
        
        {/* Draw nodes */}
        {nodes.map((node) => (
          <circle 
            key={`node-${node.id}`}
            cx={`${node.x}%`} 
            cy={`${node.y}%`} 
            r={isHovered ? "5" : "3"}
            className={`node ${isHovered ? 'node-hover' : ''}`}
            fill="#ffffff"
          >
            <animate 
              attributeName="opacity" 
              values="0.6;1;0.6" 
              dur="3s" 
              repeatCount="indefinite" 
              begin={`${node.id * 0.1}s`}
            />
          </circle>
        ))}
      </svg>
    </div>
  );
}
