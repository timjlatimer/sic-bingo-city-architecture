# Bingo City Complete Architecture

## Executive Summary

Bingo City is a five-storey isometric building serving as the visual and operational metaphor for the SIC HB1000 Solve Team's self-organizing AI civilization. Each floor represents a critical layer of the system, color-coded and populated with specialized avatars and sub-agent structures.

---

## Part 1: Building Architecture

### The Five-Storey Building Structure

#### **Floor 1 (F1) — INFRASTRUCTURE** (Blue Glass)
- **Color Code:** #3B82F6 (Blue)
- **Metaphor:** Foundation systems, APIs, connectivity, technical backbone
- **Purpose:** Ensures all systems communicate, data flows, and the building stays connected
- **Key Components:**
  - API Gateway (tRPC, REST endpoints)
  - Database Layer (MySQL, persistence)
  - Authentication & OAuth
  - Message Queue / Event Bus
  - CDN & Storage (S3)
  - Monitoring & Logging

#### **Floor 2 (F2) — DATA** (Green Glass)
- **Color Code:** #22C55E (Green)
- **Metaphor:** Information layer, analytics, storage, intelligence gathering
- **Purpose:** Collects, processes, analyzes, and stores all organizational knowledge
- **Key Components:**
  - Data Lake / Warehouse
  - Analytics Engine
  - ETL Pipelines
  - Reporting Dashboard
  - Cloud Butterfly Intelligence (cross-card insights)
  - KPI Tracking

#### **Floor 3 (F3) — OPERATIONS** (Amber Glass)
- **Color Code:** #F59E0B (Amber)
- **Metaphor:** Workflows, processes, automation, task execution
- **Purpose:** Executes daily operations, automates workflows, coordinates execution
- **Key Components:**
  - Workflow Engine
  - Task Scheduler
  - Automation Rules
  - CI/CD Pipeline
  - Bingo Card Management
  - Swarm Mode Coordinator

#### **Floor 4 (F4) — COMMUNITY** (Red Glass)
- **Color Code:** #EF4444 (Red)
- **Metaphor:** People, relationships, communication, human connection
- **Purpose:** Manages avatars, communication channels, community engagement
- **Key Components:**
  - Avatar Management System
  - Communication Layer (voice, text, notices)
  - News Channel
  - Petition System
  - Chat & Dialogue Engine
  - Community Preferences

#### **Floor 5 (F5) — GOVERNANCE** (Gold Glass)
- **Color Code:** #D4A017 (Gold)
- **Metaphor:** Rules, protocols, decision-making, Swiss governance
- **Purpose:** Establishes rules, manages escalations, ensures benevolent oversight
- **Key Components:**
  - Swiss Governance Model (Commune/Canton/Confederation)
  - Petition Escalation System (5 levels)
  - Benevolent Dictator Override
  - Protocol Management
  - Voting & Consensus Mechanisms
  - Audit & Compliance

### Floor Naming Conventions

```
F1 = Infrastructure (Blue)
F2 = Data (Green)
F3 = Operations (Amber)
F4 = Community (Red)
F5 = Governance (Gold)
```

---

## Part 2: The Rooftop Society

### Three-Zone Topology

The rooftop is divided into three distinct zones, each representing a different decision-making system and operational mode.

#### **LEFT SIDE — PROFESSIONAL TEAM (Kahneman System 2 — Rational)**
Inside the brass stanchion inner ring:

| Role | Animal | Function | System |
|------|--------|----------|--------|
| **Project Manager (PM)** | Lion | Leadership, apex of rooftop, manages all projects, first among equals | System 2 |
| **Situations Manager (SM)** | Hawk | Real-time awareness, minimum latency, knows where Ruby Red is right now | System 2 |
| **Companion (Chief of Staff)** | Golden Retriever | Primary interface, orchestrates communication, the friendly face | System 2 |
| **Source of Truth (ST)** | Owl | Baseline protection, institutional memory, prevents drift | System 2 |
| **"I Got a Guy" Connector (IG)** | Bear | Community connection, restores human social graph | System 2 |

**Brass Stanchion:** Marks the governance boundary of the inner ring. Only these five avatars sit inside.

#### **CENTER — ANGEL OF YOUR BETTER NATURE (Kahneman System 3 — Moral)**
- **Animal:** Phoenix
- **Color:** Gold/Yellow glow
- **Function:** Appears and disappears. Independent of both professional team and emotional anchor. Provides moral counsel during difficult decisions.
- **System:** System 3 (Moral/Intuitive)
- **Behavior:** Semi-transparent, ethereal, glowing, appears when needed

#### **RIGHT CORNER — VOICE OF CONCERN (Kahneman System 1 — Intuitive)**
- **Animal:** Purple Cat
- **Location:** Sitting on a bench in the right corner
- **Color:** #8B5CF6 (Purple)
- **Function:** ONE permanent avatar who never moves. Voice of anxiety, safety, risk. "Should I?" Senses everything, feels everything.
- **System:** System 1 (Intuitive)
- **Behavior:** Stationary, always present, validates gut feelings

