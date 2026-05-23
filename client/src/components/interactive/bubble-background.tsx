import { CSSProperties } from "react";

type BubbleBackgroundProps = {
  className?: string;
  style?: CSSProperties;
  variant?: "light" | "dusk";
  intensity?: "soft" | "vivid";
};

export function BubbleBackground({
  className,
  style,
  variant = "light",
  intensity = "soft",
}: BubbleBackgroundProps) {
  const palette =
    variant === "dusk"
      ? {
          a: "#0D2B33",
          b: "#16B8AE",
          c: "#40E0D0",
          d: "#57E6D9",
          e: "#21454D",
        }
      : {
          a: "#7CEDE3",
          b: "#40E0D0",
          c: "#16B8AE",
          d: "#D9F3F0",
          e: "#0D2B33",
        };

  return (
    <svg
      aria-hidden
      viewBox="0 0 800 800"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      style={style}
    >
      <defs>
        <filter id="bb-blur" x="-25%" y="-25%" width="150%" height="150%">
          <feGaussianBlur stdDeviation="38" />
        </filter>
        <filter id="bb-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" />
          <feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.08 0" />
        </filter>

        <radialGradient id="bb-g1" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor={palette.a} stopOpacity="0.95" />
          <stop offset="55%" stopColor={palette.b} stopOpacity="0.6" />
          <stop offset="100%" stopColor={palette.b} stopOpacity="0" />
        </radialGradient>
        <radialGradient id="bb-g2" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor={palette.c} stopOpacity="0.9" />
          <stop offset="60%" stopColor={palette.e} stopOpacity="0.55" />
          <stop offset="100%" stopColor={palette.e} stopOpacity="0" />
        </radialGradient>
        <radialGradient id="bb-g3" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={palette.d} stopOpacity="0.9" />
          <stop offset="60%" stopColor={palette.a} stopOpacity="0.45" />
          <stop offset="100%" stopColor={palette.a} stopOpacity="0" />
        </radialGradient>
        <radialGradient id="bb-g4" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor={palette.b} stopOpacity="0.95" />
          <stop offset="60%" stopColor={palette.c} stopOpacity="0.5" />
          <stop offset="100%" stopColor={palette.c} stopOpacity="0" />
        </radialGradient>
        <linearGradient id="bb-base" x1="0%" y1="0%" x2="100%" y2="100%">
          {variant === "dusk" ? (
            <>
              <stop offset="0%" stopColor="#072027" />
              <stop offset="100%" stopColor="#0D2B33" />
            </>
          ) : (
            <>
              <stop offset="0%" stopColor="#EAF8F7" />
              <stop offset="100%" stopColor="#D9F3F0" />
            </>
          )}
        </linearGradient>
      </defs>

      <rect width="800" height="800" fill="url(#bb-base)" />

      <g filter="url(#bb-blur)" opacity={intensity === "vivid" ? 1 : 0.85}>
        <ellipse cx="240" cy="260" rx="260" ry="220" fill="url(#bb-g1)" />
        <ellipse cx="560" cy="220" rx="220" ry="180" fill="url(#bb-g3)" />
        <ellipse cx="420" cy="520" rx="320" ry="260" fill="url(#bb-g2)" />
        <ellipse cx="640" cy="600" rx="220" ry="180" fill="url(#bb-g4)" />
        <ellipse cx="160" cy="620" rx="200" ry="170" fill="url(#bb-g4)" />
      </g>

      <g opacity={intensity === "vivid" ? 0.75 : 0.4} filter="url(#bb-blur)">
        <ellipse cx="350" cy="380" rx="160" ry="130" fill={palette.a} fillOpacity="0.85" />
        <ellipse cx="540" cy="440" rx="170" ry="140" fill={palette.c} fillOpacity="0.8" />
      </g>
    </svg>
  );
}
