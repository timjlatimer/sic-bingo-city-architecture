import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

const PHASES = [
  {
    num: "00",
    name: "System of Intake",
    subtitle: "The Sorter · Smelling Salts Protocol",
    desc: "North Star confirmation, initiative intake, Quick Scan option. Phase 0 confirms the North Star before any scoring begins.",
    status: "PENDING",
    color: "oklch(0.78 0.15 75)",
  },
  {
    num: "01",
    name: "System of Record",
    subtitle: "The Assessor · 5-Dimension Scoring",
    desc: "Baseline scoring across Completeness, Clarity, Accuracy, Depth, and Actionability — all calibrated to the North Star.",
    status: "PENDING",
    color: "oklch(0.75 0.17 100)",
  },
  {
    num: "02",
    name: "System of Innovation",
    subtitle: "Best Practice Junkie · External Scan",
    desc: "External research on latest innovations and best practices. What could we do better? What are the wisdom giants doing?",
    status: "PENDING",
    color: "oklch(0.72 0.18 130)",
  },
  {
    num: "03",
    name: "System of Adversarial Integrity",
    subtitle: "Society of Guardians · Defender vs. Prosecutor",
    desc: "Rigorous challenge of the deliverable. The Defender argues for it; the Prosecutor attacks it. Truth emerges from tension.",
    status: "PENDING",
    color: "oklch(0.70 0.18 160)",
  },
  {
    num: "04",
    name: "System of Communication",
    subtitle: "The Presenter · Swiss Presentation",
    desc: "Final deliverable formatted in Swiss International Style — clean, precise, and ready for any audience.",
    status: "PENDING",
    color: "oklch(0.68 0.18 200)",
  },
  {
    num: "05",
    name: "System of Evolution",
    subtitle: "Protocol Engineer · Amendment Proposal",
    desc: "What should change in the protocol itself? Continuous improvement of the operating system, not just the deliverable.",
    status: "PENDING",
    color: "oklch(0.65 0.18 240)",
  },
  {
    num: "06",
    name: "System of Certification",
    subtitle: "The Proctor · Fidelity Score & Certificate",
    desc: "Final certification of the deliverable. Fidelity score issued. Certificate generated. The work is ratified.",
    status: "PENDING",
    color: "oklch(0.62 0.18 270)",
  },
  {
    num: "07",
    name: "System of Drift Audit",
    subtitle: "Drift Agent · HB1000 HiTL Accept/Reject",
    desc: "Scans the entire environment for alignment drift against the North Star, ethics framework, and core values. Human-in-the-Loop checkpoint.",
    status: "PENDING",
    color: "oklch(0.60 0.18 300)",
  },
  {
    num: "08",
    name: "The Genie",
    subtitle: "Persistent Agent · Cumulative KPI & Persistence Offer",
    desc: "The Genie speaks. Presents cumulative KPI, offers to stay in the environment, asks: 'Would you like me to run the full Learning Loop on this?'",
    status: "ACTIVE",
    color: "oklch(0.78 0.15 75)",
    special: true,
  },
];

export default function ProtocolSequence() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="space-y-1.5">
      {PHASES.map((phase) => {
        const isExpanded = expanded === phase.num;
        const isActive = phase.status === "ACTIVE";
        return (
          <div
            key={phase.num}
            className="rounded-lg overflow-hidden transition-all duration-200"
            style={{
              background: isExpanded ? "oklch(0.18 0.04 260)" : "oklch(0.15 0.04 260 / 60%)",
              border: `1px solid ${isActive ? phase.color + "40" : "oklch(1 0 0 / 6%)"}`,
              boxShadow: isActive ? `0 0 12px ${phase.color}15` : "none",
            }}
          >
            <button
              className="w-full flex items-center gap-3 px-4 py-3 text-left"
              onClick={() => setExpanded(isExpanded ? null : phase.num)}
            >
              {/* Phase number */}
              <span
                className="font-rajdhani font-bold text-sm w-8 flex-shrink-0"
                style={{ color: phase.color, opacity: 0.9 }}
              >
                {phase.num}
              </span>

              {/* Phase info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span
                    className="font-rajdhani font-semibold text-sm tracking-wide"
                    style={{ color: isActive ? "oklch(0.92 0.01 60)" : "oklch(0.75 0.04 260)" }}
                  >
                    {phase.name}
                  </span>
                  {phase.special && (
                    <span
                      className="text-xs font-rajdhani px-1.5 py-0.5 rounded tracking-wider"
                      style={{
                        color: "oklch(0.88 0.18 75)",
                        background: "oklch(0.78 0.15 75 / 15%)",
                        border: "1px solid oklch(0.78 0.15 75 / 30%)",
                      }}
                    >
                      V13 NEW
                    </span>
                  )}
                </div>
                <p className="font-raleway text-xs mt-0.5" style={{ color: "oklch(0.50 0.04 260)" }}>
                  {phase.subtitle}
                </p>
              </div>

              {/* Status */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <span
                  className="font-rajdhani text-xs tracking-wider px-2 py-0.5 rounded"
                  style={{
                    color: isActive ? "oklch(0.70 0.18 160)" : "oklch(0.45 0.04 260)",
                    background: isActive ? "oklch(0.70 0.18 160 / 10%)" : "oklch(1 0 0 / 4%)",
                    border: `1px solid ${isActive ? "oklch(0.70 0.18 160 / 25%)" : "oklch(1 0 0 / 6%)"}`,
                  }}
                >
                  {phase.status}
                </span>
                {isExpanded ? (
                  <ChevronDown className="w-3 h-3" style={{ color: "oklch(0.45 0.04 260)" }} />
                ) : (
                  <ChevronRight className="w-3 h-3" style={{ color: "oklch(0.35 0.04 260)" }} />
                )}
              </div>
            </button>

            {/* Expanded content */}
            {isExpanded && (
              <div
                className="px-4 pb-3"
                style={{ borderTop: "1px solid oklch(1 0 0 / 5%)" }}
              >
                <p className="font-raleway text-xs leading-relaxed mt-2" style={{ color: "oklch(0.65 0.04 260)" }}>
                  {phase.desc}
                </p>
                <div className="mt-2 flex items-center gap-1">
                  <div className="w-1 h-1 rounded-full" style={{ background: phase.color, opacity: 0.6 }} />
                  <span className="font-rajdhani text-xs tracking-wider" style={{ color: phase.color, opacity: 0.7 }}>
                    KPI CONTRIBUTION TRACKED
                  </span>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