### Outer Ring — Execution & Intelligence

Outside the brass stanchion, debating and executing:

| Role | Animal | Function | Zone |
|------|--------|----------|------|
| **QA Sentinel** | Eagle | Quality assurance, pattern detection, anomaly flagging | OUTER |
| **Journalist** | Hummingbird | Cloud Butterfly carriers, cross-card intelligence | OUTER |
| **Swarm Workers** | Bees | Task execution, shift between modes | OUTER |

### Edges — Wisdom Giants

Semi-transparent, phasing in and out on the edges of the rooftop:

- **Wisdom Giants** — Real humans with lived experience, appear, contribute, depart. Fractional HB1000 information.

---

## Part 3: Rooftop Society Positions (9 Total)

### Inner Ring (5 positions)
1. PM — Project Manager (Lion)
2. SM — Situations Manager (Hawk)
3. CO — Companion (Golden Retriever)
4. SO — Source of Truth (Owl)
5. IG — "I Got a Guy" Connector (Bear)

### Special Positions (2 positions)
6. Angel — Angel of Your Better Nature (Phoenix, center)
7. VOC — Voice of Concern (Purple Cat, right corner)

### Outer Ring (2 positions)
8. Outer Ring Avatars (QA Sentinel, Journalist, Swarm Workers)
9. Wisdom Giants (Semi-transparent, edges)

---

## Part 4: PEARL Diamond Layer Mapping

The PEARL Diamond represents the five layers of organizational decision-making and structure:

### PEARL Diamond Layers

**P — PEOPLE** (Community Floor, F4)
- Avatar management
- Communication preferences
- Human connection and relationships
- Community engagement

**E — EXECUTION** (Operations Floor, F3)
- Workflow automation
- Task scheduling
- Bingo Card management
- Swarm mode coordination

**A — ANALYTICS** (Data Floor, F2)
- Data collection and processing
- Insights generation
- KPI tracking
- Cloud Butterfly intelligence

**R — RULES** (Governance Floor, F5)
- Swiss governance model
- Petition escalation
- Protocol management
- Benevolent dictator override

**L — LAYER** (Infrastructure Floor, F1)
- Technical backbone
- API gateway
- Database persistence
- Authentication

### PEARL Diamond Placement in Bingo City

```
        ROOFTOP SOCIETY
        (Angel, VOC, Inner Ring)
              |
              v
    ┌─────────────────────┐
    │  F5: GOVERNANCE (R) │ ← Rules
    ├─────────────────────┤
    │  F4: COMMUNITY (P)  │ ← People
    ├─────────────────────┤
    │  F3: OPERATIONS (E) │ ← Execution
    ├─────────────────────┤
    │  F2: DATA (A)       │ ← Analytics
    ├─────────────────────┤
    │  F1: INFRASTRUCTURE │ ← Layer (L)
    └─────────────────────┘
```

---

## Part 5: HB1000 Brain Model

### Above the Line vs. Below the Line

#### **ABOVE THE LINE** (Conscious, Deliberate, Strategic)
- Governance decisions
- Policy setting
- Strategic planning
- Benevolent dictator override
- Swiss governance model (Commune/Canton/Confederation)
- **Location:** Rooftop Society + F5 Governance

#### **BELOW THE LINE** (Operational, Tactical, Execution)
- Daily operations
- Task execution
- Workflow automation
- Communication and coordination
- Community engagement
- **Location:** F1-F4 (Infrastructure, Data, Operations, Community)

### The Three Kahneman Systems in Bingo City

**System 1 — Intuitive (Voice of Concern)**
- Fast, automatic, emotional
- Gut feelings, safety concerns
- Right corner, never moves
- Purple cat avatar

**System 2 — Rational (Professional Team)**
- Slow, deliberate, logical
- Project management, coordination
- Inner ring, brass stanchion
- Lion, Hawk, Golden Retriever, Owl, Bear

**System 3 — Moral (Angel of Your Better Nature)**
- Conscience, moral compass
- Appears during difficult decisions
- Center of rooftop, ethereal
- Phoenix avatar

---

## Part 6: Building-Specific Configurations

### Initiative Cluster Structure

Each of the 6 HB1000 initiatives (Effn Duck, Digger Cafe, Seba Hub, CashCo, etc.) has its own Bingo City instance:

#### **Configuration Template for Each Initiative**

```yaml
Initiative: [Name]
Bingo_Card_Grid: 5x5 (25 cells)
Floors: 5 (F1-F5)
Rooftop_Avatars: 11 (5 inner ring + 2 special + 4 outer/wisdom)
Governance_Model: Swiss (Commune/Canton/Confederation)
Escalation_Levels: 5 (Rooftop → Master Jeeves)
Swarm_Modes: 3 (Chorus, Ensemble, Squadron)
Communication_Channels: Voice, Text, Notices
Persistence: MySQL database per initiative
```

#### **Initiative-Specific Customizations**

- **Effn Duck** — Focus on financial education and budgeting (CashCo integration)
- **Digger Cafe** — Community gathering and knowledge sharing
- **Seba Hub** — Healthcare and wellness coordination
- **CashCo** — Payment processing and financial services
- **[Additional initiatives]** — Domain-specific adaptations

