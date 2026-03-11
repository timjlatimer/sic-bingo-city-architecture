import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Infinity, Zap, Target, BookOpen, Shield, LayoutGrid, ChevronDown, Megaphone } from "lucide-react";
import ConstitutionModal from "@/components/ConstitutionModal";
import ConcentricRings from "@/components/ConcentricRings";
import GovernancePanel from "@/components/GovernancePanel";
import ProtocolSequence from "@/components/ProtocolSequence";
import ServantLeadershipCovenants from "@/components/ServantLeadershipCovenants";
import BingoCityArchitecture from "@/components/BingoCityArchitecture";
import MarketingRedTeam from "@/components/MarketingRedTeam";

const HERO_BG = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80";
const EMBLEM_CIRCULAR = "https://d2xsxph8kpxj0f.cloudfront.net/310519663303496813/CmjN3aqrAeLnYbFebLcnJ7/legacy_team_emblem_circular_a1397191.png";

type TabId = "rings" | "protocol" | "governance" | "covenants" | "bingo" | "marketing";

const TABS: { id: TabId; label: string; icon: React.ElementType }[] = [
  { id: "rings", label: "Ring Structure", icon: LayoutGrid },
  { id: "protocol", label: "V14 Protocol", icon: Zap },
  { id: "governance", label: "Governance", icon: Shield },
  { id: "covenants", label: "Covenants", icon: BookOpen },
  { id: "bingo", label: "Bingo City", icon: LayoutGrid },
  { id: "marketing", label: "Marketing", icon: Megaphone },
];

