# Standing Directives — Bingo City Relevant

**SIC HB1000 Solve Team | March 2026**

---

## Overview

The SIC HB1000 system has 23 standing directives. These are non-negotiable operating principles — the constitutional rules that govern how the team works. The following are the directives most directly relevant to Bingo City architecture and implementation.

---

## Architecture Directives (DIR-012 through DIR-023)

### DIR-012 — Bingo Card = Trojan Horse Entry Point

**Category:** Architecture  
**Principle:** The Bingo Card is the entry point for everything. It looks simple — a 5×5 grid. But behind each square is a complete system. The simplicity is the strategy.

**Why it matters for Bingo City:** The entire city is built on this insight. Ruby Red does not need to understand the complexity behind the squares. She just needs to see the squares and understand that her team is working on them. The complexity is hidden. The simplicity is visible.

**Implementation note:** Never expose the backend complexity in the UI. No jargon. No protocol names. No "Learning Loop." No "tRPC." Ruby Red sees squares. That's it.

---

### DIR-013 — Self-Populating Avatar Army (1 to 1,000)

**Category:** Architecture  
**Principle:** The avatar army starts small and grows as needed. The Rooftop Society's 7 avatars are the seed. Sub-agents are added floor by floor as the initiative scales.

**Why it matters for Bingo City:** The front-end must be designed to accommodate a growing avatar roster. The current 7-avatar layout should scale gracefully to 20, 50, or 100 avatars without breaking the UI.

---

### DIR-014 — Wisdom Giants — Fractional HB1000 Expertise

**Category:** Architecture  
**Principle:** Human wisdom giants are the knowledge layer above the AI avatars. They are fractional advisors, not full-time team members.

**Why it matters for Bingo City:** The Journalist avatar's role is to connect the building to the wisdom giants. The Source of Truth avatar's role is to preserve their knowledge.

---

### DIR-015 — Situations Manager — Real-Time Context Sensitivity

**Category:** Architecture  
**Principle:** The Situations Manager knows where Ruby Red is right now. It adapts the team's priorities based on her current context.

**Why it matters for Bingo City:** The Situations Manager avatar (🦅) is the real-time intelligence layer. In the current front-end, it is a static avatar. In the full implementation, it should be dynamic — adapting its displayed status based on Ruby Red's current situation.

---

### DIR-016 — Inner Ring Stanchion — Core Team Boundary

**Category:** Architecture  
**Principle:** The Inner Ring Stanchion is a physical boundary on the rooftop that separates the core team (inside) from guests and specialists (outside). The core team is permanent. Guests are temporary.

**Why it matters for Bingo City:** The three-zone layout of the Rooftop Society (Inner Ring | Center | Outer Ring) is the visual implementation of this directive. The stanchion must be visible in the UI.

---

### DIR-017 — "I Got a Guy" — Community Connector Role

**Category:** Architecture  
**Principle:** Every community has a connector — the person who always knows someone for something. In Bingo City, this is the Journalist avatar. It is the "I Got a Guy" of the ecosystem.

**Why it matters for Bingo City:** The Journalist is not just an intelligence gatherer. It is the relationship bridge between Ruby Red's building and the rest of the city.

---

### DIR-018 — Voice of Concern — Permanent Emotional Intelligence

**Category:** Architecture  
**Principle:** The Voice of Concern is a permanent member of the Rooftop Society. It cannot be removed. It is the gut feeling — the intuition that something is wrong even when the data says everything is fine.

**Why it matters for Bingo City:** The Voice of Concern (🐱) must always be visible on the rooftop. It is positioned in the Outer Ring, separate from the rational voices. It is the empathy layer of the system.

---

### DIR-019 — Angel of Your Better Nature — Independent Counsel

**Category:** Architecture  
**Principle:** The Angel of Better Nature is an independent voice. It is not aligned with any faction. It speaks truth even when it is uncomfortable.

**Why it matters for Bingo City:** The Angel (✨) is positioned at the center of the rooftop — equidistant from all other avatars. It is the moral compass. In the UI, it should be visually distinct from the Inner Ring avatars.

---

### DIR-020 — Swarm Mind — Three-Mode Protocol

**Category:** Architecture  
**Principle:** The avatar army can operate in three modes: Chorus (all speak simultaneously), Ensemble (take turns), Squadron (divide and conquer).

**Why it matters for Bingo City:** The team toggle button (Team on Rooftop / Send to Floors) is a simplified version of this. The full Swarm Mind protocol is a future feature.

---

### DIR-022 — News Channel — Cross-Bingo Card Visibility

**Category:** Architecture  
**Principle:** A cross-city news feed showing what is happening across all buildings. Transparent. Anyone can visit any strategy and see what is happening.

**Why it matters for Bingo City:** The News Channel is a major unbuilt feature. It requires the V14 backend. The City View page should have a placeholder for it.

---

### DIR-023 — Communication Preferences — User Chooses Channel

**Category:** Architecture  
**Principle:** Ruby Red chooses how she wants to be communicated with. Not the system's choice — her choice. Telegram, SMS, email, in-app — she decides.

**Why it matters for Bingo City:** The communication channel selector is a future feature. The current front-end does not implement it.

---

## Build Philosophy Directives

### DIR-002 — 24 Hours, Not 6 Months

**Principle:** Build it in 24 hours. Not a prototype — a working system. The V14 dashboard was built in 33 minutes. The Bingo City front-end was built in a single session.

**Why it matters:** Every feature should be buildable in hours, not weeks. If it takes longer, it is too complex.

---

### DIR-003 — Minimum Viable Distribution (MVD), NOT MVP

**Principle:** Build 100–110% of the vision, then throttle the release. Do not build a minimum viable product — build the full vision and release it in stages.

**Why it matters for Bingo City:** The front-end is built to 100% of the spec. The integration with Jeeves' backend is the distribution throttle — not a feature cut.

---

### DIR-008 — Pixar-Style Characters with Animation Continuum

**Principle:** All avatars should be Pixar-style characters with distinct personalities. The Pope of each Bingo Card picks where on the animation continuum their city sits (photorealistic to full Pixar).

**Why it matters for Bingo City:** The current emoji-based avatars are a placeholder. The full vision is warm, character-driven illustrations with personality and presence.

---

*Document prepared by Manus AI for the SIC HB1000 Solve Team.*
