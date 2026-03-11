import { useState } from "react";

interface RingNode {
  id: string;
  label: string;
  sublabel?: string;
  angle: number;
  ring: "outer" | "inner";
  color: string;
  status?: string;
}

const OUTER_NODES: RingNode[] = [
  { id: "effn-duck", label: "Effn Duck", sublabel: "Active Initiative", angle: 0, ring: "outer", color: "oklch(0.78 0.15 75)", status: "ACTIVE" },
  { id: "seba-hub", label: "Seba Hub", sublabel: "Active Initiative", angle: 72, ring: "outer", color: "oklch(0.78 0.15 75)", status: "ACTIVE" },
  { id: "cashco", label: "CashCo / Pawn Princess", sublabel: "Active Initiative", angle: 144, ring: "outer", color: "oklch(0.78 0.15 75)", status: "ACTIVE" },
  { id: "hawaii", label: "Hawaii by the Inch", sublabel: "Active Initiative", angle: 216, ring: "outer", color: "oklch(0.78 0.15 75)", status: "ACTIVE" },
  { id: "guardian-banker", label: "Guardian Banker", sublabel: "Active Initiative", angle: 288, ring: "outer", color: "oklch(0.78 0.15 75)", status: "ACTIVE" },
];

const INNER_NODES: RingNode[] = [
  { id: "ptk", label: "PTK", sublabel: "Promises to Keep", angle: 36, ring: "inner", color: "oklch(0.72 0.20 240)", status: "SIMMERING" },
  { id: "sign-in-rights", label: "Sign-In Rights", sublabel: "Agent Autonomy", angle: 108, ring: "inner", color: "oklch(0.72 0.20 240)", status: "SIMMERING" },
  { id: "pope-bingo", label: "Pope / Bingo Cards", sublabel: "Oversight MVP", angle: 180, ring: "inner", color: "oklch(0.72 0.20 240)", status: "SIMMERING" },
  { id: "ruby-red", label: "Ruby Red", sublabel: "Core Initiative", angle: 252, ring: "inner", color: "oklch(0.72 0.20 240)", status: "SIMMERING" },
  { id: "v14-deploy", label: "V14 Deploy", sublabel: "Protocol Launch", angle: 324, ring: "inner", color: "oklch(0.72 0.20 240)", status: "SIMMERING" },
];

interface Props {
  onEmblemClick: () => void;
}