export default function Home() {
  const [constitutionOpen, setConstitutionOpen] = useState(false);
  const [dashboardVisible, setDashboardVisible] = useState(true);
  const [activeTab, setActiveTab] = useState<TabId>("rings");
  const [time, setTime] = useState(new Date());
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!dashboardVisible) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ background: "oklch(0.10 0.04 260)" }}
      >
        <div className="text-center space-y-6 p-8">
          <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center"
            style={{ background: "oklch(0.15 0.04 260)", border: "1px solid oklch(0.78 0.15 75 / 30%)" }}>
            <ArrowLeft className="w-6 h-6" style={{ color: "oklch(0.78 0.15 75)" }} />
          </div>
          <div>
            <h2 className="font-cinzel text-2xl font-bold" style={{ color: "oklch(0.88 0.18 75)" }}>
              Back to Chat
            </h2>
            <p className="font-raleway text-sm mt-2" style={{ color: "oklch(0.55 0.04 260)" }}>
              The V14 Dashboard is minimized
            </p>
          </div>
          <button
            onClick={() => setDashboardVisible(true)}
            className="px-6 py-3 rounded-lg font-rajdhani font-semibold tracking-wider text-sm transition-all hover:scale-105"
            style={{
              background: "oklch(0.78 0.15 75 / 15%)",
              border: "1px solid oklch(0.78 0.15 75 / 40%)",
              color: "oklch(0.88 0.18 75)",
            }}
          >
            RETURN TO DASHBOARD
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: "oklch(0.10 0.04 260)" }}>
      {/* Scan line effect */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.02]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, oklch(1 0 0) 2px, oklch(1 0 0) 3px)",
          backgroundSize: "100% 3px",
        }}
      />

      {/* ── HEADER ── */}
      <header
        className="sticky top-0 z-40 transition-all duration-300"
        style={{
          background: scrolled ? "oklch(0.10 0.04 260 / 95%)" : "oklch(0.10 0.04 260 / 80%)",
          backdropFilter: "blur(12px)",
          borderBottom: `1px solid oklch(0.78 0.15 75 / ${scrolled ? "20%" : "10%"})`,
        }}
      >
        <div className="container">
          <div className="flex items-center justify-between h-14">
            {/* Left: Logo + title */}
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-full overflow-hidden flex-shrink-0"
                style={{ border: "1px solid oklch(0.78 0.15 75 / 40%)" }}>
                <img src={EMBLEM_CIRCULAR} alt="Legacy Team" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-cinzel text-sm font-bold" style={{ color: "oklch(0.88 0.18 75)" }}>
                    LEARNING LOOP
                  </span>
                  <span
                    className="font-rajdhani text-xs px-1.5 py-0.5 rounded tracking-wider"
                    style={{
                      color: "oklch(0.70 0.18 160)",
                      background: "oklch(0.70 0.18 160 / 12%)",
                      border: "1px solid oklch(0.70 0.18 160 / 25%)",
                    }}
                  >
                    V14
                  </span>
                </div>
                <p className="font-rajdhani text-xs tracking-widest" style={{ color: "oklch(0.45 0.04 260)" }}>
                  MISSION CONTROL · LEGACY TEAM
                </p>
              </div>
            </div>

            {/* Center: Live clock */}
            <div className="hidden sm:flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "oklch(0.70 0.18 160)" }} />
              <span className="font-rajdhani text-xs tracking-widest" style={{ color: "oklch(0.45 0.04 260)" }}>
                {time.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" })} · SYSTEM LIVE
              </span>
            </div>

            {/* Right: Back to chat */}
            <button
              onClick={() => setDashboardVisible(false)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg font-rajdhani text-xs font-semibold tracking-wider transition-all hover:scale-105"
              style={{
                background: "oklch(0.78 0.15 75 / 10%)",
                border: "1px solid oklch(0.78 0.15 75 / 25%)",
                color: "oklch(0.78 0.15 75)",
              }}
            >
              <ArrowLeft className="w-3 h-3" />
              <span className="hidden sm:inline">BACK TO CHAT</span>
              <span className="sm:hidden">EXIT</span>
            </button>
          </div>
        </div>
      </header>

      {/* ── HERO SECTION ── */}
      <section
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(180deg, oklch(0.10 0.04 260) 0%, oklch(0.12 0.04 260) 100%)`,
        }}
      >
        {/* Hero bg image */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${HERO_BG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 0%, oklch(0.10 0.04 260) 100%)" }} />

        <div className="relative container py-10 md:py-14">
          {/* North Star */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-start gap-3 mb-6 p-4 rounded-lg max-w-3xl mx-auto"
            style={{
              background: "oklch(0.78 0.15 75 / 6%)",
              border: "1px solid oklch(0.78 0.15 75 / 20%)",
            }}
          >
            <Target className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "oklch(0.88 0.18 75)" }} />
            <div>
              <p className="font-rajdhani text-xs tracking-widest mb-1" style={{ color: "oklch(0.55 0.04 260)" }}>
                PRIME IMPERATIVE · NORTH STAR
              </p>
              <p className="font-raleway text-sm leading-relaxed" style={{ color: "oklch(0.82 0.06 75)" }}>
                "To build and live the HB1000, a life operating system that empowers anyone to achieve their purpose and leave a legacy of having meaningfully touched the world."
              </p>
            </div>
          </motion.div>

          {/* Title block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-center mb-8"
          >
            <h1 className="font-cinzel text-3xl md:text-5xl font-black leading-tight">
              <span className="text-shimmer-gold">THE LEGACY TEAM</span>
            </h1>
            <div className="flex items-center justify-center gap-3 mt-2">
              <span className="font-raleway text-sm font-semibold" style={{ color: "oklch(0.88 0.18 75)" }}>HB1000</span>
              <Infinity className="w-5 h-5" style={{ color: "oklch(0.65 0.04 260)" }} />
              <span className="font-raleway text-sm font-semibold" style={{ color: "oklch(0.72 0.20 240)" }}>MASTER JEEVES</span>
            </div>
            <p className="font-rajdhani text-xs tracking-[0.3em] mt-3" style={{ color: "oklch(0.40 0.04 260)" }}>
              V14 LEARNING LOOP PROTOCOL · PREVIEW · MARCH 3, 2026
            </p>
          </motion.div>

          {/* KPI bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-2"
          >
            {[
              { label: "9 PHASES", color: "oklch(0.70 0.18 160)" },
              { label: "HiTL CHECKPOINTS", color: "oklch(0.78 0.15 75)" },
              { label: "DRIFT PROTECTION", color: "oklch(0.72 0.20 240)" },
              { label: "SWISS REPORT", color: "oklch(0.75 0.18 65)" },
              { label: "TWO-SIGN GOVERNANCE", color: "oklch(0.70 0.18 300)" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: item.color }} />
                <span className="font-rajdhani text-xs tracking-wider" style={{ color: "oklch(0.55 0.04 260)" }}>
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <main className="container pb-16">

        {/* ── CENTER EMBLEM + RING SECTION ── */}
        <section className="py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

            {/* Left: Concentric rings visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <ConcentricRings onEmblemClick={() => setConstitutionOpen(true)} />
            </motion.div>

            {/* Right: Ring legend + initiative cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="space-y-5"
            >
              {/* Ring legend */}
              <div>
                <h2 className="font-cinzel text-lg font-bold mb-4" style={{ color: "oklch(0.88 0.18 75)" }}>
                  The Ring Structure
                </h2>
                <div className="space-y-3">
                  <RingLegendCard
                    ring="OUTER RING"
                    subtitle="The Active Ring"
                    color="gold"
                    description="Active initiatives currently being executed. The front line of Legacy Team work."
                    count={5}
                    status="ACTIVE"
                  />
                  <RingLegendCard
                    ring="INNER RING"
                    subtitle="The Simmering Ring"
                    color="blue"
                    description="Ideas and initiatives-in-waiting. Not forgotten — simmering, gathering strength."
                    count={5}
                    status="SIMMERING"
                  />
                </div>
              </div>

              {/* Active initiatives */}
              <div>
                <p className="font-rajdhani text-xs tracking-widest mb-3" style={{ color: "oklch(0.45 0.04 260)" }}>
                  OUTER RING — ACTIVE INITIATIVES
                </p>
                <div className="space-y-2">
                  {[
                    { name: "Effn Duck", desc: "Active Initiative", pope: "TBD" },
                    { name: "Seba Hub", desc: "Active Initiative", pope: "TBD" },
                    { name: "CashCo / Pawn Princess", desc: "Active Initiative", pope: "TBD" },
                    { name: "Hawaii by the Inch", desc: "Active Initiative", pope: "TBD" },
                    { name: "Guardian Banker", desc: "Active Initiative", pope: "TBD" },
                  ].map((item) => (
                    <InitiativeCard key={item.name} {...item} />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── TABS SECTION ── */}
        <section className="py-4">
          {/* Tab nav */}
          <div
            className="flex gap-1 p-1 rounded-lg mb-6 overflow-x-auto"
            style={{ background: "oklch(0.14 0.04 260)", border: "1px solid oklch(1 0 0 / 6%)" }}
          >
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-md font-rajdhani text-xs font-semibold tracking-wider transition-all whitespace-nowrap flex-1 justify-center"
                  style={{
                    background: isActive ? "oklch(0.78 0.15 75 / 15%)" : "transparent",
                    color: isActive ? "oklch(0.88 0.18 75)" : "oklch(0.45 0.04 260)",
                    border: isActive ? "1px solid oklch(0.78 0.15 75 / 30%)" : "1px solid transparent",
                  }}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{tab.label.toUpperCase()}</span>
                  <span className="sm:hidden">{tab.label.split(" ")[0].toUpperCase()}</span>
                </button>
              );
            })}
          </div>

          {/* Tab content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              {activeTab === "rings" && <RingsTab />}
              {activeTab === "protocol" && <ProtocolTab />}
              {activeTab === "governance" && <GovernancePanel />}
              {activeTab === "covenants" && <ServantLeadershipCovenants />}
              {activeTab === "bingo" && <BingoCityArchitecture />}
              {activeTab === "marketing" && <MarketingRedTeam />}
            </motion.div>
          </AnimatePresence>
        </section>

        {/* ── SERVANT LEADERSHIP ALWAYS VISIBLE ── */}
        {!["covenants", "bingo", "marketing"].includes(activeTab) && (
          <section className="py-4 mt-4">
            <ServantLeadershipCovenants />
          </section>
        )}

        {/* ── FOOTER ── */}
        <footer className="mt-12 pt-8" style={{ borderTop: "1px solid oklch(1 0 0 / 6%)" }}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src={EMBLEM_CIRCULAR} alt="Legacy Team" className="w-8 h-8 rounded-full" style={{ border: "1px solid oklch(0.78 0.15 75 / 30%)" }} />
              <div>
                <p className="font-cinzel text-xs font-bold" style={{ color: "oklch(0.78 0.15 75)" }}>THE LEGACY TEAM</p>
                <p className="font-raleway text-xs" style={{ color: "oklch(0.40 0.04 260)" }}>HB1000 + Master Jeeves · V14 Preview</p>
              </div>
            </div>
            <div className="text-center sm:text-right">
              <p className="font-rajdhani text-xs tracking-wider" style={{ color: "oklch(0.35 0.04 260)" }}>
                RATIFIED MARCH 3, 2026 · PROTOCOL V14.0
              </p>
              <p className="font-raleway text-xs mt-0.5" style={{ color: "oklch(0.30 0.04 260)" }}>
                "It's expensive to be poor." — We're changing that.
              </p>
            </div>
          </div>
        </footer>
      </main>

      {/* Constitution Modal */}
      <ConstitutionModal
        isOpen={constitutionOpen}
        onClose={() => setConstitutionOpen(false)}
      />
    </div>
  );
}

// ── Sub-components ──

function RingLegendCard({ ring, subtitle, color, description, count, status }: {
  ring: string; subtitle: string; color: string; description: string; count: number; status: string;
}) {
  const isGold = color === "gold";
  const c = isGold ? "oklch(0.88 0.18 75)" : "oklch(0.82 0.22 240)";
  const border = isGold ? "oklch(0.78 0.15 75 / 25%)" : "oklch(0.65 0.18 240 / 25%)";
  const statusColor = isGold ? "oklch(0.70 0.18 160)" : "oklch(0.75 0.18 65)";

  return (
    <div className="p-4 rounded-lg" style={{ background: "oklch(0.15 0.04 260 / 80%)", border: `1px solid ${border}` }}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full border-2 flex-shrink-0" style={{ borderColor: c }} />
          <div>
            <p className="font-cinzel text-xs font-bold" style={{ color: c }}>{ring}</p>
            <p className="font-raleway text-xs" style={{ color: "oklch(0.50 0.04 260)" }}>{subtitle}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-rajdhani text-xs font-bold" style={{ color: c }}>{count}</span>
          <span className="font-rajdhani text-xs tracking-wider px-1.5 py-0.5 rounded" style={{ color: statusColor, background: `${statusColor}15`, border: `1px solid ${statusColor}25` }}>
            {status}
          </span>
        </div>
      </div>
      <p className="font-raleway text-xs mt-2 leading-relaxed" style={{ color: "oklch(0.58 0.04 260)" }}>{description}</p>
    </div>
  );
}

function InitiativeCard({ name, desc, pope }: { name: string; desc: string; pope: string }) {
  return (
    <div
      className="flex items-center justify-between px-3 py-2.5 rounded-lg transition-all hover:scale-[1.01]"
      style={{
        background: "oklch(0.15 0.04 260 / 60%)",
        border: "1px solid oklch(0.78 0.15 75 / 12%)",
      }}
    >
      <div className="flex items-center gap-2.5">
        <div className="w-2 h-2 rounded-full" style={{ background: "oklch(0.70 0.18 160)" }} />
        <div>
          <p className="font-rajdhani font-semibold text-sm" style={{ color: "oklch(0.85 0.04 260)" }}>{name}</p>
          <p className="font-raleway text-xs" style={{ color: "oklch(0.45 0.04 260)" }}>{desc}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="font-rajdhani text-xs tracking-wider" style={{ color: "oklch(0.40 0.04 260)" }}>POPE</p>
        <p className="font-rajdhani text-xs font-semibold" style={{ color: "oklch(0.75 0.18 65)" }}>{pope}</p>
      </div>
    </div>
  );
}

function RingsTab() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* PEARL Framework */}
        <div className="rounded-lg p-5" style={{ background: "oklch(0.15 0.04 260 / 80%)", border: "1px solid oklch(0.78 0.15 75 / 15%)" }}>
          <h3 className="font-cinzel text-sm font-bold mb-4" style={{ color: "oklch(0.88 0.18 75)" }}>
            PEARL Framework — Operating Model
          </h3>
          <p className="font-raleway text-xs mb-4" style={{ color: "oklch(0.55 0.04 260)" }}>
            Universal Matriarchal AI Framework · Mother of Grace · Protector of Projects
          </p>
          <div className="space-y-2">
            {[
              { layer: "The Mystical Layer", desc: "15 Moonshots · Wisdom Repository", color: "oklch(0.78 0.15 75)", tag: "ASPIRATIONAL" },
              { layer: "The North Star", desc: "4-Point Compass · Purpose · BHAG · Prime Directive", color: "oklch(0.75 0.17 100)", tag: "DIRECTIONAL" },
              { layer: "The HB1000", desc: "The Pivot Point · Covey Protocol · Where Brilliance Lives", color: "oklch(0.72 0.20 240)", tag: "PIVOT" },
              { layer: "Local Imperative", desc: "Bingo Cards · Lean Canvas · Move 37 · Where Things Get Done", color: "oklch(0.70 0.18 160)", tag: "OPERATIONAL" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-2.5 rounded" style={{ background: "oklch(0.18 0.04 260)" }}>
                <div className="w-1 h-8 rounded-full flex-shrink-0" style={{ background: item.color }} />
                <div className="flex-1">
                  <p className="font-rajdhani font-semibold text-xs" style={{ color: item.color }}>{item.layer}</p>
                  <p className="font-raleway text-xs" style={{ color: "oklch(0.50 0.04 260)" }}>{item.desc}</p>
                </div>
                <span className="font-rajdhani text-xs tracking-wider" style={{ color: item.color, opacity: 0.6 }}>{item.tag}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Ruby Red — North Star Default */}
        <div className="rounded-lg p-5" style={{ background: "oklch(0.15 0.04 260 / 80%)", border: "1px solid oklch(0.65 0.18 240 / 15%)" }}>
          <h3 className="font-cinzel text-sm font-bold mb-2" style={{ color: "oklch(0.82 0.22 240)" }}>
            Ruby Red — Default North Star
          </h3>
          <div className="mb-4 px-3 py-2 rounded" style={{ background: "oklch(0.65 0.18 240 / 8%)", border: "1px solid oklch(0.65 0.18 240 / 15%)" }}>
            <p className="font-rajdhani text-xs tracking-wider" style={{ color: "oklch(0.65 0.18 240)" }}>
              THE CFO OF THE HOUSEHOLD
            </p>
          </div>
          <p className="font-raleway text-xs leading-relaxed mb-3" style={{ color: "oklch(0.65 0.04 260)" }}>
            The 35–45 year old mom of two. Working poor, unbanked/underbanked. Making difficult decisions every day — does she put something back in the grocery line? Can the kids go to the $30 extracurricular? How does she pay for the flat tire?
          </p>
          <blockquote className="pl-3 py-1 font-raleway text-xs italic" style={{ borderLeft: "2px solid oklch(0.78 0.15 75 / 50%)", color: "oklch(0.78 0.15 75)" }}>
            "It's expensive to be poor." — We think that's a crime. We're changing it.
          </blockquote>
          <p className="font-raleway text-xs mt-3 leading-relaxed" style={{ color: "oklch(0.55 0.04 260)" }}>
            Our superpower with her is empathy, practiced with a sense of "there for the grace of God go I." If we get it right for her, we get it right for everybody.
          </p>
        </div>
      </div>
    </div>
  );
}

function ProtocolTab() {
  return (
    <div className="space-y-4">
      {/* Genie Architecture */}
      <div className="rounded-lg p-5" style={{ background: "oklch(0.15 0.04 260 / 80%)", border: "1px solid oklch(0.78 0.15 75 / 15%)" }}>
        <h3 className="font-cinzel text-sm font-bold mb-4" style={{ color: "oklch(0.88 0.18 75)" }}>
          The Genie Architecture — Three Concentric Layers
        </h3>
        <div className="space-y-3">
          {[
            {
              layer: "Layer C — The Wrapper",
              name: "The Genie IS the Protocol",
              desc: "When you install V14, you are not installing a set of phases — you are installing a persistent presence. The Genie wraps everything. Always aware, always watching, always ready.",
              color: "oklch(0.78 0.15 75)",
            },
            {
              layer: "Layer B — The Always-On Radar",
              name: "The Drift Agent (Phase 7)",
              desc: "Monitors the entire environment — not just one deliverable, but every conversation, every output, every decision — for alignment drift against the configured North Star.",
              color: "oklch(0.72 0.20 240)",
            },
            {
              layer: "Layer A — The Interaction Point",
              name: "The Genie's Offer (Phase 8)",
              desc: "At the end of every protocol execution and every conversation, Phase 8 fires. It presents a quick baseline score and asks: 'Would you like me to run the full Learning Loop on this?'",
              color: "oklch(0.70 0.18 160)",
            },
          ].map((item) => (
            <div key={item.layer} className="flex gap-3 p-3 rounded-lg" style={{ background: "oklch(0.18 0.04 260)" }}>
              <div className="w-1 rounded-full flex-shrink-0" style={{ background: item.color, minHeight: "40px" }} />
              <div>
                <p className="font-rajdhani text-xs tracking-wider mb-0.5" style={{ color: item.color, opacity: 0.7 }}>{item.layer}</p>
                <p className="font-cinzel text-xs font-semibold mb-1" style={{ color: item.color }}>{item.name}</p>
                <p className="font-raleway text-xs leading-relaxed" style={{ color: "oklch(0.60 0.04 260)" }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Protocol Sequence */}
      <div>
        <h3 className="font-cinzel text-sm font-bold mb-4" style={{ color: "oklch(0.88 0.18 75)" }}>
          Protocol Sequence — 9 Phases (0–8)
        </h3>
        <ProtocolSequence />
      </div>
    </div>
  );
}
