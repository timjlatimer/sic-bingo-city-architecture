import { Building2, Users, Zap, Database, Shield, Heart } from "lucide-react";

const FLOORS = [
  {
    level: "F5",
    name: "GOVERNANCE",
    color: "oklch(0.88 0.18 75)",
    bgColor: "oklch(0.88 0.18 75 / 8%)",
    borderColor: "oklch(0.88 0.18 75 / 25%)",
    icon: Shield,
    description: "Rules, protocols, decision-making, Swiss governance",
    components: ["Swiss Governance Model", "Petition Escalation", "Benevolent Dictator Override", "Protocol Management"],
  },
  {
    level: "F4",
    name: "COMMUNITY",
    color: "oklch(0.82 0.22 0)",
    bgColor: "oklch(0.82 0.22 0 / 8%)",
    borderColor: "oklch(0.82 0.22 0 / 25%)",
    icon: Users,
    description: "People, relationships, communication, human connection",
    components: ["Avatar Management", "Communication Layer", "News Channel", "Chat & Dialogue"],
  },
  {
    level: "F3",
    name: "OPERATIONS",
    color: "oklch(0.75 0.18 65)",
    bgColor: "oklch(0.75 0.18 65 / 8%)",
    borderColor: "oklch(0.75 0.18 65 / 25%)",
    icon: Zap,
    description: "Workflows, processes, automation, task execution",
    components: ["Workflow Engine", "Task Scheduler", "Bingo Card Management", "Swarm Mode Coordinator"],
  },
  {
    level: "F2",
    name: "DATA",
    color: "oklch(0.70 0.18 160)",
    bgColor: "oklch(0.70 0.18 160 / 8%)",
    borderColor: "oklch(0.70 0.18 160 / 25%)",
    icon: Database,
    description: "Information layer, analytics, storage, intelligence gathering",
    components: ["Data Lake", "Analytics Engine", "ETL Pipelines", "Cloud Butterfly Intelligence"],
  },
  {
    level: "F1",
    name: "INFRASTRUCTURE",
    color: "oklch(0.65 0.18 240)",
    bgColor: "oklch(0.65 0.18 240 / 8%)",
    borderColor: "oklch(0.65 0.18 240 / 25%)",
    icon: Building2,
    description: "Foundation systems, APIs, connectivity, technical backbone",
    components: ["API Gateway", "Database Layer", "Authentication & OAuth", "Monitoring & Logging"],
  },
];

const ROOFTOP_AVATARS = [
  {
    ring: "INNER RING",
    avatars: [
      { role: "Project Manager", animal: "Lion", system: "System 2 (Rational)" },
      { role: "Situations Manager", animal: "Hawk", system: "System 2 (Rational)" },
      { role: "Companion", animal: "Golden Retriever", system: "System 2 (Rational)" },
      { role: "Source of Truth", animal: "Owl", system: "System 2 (Rational)" },
      { role: '"I Got a Guy" Connector', animal: "Bear", system: "System 2 (Rational)" },
    ],
  },
  {
    ring: "SPECIAL",
    avatars: [
      { role: "Angel of Your Better Nature", animal: "Phoenix", system: "System 3 (Moral)" },
      { role: "Voice of Concern", animal: "Purple Cat", system: "System 1 (Intuitive)" },
    ],
  },
  {
    ring: "OUTER RING",
    avatars: [
      { role: "QA Sentinel", animal: "Eagle", system: "Execution" },
      { role: "Journalist", animal: "Hummingbird", system: "Execution" },
      { role: "Swarm Workers", animal: "Bees", system: "Execution" },
    ],
  },
];

