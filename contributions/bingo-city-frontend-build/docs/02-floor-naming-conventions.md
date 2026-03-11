# Floor Naming Conventions

**SIC HB1000 Solve Team | March 2026**

---

## The Five-Floor System

Every Bingo City building has exactly five floors. The naming is fixed across all buildings — the same five floors appear in every initiative. This is intentional: it creates a shared vocabulary across the entire ecosystem. When Ruby Red learns that F3 is Operations in her Maven building, she knows F3 is Operations in every other building too.

---

## Complete Floor Reference

### F1 — Infrastructure 🏗️

**Color:** Blue `#1e40af`  
**Purpose:** The foundation layer. Everything that must exist before anything else can work.  
**What lives here:** Authentication systems, data encryption, mobile UI, API gateways, offline capability, performance infrastructure.  
**Ruby Red Maven squares:** User Auth System, Data Encryption, Mobile-First UI, Offline Mode, API Gateway  
**Why it's blue:** Blue = trust, stability, foundation. The bedrock of the building.  
**Floor identity:** "The basement that holds everything up." Ruby Red never sees this floor directly — it works silently for her.

---

### F2 — Data 📊

**Color:** Green `#15803d`  
**Purpose:** Intelligence and awareness. Knowing what is true about Ruby Red's situation right now.  
**What lives here:** Budget tracking, benefits monitoring, spending pattern analysis, income tracking, bill calendars.  
**Ruby Red Maven squares:** Budget Guardian, Benefits Navigator, Spending Patterns, Income Tracker, Bill Calendar  
**Why it's green:** Green = growth, money, life. The data floor is where her financial picture becomes clear.  
**Floor identity:** "The floor that knows." This is where her situation is understood before any action is taken.

---

### F3 — Operations ⚙️

**Color:** Orange `#d97706`  
**Purpose:** Day-to-day execution. The work that happens every single day to make her life better.  
**What lives here:** Deal hunting, bill strategy, emergency fund building, subscription auditing, smart notifications.  
**Ruby Red Maven squares:** Deal Hunter, Bill Strategist, Emergency Fund Builder ⭐, Subscription Auditor, Smart Notifications  
**Why it's orange:** Orange = energy, action, warmth. This is the busiest floor — constant activity.  
**Floor identity:** "The floor that acts." F3 is where the team does the daily work of making her money stretch further.  
**Special note:** Position 13 (the center square) is the Emergency Fund Builder — the "flat tire fund." It is the heart of the bingo card and receives special visual treatment (star marker ⭐).

---

### F4 — Community 🤝

**Color:** Red `#dc2626`  
**Purpose:** Connection and advocacy. Linking Ruby Red to the people and resources around her.  
**What lives here:** Advocacy, community connections, kids activity finding, peer networking, crisis playbooks.  
**Ruby Red Maven squares:** Advocate, Community Connect, Kids Activity Finder, Peer Network, Crisis Playbook  
**Why it's red:** Red = urgency, passion, human connection. This floor deals with the most emotionally charged aspects of her life.  
**Floor identity:** "The floor that connects." Ruby Red is not alone. This floor makes sure she knows that.

---

### F5 — Governance 👑

**Color:** Gold `#ca8a04`  
**Purpose:** Rules, trust, and Ruby Red's sovereignty over her own data and experience.  
**What lives here:** Privacy controls, feedback loops, transparency reports, ethics guardians, community standards.  
**Ruby Red Maven squares:** Privacy Controls, Feedback Loop, Transparency Report, Ethics Guardian, Community Standards  
**Why it's gold:** Gold = value, sovereignty, the highest level. This floor is where Ruby Red is in charge.  
**Floor identity:** "The floor that protects." F5 ensures the system works *for* her, not on her. She owns her data. Period.

---

## The Floor Color System in Code

```typescript
export const FLOORS: FloorInfo[] = [
  { number: 1, name: "Infrastructure", label: "F1", color: "#1e40af", emoji: "🏗️" },
  { number: 2, name: "Data",           label: "F2", color: "#15803d", emoji: "📊" },
  { number: 3, name: "Operations",     label: "F3", color: "#d97706", emoji: "⚙️" },
  { number: 4, name: "Community",      label: "F4", color: "#dc2626", emoji: "🤝" },
  { number: 5, name: "Governance",     label: "F5", color: "#ca8a04", emoji: "👑" },
];
```

---

## Floor Naming in the UI

In the current front-end implementation, floors are displayed in three contexts:

**1. Building Visual (full):** Each floor shows as a full-width row with the floor label (F1–F5), floor name, emoji, and a progress count (e.g., "4/5"). Clicking a floor highlights the corresponding row in the bingo grid.

**2. Building Visual (mini, Browse page):** Each floor shows as a narrow colored bar stacked vertically. The color identifies the floor. No text at this scale.

**3. Bingo Grid:** The left side of each row shows the floor label and name. The five cells in each row correspond to the five squares on that floor.

---

## The Marketing Floor Question

One open architectural question is whether Marketing should become **F6** — a sixth floor added to the standard five. This is addressed in depth in `/research/marketing-placement-research.md`. The short answer: Marketing probably should NOT be F6. It should be distributed across all five floors, with a dedicated Marketing avatar on the Rooftop Society to coordinate it.

---

*Document prepared by Manus AI for the SIC HB1000 Solve Team.*
