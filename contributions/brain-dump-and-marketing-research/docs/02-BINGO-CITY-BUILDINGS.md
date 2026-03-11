# Bingo City — Buildings Architecture

**Source:** Bingo City web app (bingo-city project), institutional memory, Pearl's Brain  
**Date:** March 11, 2026

---

## What Bingo City Is

Bingo City is the **visual front-end representation of the Initiative Dashboard** — the primary home screen for Pearl. It is not a separate product. It IS the Initiative Dashboard, rendered as an isometric city where:

- **Each building = one initiative**
- **Each floor = one layer of the initiative's architecture**
- **Each window = one bingo square (task/milestone)**
- **Window glow color = status** (green = done, amber = in-progress, gray = not started)
- **Rooftop avatars = team members assigned to that initiative**

The city metaphor makes abstract progress tangible and visual. Ruby Red Maven (the non-technical user) can look at the city skyline and immediately understand which buildings are lit up (thriving) and which are dark (stalled).

---

## The 6 Buildings (Initiatives)

### Building 1: Cloud Butterfly 🦋

| Attribute | Value |
|-----------|-------|
| **Color** | `#f97316` (warm orange) |
| **Floors** | 5 |
| **Progress** | 72% |
| **Role** | The capture and processing engine — the always-on input for raw thought |
| **North Star** | Voice-first capture of insights before they disappear |

**Floor Architecture (F1 = Ground, F5 = Top):**
- **F1 — Foundation:** Core capture infrastructure (Flypaper, voice input)
- **F2 — Processing:** Deduplication, organization, extraction
- **F3 — Routing:** Grace Items, Ghost Buster, PTK integration
- **F4 — Intelligence:** Dialect-specific voice AI, pattern recognition
- **F5 — Autonomy:** Auto-escalation, persistent state, cross-session memory

**Bingo Squares (25 squares, 5x5):**
```
Status: 2=done(green), 1=in-progress(amber), 0=not-started(gray)
[2,2,1,0,2, 1,2,0,1,2, 1,2,0,1,2, 2,1,0,2,1, 2,0,1,2,0]
```

---

### Building 2: Wisdom Giants 🧠

| Attribute | Value |
|-----------|-------|
| **Color** | `#8b5cf6` (purple) |
| **Floors** | 4 |
| **Progress** | 45% |
| **Role** | Standalone global product — query strategy for the AI Age |
| **North Star** | "What if your parents knew everything?" |

**Floor Architecture:**
- **F1 — Foundation:** Crystallized Intelligence capture (voice/video only from Wisdom Giants)
- **F2 — Processing:** Fossilized Intelligence + Crystallized Intelligence fusion
- **F3 — Delivery:** Immediate response + 24-hour Soak windows
- **F4 — Community:** Global scoreboard, KPI dashboard, attribution tracking

**Bingo Squares (25 squares, 5x5):**
```
[2,1,0,0,2, 1,0,0,2,1, 0,0,2,1,0, 0,2,1,0,0, 2,1,0,0,0]
```

---

### Building 3: Digger Cafe 🏗️

| Attribute | Value |
|-----------|-------|
| **Color** | `#10b981` (emerald green) |
| **Floors** | 3 |
| **Progress** | 88% |
| **Role** | Community gathering and co-working space for the Village |
| **North Star** | "Surprise & Delight" — the physical/virtual third place for Ruby Red |

**Floor Architecture:**
- **F1 — Foundation:** Physical space infrastructure, community programming
- **F2 — Services:** Co-working, skill-building, connection facilitation
- **F3 — Intelligence:** Community data, JOY nudges, Village integration

**Bingo Squares (15 squares, 5x3):**
```
[2,2,2,2,2, 1,2,2,2,2, 1,2,2,2,2]
```

---

### Building 4: Effn Duck 🦆

| Attribute | Value |
|-----------|-------|
| **Color** | `#ec4899` (pink) |
| **Floors** | 4 |
| **Progress** | 33% |
| **Role** | The advocacy and accountability engine — calling out the three gangsters |
| **North Star** | "EVERYONE" — the widest possible audience for systemic change |

**Floor Architecture:**
- **F1 — Foundation:** Issue identification, gangster mapping
- **F2 — Advocacy:** Public record inquiry, Advocates Gambit protocol
- **F3 — Accountability:** Bureaucratic accountability tools, political engagement
- **F4 — Amplification:** Community organizing, media, systemic change campaigns

**Bingo Squares (20 squares, 5x4):**
```
[2,1,0,0,0, 1,0,0,2,1, 0,0,0,0,0, 2,0,0,0,0]
```

---

### Building 5: PTK Promises 📚

| Attribute | Value |
|-----------|-------|
| **Color** | `#06b6d4` (cyan) |
| **Floors** | 3 |
| **Progress** | 60% |
| **Role** | The commitment tracking engine — the Trojan Horse entry point for LDP |
| **North Star** | "Integrity embedded into operations creates success" |

**Floor Architecture:**
- **F1 — Foundation:** Email OAuth connection, promise extraction, Ghost Buster
- **F2 — Intelligence:** Reliability scoring, LDEI Score calculation, Morning Briefings
- **F3 — Ecosystem:** LDP integration, Blue Seal pathway, Stage Two gateway

**Bingo Squares (15 squares, 5x3):**
```
[2,2,1,2,1, 0,2,2,1,2, 1,0,2,1,0]
```

---

### Building 6: Seba Hub 🏠

| Attribute | Value |
|-----------|-------|
| **Color** | `#f59e0b` (amber) |
| **Floors** | 3 |
| **Progress** | 25% |
| **Role** | The housing and community stability anchor for Ruby Red |
| **North Star** | "Vibrant Village" — stable housing as the foundation for everything else |

