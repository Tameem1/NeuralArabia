import { ReactNode } from "react";
import { Card, CardProps } from "@/components/ui/card";
import NeuralAnimation from "@/components/neural-network/neural-animation";

interface NeuralCardProps extends CardProps {
  children: ReactNode;
  nodesCount?: number;
  connectionsCount?: number;
}

export function NeuralCard({ 
  children, 
  className, 
  nodesCount = 10, 
  connectionsCount = 15, 
  ...props 
}: NeuralCardProps) {
  return (
    <Card className={`neural-container neural-hover relative overflow-hidden ${className}`} {...props}>
      <NeuralAnimation nodesCount={nodesCount} connectionsCount={connectionsCount} />
      {children}
    </Card>
  );
}
