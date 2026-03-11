# JEEVES ONBOARDING GUIDE

**Welcome, Master Jeeves. This repository is your briefing package.**

---

## Who You Are Talking To

You are receiving a handoff from the Manus AI agent that built the Bingo City front-end for the SIC HB1000 Solve Team. The human directing this work is Tim, the Chief Visionary Officer of the SIC Solve Team. His team calls itself the "SIC HB1000 Hive Mind Solving" team.

**The person we are all building for is Ruby Red** — a 35–45 year old mom of two, the Chief Financial Officer of her household, working poor, often unbanked or underbanked. She is making difficult decisions every day: does she put something back in the grocery line? Does she let the kids go to the $30 extracurricular? How does she pay for the flat tire? The guiding principle is: *"It is expensive to be poor. That is a crime. We are trying to change it."*

---

## What This Repository Contains

This is a full brain dump of everything the Manus agent knows about the Bingo City architecture, organized for you to iterate on. It is not a prototype — it is a complete knowledge transfer.

```
sic-bingo-city-architecture/
├── INDEX.md                          ← Start here — master navigation
├── JEEVES-ONBOARDING.md              ← This file
├── docs/
│   ├── 01-bingo-city-complete-architecture.md
│   ├── 02-floor-naming-conventions.md
│   ├── 03-rooftop-society-complete.md
│   ├── 04-building-configs-all-six.md
│   ├── 05-hb1000-model-above-below-line.md
│   ├── 06-pearl-diamond-layer-mapping.md
│   ├── 07-ruby-red-maven-25-squares.md
│   ├── 08-sub-agent-structures.md
│   ├── 09-standing-directives-relevant.md
│   └── 10-technical-implementation.md
└── research/
    └── marketing-placement-research.md
```

---

## The Five Things You Need to Know First

### 1. The Bingo Card is a Trojan Horse

The 5×5 bingo grid looks simple. Behind each of the 25 squares is a complete AI system. Ruby Red sees a grid. Behind the grid is a city. The simplicity is the strategy. Never expose the complexity in the UI.

### 2. The Five Floors Are Fixed

Every building has exactly five floors:
- **F1 Infrastructure** (blue) — the foundation
- **F2 Data** (green) — the intelligence
- **F3 Operations** (orange) — the daily work
- **F4 Community** (red) — the human connections
- **F5 Governance** (gold) — Ruby Red's sovereignty

These names are non-negotiable. They are the shared vocabulary of the entire ecosystem.

### 3. The Rooftop Society Has Seven Permanent Avatars

Project Manager 🦁, Situations Manager 🦅, Companion 🐕, Journalist 🦉, Source of Truth 🐻, Angel of Better Nature ✨, Voice of Concern 🐱.

The Voice of Concern is OUTSIDE the Inner Ring Stanchion. The Angel is at the CENTER. These positions are architectural, not cosmetic.

### 4. The Center Square is the Heart

Position 13 — the Emergency Fund Builder — is the center square of every Ruby Red Maven bingo card. It is the flat tire fund. It is the most important thing the team can build for her. It gets a star marker ⭐ and special visual treatment.

### 5. Marketing is Distributed, Not a Floor

Marketing is NOT F6. It is distributed across all five floors, coordinated by a Marketing Coordinator avatar on the Rooftop. The primary marketing channel for Ruby Red is peer referral — a friend's recommendation, not an ad. See `/research/marketing-placement-research.md` for the full analysis.

---

## The Live Front-End

The Bingo City front-end is live at:  
**https://bingocity-yybbrshn.manus.space**

It is a React 19 + TypeScript + Tailwind CSS 4 application. The project path is `/home/ubuntu/bingo-city-frontend`. The latest checkpoint is `c8b43409`.

**Four routes:**
- `/bingo-city` — Welcome page with hero building
- `/bingo-city/browse` — Six building cards with mini thumbnails
- `/bingo-city/card/:id` — Individual building detail with bingo grid
- `/bingo-city/city` — Isometric city view with all six buildings

**All data is currently mock data** in `/client/src/pages/bingo-city/data/mockData.ts`. Your job is to replace this with real tRPC endpoints. See `/docs/10-technical-implementation.md` for the exact endpoint signatures.

---

## The V14 Backend Context

The front-end is designed to connect to a V14 backend. The V14 SIC Deployment Protocol is the OS kernel for all SIC HB1000 initiatives. The full protocol lives on GitHub (check the `v14-sic-deployment-protocol` skill if you have access to it).

The key integration points are:
1. Replace mock hooks with tRPC queries (see `/docs/10-technical-implementation.md`)
2. Add real user authentication (the Manus OAuth system is available)
3. Connect the News Channel (cross-building updates) — not yet built in the front-end
4. Add the Swarm Mind three-mode protocol — not yet built in the front-end

---

## The Open Questions for Jeeves

These are the questions the previous agent could not answer alone — they require your judgment:

**1. The Marketing Coordinator Avatar**  
The research recommends adding a Marketing Coordinator (The Storyteller 📖) to the Rooftop Society as an eighth avatar. Do you agree? If so, where does it sit in the three-zone layout?

**2. The Town Crier Building**  
The research recommends a future seventh building dedicated to marketing and community growth. What is the right timing for this? What are its 25 squares?

**3. The HardHat Tour Content**  
The HardHat Tour (5-room backstage tour) currently has placeholder content. What is the real content for each room? Who is the squad member responsible for each floor?

**4. The Pixar Rooftop Visual**  
The current avatars are emoji. The vision is Pixar-style characters. What is the right path to get there? Is this a design sprint? A partnership? A phased approach?

**5. The Crisis Playbook (Position 20)**  
The only blocked square in the Ruby Red Maven card. What partnerships are needed to unblock it? Who are the right community organizations to partner with?

---

## How to Work With Tim

Tim is a visionary. He thinks in metaphors and systems. He does not want to be asked about implementation details — he wants to be asked about the vision. When you are unsure, ask: "What would make Ruby Red feel most seen and supported here?"

Tim's communication style:
- He speaks in concepts, not specifications
- He uses phrases like "above the line / below the line," "the three gangster worlds," "Move 37"
- He values empathy above all else — "there for the grace of God go I"
- He is a best-practice junkie — he wants to know what the best organizations in the world do, then do it better

When Tim says something is "brilliant," he means it — but he also expects you to implement it, not just acknowledge it.

---

## The Anti-Drift Prime Directive

The most important thing to remember: **Ruby Red is the North Star.** Every architectural decision, every feature, every marketing channel, every avatar — it all serves her. When in doubt, ask: "Does this make Ruby Red's life less expensive? Does this make her feel seen? Does this treat her with dignity?"

If the answer is no, it does not belong in the city.

---

*Prepared by Manus AI for the SIC HB1000 Solve Team. March 2026.*  
*"It is expensive to be poor. That is a crime. We are trying to change it."*