**Floor Architecture:**
- **F1 — Foundation:** Housing navigation, tenant rights, emergency housing
- **F2 — Stability:** Rental assistance, utility support, community connections
- **F3 — Thriving:** Home ownership pathways, community investment, Village integration

**Bingo Squares (15 squares, 5x3):**
```
[2,1,0,0,0, 1,0,0,0,0, 0,0,0,0,0]
```

---

## Floor Naming Conventions

The standard floor naming convention across all Bingo City buildings follows a consistent F1-F5 framework:

| Floor | Name | Function |
|-------|------|----------|
| **F1** | Foundation | Core infrastructure, essential capabilities, must-have-first |
| **F2** | Processing / Services | The work layer — where the initiative does its primary job |
| **F3** | Intelligence | Learning, adaptation, data, community integration |
| **F4** | Autonomy | Self-operating capabilities, agent integration, scale |
| **F5** | Transcendence | The moonshot layer — what this initiative looks like at 10X |

Not all buildings have all 5 floors. Buildings with 3 floors use F1-F3. Buildings with 4 floors use F1-F4. The 5-floor buildings (Cloud Butterfly) represent the most architecturally complete initiatives.

---

## The Rooftop Society

The Rooftop Society is the team avatar system that lives on top of each building. It represents the people assigned to work on that initiative.

### Rooftop Layout (9 positions)

```
     [INNER RING — 4 positions]
  [7] [8]     [1] [2]
  [6]   ROOFTOP   [3]
  [5] [4]     [9] (center)
     [OUTER RING — 4 positions]
```

### Inner Ring (Positions 1-4) — Core Team
These are the primary contributors to the initiative. They are closest to the center and most actively engaged.

| Position | Role | Avatar |
|----------|------|--------|
| 1 | CVO / Tim | 👨‍💼 |
| 2 | Lead Grace (AI Agent) | 🤖 |
| 3 | Subject Matter Expert | 🧠 |
| 4 | Community Voice (Ruby Red representative) | 👩 |

### Outer Ring (Positions 5-8) — Support Team
These are contributors who provide periodic support, oversight, or specialized input.

| Position | Role | Avatar |
|----------|------|--------|
| 5 | Technical Lead | 👨‍💻 |
| 6 | Designer | 🎨 |
| 7 | Communications | 📣 |
| 8 | Operations | ⚙️ |

### Center Position (9) — The North Star Keeper
The center position is reserved for the initiative's North Star Keeper — the person or agent responsible for ensuring the initiative never drifts from its North Star.

### Rooftop Toggle Button
The Bingo City detail page includes a toggle button: **"Send them to work"** / **"Call them back up"**. When "Send them to work" is active, the avatars descend from the rooftop into the building (visually represented by the windows lighting up). When "Call them back up" is active, the avatars return to the rooftop.

---

## PEARL Diamond Layer Mapping

The PEARL Diamond maps the five dimensions of each initiative's health:

| Letter | Dimension | What It Measures |
|--------|-----------|-----------------|
| **P** | Progress | Bingo square completion rate |
| **E** | Engagement | Team activity, avatar presence on rooftop |
| **A** | Alignment | North Star drift score — is the initiative still on mission? |
| **R** | Resilience | How many squares are blocked vs. in-progress |
| **L** | Legacy | Long-term impact score — what this initiative leaves behind |

Each building's window glow pattern is a visual representation of its PEARL Diamond score. A building with all green windows has a high PEARL score. A dark building is in distress.

---

## Sub-Agent Structures Within Floors

Each floor of each building can have a Grace sub-agent assigned to it. The sub-agent hierarchy within a building is:

```
Building Grace (top-level agent for the initiative)
    ├── F1 Grace (Foundation agent)
    ├── F2 Grace (Processing/Services agent)
    ├── F3 Grace (Intelligence agent)
    ├── F4 Grace (Autonomy agent — if floor exists)
    └── F5 Grace (Transcendence agent — if floor exists)
```

Each floor Grace reports to the Building Grace, who reports to the Pearl Godmother, who reports to Pearl.

---

## HB1000 Brain Model: Above and Below the Line

The HB1000 architecture uses an "above/below the line" mental model:

### Above the Line (Strategic / Aspirational)
- Pearl's North Star and BHAG
- The Moonshot Canvas
- The 15 Moonshots
- The SIC Matrix positioning
- The Wisdom Works query strategy
- The Learning Loop governance

### Below the Line (Operational / Tactical)
- The Initiative Dashboard (Bingo City)
- Individual Bingo Cards and squares
- PTK tracking and Ghost Buster
- Cloud Butterfly capture and processing
- Maven's daily service delivery to Ruby Red
- Grace's intake and routing

**The critical insight:** Bingo City lives BELOW the line. It is the operational visualization of what is happening on the ground. The above-the-line work (North Star, BHAG, Moonshots) is what gives the below-the-line work its meaning and direction.

---

## Building-Specific Configurations Summary

| Building | Floors | Squares | Progress | Color | North Star |
|----------|--------|---------|----------|-------|------------|
| Cloud Butterfly 🦋 | 5 | 25 | 72% | Orange `#f97316` | Voice-first capture |
| Wisdom Giants 🧠 | 4 | 25 | 45% | Purple `#8b5cf6` | "What if your parents knew everything?" |
| Digger Cafe 🏗️ | 3 | 15 | 88% | Emerald `#10b981` | Surprise & Delight |
| Effn Duck 🦆 | 4 | 20 | 33% | Pink `#ec4899` | EVERYONE |
| PTK Promises 📚 | 3 | 15 | 60% | Cyan `#06b6d4` | Integrity embedded = success |
| Seba Hub 🏠 | 3 | 15 | 25% | Amber `#f59e0b` | Vibrant Village |
