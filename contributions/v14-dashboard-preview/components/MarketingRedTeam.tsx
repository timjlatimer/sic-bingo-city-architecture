import { Megaphone, Layers, Globe, Users, Zap } from "lucide-react";

export default function MarketingRedTeam() {
  return (
    <div className="space-y-6">
      {/* Core Thesis */}
      <div className="rounded-lg p-5" style={{ background: "oklch(0.15 0.04 260 / 80%)", border: "1px solid oklch(0.82 0.22 0 / 20%)" }}>
        <div className="flex items-start gap-3 mb-3">
          <Megaphone className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "oklch(0.82 0.22 0)" }} />
          <div>
            <h3 className="font-cinzel text-sm font-bold" style={{ color: "oklch(0.82 0.22 0)" }}>
              Core Thesis
            </h3>
            <p className="font-raleway text-xs mt-1 leading-relaxed" style={{ color: "oklch(0.60 0.04 260)" }}>
              Marketing is <span className="font-semibold" style={{ color: "oklch(0.82 0.22 0)" }}>NOT a floor</span> — it's a function that permeates every level of the HB1000 architecture. It is a shared capability, a mindset, and a service, not a department.
            </p>
          </div>
        </div>
      </div>

      {/* Two-Level Architecture */}
      <div>
        <h3 className="font-cinzel text-sm font-bold mb-4" style={{ color: "oklch(0.88 0.18 75)" }}>
          Two-Level Marketing Architecture
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Level 1: Above the Line */}
          <div className="rounded-lg p-5" style={{ background: "oklch(0.15 0.04 260 / 80%)", border: "1px solid oklch(0.88 0.18 75 / 20%)" }}>
            <div className="flex items-center gap-2 mb-3">
              <Globe className="w-4 h-4" style={{ color: "oklch(0.88 0.18 75)" }} />
              <h4 className="font-cinzel text-xs font-bold tracking-widest" style={{ color: "oklch(0.88 0.18 75)" }}>
                LEVEL 1: ABOVE THE LINE
              </h4>
            </div>
            <p className="font-raleway text-xs mb-3 leading-relaxed" style={{ color: "oklch(0.60 0.04 260)" }}>
              <span className="font-semibold" style={{ color: "oklch(0.88 0.18 75)" }}>Marketing Center of Excellence (CoE)</span> — A central virtual entity serving the entire HB1000 ecosystem.
            </p>
            <div className="space-y-2">
              {[
                "Markets the Moonshot — Tells the story of Social Impact Capitalism",
                "Guardian of the Brand — Establishes standards, voice, ethical guidelines",
                "Builds Shared Capabilities — Tools, templates, training, best practices",
                "Manages Shared Infrastructure — Centralizes technology procurement",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 p-2 rounded" style={{ background: "oklch(0.18 0.04 260)" }}>
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: "oklch(0.88 0.18 75)" }} />
                  <p className="font-raleway text-xs leading-relaxed" style={{ color: "oklch(0.55 0.04 260)" }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Level 2: Below the Line */}
          <div className="rounded-lg p-5" style={{ background: "oklch(0.15 0.04 260 / 80%)", border: "1px solid oklch(0.70 0.18 160 / 20%)" }}>
            <div className="flex items-center gap-2 mb-3">
              <Layers className="w-4 h-4" style={{ color: "oklch(0.70 0.18 160)" }} />
              <h4 className="font-cinzel text-xs font-bold tracking-widest" style={{ color: "oklch(0.70 0.18 160)" }}>
                LEVEL 2: BELOW THE LINE
              </h4>
            </div>
            <p className="font-raleway text-xs mb-3 leading-relaxed" style={{ color: "oklch(0.60 0.04 260)" }}>
              <span className="font-semibold" style={{ color: "oklch(0.70 0.18 160)" }}>Decentralized execution</span> at the individual Bingo Card level (F3 Operations).
            </p>
            <div className="space-y-2">
              {[
                "Markets the Initiative — Reaches the Local North Star with solutions",
                "Community Engagement — Builds relationships, fosters trust",
                "Advocacy, Not Advertising — The marketing IS the service",
                "Embedded in Operations — Grounded in actual work being done",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 p-2 rounded" style={{ background: "oklch(0.18 0.04 260)" }}>
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: "oklch(0.70 0.18 160)" }} />
                  <p className="font-raleway text-xs leading-relaxed" style={{ color: "oklch(0.55 0.04 260)" }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Marketing Inside Bingo City */}
      <div className="rounded-lg p-5" style={{ background: "oklch(0.15 0.04 260 / 80%)", border: "1px solid oklch(0.75 0.18 65 / 20%)" }}>
        <h3 className="font-cinzel text-sm font-bold mb-4" style={{ color: "oklch(0.75 0.18 65)" }}>
          Marketing Inside the Bingo City Building
        </h3>
        <div className="space-y-3">
          {[
            {
              title: "Rooftop Society Addition",
              desc: "Herald / Town Crier Avatar",
              role: "Broadcasts successes, brings back cross-initiative intelligence, aligns stories with global brand",
              color: "oklch(0.75 0.18 65)",
            },
            {
              title: "Operations Floor (F3) Sub-Agents",
              desc: "Marketing as a Service (MaaS)",
              role: "Content Creator, Community Weaver, Advocacy Amplifier, Growth Analyst",
              color: "oklch(0.70 0.18 160)",
            },
            {
              title: "PEARL Diamond Integration",
              desc: "Multi-layer presence",
              role: "Core (P) = authentic story. Outer layers (L) = professionalized messaging from CoE",
              color: "oklch(0.88 0.18 75)",
            },
          ].map((item, i) => (
            <div key={i} className="p-3 rounded-lg" style={{ background: "oklch(0.18 0.04 260)" }}>
              <p className="font-rajdhani text-xs font-bold tracking-wider mb-1" style={{ color: item.color }}>
                {item.title}
              </p>
              <p className="font-raleway text-xs mb-1" style={{ color: "oklch(0.60 0.04 260)" }}>
                <span className="font-semibold">{item.desc}</span>
              </p>
              <p className="font-raleway text-xs leading-relaxed" style={{ color: "oklch(0.55 0.04 260)" }}>
                {item.role}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Floor Naming Convention */}
      <div className="rounded-lg p-5" style={{ background: "oklch(0.15 0.04 260 / 80%)", border: "1px solid oklch(0.65 0.18 240 / 20%)" }}>
        <h3 className="font-cinzel text-sm font-bold mb-4" style={{ color: "oklch(0.65 0.18 240)" }}>
          Recommended Floor Naming Convention
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            { floor: "F1", name: "The Engine Room", desc: "Infrastructure" },
            { floor: "F2", name: "The Library", desc: "Data & Intelligence" },
            { floor: "F3", name: "The Workshop", desc: "Operations" },
            { floor: "F4", name: "The Town Square", desc: "Community" },
            { floor: "F5", name: "The Bridge", desc: "Leadership & Strategy" },
          ].map((item) => (
            <div key={item.floor} className="p-3 rounded-lg" style={{ background: "oklch(0.18 0.04 260)" }}>
              <p className="font-rajdhani text-xs font-bold tracking-wider" style={{ color: "oklch(0.70 0.18 160)" }}>
                {item.floor}
              </p>
              <p className="font-cinzel text-xs font-semibold mt-0.5" style={{ color: "oklch(0.88 0.18 75)" }}>
                {item.name}
              </p>
              <p className="font-raleway text-xs mt-1" style={{ color: "oklch(0.50 0.04 260)" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Forceful Recommendation */}
      <div className="rounded-lg p-5" style={{ background: "oklch(0.82 0.22 0 / 8%)", border: "1px solid oklch(0.82 0.22 0 / 25%)" }}>
        <div className="flex items-start gap-3">
          <Zap className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "oklch(0.82 0.22 0)" }} />
          <div>
            <h4 className="font-cinzel text-xs font-bold tracking-widest mb-2" style={{ color: "oklch(0.82 0.22 0)" }}>
              THE FORCEFUL RECOMMENDATION
            </h4>
            <p className="font-raleway text-xs leading-relaxed" style={{ color: "oklch(0.60 0.04 260)" }}>
              Do not build a Marketing Department. Build a <span className="font-semibold" style={{ color: "oklch(0.82 0.22 0)" }}>Marketing as a Service (MaaS) culture</span>, enabled by a central CoE and executed at the local level. This aligns with the Swiss Governance model of <span className="font-semibold">Subsidiarity</span> and <span className="font-semibold">Federation</span>.
            </p>
            <blockquote className="mt-3 pl-3 py-1 border-l-2 font-raleway text-xs italic" style={{ borderColor: "oklch(0.82 0.22 0 / 50%)", color: "oklch(0.82 0.22 0)" }}>
              "Marketing is not a cost center; it is the voice of the mission. It should be everywhere and nowhere at the same time."
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