export default function BingoCityArchitecture() {
  return (
    <div className="space-y-6">
      {/* Building Overview */}
      <div>
        <h3 className="font-cinzel text-sm font-bold mb-4" style={{ color: "oklch(0.88 0.18 75)" }}>
          Five-Storey Building Structure
        </h3>
        <div className="space-y-2">
          {FLOORS.map((floor) => {
            const Icon = floor.icon;
            return (
              <div
                key={floor.level}
                className="rounded-lg p-4 transition-all hover:scale-[1.01]"
                style={{ background: floor.bgColor, border: `1px solid ${floor.borderColor}` }}
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg flex-shrink-0" style={{ background: floor.bgColor, border: `1px solid ${floor.borderColor}` }}>
                    <Icon className="w-4 h-4" style={{ color: floor.color }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-rajdhani text-xs font-bold tracking-wider" style={{ color: floor.color }}>
                        {floor.level}
                      </span>
                      <span className="font-cinzel text-xs font-semibold" style={{ color: floor.color }}>
                        {floor.name}
                      </span>
                    </div>
                    <p className="font-raleway text-xs mb-2" style={{ color: "oklch(0.60 0.04 260)" }}>
                      {floor.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {floor.components.map((comp) => (
                        <span
                          key={comp}
                          className="font-rajdhani text-xs px-2 py-1 rounded"
                          style={{
                            background: floor.bgColor,
                            border: `1px solid ${floor.borderColor}`,
                            color: floor.color,
                          }}
                        >
                          {comp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* PEARL Diamond */}
      <div className="rounded-lg p-5" style={{ background: "oklch(0.15 0.04 260 / 80%)", border: "1px solid oklch(0.70 0.18 160 / 20%)" }}>
        <h3 className="font-cinzel text-sm font-bold mb-4" style={{ color: "oklch(0.70 0.18 160)" }}>
          PEARL Diamond — Five Layers of Decision-Making
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { letter: "P", name: "PEOPLE", floor: "F4 Community", desc: "Avatar management, communication, relationships" },
            { letter: "E", name: "EXECUTION", floor: "F3 Operations", desc: "Workflows, task scheduling, automation" },
            { letter: "A", name: "ANALYTICS", floor: "F2 Data", desc: "Data processing, insights, KPI tracking" },
            { letter: "R", name: "RULES", floor: "F5 Governance", desc: "Swiss model, escalation, protocols" },
            { letter: "L", name: "LAYER", floor: "F1 Infrastructure", desc: "APIs, database, authentication" },
          ].map((item) => (
            <div key={item.letter} className="p-3 rounded-lg" style={{ background: "oklch(0.18 0.04 260)" }}>
              <div className="flex items-start gap-2 mb-1">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 font-cinzel font-bold text-xs"
                  style={{ background: "oklch(0.70 0.18 160 / 20%)", color: "oklch(0.70 0.18 160)" }}
                >
                  {item.letter}
                </div>
                <div>
                  <p className="font-rajdhani text-xs font-bold tracking-wider" style={{ color: "oklch(0.70 0.18 160)" }}>
                    {item.name}
                  </p>
                  <p className="font-raleway text-xs" style={{ color: "oklch(0.50 0.04 260)" }}>
                    {item.floor}
                  </p>
                </div>
              </div>
              <p className="font-raleway text-xs leading-relaxed" style={{ color: "oklch(0.55 0.04 260)" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Rooftop Society */}
      <div>
        <h3 className="font-cinzel text-sm font-bold mb-4" style={{ color: "oklch(0.88 0.18 75)" }}>
          Rooftop Society — Avatar Assignments
        </h3>
        <div className="space-y-3">
          {ROOFTOP_AVATARS.map((section) => (
            <div key={section.ring} className="rounded-lg p-4" style={{ background: "oklch(0.15 0.04 260 / 80%)", border: "1px solid oklch(0.78 0.15 75 / 15%)" }}>
              <p className="font-rajdhani text-xs font-bold tracking-wider mb-3" style={{ color: "oklch(0.78 0.15 75)" }}>
                {section.ring}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {section.avatars.map((avatar) => (
                  <div key={avatar.role} className="flex items-start gap-2 p-2 rounded" style={{ background: "oklch(0.18 0.04 260)" }}>
                    <Heart className="w-3 h-3 flex-shrink-0 mt-0.5" style={{ color: "oklch(0.70 0.18 160)" }} />
                    <div className="flex-1 min-w-0">
                      <p className="font-rajdhani text-xs font-semibold" style={{ color: "oklch(0.85 0.04 260)" }}>
                        {avatar.role}
                      </p>
                      <p className="font-raleway text-xs" style={{ color: "oklch(0.50 0.04 260)" }}>
                        {avatar.animal} · {avatar.system}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Kahneman Systems */}
      <div className="rounded-lg p-5" style={{ background: "oklch(0.15 0.04 260 / 80%)", border: "1px solid oklch(0.65 0.18 240 / 20%)" }}>
        <h3 className="font-cinzel text-sm font-bold mb-4" style={{ color: "oklch(0.72 0.20 240)" }}>
          Three Kahneman Systems in Bingo City
        </h3>
        <div className="space-y-3">
          {[
            {
              system: "System 1 — INTUITIVE",
              avatar: "Purple Cat (Voice of Concern)",
              location: "Right corner, never moves",
              role: "Fast, automatic, emotional. Gut feelings, safety concerns.",
              color: "oklch(0.72 0.20 240)",
            },
            {
              system: "System 2 — RATIONAL",
              avatar: "Professional Team (5 avatars)",
              location: "Inner ring, brass stanchion",
              role: "Slow, deliberate, logical. Project management, coordination.",
              color: "oklch(0.78 0.15 75)",
            },
            {
              system: "System 3 — MORAL",
              avatar: "Phoenix (Angel of Your Better Nature)",
              location: "Center, ethereal and glowing",
              role: "Conscience, moral compass. Appears during difficult decisions.",
              color: "oklch(0.88 0.18 75)",
            },
          ].map((item) => (
            <div key={item.system} className="p-3 rounded-lg" style={{ background: "oklch(0.18 0.04 260)" }}>
              <p className="font-rajdhani text-xs font-bold tracking-wider mb-1" style={{ color: item.color }}>
                {item.system}
              </p>
              <p className="font-raleway text-xs mb-1" style={{ color: "oklch(0.60 0.04 260)" }}>
                <span className="font-semibold">{item.avatar}</span> · {item.location}
              </p>
              <p className="font-raleway text-xs leading-relaxed" style={{ color: "oklch(0.55 0.04 260)" }}>
                {item.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
