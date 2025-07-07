import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  variant?: "dots" | "bars" | "neural" | "pulse";
  className?: string;
}

export function LoadingSpinner({ 
  size = "md", 
  variant = "neural",
  className 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8", 
    lg: "w-12 h-12"
  };

  if (variant === "dots") {
    return (
      <div className={cn("flex space-x-1", className)}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={cn(
              "bg-gradient-tawjeeh rounded-full animate-pulse",
              size === "sm" ? "w-1 h-1" : size === "md" ? "w-2 h-2" : "w-3 h-3"
            )}
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>
    );
  }

  if (variant === "bars") {
    return (
      <div className={cn("flex space-x-1", className)}>
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={cn(
              "bg-gradient-tawjeeh animate-pulse",
              size === "sm" ? "w-1 h-3" : size === "md" ? "w-1 h-6" : "w-2 h-8"
            )}
            style={{ 
              animationDelay: `${i * 0.15}s`,
              animationDuration: "1s"
            }}
          />
        ))}
      </div>
    );
  }

  if (variant === "pulse") {
    return (
      <div className={cn("rounded-full bg-gradient-tawjeeh animate-pulse", sizeClasses[size], className)} />
    );
  }

  // Neural network variant (default)
  return (
    <div className={cn("relative", sizeClasses[size], className)}>
      <svg
        className="w-full h-full animate-spin"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
        {/* Neural network nodes */}
        <circle cx="12" cy="6" r="1" fill="#6ad4e2" className="animate-pulse">
          <animate attributeName="r" values="1;2;1" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="18" cy="12" r="1" fill="#997fb8" className="animate-pulse" style={{animationDelay: "0.5s"}}>
          <animate attributeName="r" values="1;2;1" dur="2s" repeatCount="indefinite" begin="0.5s" />
        </circle>
        <circle cx="12" cy="18" r="1" fill="#f3c575" className="animate-pulse" style={{animationDelay: "1s"}}>
          <animate attributeName="r" values="1;2;1" dur="2s" repeatCount="indefinite" begin="1s" />
        </circle>
        <circle cx="6" cy="12" r="1" fill="#6ad4e2" className="animate-pulse" style={{animationDelay: "1.5s"}}>
          <animate attributeName="r" values="1;2;1" dur="2s" repeatCount="indefinite" begin="1.5s" />
        </circle>
      </svg>
    </div>
  );
}