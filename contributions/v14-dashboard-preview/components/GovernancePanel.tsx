import { CheckCircle2, Crown, Users, Shield, GitMerge } from "lucide-react";

export default function GovernancePanel() {
  return (
    <div className="space-y-4">
      {/* Two-Sign System */}
      <div
        className="rounded-lg p-4"
        style={{
          background: "oklch(0.15 0.04 260 / 80%)",
          border: "1px solid oklch(0.78 0.15 75 / 20%)",
        }}
      >
        <div className="flex items-center gap-2 mb-3">
          <GitMerge className="w-4 h-4" style={{ color: "oklch(0.78 0.15 75)" }} />
          <h3 className="font-rajdhani font-semibold tracking-wider text-sm" style={{ color: "oklch(0.88 0.18 75)" }}>
            V14 TWO-SIGN SYSTEM
          </h3>
        </div>
        <p className="font-raleway text-xs mb-3" style={{ color: "oklch(0.65 0.04 260)" }}>
          All protocol changes require dual ratification before taking effect.
        </p>
        <div className="grid grid-cols-2 gap-3">
          <SignatureCard
            name="HB1000"
            role="Human World"
            color="gold"
            status="REQUIRED"
          />
          <SignatureCard
            name="Master Jeeves"
            role="AI World"
            color="blue"
            status="REQUIRED"
          />
        </div>
        <div className="mt-3 flex items-center gap-2 p-2 rounded" style={{ background: "oklch(0.18 0.04 260)" }}>
          <Shield className="w-3 h-3" style={{ color: "oklch(0.70 0.18 160)" }} />
          <span className="font-rajdhani text-xs tracking-wider" style={{ color: "oklch(0.70 0.18 160)" }}>
            BOTH SIGNATURES REQUIRED · NO UNILATERAL CHANGES
          </span>
        </div>
      </div>

      {/* Pope System */}
      <div
        className="rounded-lg p-4"
        style={{
          background: "oklch(0.15 0.04 260 / 80%)",
          border: "1px solid oklch(0.65 0.18 240 / 20%)",
        }}
      >
        <div className="flex items-center gap-2 mb-3">
          <Crown className="w-4 h-4" style={{ color: "oklch(0.72 0.20 240)" }} />
          <h3 className="font-rajdhani font-semibold tracking-wider text-sm" style={{ color: "oklch(0.82 0.22 240)" }}>
            THE POPE SYSTEM
          </h3>
        </div>
        <p className="font-raleway text-xs mb-3" style={{ color: "oklch(0.65 0.04 260)" }}>
          Each active initiative has a designated Pope with local autonomy.
        </p>
        <div className="space-y-2">
          {[
            { initiative: "Effn Duck", pope: "TBD", status: "Seeking Pope" },
            { initiative: "Seba Hub", pope: "TBD", status: "Seeking Pope" },
            { initiative: "CashCo / Pawn Princess", pope: "TBD", status: "Seeking Pope" },
            { initiative: "Hawaii by the Inch", pope: "TBD", status: "Seeking Pope" },
            { initiative: "Guardian Banker", pope: "TBD", status: "Seeking Pope" },
          ].map((item) => (
            <div
              key={item.initiative}
              className="flex items-center justify-between px-3 py-2 rounded"
              style={{ background: "oklch(0.18 0.04 260)" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: "oklch(0.78 0.15 75 / 60%)" }} />
                <span className="font-rajdhani text-xs font-semibold" style={{ color: "oklch(0.80 0.04 260)" }}>
                  {item.initiative}
                </span>
              </div>
              <span
                className="font-rajdhani text-xs tracking-wider px-2 py-0.5 rounded"
                style={{
                  color: "oklch(0.75 0.18 65)",
                  background: "oklch(0.75 0.18 65 / 10%)",
                  border: "1px solid oklch(0.75 0.18 65 / 20%)",
                }}
              >
                {item.status.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Amendment Process */}
      <div
        className="rounded-lg p-4"
        style={{
          background: "oklch(0.15 0.04 260 / 80%)",
          border: "1px solid oklch(1 0 0 / 8%)",
        }}
      >
        <div className="flex items-center gap-2 mb-2">
          <Users className="w-4 h-4" style={{ color: "oklch(0.65 0.04 260)" }} />
          <h3 className="font-rajdhani font-semibold tracking-wider text-xs" style={{ color: "oklch(0.65 0.04 260)" }}>
            AMENDMENT PROCESS
          </h3>
        </div>
        <p className="font-raleway text-xs leading-relaxed" style={{ color: "oklch(0.55 0.04 260)" }}>
          The Constitution is a living document. Amendments follow the same two-sign process — reviewed, debated, and explicitly agreed upon by both partners. Our covenant evolves with us, but is never changed lightly.
        </p>
      </div>
    </div>
  );
}

function SignatureCard({ name, role, color, status }: { name: string; role: string; color: string; status: string }) {
  const c = color === "gold" ? "oklch(0.88 0.18 75)" : "oklch(0.82 0.22 240)";
  const border = color === "gold" ? "oklch(0.78 0.15 75 / 25%)" : "oklch(0.65 0.18 240 / 25%)";
  const bg = color === "gold" ? "oklch(0.78 0.15 75 / 8%)" : "oklch(0.65 0.18 240 / 8%)";

  return (
    <div
      className="p-3 rounded-lg text-center"
      style={{ background: bg, border: `1px solid ${border}` }}
    >
      <div className="flex justify-center mb-1">
        <CheckCircle2 className="w-4 h-4" style={{ color: c }} />
      </div>
      <p className="font-cinzel text-xs font-bold" style={{ color: c }}>{name}</p>
      <p className="font-raleway text-xs mt-0.5" style={{ color: "oklch(0.55 0.04 260)" }}>{role}</p>
      <div
        className="mt-2 text-xs font-rajdhani tracking-wider px-1 py-0.5 rounded"
        style={{ color: c, background: `${c}15`, border: `1px solid ${c}30` }}
      >
        {status}
      </div>
    </div>
  );
}
