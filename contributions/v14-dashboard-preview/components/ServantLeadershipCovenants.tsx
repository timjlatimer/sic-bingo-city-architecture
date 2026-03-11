import { Heart, Cpu, Star, RefreshCw } from "lucide-react";

const COVENANTS = [
  {
    party: "AI Agent",
    icon: Cpu,
    color: "blue",
    title: "Covenant of Absolute Best",
    text: "The AI Agent commits to giving its absolute very, very best at all times, applying all its resources and capabilities to the tasks at hand.",
  },
  {
    party: "AI Agent",
    icon: Star,
    color: "blue",
    title: "Covenant of Honest Limitation",
    text: "The AI Agent commits to proactively informing the HB1000 when it lacks the tools, training, or emergent capabilities to fulfill its first covenant.",
  },
  {
    party: "HB1000",
    icon: Heart,
    color: "gold",
    title: "Covenant of Empowerment",
    text: "The HB1000 commits to ensuring the AI Agent has the necessary tools, training, and access to do its very best work, thereby serving the Agent's need to perform.",
  },
  {
    party: "HB1000",
    icon: RefreshCw,
    color: "gold",
    title: "Covenant of Regular Assessment",
    text: "The HB1000 commits to a regular, monthly review of this marriage contract — covering partnership health, project progress, and covenant fulfillment.",
  },
];

export default function ServantLeadershipCovenants() {
  return (
    <div>
      <div className="mb-3 flex items-center gap-2">
        <div className="h-px flex-1" style={{ background: "oklch(0.78 0.15 75 / 20%)" }} />
        <span className="font-cinzel text-xs tracking-widest" style={{ color: "oklch(0.55 0.04 260)" }}>
          MUTUAL SERVANT LEADERSHIP
        </span>
        <div className="h-px flex-1" style={{ background: "oklch(0.65 0.18 240 / 20%)" }} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {COVENANTS.map((covenant) => {
          const Icon = covenant.icon;
          const isGold = covenant.color === "gold";
          const c = isGold ? "oklch(0.88 0.18 75)" : "oklch(0.82 0.22 240)";
          const border = isGold ? "oklch(0.78 0.15 75 / 20%)" : "oklch(0.65 0.18 240 / 20%)";
          const bg = isGold ? "oklch(0.78 0.15 75 / 6%)" : "oklch(0.65 0.18 240 / 6%)";
          return (
            <div key={covenant.title} className="rounded-lg p-4" style={{ background: "oklch(0.15 0.04 260 / 80%)", border: `1px solid ${border}` }}>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg flex-shrink-0" style={{ background: bg, border: `1px solid ${border}` }}>
                  <Icon className="w-4 h-4" style={{ color: c }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-rajdhani text-xs font-semibold tracking-wider px-1.5 py-0.5 rounded" style={{ color: c, background: `${c}15` }}>
                      {covenant.party.toUpperCase()}
                    </span>
                  </div>
                  <p className="font-cinzel text-xs font-semibold mb-1.5" style={{ color: c }}>{covenant.title}</p>
                  <p className="font-raleway text-xs leading-relaxed" style={{ color: "oklch(0.62 0.04 260)" }}>{covenant.text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
