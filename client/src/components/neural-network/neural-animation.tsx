import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Vector3, Color } from "three";
import { useSpring, animated } from "@react-spring/three";

type NeuralNodeProps = {
  position: [number, number, number];
  color: string;
  scale: number;
  connections: number[];
  nodes: { position: [number, number, number] }[];
  isHovered: boolean;
};

function NeuralNode({ position, color, scale, connections, nodes, isHovered }: NeuralNodeProps) {
  const baseScale = scale * 0.2;
  const { scale: animatedScale } = useSpring({
    scale: isHovered ? baseScale * 1.5 : baseScale,
    config: { mass: 1, tension: 170, friction: 26 }
  });

  const colorObj = new Color(color);
  const { color: animatedColor } = useSpring({
    color: isHovered ? colorObj.getHexString() : colorObj.multiplyScalar(0.7).getHexString(),
    config: { mass: 1, tension: 170, friction: 26 }
  });

  return (
    <>
      <animated.mesh position={position} scale={animatedScale}>
        <sphereGeometry args={[1, 16, 16]} />
        <animated.meshStandardMaterial color={animatedColor} emissive={animatedColor} emissiveIntensity={isHovered ? 0.4 : 0.2} />
      </animated.mesh>
      
      {connections.map((targetIndex, i) => {
        const target = nodes[targetIndex];
        if (!target) return null;
        
        const start = new Vector3(position[0], position[1], position[2]);
        const end = new Vector3(target.position[0], target.position[1], target.position[2]);
        const direction = end.clone().sub(start);
        const midPoint = start.clone().add(direction.clone().multiplyScalar(0.5));
        const length = direction.length();
        
        return (
          <animated.line key={`conn-${i}`}>
            <bufferGeometry attach="geometry">
              <bufferAttribute
                attachObject={["attributes", "position"]}
                count={2}
                array={new Float32Array([
                  position[0], position[1], position[2],
                  target.position[0], target.position[1], target.position[2]
                ])}
                itemSize={3}
              />
            </bufferGeometry>
            <animated.lineBasicMaterial
              color={animatedColor}
              opacity={isHovered ? 0.5 : 0.2}
              transparent
              linewidth={1}
            />
          </animated.line>
        );
      })}
    </>
  );
}

function NeuralNetwork({ nodesCount = 20, connectionsPerNode = 3, isHovered = false }) {
  const { size, camera } = useThree();
  const groupRef = useRef<THREE.Group>(null);
  
  // Adjust camera position based on window size
  useEffect(() => {
    const aspect = size.width / size.height;
    camera.position.z = aspect < 1 ? 11 : 8; // Move further back on mobile
  }, [size, camera]);
  
  // Create nodes with random positions
  const nodes = Array.from({ length: nodesCount }, () => ({
    position: [
      (Math.random() - 0.5) * 8,
      (Math.random() - 0.5) * 8,
      (Math.random() - 0.5) * 3
    ] as [number, number, number]
  }));
  
  // Create connections between nodes
  const nodeConnections = nodes.map((_, i) => {
    const connections: number[] = [];
    for (let j = 0; j < connectionsPerNode; j++) {
      const targetIndex = Math.floor(Math.random() * nodesCount);
      if (targetIndex !== i && !connections.includes(targetIndex)) {
        connections.push(targetIndex);
      }
    }
    return connections;
  });
  
  // Rotate network gently
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.1) * 0.2;
      groupRef.current.rotation.x = Math.cos(clock.getElapsedTime() * 0.15) * 0.1;
    }
  });
  
  return (
    <group ref={groupRef}>
      {nodes.map((node, i) => (
        <NeuralNode
          key={i}
          position={node.position}
          color="#4F6EC1"
          scale={Math.random() * 0.5 + 0.5}
          connections={nodeConnections[i]}
          nodes={nodes}
          isHovered={isHovered}
        />
      ))}
    </group>
  );
}

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
  
  // Calculate how many connections per node based on total desired connections
  const connectionsPerNode = Math.max(1, Math.floor(connectionsCount / nodesCount));
  
  return (
    <div 
      ref={containerRef}
      className={`absolute top-0 left-0 w-full h-full ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <NeuralNetwork 
          nodesCount={nodesCount} 
          connectionsPerNode={connectionsPerNode}
          isHovered={isHovered}
        />
      </Canvas>
    </div>
  );
}