---

## Part 7: Sub-Agent Structures Within Floors

### Floor 1 (Infrastructure) Sub-Agents
- **API Gateway Agent** — Routes all requests
- **Database Agent** — Manages persistence
- **Authentication Agent** — Handles OAuth and sessions
- **Monitoring Agent** — Tracks system health

### Floor 2 (Data) Sub-Agents
- **Analytics Agent** — Processes data and generates insights
- **ETL Agent** — Transforms and loads data
- **Reporting Agent** — Creates dashboards and reports
- **Cloud Butterfly Agent** — Cross-initiative intelligence

### Floor 3 (Operations) Sub-Agents
- **Workflow Agent** — Orchestrates task execution
- **Scheduler Agent** — Manages timing and deadlines
- **Automation Agent** — Executes rules and workflows
- **Swarm Coordinator** — Manages Chorus/Ensemble/Squadron modes

### Floor 4 (Community) Sub-Agents
- **Avatar Manager** — Manages avatar states and roles
- **Communication Agent** — Handles voice, text, notices
- **News Agent** — Manages news channel
- **Chat Agent** — Facilitates avatar conversations

### Floor 5 (Governance) Sub-Agents
- **Petition Agent** — Manages petition lifecycle
- **Escalation Agent** — Handles escalation logic
- **Voting Agent** — Manages consensus and voting
- **Compliance Agent** — Ensures protocol adherence

---

## Part 8: Operational Structure Discussions

### Daily Operations

**Morning Standup (6:04 AM)**
- Project Manager leads
- All inner ring avatars present
- Situations Manager reports on current state
- Voice of Concern flags concerns
- Companion coordinates communication

**Swarm Modes During Day**
- **CHORUS** — Brainstorming sessions, equal voice
- **ENSEMBLE** — Specialist work, PM conducts
- **SQUADRON** — Crisis response, SM at point

**Evening Reflection**
- Source of Truth documents learnings
- Journalist captures cross-card insights
- Angel provides moral reflection if needed

### Escalation Process

1. **Rooftop Discussion** — Any avatar raises issue
2. **Formal Petition** — 10+ avatars endorse
3. **Inner Ring Vote** — Inner ring decides
4. **Pope Review** — Cross-initiative implications
5. **Master Jeeves** — System-wide decision

### Communication Preferences

Users can customize:
- **Voice** — Audio responses from avatars
- **Text** — Written responses
- **Notices** — Alert notifications
- **Frequency** — How often they hear from avatars

---

## Part 9: Marketing-Related Discussions

### Current Marketing Placement Questions

**Where should Marketing live in Bingo City?**

Options being explored:
1. **Above the Line** — Marketing the SIC brand and moonshot vision
2. **Below the Line** — Marketing individual initiatives
3. **Inside Bingo City** — Own floor (F6)? Part of Operations? Part of Community?
4. **Rooftop Society** — Marketing avatar on inner ring?
5. **Sub-agents** — Content, social, growth, brand, community specialists
6. **PEARL Diamond** — Where does marketing fit in the model?

### Key Decisions Needed

- Should each floor have a named identity (e.g., "The Blue Foundation")?
- Is marketing a cross-cutting concern or a dedicated floor?
- How does marketing interact with the Rooftop Society?
- What's the relationship between marketing and the Wisdom Giants?

---

## Part 10: Ruby Red Client-Centric Design

### The Ruby Red Persona

- 35-45 year old mom of two
- Working poor, financially stretched
- Makes difficult daily decisions (grocery checkout, extracurricular costs, car repairs)
- Unbanked/underbanked
- Needs empathetic, practical support

### Minimum Viable City (MVC)

**Three avatars to establish trust in 10 days:**
1. **The Companion** — Friendly face, learns preferences
2. **Situations Manager** — Knows where she is, what's coming
3. **Voice of Concern** — Validates gut feelings, emotional anchor

**Timeline:**
- Week 1: MVC established, trust building
- Week 3-4: Angel appears, Wisdom Giant visits
- Month 2: Second avatar added, escalation tools
- Month 3: Full rooftop, complete Bingo City

### Move 37 Insight

**"Ruby Red does not just benefit from Bingo City. Ruby Red gets her own Bingo City."**

The same fractal architecture that empowers the Solve Team collapses into a personal city for the working poor mother. The enterprise tool becomes the consumer product.

---

## Summary

Bingo City is a complete, self-organizing AI civilization built on:

1. **Five-storey building** with color-coded floors (Infrastructure, Data, Operations, Community, Governance)
2. **Rooftop society** with 11 avatars representing three decision-making systems
3. **Swiss governance** model with subsidiarity and petition escalation
4. **PEARL Diamond** organizational structure
5. **HB1000 brain model** with above/below the line operations
6. **Sub-agent structures** within each floor
7. **Ruby Red client-centric** design philosophy
8. **Fractal architecture** that scales from individual to organizational to societal level

The system is designed to prove that "It's expensive to be poor" can become "It's free to have a city working for you."