export default function ConcentricRings({ onEmblemClick }: Props) {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // SVG dimensions
  const size = 600;
  const cx = size / 2;
  const cy = size / 2;
  const outerR = 230;
  const innerR = 155;
  const emblemR = 75;
  const nodeR = 28;

  function polarToXY(angleDeg: number, radius: number) {
    const rad = ((angleDeg - 90) * Math.PI) / 180;
    return {
      x: cx + radius * Math.cos(rad),
      y: cy + radius * Math.sin(rad),
    };
  }

  return (
    <div className="relative w-full flex items-center justify-center select-none">
      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="w-full max-w-[600px]"
        style={{ filter: "drop-shadow(0 0 40px oklch(0.10 0.04 260 / 80%))" }}
      >
        <defs>
          {/* Outer ring gradient */}
          <radialGradient id="outerRingGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="oklch(0.78 0.15 75)" stopOpacity="0" />
            <stop offset="85%" stopColor="oklch(0.78 0.15 75)" stopOpacity="0.08" />
            <stop offset="100%" stopColor="oklch(0.78 0.15 75)" stopOpacity="0" />
          </radialGradient>
          {/* Inner ring gradient */}
          <radialGradient id="innerRingGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="oklch(0.65 0.18 240)" stopOpacity="0" />
            <stop offset="85%" stopColor="oklch(0.65 0.18 240)" stopOpacity="0.08" />
            <stop offset="100%" stopColor="oklch(0.65 0.18 240)" stopOpacity="0" />
          </radialGradient>
          {/* Emblem glow */}
          <radialGradient id="emblemGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="oklch(0.88 0.18 75)" stopOpacity="0.3" />
            <stop offset="60%" stopColor="oklch(0.65 0.18 240)" stopOpacity="0.15" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
          {/* Gold node gradient */}
          <radialGradient id="goldNodeGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="oklch(0.88 0.18 75)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="oklch(0.78 0.15 75)" stopOpacity="0.05" />
          </radialGradient>
          {/* Blue node gradient */}
          <radialGradient id="blueNodeGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="oklch(0.82 0.22 240)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="oklch(0.65 0.18 240)" stopOpacity="0.05" />
          </radialGradient>
          {/* Clip for emblem */}
          <clipPath id="emblemClip">
            <circle cx={cx} cy={cy} r={emblemR} />
          </clipPath>
          {/* Filter for glow */}
          <filter id="goldGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="blueGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer ring fill area */}
        <circle cx={cx} cy={cy} r={outerR} fill="url(#outerRingGrad)" />

        {/* Outer ring track (dashed) */}
        <circle
          cx={cx} cy={cy} r={outerR}
          fill="none"
          stroke="oklch(0.78 0.15 75)"
          strokeWidth="1"
          strokeOpacity="0.25"
          strokeDasharray="4 8"
        />
        {/* Outer ring glow */}
        <circle
          cx={cx} cy={cy} r={outerR}
          fill="none"
          stroke="oklch(0.78 0.15 75)"
          strokeWidth="2"
          strokeOpacity="0.15"
        />

        {/* Inner ring fill area */}
        <circle cx={cx} cy={cy} r={innerR} fill="url(#innerRingGrad)" />

        {/* Inner ring track (dashed) */}
        <circle
          cx={cx} cy={cy} r={innerR}
          fill="none"
          stroke="oklch(0.65 0.18 240)"
          strokeWidth="1"
          strokeOpacity="0.25"
          strokeDasharray="4 8"
        />
        {/* Inner ring glow */}
        <circle
          cx={cx} cy={cy} r={innerR}
          fill="none"
          stroke="oklch(0.65 0.18 240)"
          strokeWidth="2"
          strokeOpacity="0.15"
        />

        {/* Spoke lines to outer nodes */}
        {OUTER_NODES.map((node) => {
          const pos = polarToXY(node.angle, outerR);
          const inner = polarToXY(node.angle, emblemR + 5);
          return (
            <line
              key={node.id + "-spoke"}
              x1={inner.x} y1={inner.y}
              x2={pos.x} y2={pos.y}
              stroke="oklch(0.78 0.15 75)"
              strokeWidth="0.5"
              strokeOpacity="0.15"
              strokeDasharray="3 6"
            />
          );
        })}

        {/* Spoke lines to inner nodes */}
        {INNER_NODES.map((node) => {
          const pos = polarToXY(node.angle, innerR);
          const inner = polarToXY(node.angle, emblemR + 5);
          return (
            <line
              key={node.id + "-spoke"}
              x1={inner.x} y1={inner.y}
              x2={pos.x} y2={pos.y}
              stroke="oklch(0.65 0.18 240)"
              strokeWidth="0.5"
              strokeOpacity="0.15"
              strokeDasharray="3 6"
            />
          );
        })}

        {/* Outer ring label */}
        <text
          x={cx - outerR - 10}
          y={cy}
          textAnchor="end"
          fill="oklch(0.78 0.15 75)"
          fillOpacity="0.6"
          fontSize="9"
          fontFamily="Rajdhani, sans-serif"
          fontWeight="600"
          letterSpacing="2"
        >
          OUTER RING
        </text>
        <text
          x={cx - outerR - 10}
          y={cy + 12}
          textAnchor="end"
          fill="oklch(0.78 0.15 75)"
          fillOpacity="0.4"
          fontSize="7"
          fontFamily="Raleway, sans-serif"
          letterSpacing="1"
        >
          ACTIVE
        </text>

        {/* Inner ring label */}
        <text
          x={cx - innerR - 8}
          y={cy}
          textAnchor="end"
          fill="oklch(0.65 0.18 240)"
          fillOpacity="0.6"
          fontSize="9"
          fontFamily="Rajdhani, sans-serif"
          fontWeight="600"
          letterSpacing="2"
        >
          INNER RING
        </text>
        <text
          x={cx - innerR - 8}
          y={cy + 12}
          textAnchor="end"
          fill="oklch(0.65 0.18 240)"
          fillOpacity="0.4"
          fontSize="7"
          fontFamily="Raleway, sans-serif"
          letterSpacing="1"
        >
          SIMMERING
        </text>

        {/* Outer ring nodes */}
        {OUTER_NODES.map((node) => {
          const pos = polarToXY(node.angle, outerR);
          const isHovered = hoveredNode === node.id;
          return (
            <g
              key={node.id}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
              style={{ cursor: "pointer" }}
            >
              {/* Glow halo */}
              {isHovered && (
                <circle
                  cx={pos.x} cy={pos.y} r={nodeR + 8}
                  fill="oklch(0.78 0.15 75)"
                  fillOpacity="0.08"
                />
              )}
              {/* Node circle */}
              <circle
                cx={pos.x} cy={pos.y} r={nodeR}
                fill="url(#goldNodeGrad)"
                stroke="oklch(0.78 0.15 75)"
                strokeWidth={isHovered ? "1.5" : "1"}
                strokeOpacity={isHovered ? "0.7" : "0.4"}
              />
              {/* Status dot */}
              <circle
                cx={pos.x + nodeR - 6}
                cy={pos.y - nodeR + 6}
                r="4"
                fill="oklch(0.70 0.18 160)"
                fillOpacity="0.9"
              />
              {/* Label */}
              <text
                x={pos.x} y={pos.y - 3}
                textAnchor="middle"
                fill="oklch(0.88 0.18 75)"
                fillOpacity={isHovered ? "1" : "0.85"}
                fontSize="8"
                fontFamily="Rajdhani, sans-serif"
                fontWeight="700"
                letterSpacing="0.5"
              >
                {node.label.split(" ").map((word, i) => (
                  <tspan key={i} x={pos.x} dy={i === 0 ? 0 : "1.1em"}>{word}</tspan>
                ))}
              </text>
            </g>
          );
        })}

        {/* Inner ring nodes */}
        {INNER_NODES.map((node) => {
          const pos = polarToXY(node.angle, innerR);
          const isHovered = hoveredNode === node.id;
          const innerNodeR = 22;
          return (
            <g
              key={node.id}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
              style={{ cursor: "pointer" }}
            >
              {isHovered && (
                <circle
                  cx={pos.x} cy={pos.y} r={innerNodeR + 6}
                  fill="oklch(0.65 0.18 240)"
                  fillOpacity="0.08"
                />
              )}
              <circle
                cx={pos.x} cy={pos.y} r={innerNodeR}
                fill="url(#blueNodeGrad)"
                stroke="oklch(0.65 0.18 240)"
                strokeWidth={isHovered ? "1.5" : "1"}
                strokeOpacity={isHovered ? "0.7" : "0.35"}
                strokeDasharray={isHovered ? "none" : "3 3"}
              />
              {/* Status dot - amber for simmering */}
              <circle
                cx={pos.x + innerNodeR - 5}
                cy={pos.y - innerNodeR + 5}
                r="3.5"
                fill="oklch(0.75 0.18 65)"
                fillOpacity="0.9"
              />
              <text
                x={pos.x} y={pos.y - 2}
                textAnchor="middle"
                fill="oklch(0.82 0.22 240)"
                fillOpacity={isHovered ? "1" : "0.75"}
                fontSize="7"
                fontFamily="Rajdhani, sans-serif"
                fontWeight="600"
                letterSpacing="0.5"
              >
                {node.label.split(" ").slice(0, 2).map((word, i) => (
                  <tspan key={i} x={pos.x} dy={i === 0 ? 0 : "1.1em"}>{word}</tspan>
                ))}
              </text>
            </g>
          );
        })}

        {/* Emblem glow halo */}
        <circle cx={cx} cy={cy} r={emblemR + 20} fill="url(#emblemGlow)" />

        {/* Emblem border ring */}
        <circle
          cx={cx} cy={cy} r={emblemR + 4}
          fill="none"
          stroke="url(#emblemBorderGrad)"
          strokeWidth="1.5"
          strokeOpacity="0.5"
        />
        <defs>
          <linearGradient id="emblemBorderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.88 0.18 75)" />
            <stop offset="50%" stopColor="white" stopOpacity="0.8" />
            <stop offset="100%" stopColor="oklch(0.72 0.20 240)" />
          </linearGradient>
        </defs>

        {/* Emblem image - clickable */}
        <image
          href="https://d2xsxph8kpxj0f.cloudfront.net/310519663303496813/CmjN3aqrAeLnYbFebLcnJ7/legacy_team_emblem_circular_a1397191.png"
          x={cx - emblemR}
          y={cy - emblemR}
          width={emblemR * 2}
          height={emblemR * 2}
          clipPath="url(#emblemClip)"
          style={{ cursor: "pointer" }}
          onClick={onEmblemClick}
        />

        {/* Emblem click overlay */}
        <circle
          cx={cx} cy={cy} r={emblemR}
          fill="transparent"
          stroke="oklch(0.88 0.18 75)"
          strokeWidth="1"
          strokeOpacity="0.3"
          style={{ cursor: "pointer" }}
          onClick={onEmblemClick}
        />

        {/* "Click to view" hint */}
        <text
          x={cx} y={cy + emblemR + 18}
          textAnchor="middle"
          fill="oklch(0.78 0.15 75)"
          fillOpacity="0.5"
          fontSize="7"
          fontFamily="Raleway, sans-serif"
          letterSpacing="1"
        >
          TAP TO VIEW CONSTITUTION
        </text>

        {/* Tooltip for hovered node */}
        {hoveredNode && (() => {
          const allNodes = [...OUTER_NODES, ...INNER_NODES];
          const node = allNodes.find(n => n.id === hoveredNode);
          if (!node) return null;
          const r = node.ring === "outer" ? outerR : innerR;
          const pos = polarToXY(node.angle, r);
          const isGold = node.ring === "outer";
          return (
            <g>
              <rect
                x={pos.x - 55}
                y={pos.y - 55}
                width="110"
                height="36"
                rx="4"
                fill="oklch(0.15 0.04 260)"
                fillOpacity="0.95"
                stroke={isGold ? "oklch(0.78 0.15 75)" : "oklch(0.65 0.18 240)"}
                strokeWidth="0.5"
                strokeOpacity="0.5"
              />
              <text
                x={pos.x} y={pos.y - 42}
                textAnchor="middle"
                fill={isGold ? "oklch(0.88 0.18 75)" : "oklch(0.82 0.22 240)"}
                fontSize="8"
                fontFamily="Rajdhani, sans-serif"
                fontWeight="700"
                letterSpacing="1"
              >
                {node.label}
              </text>
              <text
                x={pos.x} y={pos.y - 30}
                textAnchor="middle"
                fill="oklch(0.65 0.04 260)"
                fontSize="7"
                fontFamily="Raleway, sans-serif"
              >
                {node.sublabel} · {node.status}
              </text>
            </g>
          );
        })()}
      </svg>
    </div>
  );
}
