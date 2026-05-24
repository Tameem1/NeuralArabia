import { CSSProperties, useId } from "react";

type ChromeBackgroundProps = {
  className?: string;
  style?: CSSProperties;
  /** light = cream/aqua backdrop; dark = deep petrol backdrop */
  variant?: "light" | "dark";
  /** Adds a subtle film grain overlay for the chrome render look. */
  grain?: boolean;
};

/**
 * Iridescent chrome-blob backdrop in the Tawjeeh palette.
 *
 * Why: pure SVG (no images / no WebGL) — keeps payload tiny, ships fast,
 * and respects the existing brand colors instead of pulling in the
 * Cohere purple/green hues directly. The "metal" effect comes from
 * stacked radial gradients (body → rim → specular highlight) per blob,
 * a chromatic-aberration rim, and an organic warp filter.
 */
export function ChromeBackground({
  className,
  style,
  variant = "light",
  grain = true,
}: ChromeBackgroundProps) {
  const uid = useId().replace(/:/g, "");
  const ids = {
    base: `cb-${uid}-base`,
    body: `cb-${uid}-body`,
    spec: `cb-${uid}-spec`,
    rim: `cb-${uid}-rim`,
    fringe: `cb-${uid}-fringe`,
    warp: `cb-${uid}-warp`,
    soft: `cb-${uid}-soft`,
    grain: `cb-${uid}-grain`,
  };

  const isDark = variant === "dark";

  // Brand-mapped palette — keeps Tawjeeh teal/petrol identity while
  // emulating the polished-metal lighting of the reference imagery.
  const bg1 = isDark ? "#072027" : "#EAF8F7";
  const bg2 = isDark ? "#0F3640" : "#D9F3F0";
  const bg3 = isDark ? "#143D47" : "#C6E6E1";

  // Chrome body stops: dark ink → mid teal → bright aqua → cream highlight
  // arranged off-center to read as 3D lighting.
  const deep = "#031318";
  const ink = "#0D2B33";
  const teal = "#16B8AE";
  const aqua = "#40E0D0";
  const mist = "#7CEDE3";
  const cream = "#F2FBFA";

  // Fringe colors fake chromatic aberration on blob rims.
  const fringeA = "#F4C77A"; // warm amber
  const fringeB = "#5BD4C3"; // cool teal-green
  const fringeC = "#E9A6C2"; // soft magenta

  const blobs = [
    // x, y, rx, ry, rotation, specOffsetX, specOffsetY, specRx, specRy, scale
    { cx: 230, cy: 300, rx: 300, ry: 280, rot: -18, sx: -70, sy: -100, sR: 0.42 },
    { cx: 960, cy: 360, rx: 340, ry: 310, rot: 22, sx: -90, sy: -120, sR: 0.4 },
    { cx: 420, cy: 720, rx: 230, ry: 210, rot: 8, sx: -50, sy: -80, sR: 0.45 },
    { cx: 700, cy: 180, rx: 180, ry: 160, rot: -10, sx: -40, sy: -70, sR: 0.46 },
    { cx: 1140, cy: 720, rx: 200, ry: 170, rot: 14, sx: -50, sy: -80, sR: 0.44 },
  ];

  return (
    <svg
      aria-hidden
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      style={style}
    >
      <defs>
        <linearGradient id={ids.base} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={bg1} />
          <stop offset="55%" stopColor={bg2} />
          <stop offset="100%" stopColor={bg3} />
        </linearGradient>

        {/* The blob body — dark on far side, cream highlight on near side */}
        <radialGradient id={ids.body} cx="32%" cy="28%" r="85%">
          <stop offset="0%" stopColor={cream} stopOpacity="0.95" />
          <stop offset="10%" stopColor={mist} stopOpacity="0.85" />
          <stop offset="28%" stopColor={aqua} stopOpacity="0.75" />
          <stop offset="48%" stopColor={teal} stopOpacity="0.9" />
          <stop offset="72%" stopColor={ink} stopOpacity="0.98" />
          <stop offset="100%" stopColor={deep} stopOpacity="1" />
        </radialGradient>

        {/* Bright specular spot near the "light source" */}
        <radialGradient id={ids.spec} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="45%" stopColor={cream} stopOpacity="0.4" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>

        {/* Cool rim-light wrapping around the dark side */}
        <radialGradient id={ids.rim} cx="68%" cy="78%" r="55%">
          <stop offset="0%" stopColor={mist} stopOpacity="0" />
          <stop offset="78%" stopColor={mist} stopOpacity="0" />
          <stop offset="92%" stopColor={mist} stopOpacity="0.55" />
          <stop offset="100%" stopColor={aqua} stopOpacity="0" />
        </radialGradient>

        {/* Chromatic fringe — fake refraction across edges */}
        <radialGradient id={ids.fringe} cx="50%" cy="50%" r="50%">
          <stop offset="80%" stopColor={fringeA} stopOpacity="0" />
          <stop offset="90%" stopColor={fringeA} stopOpacity="0.28" />
          <stop offset="95%" stopColor={fringeB} stopOpacity="0.22" />
          <stop offset="100%" stopColor={fringeC} stopOpacity="0" />
        </radialGradient>

        {/* Organic warp so the blobs aren't perfect ellipses */}
        <filter id={ids.warp} x="-15%" y="-15%" width="130%" height="130%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.008"
            numOctaves="2"
            seed="7"
          />
          <feDisplacementMap in="SourceGraphic" scale="40" />
        </filter>

        <filter id={ids.soft} x="-5%" y="-5%" width="110%" height="110%">
          <feGaussianBlur stdDeviation="1.2" />
        </filter>

        <filter id={ids.grain}>
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" />
          <feColorMatrix
            values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.14 0"
          />
        </filter>
      </defs>

      <rect width="1200" height="800" fill={`url(#${ids.base})`} />

      {/* Wide soft glow from the brand palette so blobs read as floating */}
      <g opacity={isDark ? 0.55 : 0.7}>
        <ellipse cx="600" cy="380" rx="780" ry="500" fill={teal} fillOpacity="0.18" />
        <ellipse cx="200" cy="220" rx="320" ry="260" fill={aqua} fillOpacity="0.22" />
        <ellipse cx="980" cy="640" rx="360" ry="280" fill={mist} fillOpacity="0.18" />
      </g>

      <g filter={`url(#${ids.warp})`}>
        <g filter={`url(#${ids.soft})`}>
          {blobs.map((b, i) => {
            const transform = `rotate(${b.rot} ${b.cx} ${b.cy})`;
            return (
              <g key={i} transform={transform}>
                <ellipse
                  cx={b.cx}
                  cy={b.cy}
                  rx={b.rx}
                  ry={b.ry}
                  fill={`url(#${ids.body})`}
                />
                <ellipse
                  cx={b.cx}
                  cy={b.cy}
                  rx={b.rx}
                  ry={b.ry}
                  fill={`url(#${ids.rim})`}
                />
                <ellipse
                  cx={b.cx}
                  cy={b.cy}
                  rx={b.rx}
                  ry={b.ry}
                  fill={`url(#${ids.fringe})`}
                  opacity="0.85"
                />
                <ellipse
                  cx={b.cx + b.sx}
                  cy={b.cy + b.sy}
                  rx={b.rx * b.sR}
                  ry={b.ry * b.sR * 0.78}
                  fill={`url(#${ids.spec})`}
                />
              </g>
            );
          })}
        </g>
      </g>

      {grain && (
        <rect
          width="1200"
          height="800"
          filter={`url(#${ids.grain})`}
          opacity="0.45"
        />
      )}
    </svg>
  );
}
